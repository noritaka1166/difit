import { Box, Text } from 'ink';
import React from 'react';

interface StatusBarProps {
  commitish: string;
  totalFiles: number;
  currentMode: 'list' | 'inline' | 'side-by-side';
  reviewedFiles: number;
}

const StatusBar: React.FC<StatusBarProps> = ({
  commitish,
  totalFiles,
  currentMode,
  reviewedFiles,
}) => {
  return (
    <Box borderStyle="round" paddingX={1} marginBottom={1}>
      <Box flexGrow={1}>
        <Text bold color="cyan">
          📋 difit TUI
        </Text>
        <Text> | </Text>
        <Text color="yellow">{commitish}</Text>
        <Text> | </Text>
        <Text>{totalFiles} files changed</Text>
        <Text> | </Text>
        <Text color="green">
          {reviewedFiles}/{totalFiles} files viewed
        </Text>
      </Box>
      <Box>
        <Text dimColor>
          [
          {currentMode === 'list' ?
            'File List'
          : currentMode === 'side-by-side' ?
            'Side-by-Side'
          : 'Inline Diff'}
          ]
        </Text>
      </Box>
    </Box>
  );
};

export default StatusBar;
