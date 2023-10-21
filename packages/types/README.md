# Types for fast coding with React

## Install

```
npm i @npm.piece/types -D
```

```
yarn add @npm.piece/types -D
```
## Create .d.ts file in src folder and import types
```
/// <reference types="@npm.piece/types/global" />
```

### Types:
```typescript
// Function Component
type FC<T = {}> = FunctionComponent<T & ChildrenType>

// Container Component
type CC<T = {}> = () => T

// Service Component
type SC = () => void

type ImportedMF<T = {}> = FC<T & MFPropsType>

type Nullable<T> = T | null | undefined

type Callback<Value = void | unknown, ReturnType = void> = (
  value: Value
) => ReturnType

type UnknownCallback = (...args: any[]) => any
```
