export type UseAppActionsRegexp = {
  hooks: string
  actions: string
}

export type ReducersListRegexp = {
  widget: string
  service: string
}

export type RegexpKeysType = {
  widget: string
  service: string
}

export type ConfigType = {
  filePath: {
    reducersList: string
    useAppActions: string
  }
  regexp: {
    reducersList: ReducersListRegexp
    useAppActions: UseAppActionsRegexp
  }
  importPath: {
    reducersList: RegexpKeysType
    useAppActions: RegexpKeysType
  }
}
