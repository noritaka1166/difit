import React from 'react';
import { type FileDiff } from '../../types/diff.js';
interface FileListProps {
  files: FileDiff[];
  selectedIndex: number;
  reviewedFiles: Set<string>;
}
declare const FileList: React.FC<FileListProps>;
export default FileList;
