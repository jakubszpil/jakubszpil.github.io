import{B as e,I as t,f as n,l as r,o as i,p as a,s as o}from"./chunk-JZWAC4HX-D-dLUVoh.js";import{t as s}from"./react-dom-Dckev146.js";import{t as c}from"./jsx-runtime-pMAAsl3t.js";import{n as l,t as u}from"./scroll-restoration-Cft_lHZX.js";var d=`/assets/styles-C_SqlH51.css`;function f(e){return e.trim().replace(/\s{2,}/g,` `).replace(/(\r\n|\n|\r)/g,``).replace(/\s*=\s*/g,`=`).replace(/\s*\{\s*/g,`{`).replace(/\s*\}\s*/g,`}`).replace(/\s*\|\|\s*/g,`||`).replace(/\s*\?\s*/g,`?`).replace(/\s*:\s*/g,`:`).replace(/\s*;\s*/g,`;`).replace(/\s*===\s*/g,`===`).replace(/\)\s*/g,`)`).replace(/\s*\(/g,`(`)}var p=e(c(),1);function m({code:e}){return(0,p.jsx)(`script`,{dangerouslySetInnerHTML:{__html:f(e)}})}var h=s();function g({src:e,options:t}){return(0,h.preloadModule)(e,t),(0,p.jsx)(`script`,{type:`module`,src:e})}function _({children:e}){return(0,p.jsxs)(`html`,{lang:`pl`,"data-timestamp":1769769779749,children:[(0,p.jsxs)(`head`,{children:[(0,p.jsx)(`meta`,{charSet:`utf-8`}),(0,p.jsx)(`meta`,{name:`viewport`,content:`width=device-width, initial-scale=1`}),(0,p.jsx)(`link`,{rel:`icon`,href:`/favicon.svg`,sizes:`any`,type:`image/svg+xml`}),(0,p.jsx)(`link`,{rel:`preload`,as:`style`,href:d}),(0,p.jsx)(`link`,{rel:`stylesheet`,href:d}),(0,p.jsx)(`link`,{rel:`preload prefetch`,href:`/fonts/geist.ttf`,as:`font`,type:`font/ttf`,crossOrigin:`anonymous`}),(0,p.jsx)(m,{code:`
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
          `}),(0,p.jsx)(g,{src:`/fetch.js`}),(0,p.jsx)(o,{}),(0,p.jsx)(i,{})]}),(0,p.jsxs)(`body`,{style:{WebkitTapHighlightColor:`transparent`},children:[e,(0,p.jsx)(a,{getKey:u,storageKey:l()}),(0,p.jsx)(n,{})]})]})}var v=t(function(){return(0,p.jsx)(r,{})});export{_ as Layout,v as default};