import React from 'react';
interface StatusBarProps {
  commitish: string;
  totalFiles: number;
  currentMode: 'list' | 'inline' | 'side-by-side';
  reviewedFiles: number;
}
declare const StatusBar: React.FC<StatusBarProps>;
export default StatusBar;
