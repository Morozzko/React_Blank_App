import{useEffect as t}from"react";var n=function(n,e){var o="object"==typeof n?"".concat(n.mfName,"-").concat(n.tag?"".concat(n.tag,"-"):"").concat(n.eventName):n,a=function(t){e(t.detail.data)};t((function(){return window.addEventListener(o,a),function(){window.removeEventListener(o,a)}}),[o,a])};export{n as useSubscribe};
