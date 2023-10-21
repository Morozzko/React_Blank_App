import { IDBPDatabase, openDB } from 'idb'

export class IndexedDB<T extends string> {
  private readonly database: string
  private db?: IDBPDatabase

  constructor(database: string) {
    this.database = database
  }

  public async createObjectStore(tableNames: T[], version = 1) {
    try {
      this.db = await openDB(this.database, version, {
        upgrade: (db: IDBPDatabase) => {
          for (const tableName of tableNames) {
            if (!db.objectStoreNames.contains(tableName)) {
              db.createObjectStore(tableName, {
                autoIncrement: true,
                keyPath: 'id',
              })
            }
          }
        },
      })

      return true
    } catch (error) {
      console.error(`Failed to create object store: ${error}`)

      return false
    }
  }

  public async getValue(tableName: T, id: number) {
    try {
      if (!this.db) {
        throw new Error(
          'Database is not initialized. Call createObjectStore() first'
        )
      }
      const tx = this.db.transaction(tableName, 'readonly')
      const store = tx.objectStore(tableName)

      return await store.get(id)
    } catch (error) {
      console.error(`Failed to get value: ${error}`)
      throw error
    }
  }

  public async getAllValue(tableName: T) {
    try {
      if (!this.db) {
        throw new Error(
          'Database is not initialized. Call createObjectStore() first'
        )
      }
      const tx = this.db.transaction(tableName, 'readonly')
      const store = tx.objectStore(tableName)

      return await store.getAll()
    } catch (error) {
      console.error(`Failed to get all values: ${error}`)
      throw error
    }
  }

  public async putValue(tableName: T, value: object) {
    try {
      if (!this.db) {
        throw new Error(
          'Database is not initialized. Call createObjectStore() first'
        )
      }
      const tx = this.db.transaction(tableName, 'readwrite')
      const store = tx.objectStore(tableName)

      return await store.put(value)
    } catch (error) {
      console.error(`Failed to put value: ${error}`)
      throw error
    }
  }

  public async putBulkValue(tableName: T, values: object[]) {
    try {
      if (!this.db) {
        throw new Error(
          'Database is not initialized. Call createObjectStore() first'
        )
      }
      const tx = this.db.transaction(tableName, 'readwrite')
      const store = tx.objectStore(tableName)
      for (const value of values) {
        await store.put(value)
      }

      return this.getAllValue(tableName)
    } catch (error) {
      console.error(`Failed to put bulk values: ${error}`)
      throw error
    }
  }

  public async deleteValue(tableName: T, id: number) {
    try {
      if (!this.db) {
        throw new Error(
          'Database is not initialized. Call createObjectStore() first'
        )
      }

      const tx = this.db.transaction(tableName, 'readwrite')
      const store = tx.objectStore(tableName)
      const result = await store.get(id)

      if (!result) {
        throw new Error(`Id not found: ${id}`)
      }

      await store.delete(id)

      return id
    } catch (error) {
      console.error(`Failed to delete value: ${error}`)
      throw error
    }
  }
}
