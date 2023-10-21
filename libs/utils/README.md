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
import { useDebounce } from 'libs/utils/dist/index'
```

```javascript
const log = useDebounce((params) => console.log(params), 1000);

log("123")
```

## useThrottle (with lodash)

```javascript
import { useThrottle } from 'libs/utils'
```

```javascript
const log = useThrottle((params) => console.log(params), 1000);

log("123")
```

## usePortraitDetect

```javascript
import { usePortraitDetect } from 'libs/utils'
```

```javascript
const isPortrait = usePortraitDetect()
```

## useOnlineDetect

```javascript
import { useOnlineDetect } from 'libs/utils'
```

```javascript
const isOnline = useOnlineDetect()
```

## useSizeDetect

```javascript
import { useSizeDetect } from 'libs/utils'
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
import { useKeyPressDetect } from 'libs/utils'
```

```javascript
const isKeyFPressed = useKeyPressDetect("f")
```

## useOnKeyPress

```javascript
import { useOnKeyPress } from 'libs/utils'
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
import { useInterval } from 'libs/utils'
```

```javascript
useInterval(() => {
}, 1000);
```

## useTimeout

```javascript
import { useTimeout } from 'libs/utils'
```

```javascript
useTimeout(() => {
}, 1000);
```

## useFocus

```javascript
import { useFocus } from 'libs/utils'
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
import { useIsVisibleElement } from 'libs/utils'
```

```jsx
const checkViewPortRef = useRef < HTMLDivElement > (null);
const isInViewPort = useIntersection(checkViewPortRef);

return <div ref={checkViewPortRef} />
```

## useEffectWithoutFirstCall

```javascript
import { useEffectWithoutFirstCall } from 'libs/utils'
```

```javascript
useEffectWithoutFirstCall(() => {
}, []);
```

## CustomServiceInjector

#### The Service Injector component is designed to inject custom hooks containing useEffect, to your application without calling re-render of child components.

```javascript
import { ServiceInjector } from 'libs/utils'
```

```tsx
<ServiceInjector
  services={[condition.service, mobile.service]}
/>
```

## ErrorBoundary

```javascript
import { ErrorBoundary } from 'libs/utils'
```

```tsx
<ErrorBoundary errorComponent={<h1>error</h1>}>
    <div/>
</ErrorBoundary>
```

## ArrayRender

#### This component is a generic component for displaying an array of elements. Instead of just using map to convert an array of elements into JSX elements, the ArrayRender component takes an array of items and a renderItem function and processes them internally. The main purpose of this component is to simplify repetitive code when displaying a list of items and keep the code clean and modular.

```javascript
import { ArrayRender } from 'libs/utils'
```

```tsx
<ArrayRender items={items} renderItem={(item) => <itemTemplate key />} />
```

## deepClone

```javascript
import { deepClone } from 'libs/utils'
```

```javascript
const newObj = deepClone({ name: 'npm.piece' })
```

## MergeObjects

```javascript
import { mergeObjects } from 'libs/utils'
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


const d = mergeObjects(a, b, c)
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

## setToSessionStorage / setToLocalStorage / getFromSessionStorage / getFromLocalStorage

```javascript
import {
  setToSessionStorage,
  setToLocalStorage,
  getFromSessionStorage,
  getFromLocalStorage
} from 'libs/utils'
```

```javascript
  setToSessionStorage('token', { age: 100 })
  setToLocalStorage('token', { age: 100 }),
  getFromSessionStorage('token'),
  getFromLocalStorage('token')
```

## Micro-Frontend Events

```javascript
import { useSubscribe, eventTransfer } from 'libs/utils'
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
eventTransfer < { text: string } > ({
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

## IndexedDB (with idb)

```javascript
import { IndexedDB } from 'libs/utils'
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
