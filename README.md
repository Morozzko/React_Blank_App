# Навигация по репозиторию

> ### 1. Архитектура
> #### <a hrer="https://github.com/Morozzko/React_Blank_App/tree/master/apps/react_blank">1.1 Пример архитектуры на React.js.<a/>
> #### <a hrer="https://github.com/Morozzko/React_Blank_App/tree/master/packages/create-by-template">1.2 Генерация шаблонов под архитектуру.<a/>

> ### 2. Вспомогательные библиотеки
> #### <a hrer="https://github.com/Morozzko/React_Blank_App/tree/master/packages/utils">2.1 Хуки и полезные функции.<a/>
> #### <a hrer="https://github.com/Morozzko/React_Blank_App/tree/master/packages/types">2.2 Типы для быстрого написания кода.<a/>
> #### <a hrer="https://github.com/Morozzko/React_Blank_App/tree/master/packages/eslint-config-npmpiece">2.3 ES-Lint config.<a/>
> #### <a hrer="https://github.com/Morozzko/React_Blank_App/tree/master/packages/tailwind-config">2.4 Tailwind config.<a/>

> ### 3. Генерация
> #### <a hrer="https://github.com/Morozzko/React_Blank_App/tree/master/packages/generate-hooks-rtk">3.1 Генерация хуков для ReduxToolkit Query с авто-инъекцией в store.<a/>
> #### <a hrer="https://github.com/Morozzko/React_Blank_App/tree/master/packages/download-locale">3.2 Загрузка переводов из гугл таблицы.<a/>

> ### 4. Структуры, Алгоритмы, Паттерны
> #### <a hrer="https://github.com/Morozzko/React_Blank_App/tree/master/apps/algorithms/src/structures">4.1 Структуры данных.<a/>


# Оркестровка репозиторием
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
