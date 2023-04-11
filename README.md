# Архитектура

>Слой app: инициализация приложения.

>Слой service: отдельные логические реализации.
>+ Все сервисы должны наименоваться с маленькой буквы в файле index.tsx
>+ structure: изначальное состояние slice
>+ store: настройка slice и actions
>+ thunks: для каждой thunk свой файл, закидываются в io, а далее сами подцепляются
>+ api: (Data Access Layer)
>+ container: реализация логики
>+ lib: utility функции, типизация
>+ selectors (Реселекты для мемоизации бизнес логики)

>Слой widget отдельные куски приложения:
>+ Все виджеты должны именоваться с большой буквы в файле index.tsx
>+ container/useContainer.ts (все side effects для ui, мемоизация логики)
>+ ui (чистая компонента, отвечающая только за отрисовку)
>+ templates (декомпозиция UI для более простого масштабирования приложения в будущем)
>+ lib: utility функции
>+ store: (необязательно) обычно используется для локального состояния загрузки или других процессов, которые зависят от других thunks
>+ structure: (необязательно) изначальное состояние slice
>

>Слой layouts: верстка каркасов приложения

>Слой pages: верстка страницы, объединяющая отдельные логические реализации

> ## useActions
> hook для выполнения dispatch
>
> const {} = useActions(sample.Actions)
> забирать нужно const {} = useAppActions()
>
> где action импортируются через чей-то index.tsx

> ## useAppSelector
> вместо useSelector используется типизированный useAppSelector

> ## Для генерации новых features 
>
> В папке рядом с **_package.json_** вызвать команду из пакета **_@npm.piece/template-generator_**
> ```
> new widget name
> new service name
> ```
> Команда автоматически добавит зависимости в хук _**useAppActions**_ и список **_ReducersList_**
> ## Для удаления features
> ```
> remove widget name
> remove service name
> ```
> Команда автоматически удалит зависимости из хука _**useAppActions**_ и списка **_ReducersList_**


> # Оркестровка репозиторием
> 
> ### Сборка библиотеки common
> 
> ```
> yarn build --filter=@npm.piece/common
> ```
>
> ### Сборка проекта
>
> ```
> yarn build --filter=react_blank
>
> yarn dev --filter=react_blank
> ```
>
> ### Пример добавление библиотеки
> ```
> yarn workspace @npm.piece/common add axios -D
> ```
>
> ### Публикация пакета
> ```
> npm publish --access public
> ```
