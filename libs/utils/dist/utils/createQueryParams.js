var n=function(n){return Object.entries(n).map((function(n){var e=n[0],o=n[1];if(Array.isArray(o)){var t=o.filter((function(n){return null!=n}));return"".concat(encodeURIComponent(e),"=").concat(encodeURIComponent(t.join(",")))}return null==o?"":"".concat(encodeURIComponent(e),"=").concat(encodeURIComponent(o))})).filter((function(n){return""!==n})).join("&")};export{n as createQueryParams};