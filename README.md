# astro-cross-context

This demo has four separate React islands accessing the same central application (the obligatory counter) via their own contexts.

- [`createApp()`](./src/app/create-app.ts) creates the application around a [nanostore](https://github.com/nanostores/nanostores) [atom](https://github.com/nanostores/nanostores#user-content-atoms).
- [`island-context`](./src/components/island-context.ts) manages app and context creation (In reality each island would likely be it's own context with an entirely distinct global name. Here the islands are instances of the same component—so the contexts are managed by one global [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)).
* [`CounterUI`](./src/components/CounterUI.tsx) is the "Control Panel" for the application. The [`useApp()`](./src/components/use-app.ts) hook gives the component access to the application.
* [`Island`](./src/components/Island.tsx) is the component tree for a single island.

The index page shows four identical UIs, each one bound to the same application.

---

## Notes
* Derived from the Astro [`with-nanostores`](https://github.com/withastro/astro/tree/main/examples/with-nanostores) example.

---

Clone the repo:
```
$ cd context-cross-context
$ npm i
$ npm run dev
```
