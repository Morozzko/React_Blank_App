"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("fs"),r=require("path");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=t(e),n=t(r),u=process.cwd(),c=".config.locale.js",i=n.default.join(u,c);exports.getConfig=function(){if(o.default.existsSync(i))return require(i);console.error("Конфигурационный файл ".concat(c," не найден!"))};