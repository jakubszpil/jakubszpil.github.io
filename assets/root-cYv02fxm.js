import{B as e,I as t,a as n,c as r,d as i,f as a,o}from"./chunk-UIGDSWPH-DHsZB6vt.js";import{t as s}from"./react-dom-CERVzPIw.js";import{t as c}from"./jsx-runtime-D7G0p6rK.js";var l=`/assets/styles-CAQXHuPR.css`;function u(e){return e.trim().replace(/\s{2,}/g,` `).replace(/(\r\n|\n|\r)/g,``).replace(/\s*=\s*/g,`=`).replace(/\s*\{\s*/g,`{`).replace(/\s*\}\s*/g,`}`).replace(/\s*\|\|\s*/g,`||`).replace(/\s*\?\s*/g,`?`).replace(/\s*:\s*/g,`:`).replace(/\s*;\s*/g,`;`).replace(/\s*===\s*/g,`===`).replace(/\)\s*/g,`)`).replace(/\s*\(/g,`(`)}var d=e(c());function f(e){return(0,d.jsx)(`script`,{dangerouslySetInnerHTML:{__html:u(e.code)}})}var p=e(s());function m(e){return(0,p.preloadModule)(e.src,e.options),(0,d.jsx)(`script`,{type:`module`,src:e.src})}function h({children:e}){return(0,d.jsxs)(`html`,{lang:`pl`,children:[(0,d.jsxs)(`head`,{children:[(0,d.jsx)(`meta`,{charSet:`utf-8`}),(0,d.jsx)(`meta`,{name:`viewport`,content:`width=device-width, initial-scale=1`}),(0,d.jsx)(`link`,{rel:`icon`,href:`/favicon.svg`,sizes:`any`,type:`image/svg+xml`}),(0,d.jsx)(`link`,{rel:`preload`,as:`style`,href:l}),(0,d.jsx)(`link`,{rel:`stylesheet`,href:l}),(0,d.jsx)(`link`,{rel:`preload prefetch`,href:`/fonts/geist.ttf`,as:`font`,type:`font/ttf`,crossOrigin:`anonymous`}),(0,d.jsx)(f,{code:`globalThis.timestamp = 1762779441111`}),(0,d.jsx)(f,{code:`
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
          `}),(0,d.jsx)(m,{src:`/fetch.js`}),(0,d.jsx)(o,{}),(0,d.jsx)(n,{})]}),(0,d.jsxs)(`body`,{style:{WebkitTapHighlightColor:`transparent`},children:[e,(0,d.jsx)(a,{getKey:e=>Object.values(e).filter(Boolean).join(`.`)}),(0,d.jsx)(i,{})]})]})}var g=t(function(){return(0,d.jsx)(r,{})});export{h as Layout,g as default};