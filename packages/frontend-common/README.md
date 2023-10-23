## Common utilities for frontend

Custom base query for rtk query

```tsx
import { createApi } from '@reduxjs/toolkit/query/react'
import { createAxiosBaseQuery } from '@npm.piece/common-frontend'
import { instance } from '@app/api/axios'

const baseQuery = createAxiosBaseQuery(instance)

export const api = createApi({
  baseQuery,
  reducerPath: 'reducer',
  endpoints: () => ({}),
})
```
