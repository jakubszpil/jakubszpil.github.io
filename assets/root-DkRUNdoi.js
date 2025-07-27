import{w as n,M as o,L as a,S as i,p as c,O as l}from"./chunk-EF7DTUVF-Beg5q4Vi.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";function s(t){return t.trim().replace(/  +/g,"").replace(/(\r\n|\n|\r)/gm,"")}function d({children:t}){return e.jsxs("html",{lang:"pl",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx("link",{rel:"icon",href:"/favicon.svg",sizes:"any",type:"image/svg+xml"}),e.jsx("link",{rel:"preload prefetch",href:"/static/fonts/geist.ttf",as:"font",type:"font/ttf",crossOrigin:"anonymous"}),e.jsx("link",{rel:"modulepreload",href:"/fetch.js"}),e.jsx("script",{dangerouslySetInnerHTML:{__html:s(`
              const K = "theme";
              const D = "dark";

              const l = localStorage;
              const c = document.documentElement.classList;
              const t = l.getItem(K);

              if (t === "DARK") c.add(D);
              else if (t === "LIGHT") c.remove(D);
              else if (!t || t === "SYSTEM") {
                const { matches } = window.matchMedia("(prefers-color-scheme: dark)");
                matches ? c.add(D) : c.remove(D); 
              } else l.removeItem(K);
          `)}}),e.jsx("script",{dangerouslySetInnerHTML:{__html:s(`globalThis.timestamp = ${1753647095895}`)}}),e.jsx("script",{type:"module",src:"/fetch.js"}),e.jsx(o,{}),e.jsx(a,{})]}),e.jsxs("body",{style:{WebkitTapHighlightColor:"transparent"},children:[t,e.jsx(i,{getKey:r=>Object.values(r).filter(Boolean).join(".")}),e.jsx(c,{})]})]})}const h=n(function(){return e.jsx(l,{})});export{d as Layout,h as default};
