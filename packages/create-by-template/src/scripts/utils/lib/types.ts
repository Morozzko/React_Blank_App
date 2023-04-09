export type RegexpType = {
  hooks: string
  actions: string
}

export type PathForHooksImport = {
  widget: string
  service: string
}

export type ConfigType = {
  store: string
  useAppActions: string
  regexp: RegexpType
  pathForHooksImport: PathForHooksImport
}
