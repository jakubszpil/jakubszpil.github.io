import{w as a}from"./with-props-CR25eUy2.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{M as o,L as n,S as c,o as i,O as l}from"./chunk-D4RADZKF-RZTUKYdk.js";function r(t){return t.trim().replace(/  +/g,"").replace(/(\r\n|\n|\r)/gm,"")}function p({children:t}){return e.jsxs("html",{lang:"pl",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx("link",{rel:"icon",href:"/favicon.svg",sizes:"any",type:"image/svg+xml"}),e.jsx("link",{rel:"preload prefetch",href:"/static/fonts/geist.ttf",as:"font",type:"font/ttf",crossOrigin:"anonymous"}),e.jsx("script",{children:r(`
            const theme = localStorage.getItem("theme");

            switch (theme) {
              case "DARK": {
                document.documentElement.classList.add("dark");
                break;
              }

              case "LIGHT": {
                document.documentElement.classList.remove("dark");
                break;
              }

              case "SYSTEM":
              case null: {
                const { matches } = window.matchMedia("(prefers-color-scheme: dark)");

                if (matches) {
                  document.documentElement.classList.add("dark");
                } else {
                  document.documentElement.classList.remove("dark");
                }
                  
                break;
              }

              default: {
                localStorage.removeItem("theme");
              }
            }
          `)}),e.jsx("script",{children:r(`globalThis.timestamp = ${1747243119943}`)}),e.jsx("script",{type:"module",src:"/fetch.js"}),e.jsx(o,{}),e.jsx(n,{})]}),e.jsxs("body",{style:{WebkitTapHighlightColor:"transparent"},children:[t,e.jsx(c,{getKey:s=>Object.values(s).filter(Boolean).join(".")}),e.jsx(i,{})]})]})}const u=a(function(){return e.jsx(l,{})});export{p as Layout,u as default};
