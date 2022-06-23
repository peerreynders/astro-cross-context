import { useContext, useEffect, useState, useRef } from 'react';
import { getContext } from './island-context';

import type { App } from '../app/create-app';

type ContextRef = React.MutableRefObject<React.Context<App> | null>;

const getAppContext = (contextKey: string, ref: ContextRef) =>
  ref.current == undefined
    ? (ref.current = getContext(contextKey))
    : ref.current;

const advance = (current: number): number =>
  current < Number.MAX_SAFE_INTEGER ? current + 1 : 0;

function useApp(contextKey: string) {
  const ref: ContextRef = useRef(null);
  const app: App = useContext(getAppContext(contextKey, ref));
  const [, forceRender] = useState(0);

  useEffect(() => {
    return app.listen(() => {
      forceRender(advance);
    });

  }, []);

  return app;
}

export { useApp };
