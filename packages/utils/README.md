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
import {useDebounce} from '@npm.piece/utils'
```

```javascript
const log = useDebounce((params) => console.log(params), 1000);

log("123")
```

## useThrottle (with lodash)

```javascript
import {useThrottle} from '@npm.piece/utils'
```

```javascript
const log = useThrottle((params) => console.log(params), 1000);

log("123")
```

## useEffectWithoutFirstCall

```javascript
import {useEffectWithoutFirstCall} from '@npm.piece/utils'
```

```javascript
useEffectWithoutFirstCall(() => {}, []);
```


## useSessionStorage

```javascript
import {useSessionStorage} from '@npm.piece/utils'
```

```javascript
const { get, set } = useSessionStorage('item')
set({key:"value"})
get()
```

## useLocalStorage

```javascript
import {useLocalStorage} from '@npm.piece/utils'
```

```javascript
const { get, set } = useLocalStorage('item')
set({key:"value"})
get()
```

## usePortraitDetect

```javascript
import {usePortraitDetect} from '@npm.piece/utils'
```

```javascript
const isPortrait = usePortraitDetect()
```

## useOnlineDetect

```javascript
import {useOnlineDetect} from '@npm.piece/utils'
```

```javascript
const isOnline = useOnlineDetect()
```

## useMobileSizeDetect

```javascript
import {useMobileSizeDetect} from '@npm.piece/utils'
```

```javascript
const isMobileWidth = useMobileSizeDetect(768)
```

## useKeyPressDetect

```javascript
import {useKeyPressDetect} from '@npm.piece/utils'
```

```javascript
const isKeyFPressed = useKeyPressDetect("f")
```

## useInterval

```javascript
import {useInterval} from '@npm.piece/utils'
```

```javascript
useInterval(() => {}, 1000);
```

## useFocus

```javascript
import {useFocus} from '@npm.piece/utils'
```

```jsx
const [htmlElRef, setFocus] = useFocus()

useEffect(()=>{
    setFocus()
},[])

return <input ref={htmlElRef}/>
```

## useIntersection

```javascript
import {useIntersection} from '@npm.piece/utils'
```

```jsx
const checkViewPortRef = useRef<HTMLDivElement>(null);
const isInViewPort = useIntersection(checkViewPortRef);

return <div ref={checkViewPortRef}/>
```
