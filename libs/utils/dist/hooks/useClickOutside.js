import{useCallback as n,useEffect as t}from"react";var e=function(e,o){var r=n((function(n){var t;(null==e?void 0:e.current)&&!(null===(t=e.current)||void 0===t?void 0:t.contains(n.target))&&o(n)}),[null==e?void 0:e.current,o]);t((function(){return document.addEventListener("mousedown",r),function(){document.removeEventListener("mousedown",r)}}),[r])};export{e as useClickOutside};