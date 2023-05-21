# Frequently used hooks for React

## Install

```
npm i @npm.piece/utils
```

```
yarn add @npm.piece/utils
```

## useDebounce (with lodash)

```javascript
import { useDebounce } from '@npm.piece/utils'
```

```javascript
const log = useDebounce((params) => console.log(params), 1000);

log("123")
```

## useThrottle (with lodash)

```javascript
import { useThrottle } from '@npm.piece/utils'
```

```javascript
const log = useThrottle((params) => console.log(params), 1000);

log("123")
```

## usePortraitDetect

```javascript
import { usePortraitDetect } from '@npm.piece/utils'
```

```javascript
const isPortrait = usePortraitDetect()
```

## useOnlineDetect

```javascript
import { useOnlineDetect } from '@npm.piece/utils'
```

```javascript
const isOnline = useOnlineDetect()
```

## useSizeDetect

```javascript
import { useSizeDetect } from '@npm.piece/utils'
```

```javascript
const {
  clientHeight,
  clientWidth,
  innerHeight,
  innerWidth
} = useSizeDetect()
```

## useKeyPressDetect

```javascript
import { useKeyPressDetect } from '@npm.piece/utils'
```

```javascript
const isKeyFPressed = useKeyPressDetect("f")
```

## useOnKeyPress

```javascript
import { useOnKeyPress } from '@npm.piece/utils'
```

```javascript
const callback = useCallback(() => {
  // i use toLowerCase() in code, so it doesn't matter, if you use 'Enter' or 'enter'
  console.log('npm.piece')
}, [])

useOnKeyPress(callback, 'Enter')
```

## useInterval

```javascript
import { useInterval } from '@npm.piece/utils'
```

```javascript
useInterval(() => {
}, 1000);
```

## useTimeout

```javascript
import { useTimeout } from '@npm.piece/utils'
```

```javascript
useTimeout(() => {
}, 1000);
```

## useFocus

```javascript
import { useFocus } from '@npm.piece/utils'
```

```jsx
const [htmlElRef, setFocus] = useFocus()

useEffect(() => {
  setFocus()
}, [])

return <input ref={htmlElRef} />
```

## useIsVisibleElement

```javascript
import { useIsVisibleElement } from '@npm.piece/utils'
```

```jsx
const checkViewPortRef = useRef < HTMLDivElement > (null);
const isInViewPort = useIntersection(checkViewPortRef);

return <div ref={checkViewPortRef} />
```

## useEffectWithoutFirstCall

```javascript
import { useEffectWithoutFirstCall } from '@npm.piece/utils'
```

```javascript
useEffectWithoutFirstCall(() => {
}, []);
```

## CustomServiceInjector

#### The Custom Service Injector (CSI) component is designed to inject custom hooks containing useEffect, to your application without calling re-render of child components.

```javascript
import { CustomServiceInjector } from '@npm.piece/utils'
```

```tsx
<CustomServiceInjector
  containers={[condition.useContainer, mobile.useContainer]}
/>
```

## ArrayRender

#### This component is a generic component for displaying an array of elements. Instead of just using map to convert an array of elements into JSX elements, the ArrayRender component takes an array of items and a renderItem function and processes them internally. The main purpose of this component is to simplify repetitive code when displaying a list of items and keep the code clean and modular.

```javascript
import { ArrayRender } from '@npm.piece/utils'
```

```tsx
<ArrayRender items={items} renderItem={(item) => <itemTemplate key />} />
```

## DeepClone

```javascript
import { DeepClone } from '@npm.piece/utils'
```

```javascript
const newObj = DeepClone({ name: 'npm.piece' })
```

## MergeObjects

```javascript
import { MergeObjects } from '@npm.piece/utils'
```

```javascript
const a = {
  name: 'npm.piece',
  location: {
    city: 'City 17'
  }
}

const b = {
  age: 18,
  location: {
    flat: 'H15'
  }
}

const c = {
  price: 100
}


const d = MergeObjects(a, b, c)
// d will be:
const d = {
  name: 'npm.piece',
  age: 18,
  price: 100,
  location: {
    city: 'City 17',
    flat: 'H15'
  }
}
```

## SetToSessionStorage / SetToLocalStorage / GetFromSessionStorage / GetFromLocalStorage

```javascript
import {
  SetToSessionStorage,
  SetToLocalStorage,
  GetFromSessionStorage,
  GetFromLocalStorage
} from '@npm.piece/utils'
```

```javascript
  SetToSessionStorage('token', { age: 100 })
SetToLocalStorage('token', { age: 100 }),
  GetFromSessionStorage('token'),
  GetFromLocalStorage('token')
```

## Micro-Frontend Events

```javascript
import { useSubscribe, EventTransfer } from '@npm.piece/utils'
```

```javascript
const [green, setGreen] = useState < string > ('')

useSubscribe < { text: string } > (
  // or use string like 'green'
  {
    mfName: 'green',
    eventName: 'CloseEvent',
    tag: 'tag'
  },
    (e) => setGreen(e.text))
```

```javascript
EventTransfer < { text: string } > ({
  data: {
    text: e.target.value
  },
  debug: true,
  // or use string like 'green'
  name: {
    mfName: 'green',
    eventName: 'CloseEvent',
    tag: 'tag'
  }
})
```

## IndexDB (with idb)

```javascript
import { IndexedDB } from '@npm.piece/utils'
```

```tsx
useEffect(() => {
  const runIndexDb = async () => {
    const idb = new IndexedDB('test')
    //if you need to delete database, add new version number for second argument
    await idb.createObjectStore(['languages', 'students'], 1)
    await idb.putValue('languages', { name: 'JavaScript' })
    await idb.putBulkValue('languages', [
      { name: 'TypeScript' },
      { name: 'C#' }
    ])
    await idb.getValue('languages', 1)
    await idb.getAllValue('languages')
    await idb.deleteValue('languages', 1)
  }
  runIndexDb()
}, [])
```
