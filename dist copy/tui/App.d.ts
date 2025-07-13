import React from 'react';
interface AppProps {
  targetCommitish: string;
  baseCommitish: string;
  mode?: string;
}
declare const App: React.FC<AppProps>;
export default App;
