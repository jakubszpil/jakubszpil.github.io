import{w as s,M as a,L as n,S as o,p as c,O as i}from"./chunk-EF7DTUVF-Beg5q4Vi.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";function l(t){return t.trim().replace(/  +/g,"").replace(/(\r\n|\n|\r)/gm,"").replaceAll(" = ","=").replaceAll(" { ","{").replaceAll(" } ","}").replaceAll(" || ","||").replaceAll(" ? ","?").replaceAll(" : ",":").replaceAll(" === ","===").replaceAll(") ",")").replaceAll(" (","(")}function f({children:t}){return e.jsxs("html",{lang:"pl",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx("link",{rel:"icon",href:"/favicon.svg",sizes:"any",type:"image/svg+xml"}),e.jsx("link",{rel:"preload prefetch",href:"/static/fonts/geist.ttf",as:"font",type:"font/ttf",crossOrigin:"anonymous"}),e.jsx("link",{rel:"modulepreload",href:"/fetch.js"}),e.jsx("script",{dangerouslySetInnerHTML:{__html:l(`
              {
                let K = "theme";
                let D = "dark";

                let l = localStorage;
                let c = document.documentElement.classList;
                let t = l.getItem(K);

                if (t === "DARK") c.add(D);
                else if (t === "LIGHT") c.remove(D);
                else if (!t || t === "SYSTEM") matchMedia(\`(prefers-color-scheme: \${D})\`) ? c.add(D) : c.remove(D);
                else l.removeItem(K);
              }
          `)}}),e.jsx("script",{dangerouslySetInnerHTML:{__html:l(`globalThis.timestamp = ${1753728331528}`)}}),e.jsx("script",{type:"module",src:"/fetch.js"}),e.jsx(a,{}),e.jsx(n,{})]}),e.jsxs("body",{style:{WebkitTapHighlightColor:"transparent"},children:[t,e.jsx(o,{getKey:r=>Object.values(r).filter(Boolean).join(".")}),e.jsx(c,{})]})]})}const d=s(function(){return e.jsx(i,{})});export{f as Layout,d as default};
