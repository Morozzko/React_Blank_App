export type UseAppActionsRegexpType = {
  hooks: string
  actions: string
}

export type RegexpType = {
  hooks?: string
  actions?: string
  import?: string
  service?: string
  widget?: string
}

export type FilePathType = {
  reducersList: string
  useAppActions: string
  router: string
}

export type ImportPathType = {
  useAppActions: {
    service: string
    widget: string
  }
  reducersList: {
    service: string
    widget: string
  }
  router: {
    page: string
  }
}

export type PathToTemplateType = {
  service: string
  widget: string
  page: string
}

export type PathToPasteType = {
  service: string
  widget: string
  page: string
}

export type ConfigType = {
  filePath: FilePathType
  regexp: {
    useAppActions: RegexpType
    reducersList: RegexpType
    router: RegexpType
  }
  importPath: ImportPathType
  pathToTemplate: PathToTemplateType
  pathToPaste: PathToPasteType
  eslintCommand: string
}
