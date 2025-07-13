interface ServerOptions {
  targetCommitish: string;
  baseCommitish: string;
  preferredPort?: number;
  host?: string;
  openBrowser?: boolean;
  mode?: string;
  ignoreWhitespace?: boolean;
}
export declare function startServer(options: ServerOptions): Promise<{
  port: number;
  url: string;
  isEmpty?: boolean;
  server?: any;
}>;
export {};
