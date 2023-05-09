# Types for fast coding with React

## Install

```
npm i @npm.piece/types
```

```
yarn add @npm.piece/types
```
## Create .d.ts file in src folder and import types
```
/// <reference types="@npm.piece/types/global" />
```

### Types:
```typescript
type FC<T = {}> = FunctionComponent<T & ChildrenType>
type Nullable<T> = T | null | undefined
type Callback<Value = void | unknown, ReturnType = void> = (
  value?: Value
) => ReturnType
type UnknownCallback = (...args: any[]) => any
```
