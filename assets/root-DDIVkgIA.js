import{w as a,M as c,L as o,S as n,p as i,O as p}from"./chunk-B7RQU5TL-Cw5bboSL.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{a as m}from"./index-CG6j60O2.js";const t="/assets/styles-CGk-KBma.css";function d(s){return s.trim().replace(/\s{2,}/g," ").replace(/(\r\n|\n|\r)/g,"").replace(/\s*=\s*/g,"=").replace(/\s*\{\s*/g,"{").replace(/\s*\}\s*/g,"}").replace(/\s*\|\|\s*/g,"||").replace(/\s*\?\s*/g,"?").replace(/\s*:\s*/g,":").replace(/\s*;\s*/g,";").replace(/\s*===\s*/g,"===").replace(/\)\s*/g,")").replace(/\s*\(/g,"(")}function r(s){return e.jsx("script",{dangerouslySetInnerHTML:{__html:d(s.code)}})}function f(s){return m.preloadModule(s.src,s.options),e.jsx("script",{type:"module",src:s.src})}function x({children:s}){return e.jsxs("html",{lang:"pl",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx("link",{rel:"icon",href:"/favicon.svg",sizes:"any",type:"image/svg+xml"}),e.jsx("link",{rel:"preload",as:"style",href:t}),e.jsx("link",{rel:"stylesheet",href:t}),e.jsx("link",{rel:"preload prefetch",href:"/static/fonts/geist.ttf",as:"font",type:"font/ttf",crossOrigin:"anonymous"}),e.jsx(r,{code:`globalThis.timestamp = ${1758267344383}`}),e.jsx(r,{code:`
            let k = "theme";
            let t = "dark";
            let s = localStorage;
            let c = document.documentElement.classList;
            let v = s.getItem(k);
            if (v === null || v === "SYSTEM") 
              matchMedia("(prefers-color-scheme: dark)").matches
                ? c.add(t)
                : c.remove(t);
            else if (v === "DARK") c.add(t);
            else if (v === "LIGHT") c.remove(t);
            else s.removeItem(k);
          `}),e.jsx(f,{src:"/fetch.js"}),e.jsx(c,{}),e.jsx(o,{})]}),e.jsxs("body",{style:{WebkitTapHighlightColor:"transparent"},children:[s,e.jsx(n,{getKey:l=>Object.values(l).filter(Boolean).join(".")}),e.jsx(i,{})]})]})}const u=a(function(){return e.jsx(p,{})});export{x as Layout,u as default};
