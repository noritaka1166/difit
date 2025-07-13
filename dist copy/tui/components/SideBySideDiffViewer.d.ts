import React from 'react';
import { type FileDiff } from '../../types/diff.js';
interface SideBySideDiffViewerProps {
  files: FileDiff[];
  initialFileIndex: number;
  onBack: () => void;
}
declare const SideBySideDiffViewer: React.FC<SideBySideDiffViewerProps>;
export default SideBySideDiffViewer;
