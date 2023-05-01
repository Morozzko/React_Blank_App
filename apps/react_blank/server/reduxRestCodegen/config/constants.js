const config = {
	// указываем путь к папке, в которой находятся файлы с хуками
	hooksFolder: '../../../src/features/generated/hooks/',
	// файл куда заберутся все импорты хуков
	exportFile: '../../../src/features/generated/hooks.ts',
	// приписка к импорту для файла хуков
	hooksImportFileSuffix: './hooks/',
	// путь до reducers файла
	reducersImportDestination: '../../../src/app/store/generated/reducers.ts',
	// путь до middleware файла
	middlewaresImportDestination:
		'../../../src/app/store/generated/middlewares.ts',
	reducersImportFileSuffix: '@generated/hooks/',
	middlewaresImportFileSuffix: '@generated/hooks/',
	reducersObjectName: 'generatedReducersList',
	middlewaresObjectName: 'generatedMiddlewaresList',
}

module.exports = {
	config,
}
