# Навигация по репозиторию

> ### 1. Архитектура.
> #### <a href="https://github.com/Morozzko/React_Blank_App/tree/master/apps/react_blank">1.1 Пример архитектуры на React.js.<a/>
> #### <a href="https://github.com/Morozzko/React_Blank_App/tree/master/packages/create-by-template">1.2 Генерация шаблонов под архитектуру.<a/>

> ### 2. Вспомогательные библиотеки.
> #### <a href="https://github.com/Morozzko/React_Blank_App/tree/master/packages/utils">2.1 Хуки и полезные функции.<a/>
> #### <a href="https://github.com/Morozzko/React_Blank_App/tree/master/packages/types">2.2 Типы для быстрого написания кода с импортом через reference types.<a/>
> #### <a href="https://github.com/Morozzko/React_Blank_App/tree/master/packages/eslint-config-npmpiece">2.3 ES-Lint config.<a/>
> #### <a href="https://github.com/Morozzko/React_Blank_App/tree/master/packages/tailwind-config">2.4 Tailwind config.<a/>

> ### 3. Генерация.
> #### <a href="https://github.com/Morozzko/React_Blank_App/tree/master/packages/generate-hooks-rtk">3.1 Генерация хуков для ReduxToolkit Query с авто-инъекцией в store.<a/>
> #### <a href="https://github.com/Morozzko/React_Blank_App/tree/master/packages/download-locale">3.2 Загрузка переводов из гугл таблицы.<a/>

> ### 4. Структуры, Алгоритмы, Паттерны.
> #### <a href="https://github.com/Morozzko/React_Blank_App/tree/master/apps/algorithms/src/algorithms/sortings">4.1 Сортировки.<a/>
> #### <a href="https://github.com/Morozzko/React_Blank_App/tree/master/apps/algorithms/src/structures">4.2 Структуры данных.<a/>

> ### 5. Прочее
> #### <a href="https://github.com/Morozzko/React_Blank_App/blob/master/apps/react_blank/src/app/api/axios.ts">5.1 Работа с Mutex на примере interceptors.<a/>
> #### <a href="https://github.com/Morozzko/React_Blank_App/blob/master/apps/react_blank/src/utils/functions/thunkCreator/index.ts">5.2 Работа с AbortController.<a/>
> #### <a href="https://github.com/Morozzko/React_Blank_App/blob/master/apps/react_blank/src/app/api/RTK.ts">5.3 Custom Query с использованием Axios Instance для RTK Query.<a/>


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
