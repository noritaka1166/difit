import { Box, Text } from 'ink';
import React from 'react';
const FileList = ({ files, selectedIndex, reviewedFiles }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'A':
        return 'green';
      case 'M':
        return 'yellow';
      case 'D':
        return 'red';
      default:
        return 'white';
    }
  };
  const getStatusLabel = (status) => {
    switch (status) {
      case 'A':
        return '[+]';
      case 'M':
        return '[M]';
      case 'D':
        return '[-]';
      default:
        return '[?]';
    }
  };
  return React.createElement(
    Box,
    { flexDirection: 'column' },
    React.createElement(
      Box,
      { marginBottom: 1, flexDirection: 'row', justifyContent: 'space-between' },
      React.createElement(Text, { bold: true }, 'Changed Files (', files.length, ')'),
      React.createElement(
        Text,
        { dimColor: true },
        reviewedFiles.size,
        ' / ',
        files.length,
        ' files viewed'
      )
    ),
    files.map((file, index) => {
      const isReviewed = reviewedFiles.has(file.path);
      return React.createElement(
        Box,
        { key: `${file.path}-${index}` },
        React.createElement(
          Text,
          {
            color: index === selectedIndex ? 'cyan' : undefined,
            backgroundColor: index === selectedIndex ? 'gray' : undefined,
            strikethrough: isReviewed,
            dimColor: isReviewed,
          },
          index === selectedIndex ? '▶ ' : '  ',
          isReviewed ? '[✓] ' : '[ ] ',
          React.createElement(
            Text,
            { color: getStatusColor(file.status) },
            getStatusLabel(file.status)
          ),
          ' ',
          file.path,
          ' ',
          React.createElement(
            Text,
            { dimColor: true },
            '(+',
            file.additions,
            ' -',
            file.deletions,
            ')'
          )
        )
      );
    }),
    React.createElement(
      Box,
      { marginTop: 1 },
      React.createElement(Text, { dimColor: true }, "Press 'x' to mark file as reviewed/unreviewed")
    )
  );
};
export default FileList;
