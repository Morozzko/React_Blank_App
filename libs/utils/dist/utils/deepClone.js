var r=function(n){var t={};for(var a in n)n[a]instanceof Object?t[a]=r(n[a]):t[a]=n[a];return t};export{r as deepClone};
