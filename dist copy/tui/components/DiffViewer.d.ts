import React from 'react';
import { type FileDiff } from '../../types/diff.js';
interface DiffViewerProps {
  files: FileDiff[];
  initialFileIndex: number;
  onBack: () => void;
}
declare const DiffViewer: React.FC<DiffViewerProps>;
export default DiffViewer;
