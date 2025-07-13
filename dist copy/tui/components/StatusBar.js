import { Box, Text } from 'ink';
import React from 'react';
const StatusBar = ({ commitish, totalFiles, currentMode, reviewedFiles }) => {
  return React.createElement(
    Box,
    { borderStyle: 'round', paddingX: 1, marginBottom: 1 },
    React.createElement(
      Box,
      { flexGrow: 1 },
      React.createElement(Text, { bold: true, color: 'cyan' }, '\uD83D\uDCCB difit TUI'),
      React.createElement(Text, null, ' | '),
      React.createElement(Text, { color: 'yellow' }, commitish),
      React.createElement(Text, null, ' | '),
      React.createElement(Text, null, totalFiles, ' files changed'),
      React.createElement(Text, null, ' | '),
      React.createElement(Text, { color: 'green' }, reviewedFiles, '/', totalFiles, ' files viewed')
    ),
    React.createElement(
      Box,
      null,
      React.createElement(
        Text,
        { dimColor: true },
        '[',
        currentMode === 'list' ? 'File List'
        : currentMode === 'side-by-side' ? 'Side-by-Side'
        : 'Inline Diff',
        ']'
      )
    )
  );
};
export default StatusBar;
