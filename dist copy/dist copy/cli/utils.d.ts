import type { SimpleGit } from 'simple-git';
export declare function validateCommitish(commitish: string): boolean;
export declare function shortHash(hash: string): string;
export declare function createCommitRangeString(baseHash: string, targetHash: string): string;
export interface PullRequestInfo {
  owner: string;
  repo: string;
  pullNumber: number;
}
export interface PullRequestDetails {
  baseSha: string;
  headSha: string;
  baseRef: string;
  headRef: string;
}
export declare function parseGitHubPrUrl(url: string): PullRequestInfo | null;
export declare function fetchPrDetails(prInfo: PullRequestInfo): Promise<PullRequestDetails>;
export declare function resolveCommitInLocalRepo(
  sha: string,
  context?: {
    owner: string;
    repo: string;
  }
): string;
export declare function resolvePrCommits(prUrl: string): Promise<{
  targetCommitish: string;
  baseCommitish: string;
}>;
export declare function validateDiffArguments(
  targetCommitish: string,
  baseCommitish?: string
): {
  valid: boolean;
  error?: string;
};
export declare function findUntrackedFiles(git: SimpleGit): Promise<string[]>;
export declare function markFilesIntentToAdd(git: SimpleGit, files: string[]): Promise<void>;
export declare function promptUser(message: string): Promise<boolean>;
