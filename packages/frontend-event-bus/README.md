# Eventbus concept for communication between microfrontends

## Install

```
npm i @npm.piece/event-bus
```

```
yarn add @npm.piece/event-bus
```

## Usage

```tsx
import { eventTransfer, EventTransferActionsEnum, useSubscribe } from '@npm.piece/event-bus'

const onClickHandler = () => {
  eventTransfer({
    name: EventTransferActionsEnum.AuthRefreshToken,
    data: {}
  })
}

useSubscribe({
  type: EventTransferActionsEnum.AuthRefreshToken,
  callback: refreshToken,
})
```
