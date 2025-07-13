import { Box, Text, useInput, useApp } from 'ink';
import React, { useState } from 'react';
const DiffViewer = ({ files, initialFileIndex }) => {
  const [currentFileIndex, setCurrentFileIndex] = useState(initialFileIndex);
  const [scrollOffset, setScrollOffset] = useState(0);
  const file = files[currentFileIndex];
  const lines = file.diff.split('\n');
  const viewportHeight = Math.max(10, (process.stdout.rows || 24) - 7); // StatusBar(3) + footer(3) + margin(1)
  const maxScroll = Math.max(0, lines.length - viewportHeight);
  const { exit } = useApp();
  useInput(
    (input, key) => {
      if (input === 'q' || (key.ctrl && input === 'c')) {
        exit();
        return;
      }
      if (key.upArrow || input === 'k') {
        setScrollOffset((prev) => Math.max(0, prev - 1));
      }
      if (key.downArrow || input === 'j') {
        setScrollOffset((prev) => Math.min(maxScroll, prev + 1));
      }
      if (key.pageUp) {
        setScrollOffset((prev) => Math.max(0, prev - viewportHeight));
      }
      if (key.pageDown) {
        setScrollOffset((prev) => Math.min(maxScroll, prev + viewportHeight));
      }
      // Navigate between files
      if (key.tab && !key.shift) {
        // Next file (loop to first when at end)
        setCurrentFileIndex((currentFileIndex + 1) % files.length);
        setScrollOffset(0);
      }
      if (key.tab && key.shift) {
        // Previous file (loop to last when at start)
        setCurrentFileIndex((currentFileIndex - 1 + files.length) % files.length);
        setScrollOffset(0);
      }
    },
    { isActive: true }
  );
  const visibleLines = lines.slice(scrollOffset, scrollOffset + viewportHeight);
  const getLineColor = (line) => {
    if (line.startsWith('+') && !line.startsWith('+++')) return 'green';
    if (line.startsWith('-') && !line.startsWith('---')) return 'red';
    if (line.startsWith('@@')) return 'cyan';
    if (line.startsWith('diff --git')) return 'yellow';
    return undefined;
  };
  return React.createElement(
    Box,
    { flexDirection: 'column', flexGrow: 1 },
    React.createElement(
      Box,
      { marginBottom: 1, flexDirection: 'column' },
      React.createElement(
        Box,
        null,
        React.createElement(
          Text,
          { bold: true },
          file.path,
          ' (',
          currentFileIndex + 1,
          '/',
          files.length,
          ')'
        ),
        React.createElement(
          Text,
          { dimColor: true },
          ' ',
          '- ',
          file.additions,
          ' additions, ',
          file.deletions,
          ' deletions'
        )
      ),
      React.createElement(
        Box,
        null,
        React.createElement(
          Text,
          { dimColor: true },
          currentFileIndex > 0 && `← ${files[currentFileIndex - 1].path}`,
          currentFileIndex > 0 && currentFileIndex < files.length - 1 && ' | ',
          currentFileIndex < files.length - 1 && `${files[currentFileIndex + 1].path} →`
        )
      )
    ),
    React.createElement(
      Box,
      { flexGrow: 1, flexDirection: 'column', borderStyle: 'single', paddingX: 1 },
      visibleLines.map((line, index) =>
        React.createElement(
          Text,
          { key: `line-${scrollOffset + index}`, color: getLineColor(line) },
          line || ' '
        )
      )
    ),
    React.createElement(
      Box,
      { marginTop: 1, justifyContent: 'space-between' },
      React.createElement(
        Text,
        { dimColor: true },
        'Lines ',
        scrollOffset + 1,
        '-',
        Math.min(scrollOffset + viewportHeight, lines.length),
        ' of',
        ' ',
        lines.length,
        scrollOffset + viewportHeight < lines.length &&
          ` (${lines.length - scrollOffset - viewportHeight} more)`
      ),
      React.createElement(Text, { dimColor: true }, 'Tab: next file | Shift+Tab: prev file')
    )
  );
};
export default DiffViewer;
