**Обычный тег <script>:** Это самый простой и традиционный способ. Когда браузер встречает тег <script> в HTML, он загружает и выполняет скрипт. Если скрипт расположен в теге <head>, то он будет загружен и выполнен до того, как браузер начнет отрисовку страницы. Если скрипт расположен в теге <body>, то он будет загружен и выполнен в момент, когда браузер достигнет его во время парсинга HTML.

**Асинхронная загрузка (async):** Если добавить атрибут async к тегу <script>, браузер будет загружать скрипт асинхронно, то есть он не будет блокировать парсинг HTML. Когда скрипт будет загружен, выполнение HTML-парсинга приостановится, пока скрипт не будет выполнен.

**Отложенная загрузка (defer):** Если добавить атрибут defer к тегу <script>, браузер также будет загружать скрипт асинхронно, но он будет выполнен только после того, как HTML будет полностью распарсен. Это полезно для скриптов, которые зависят от DOM, но не должны блокировать отображение страницы.