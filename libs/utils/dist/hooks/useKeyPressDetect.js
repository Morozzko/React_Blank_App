import{useState as e,useEffect as n}from"react";var t=function(t){var o=e(!1),r=o[0],i=o[1],d=function(e){e.key===t&&i(!0)},w=function(e){e.key===t&&i(!1)};return n((function(){return window.addEventListener("keydown",d),window.addEventListener("keyup",w),function(){window.removeEventListener("keydown",d),window.removeEventListener("keyup",w)}}),[]),r};export{t as useKeyPressDetect};