import{w as r,M as a,L as c,S as n,p as o,O as i}from"./chunk-EF7DTUVF-Beg5q4Vi.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";function l(t){return t.trim().replace(/  +/g,"").replace(/(\r\n|\n|\r)/gm,"").replaceAll(" = ","=").replaceAll(" { ","{").replaceAll(" } ","}").replaceAll(" || ","||").replaceAll(" ? ","?").replaceAll(" : ",":").replaceAll(" === ","===").replaceAll(") ",")").replaceAll(" (","(")}function f({children:t}){return e.jsxs("html",{lang:"pl",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx("link",{rel:"icon",href:"/favicon.svg",sizes:"any",type:"image/svg+xml"}),e.jsx("link",{rel:"preload prefetch",href:"/static/fonts/geist.ttf",as:"font",type:"font/ttf",crossOrigin:"anonymous"}),e.jsx("link",{rel:"modulepreload",href:"/fetch.js"}),e.jsx("script",{dangerouslySetInnerHTML:{__html:l(`
              {
                let k = "theme";
                let t = "dark";
                let s = localStorage;
                let v = s.getItem(k);
                let c = document.documentElement.classList;

                if (v === "DARK") c.add(t);
                else if (v === "LIGHT") c.remove(t);
                else if (!v || v === "SYSTEM") matchMedia(\`(prefers-color-scheme: \${t})\`).matches ? c.add(t) : c.remove(t);
                else s.removeItem(k);
              }
          `)}}),e.jsx("script",{dangerouslySetInnerHTML:{__html:l(`globalThis.timestamp = ${1754324838357}`)}}),e.jsx("script",{type:"module",src:"/fetch.js"}),e.jsx(a,{}),e.jsx(c,{})]}),e.jsxs("body",{style:{WebkitTapHighlightColor:"transparent"},children:[t,e.jsx(n,{getKey:s=>Object.values(s).filter(Boolean).join(".")}),e.jsx(o,{})]})]})}const h=r(function(){return e.jsx(i,{})});export{f as Layout,h as default};
