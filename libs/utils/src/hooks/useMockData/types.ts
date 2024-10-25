export type FieldTypesType = 'string' | 'number' | 'boolean' | 'Date'
export type FieldsDefinitionType = Record<string, FieldTypesType>

export type DataItemType<Fields extends FieldsDefinitionType> = {
  id: string
} & {
  [K in keyof Fields]: Fields[K] extends 'string'
    ? string
    : Fields[K] extends 'number'
    ? number
    : Fields[K] extends 'boolean'
    ? boolean
    : Fields[K] extends 'date'
    ? Date
    : never
}
