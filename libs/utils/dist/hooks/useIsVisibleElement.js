import{useState as r,useEffect as n}from"react";var e=function(e,t){void 0===t&&(t=0);var o=r(!1),c=o[0],u=o[1];return n((function(){var r=new IntersectionObserver((function(r){var n=r[0];u(n.isIntersecting)}),{rootMargin:"".concat(t,"px")});return e.current&&r.observe(e.current),function(){e.current&&r.unobserve(e.current)}}),[]),c};export{e as useIsVisibleElement};
