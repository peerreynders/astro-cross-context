import React from 'react';
import { useApp } from './use-app';

type CounterUIProps = {
  appContextKey: string;
};

function CounterUI({ appContextKey }: CounterUIProps): JSX.Element {
  const app = useApp(appContextKey);

  return (
    <div className="counter">
      <button onClick={app.decrement}>-</button>
      <pre>{app.count}</pre>
      <button onClick={app.increment}>+</button>
    </div>
  );
}

export { CounterUI as default };
