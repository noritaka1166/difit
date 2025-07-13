import { Box, Text, useInput, useApp } from 'ink';
import React, { useState } from 'react';
import { parseDiff } from '../utils/parseDiff.js';
const SideBySideDiffViewer = ({ files, initialFileIndex, onBack }) => {
  const [currentFileIndex, setCurrentFileIndex] = useState(initialFileIndex);
  const [scrollOffset, setScrollOffset] = useState(0);
  const { exit } = useApp();
  const viewportHeight = Math.max(10, (process.stdout.rows || 24) - 10);
  const currentFile = files[currentFileIndex];
  useInput(
    (input, key) => {
      if (input === 'q' || (key.ctrl && input === 'c')) {
        exit();
        return;
      }
      if (key.escape || input === 'b') {
        onBack();
        return;
      }
      if (!currentFile) return;
      // Scroll within file
      if (key.upArrow || input === 'k') {
        setScrollOffset((prev) => Math.max(0, prev - 1));
      }
      if (key.downArrow || input === 'j') {
        setScrollOffset((prev) => prev + 1);
      }
      if (key.pageUp) {
        setScrollOffset((prev) => Math.max(0, prev - viewportHeight));
      }
      if (key.pageDown) {
        setScrollOffset((prev) => prev + viewportHeight);
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
  if (!currentFile || files.length === 0) {
    return React.createElement(
      Box,
      { flexDirection: 'column', flexGrow: 1 },
      React.createElement(Text, { color: 'yellow' }, 'No files to display'),
      React.createElement(
        Box,
        { marginTop: 1 },
        React.createElement(Text, { dimColor: true }, "Press ESC or 'b' to go back")
      )
    );
  }
  const parsedDiff = parseDiff(currentFile.diff);
  // Calculate total lines for current file
  const allLines = [];
  parsedDiff.chunks.forEach((chunk) => {
    // Add chunk header
    allLines.push({
      old: chunk.header,
      new: chunk.header,
      type: 'header',
    });
    let oldIdx = 0;
    let newIdx = 0;
    while (oldIdx < chunk.lines.length || newIdx < chunk.lines.length) {
      const oldLine = chunk.lines[oldIdx];
      const newLine = chunk.lines[newIdx];
      if (oldLine?.type === 'remove' && newLine?.type === 'add') {
        // Same line modified - show side by side
        allLines.push({
          old: oldLine.content,
          new: newLine.content,
          oldNum: oldLine.oldLineNumber,
          newNum: newLine.newLineNumber,
          type: 'modified',
        });
        oldIdx++;
        newIdx++;
      } else if (oldLine?.type === 'remove') {
        // Line removed
        allLines.push({
          old: oldLine.content,
          oldNum: oldLine.oldLineNumber,
          type: 'remove',
        });
        oldIdx++;
      } else if (newLine?.type === 'add') {
        // Line added
        allLines.push({
          new: newLine.content,
          newNum: newLine.newLineNumber,
          type: 'add',
        });
        newIdx++;
      } else if (oldLine?.type === 'context') {
        // Unchanged line
        allLines.push({
          old: oldLine.content,
          new: oldLine.content,
          oldNum: oldLine.oldLineNumber,
          newNum: oldLine.newLineNumber,
          type: 'context',
        });
        oldIdx++;
        newIdx++;
      } else {
        oldIdx++;
        newIdx++;
      }
    }
  });
  const actualMaxScroll = Math.max(0, allLines.length - viewportHeight);
  const clampedScrollOffset = Math.max(0, Math.min(actualMaxScroll, scrollOffset));
  const visibleLines = allLines.slice(clampedScrollOffset, clampedScrollOffset + viewportHeight);
  const terminalWidth = process.stdout.columns || 80;
  const columnWidth = Math.floor((terminalWidth - 6) / 2); // 6 for borders and separators
  const getLineColor = (type) => {
    switch (type) {
      case 'add':
        return 'green';
      case 'remove':
        return 'red';
      case 'modified':
        return undefined; // Will be handled separately for each side
      case 'header':
        return 'cyan';
      default:
        return undefined;
    }
  };
  const truncateLine = (line, width) => {
    if (line.length <= width) return line.padEnd(width);
    return line.substring(0, width - 1) + '…';
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
          currentFile.path,
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
          currentFile.additions,
          ' additions, ',
          currentFile.deletions,
          ' deletions'
        )
      ),
      React.createElement(
        Box,
        { height: 2, overflow: 'hidden', flexDirection: 'column' },
        (() => {
          const terminalWidth = process.stdout.columns || 80;
          const maxWidth = terminalWidth - 4; // Leave some margin
          // Generate file list with current file highlighted
          const fileItems = [];
          // Add files before current
          for (let i = Math.max(0, currentFileIndex - 2); i < currentFileIndex; i++) {
            fileItems.push({
              text: files[i].path,
              isActive: false,
            });
          }
          // Add current file
          fileItems.push({
            text: `[${files[currentFileIndex].path}]`,
            isActive: true,
          });
          // Add files after current
          for (
            let i = currentFileIndex + 1;
            i < Math.min(files.length, currentFileIndex + 3);
            i++
          ) {
            fileItems.push({
              text: files[i].path,
              isActive: false,
            });
          }
          // Build lines (max 2 lines)
          const lines = [[]];
          let currentLineWidth = 0;
          for (const item of fileItems) {
            const itemWidth = item.text.length + 3; // Include separator
            if (currentLineWidth + itemWidth > maxWidth && lines.length < 2) {
              lines.push([]);
              currentLineWidth = 0;
            }
            if (lines.length <= 2) {
              lines[lines.length - 1].push(item);
              currentLineWidth += itemWidth;
            }
          }
          return lines.map((line, lineIndex) =>
            React.createElement(
              Box,
              { key: lineIndex },
              line.map((item, itemIndex) =>
                React.createElement(
                  React.Fragment,
                  { key: itemIndex },
                  itemIndex > 0 && React.createElement(Text, { dimColor: true }, ' | '),
                  React.createElement(
                    Text,
                    { color: item.isActive ? 'cyan' : undefined, dimColor: !item.isActive },
                    item.text
                  )
                )
              )
            )
          );
        })()
      )
    ),
    React.createElement(
      Box,
      { borderStyle: 'single', flexDirection: 'column', flexGrow: 1 },
      React.createElement(
        Box,
        { borderStyle: 'single', borderTop: false, borderLeft: false, borderRight: false },
        React.createElement(
          Box,
          { width: columnWidth },
          React.createElement(Text, { dimColor: true }, ' \u2502 '),
          React.createElement(Text, { bold: true }, 'Old')
        ),
        React.createElement(Text, { dimColor: true }, ' \u2503 '),
        React.createElement(
          Box,
          { width: columnWidth },
          React.createElement(Text, { dimColor: true }, ' \u2502 '),
          React.createElement(Text, { bold: true }, 'New')
        )
      ),
      React.createElement(
        Box,
        { flexDirection: 'column', flexGrow: 1 },
        visibleLines.map((line, index) =>
          React.createElement(
            Box,
            { key: `line-${scrollOffset + index}` },
            React.createElement(
              Box,
              { width: columnWidth },
              React.createElement(
                Text,
                { dimColor: true },
                line.oldNum ? String(line.oldNum).padStart(4) : '    '
              ),
              React.createElement(Text, { dimColor: true }, ' \u2502 '),
              React.createElement(
                Text,
                {
                  color: line.type === 'remove' || line.type === 'modified' ? 'red' : undefined,
                  dimColor: line.type === 'header',
                },
                line.type === 'remove' || line.type === 'modified' ? '- ' : '  '
              ),
              React.createElement(
                Text,
                {
                  color:
                    line.type === 'remove' || line.type === 'modified' ?
                      'red'
                    : getLineColor(line.type),
                },
                line.old ? truncateLine(line.old, columnWidth - 10) : ' '.repeat(columnWidth - 10)
              )
            ),
            React.createElement(Text, { dimColor: true }, ' \u2503 '),
            React.createElement(
              Box,
              { width: columnWidth },
              React.createElement(
                Text,
                { dimColor: true },
                line.newNum ? String(line.newNum).padStart(4) : '    '
              ),
              React.createElement(Text, { dimColor: true }, ' \u2502 '),
              React.createElement(
                Text,
                {
                  color: line.type === 'add' || line.type === 'modified' ? 'green' : undefined,
                  dimColor: line.type === 'header',
                },
                line.type === 'add' || line.type === 'modified' ? '+ ' : '  '
              ),
              React.createElement(
                Text,
                {
                  color:
                    line.type === 'add' || line.type === 'modified' ?
                      'green'
                    : getLineColor(line.type),
                },
                line.new ? truncateLine(line.new, columnWidth - 10) : ' '.repeat(columnWidth - 10)
              )
            )
          )
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
        Math.min(scrollOffset + viewportHeight, allLines.length),
        ' of',
        ' ',
        allLines.length,
        scrollOffset + viewportHeight < allLines.length &&
          ` (${allLines.length - scrollOffset - viewportHeight} more)`
      ),
      React.createElement(
        Text,
        { dimColor: true },
        'Tab: next file | Shift+Tab: prev file | \u2191\u2193/jk: scroll | ESC/b: back'
      )
    )
  );
};
export default SideBySideDiffViewer;
