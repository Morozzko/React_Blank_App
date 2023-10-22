# Навигация по репозиторию

> ### 1. Архитектура.
> #### <a href="https://github.com/Morozzko/React_Blank_App/tree/master/_doc/Architect%26Structure">1.1 Документация к архитектуре на React.js.<a/>
> #### <a href="https://github.com/Morozzko/React_Blank_App/tree/master/libs/create-by-template">1.2 Генерация шаблонов под архитектуру.<a/>
> #### <a href="https://github.com/Morozzko/React_Blank_App/tree/master/_templates">1.3 Шаблоны.<a/>

> ### 2. Вспомогательные библиотеки.
> #### <a href="https://github.com/Morozzko/React_Blank_App/tree/master/libs/utils">2.1 Хуки и полезные функции.<a/>
> #### <a href="https://github.com/Morozzko/React_Blank_App/tree/master/libs/types">2.2 Типы для быстрого написания кода с импортом через reference types.<a/>
> #### <a href="https://github.com/Morozzko/React_Blank_App/tree/master/packages/eslint-config">2.3 ES-Lint config.<a/>
> #### <a href="https://github.com/Morozzko/React_Blank_App/tree/master/packages/frontend-tailwind-config">2.4 Tailwind config.<a/>

> ### 3. Генерация.
> #### <a href="https://github.com/Morozzko/React_Blank_App/tree/master/libs/generate-hooks-rtk">3.1 Генерация хуков для ReduxToolkit Query с авто-инъекцией в store.<a/>
> #### <a href="https://github.com/Morozzko/React_Blank_App/tree/master/packages/download-locale">3.2 Загрузка переводов из гугл таблицы.<a/>

> ### 4. Структуры, Алгоритмы, Паттерны.
> #### <a href="https://github.com/Morozzko/React_Blank_App/tree/master/other/algorithms/src/algorithms/sortings">4.1 Сортировки.<a/>
> #### <a href="https://github.com/Morozzko/React_Blank_App/tree/master/other/algorithms/src/structures">4.2 Структуры данных.<a/>

> ### 5. Прочее
> #### <a href="https://github.com/Morozzko/React_Blank_App/blob/master/_templates/rtkthunk/react_blank/src/app/api/axios.ts">5.1 Работа с Mutex на примере interceptors.<a/>
> #### <a href="https://github.com/Morozzko/React_Blank_App/blob/master/_templates/rtkthunk/react_blank/src/utils/functions/thunkCreator/index.ts">5.2 Работа с AbortController.<a/>
> #### <a href="https://github.com/Morozzko/React_Blank_App/blob/master/packages/frontend-common/src/axios/baseQuery.ts">5.3 Custom Query с использованием Axios Instance для RTK Query.<a/>


> ### Папки:
> #### _doc Для документации
> #### _templates для создания когда по шаблону
> #### backend для microservice на nest
> #### frontend для microfrontend на React
> #### libs глобальные библиотеки (Инструменты)
> #### packages локальные библиотеки (Помощь в оркестровке внутри проекта, eslint, constants, и т.д )

# Оркестровка репозиторием
> ### Сборка библиотеки common
>
> ```
> yarn build --filter=@npm.piece/common-frontend
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
> ### Чистка cache, node_modules, dist
>
> ```
> yarn rmrf
> ```
>
> ### Синхронизация библиотек
>
> ```
> yarn update
> ```
>
> ### Пример добавление библиотеки
> ```
> yarn workspace @npm.piece/common-frontend add axios -D
> ```
>
> ### Публикация пакета
> ```
> npm publish --access public
> ```

> ```
> npm install -g npm @nestjs/cli
> ```
> ```
> npm run build && npm publish --access public
> ```


> ```
> kill -9 $(lsof -ti:3000)
> ```
