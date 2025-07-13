import { type DiffResponse } from '../types/diff.js';
export declare class GitDiffParser {
  private git;
  constructor(repoPath?: string);
  parseDiff(
    targetCommitish: string,
    baseCommitish: string,
    ignoreWhitespace?: boolean
  ): Promise<DiffResponse>;
  private parseUnifiedDiff;
  private parseFileBlock;
  private parseChunks;
  validateCommit(commitish: string): Promise<boolean>;
  getBlobContent(filepath: string, ref: string): Promise<Buffer>;
}
