import{useRef as r,useEffect as n}from"react";var t=function(t,c){var e=r(),u=r();n((function(){e.current=t}),[t]),n((function(){if(c||0===c)return u.current=setInterval((function(){e.current&&e.current()}),c),function(){clearInterval(u.current)}}),[c])};export{t as useInterval};
