import React from 'react';
import { islandAppContext } from './island-context';
import CounterUI from './CounterUI';

type IslandProps = {
  appContextKey: string;
};

function Island({ appContextKey }: IslandProps) {
  const [app, IslandContext] = islandAppContext(appContextKey);

  return (
    <IslandContext.Provider value={app}>
      <CounterUI appContextKey={appContextKey} />
    </IslandContext.Provider>
  );
}

export { Island as default };
