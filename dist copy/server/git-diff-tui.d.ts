import type { FileDiff } from '../types/diff.js';
export declare function loadGitDiff(
  targetCommitish: string,
  baseCommitish: string
): Promise<FileDiff[]>;
