import { IndexedDB } from './index'

import 'fake-indexeddb/auto'

// Mock the database name
const dbName = 'testDb'

// Mock table names
const tables = ['testTable1', 'testTable2']

// Mock data to put into the database
const data = {
  id: 1,
  name: 'test',
}

const bulkData = [
  {
    id: 1,
    name: 'test',
  },
  {
    id: 2,
    name: 'mock',
  },
]

describe('IndexDb', () => {
  let db: IndexedDB<string>

  beforeEach(async () => {
    db = new IndexedDB(dbName)
    await db.createObjectStore(tables)
  })

  test('putValue and getValue work correctly', async () => {
    await db.putValue(tables[0], data)
    const result = await db.getValue(tables[0], data.id)
    expect(result).toEqual(data)
  })

  test('putBulkValue and getValue work correctly', async () => {
    await db.putBulkValue(tables[0], bulkData)
    const result = await db.getValue(tables[0], bulkData[0].id)
    expect(result).toEqual(bulkData[0])
  })

  test('putBulkValue and getAllValue work correctly', async () => {
    await db.putBulkValue(tables[0], [
      data,
      {
        ...data,
        id: 2,
      },
    ])
    const result = await db.getAllValue(tables[0])
    expect(result).toEqual([
      data,
      {
        ...data,
        id: 2,
      },
    ])
  })

  test('deleteValue works correctly', async () => {
    await db.putValue(tables[0], data)
    await db.deleteValue(tables[0], data.id)
    const result = await db.getValue(tables[0], data.id)
    expect(result).toBeUndefined()
  })
})
