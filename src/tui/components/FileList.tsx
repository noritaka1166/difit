import { Box, Text } from 'ink';
import React from 'react';

import { type FileDiff } from '../../types/diff.js';

interface FileListProps {
  files: FileDiff[];
  selectedIndex: number;
  reviewedFiles: Set<string>;
}

const FileList: React.FC<FileListProps> = ({ files, selectedIndex, reviewedFiles }) => {
  const getStatusColor = (status: string) => {
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

  const getStatusLabel = (status: string) => {
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

  return (
    <Box flexDirection="column">
      <Box marginBottom={1} flexDirection="row" justifyContent="space-between">
        <Text bold>Changed Files ({files.length})</Text>
        <Text dimColor>
          {reviewedFiles.size} / {files.length} files viewed
        </Text>
      </Box>
      {files.map((file, index) => {
        const isReviewed = reviewedFiles.has(file.path);
        return (
          <Box key={`${file.path}-${index}`}>
            <Text
              color={index === selectedIndex ? 'cyan' : undefined}
              backgroundColor={index === selectedIndex ? 'gray' : undefined}
              strikethrough={isReviewed}
              dimColor={isReviewed}
            >
              {index === selectedIndex ? '▶ ' : '  '}
              {isReviewed ? '[✓] ' : '[ ] '}
              <Text color={getStatusColor(file.status)}>{getStatusLabel(file.status)}</Text>{' '}
              {file.path}{' '}
              <Text dimColor>
                (+{file.additions} -{file.deletions})
              </Text>
            </Text>
          </Box>
        );
      })}
      <Box marginTop={1}>
        <Text dimColor>Press &apos;x&apos; to mark file as reviewed/unreviewed</Text>
      </Box>
    </Box>
  );
};

export default FileList;
