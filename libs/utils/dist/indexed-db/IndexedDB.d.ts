export declare class IndexedDB<T extends string> {
    private readonly database;
    private db?;
    constructor(database: string);
    createObjectStore(tableNames: T[], version?: number): Promise<boolean>;
    getValue(tableName: T, id: number): Promise<any>;
    getAllValue(tableName: T): Promise<any[]>;
    putValue(tableName: T, value: object): Promise<IDBValidKey>;
    putBulkValue(tableName: T, values: object[]): Promise<any[]>;
    deleteValue(tableName: T, id: number): Promise<number>;
}
