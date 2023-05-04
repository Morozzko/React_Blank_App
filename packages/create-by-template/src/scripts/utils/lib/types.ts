export type UseAppActionsRegexpType = {
	hooks: string
	actions: string
}

export type ReducersListRegexpType = {
	widget: string
	service: string
}

export type PathToTemplateType = {
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
		reducersList: ReducersListRegexpType
		useAppActions: UseAppActionsRegexpType
	}
	importPath: {
		reducersList: RegexpKeysType
		useAppActions: RegexpKeysType
	}
	pathToTemplate: PathToTemplateType
	pathToPaste: PathToTemplateType
	eslintCommand: string
}
