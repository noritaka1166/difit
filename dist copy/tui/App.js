import { Box, Text, useApp, useInput } from 'ink';
import React, { useState, useEffect } from 'react';
import { loadGitDiff } from '../server/git-diff-tui.js';
import DiffViewer from './components/DiffViewer.js';
import FileList from './components/FileList.js';
import SideBySideDiffViewer from './components/SideBySideDiffViewer.js';
import StatusBar from './components/StatusBar.js';
const App = ({ targetCommitish, baseCommitish, mode }) => {
  const [files, setFiles] = useState([]);
  const [selectedFileIndex, setSelectedFileIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reviewedFiles, setReviewedFiles] = useState(new Set());
  const [viewMode, setViewMode] = useState(mode === 'inline' ? 'inline' : 'side-by-side');
  const { exit } = useApp();
  const loadDiff = async () => {
    setLoading(true);
    setError(null);
    try {
      const fileDiffs = await loadGitDiff(targetCommitish, baseCommitish);
      setFiles(fileDiffs);
      setLoading(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      setLoading(false);
    }
  };
  useEffect(() => {
    void loadDiff();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetCommitish, baseCommitish]);
  const toggleFileReviewed = (filePath) => {
    setReviewedFiles((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(filePath)) {
        newSet.delete(filePath);
      } else {
        newSet.add(filePath);
      }
      return newSet;
    });
  };
  useInput(
    (input, key) => {
      if (input === 'q' || (key.ctrl && input === 'c')) {
        exit();
      }
      // Reload on 'r' key
      if (input === 'r') {
        void loadDiff();
        return;
      }
      if (viewMode === 'list') {
        if (key.upArrow || input === 'k') {
          setSelectedFileIndex((prev) => Math.max(0, prev - 1));
        }
        if (key.downArrow || input === 'j') {
          setSelectedFileIndex((prev) => Math.min(files.length - 1, prev + 1));
        }
        if (key.return || input === ' ') {
          setViewMode('side-by-side');
        }
        if (input === 'd') {
          setViewMode('inline');
        }
        // Mark current file as reviewed/unreviewed with 'x' key
        if (input === 'x' && files[selectedFileIndex]) {
          toggleFileReviewed(files[selectedFileIndex].path);
        }
      } else {
        if (key.escape || input === 'b') {
          setViewMode('list');
        }
        // Mark current file as reviewed/unreviewed with 'x' key in diff view
        if (input === 'x' && files[selectedFileIndex]) {
          toggleFileReviewed(files[selectedFileIndex].path);
        }
      }
    },
    { isActive: true }
  );
  if (loading) {
    return React.createElement(Text, null, 'Loading diff for ', targetCommitish, '...');
  }
  if (error) {
    return React.createElement(Text, { color: 'red' }, 'Error: ', error);
  }
  if (files.length === 0) {
    return React.createElement(
      Box,
      { flexDirection: 'column' },
      React.createElement(StatusBar, {
        commitish: targetCommitish,
        totalFiles: 0,
        currentMode: 'list',
        reviewedFiles: 0,
      }),
      React.createElement(
        Box,
        { marginTop: 1 },
        React.createElement(Text, { color: 'yellow' }, 'No changes found for ', targetCommitish)
      ),
      React.createElement(
        Box,
        { marginTop: 1 },
        React.createElement(Text, { dimColor: true }, "Press 'q' to quit")
      )
    );
  }
  return React.createElement(
    Box,
    { flexDirection: 'column', height: process.stdout.rows },
    React.createElement(StatusBar, {
      commitish: targetCommitish,
      totalFiles: files.length,
      currentMode: viewMode,
      reviewedFiles: reviewedFiles.size,
    }),
    React.createElement(
      Box,
      { flexGrow: 1, flexDirection: 'column' },
      viewMode === 'list' ?
        React.createElement(FileList, {
          files: files,
          selectedIndex: selectedFileIndex,
          reviewedFiles: reviewedFiles,
        })
      : viewMode === 'side-by-side' ?
        React.createElement(SideBySideDiffViewer, {
          files: files,
          initialFileIndex: selectedFileIndex,
          onBack: () => setViewMode('list'),
        })
      : React.createElement(DiffViewer, {
          files: files,
          initialFileIndex: selectedFileIndex,
          onBack: () => setViewMode('list'),
        })
    ),
    React.createElement(
      Box,
      { borderStyle: 'single', paddingX: 1 },
      React.createElement(
        Text,
        { dimColor: true },
        viewMode === 'list' ?
          '↑/↓ or j/k: navigate | Enter/Space: side-by-side | d: inline diff | x: toggle reviewed | r: reload | q: quit'
        : viewMode === 'side-by-side' ?
          'Tab: next file | Shift+Tab: prev | ↑/↓ or j/k: scroll | x: toggle reviewed | ESC/b: list | r: reload | q: quit'
        : 'Tab: next | Shift+Tab: prev | ↑/↓ or j/k: scroll | x: toggle reviewed | ESC/b: list | r: reload | q: quit'
      )
    )
  );
};
export default App;
