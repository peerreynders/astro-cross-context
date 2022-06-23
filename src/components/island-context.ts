import { createContext } from 'react';
import { createApp } from '../app/create-app';

import type { App } from '../app/create-app';

let app: App | undefined;
const contextMap = new Map();

function islandAppContext(contextKey: string) {
  if (!app) app = createApp({ count: 10 });

  let context = contextMap.get(contextKey);
  if (context) return [app, context];

  context = createContext<App>(app);
  contextMap.set(contextKey, context);
  return [app, context];
}

function getContext(contextKey: string) {
  const context = contextMap.get(contextKey);
  if (context == undefined)
    throw new Error(`Missing context or context key: ${contextKey}`);
  return context;
}

export { islandAppContext, getContext };
