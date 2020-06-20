# Using redux

Before you add redux, carefully consider whether you really need redux.
Redux is great, but will also add significant complexity to your project.

Refer to the example implementation in the `src` directory.

The easiest way of adding redux is to copy (and merge where there are conflicts e.g. `index.tsx`) the contents of the `src` directory into your project's `src` directory.

Then install all necessary packages, and consider upgrading packages

```sh
$ npm i --save redux@4 react-redux@7 connected-react-router@6 immer@7 redux-devtools-extension@2 redux-immutable-state-invariant@2 redux-logger@3 redux-observable@1 reselect@4 rxjs@6
$ npm i --save-dev  @types/redux-immutable-state-invariant@2 @types/redux-logger@3
```
