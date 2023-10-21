export type EntityType<T> = {
    dev: T;
    prod: T;
};
export type MFType = {
    publicPath: EntityType<string>;
    host: EntityType<string>;
    port: EntityType<number>;
    import: string[];
};
export type ConfigType = {
    MFList: Record<string, MFType>;
    config: Record<string, EntityType<string>>;
    getProjectPath: (name: string) => string;
};
