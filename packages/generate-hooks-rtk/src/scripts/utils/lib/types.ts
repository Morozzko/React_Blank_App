export type ConfigType = {
	// указываем путь к папке, в которой находятся файлы с хуками
	hooksFolder: string
	// файл куда заберутся все импорты хуков
	exportFile: string
	// приписка к импорту для файла хуков
	hooksImportFileSuffix: string
	// путь до reducers файла
	reducersImportDestination: string
	// путь до middleware файла
	middlewaresImportDestination: string
	reducersImportFileSuffix: string
	middlewaresImportFileSuffix: string
	reducersObjectName: string
	middlewaresObjectName: string
}
