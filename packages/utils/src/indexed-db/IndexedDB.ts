import { IDBPDatabase, openDB } from 'idb'

export class IndexedDB<T extends string> {
  private readonly database: string
  private db?: IDBPDatabase

  constructor(database: string) {
    this.database = database
  }

  /**
   * The createObjectStore function creates an object store in the indexeddb.
   *
   *
   * @param tableNames T[] Create the object store
   * @param version Determine if the database needs to be upgraded
   *
   * @return A boolean flag
   *
   */
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

  /**
   * The getValue function retrieves a value from the indexeddb.
   *
   *
   * @param tableName T Specify the type of data that is being stored in the database
   * @param id number to get the value from the object store
   *
   * @return A promise that resolves to a value
   *
   */
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

  /**
   * The getAllValue function returns all the values in a given table.
   *
   *
   * @param tableName T Specify the table name
   *
   * @return All the values in the table
   *
   */
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

  /**
   * The putValue function is used to add a new value to the indexeddb.
   *
   *
   * @param tableName T Specify the table that we want to get data from
   * @param value object Pass in the object to be stored
   *
   * @return A promise that resolves to the key of the record that was just added
   *
   */
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

  /**
   * The putBulkValue function takes in a table name and an array of objects.
   * It then creates a transaction with the given table name, and opens up an object store.
   * For each value in the values array, it puts that value into the object store.
   * Finally, it returns all the values from that table using getAllValue().

   *
   * @param tableName T Specify the table name
   * @param values object[] Pass in an array of objects to be added to the database
   *
   * @return The result of the getAllValue function
   *
   */
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

  /**
   * The deleteValue function deletes a value from the indexeddb.
   *
   *
   * @param tableName T Tell the function what table to use
   * @param id number Identify the value to be deleted
   *
   * @return The id of the deleted value
   *
   */
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
