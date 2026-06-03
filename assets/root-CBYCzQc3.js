import{F as e,a as t,c as n,d as r,f as i,o as a,z as o}from"./chunk-QUQL4437-BYFpnalZ.js";import{t as s}from"./react-dom-CY-oUBiG.js";import{t as c}from"./jsx-runtime-Blz5Xj2L.js";import{n as l,t as u}from"./scroll-restoration-HvJSoSmI.js";var d=`/assets/styles-Ww_NmKB-.css`;function f(e){return e.trim().replace(/\s{2,}/g,` `).replace(/(\r\n|\n|\r)/g,``).replace(/\s*=\s*/g,`=`).replace(/\s*\{\s*/g,`{`).replace(/\s*\}\s*/g,`}`).replace(/\s*\|\|\s*/g,`||`).replace(/\s*\?\s*/g,`?`).replace(/\s*:\s*/g,`:`).replace(/\s*;\s*/g,`;`).replace(/\s*===\s*/g,`===`).replace(/\)\s*/g,`)`).replace(/\s*\(/g,`(`)}var p=c();function m({code:e}){return(0,p.jsx)(`script`,{dangerouslySetInnerHTML:{__html:f(e)}})}var h=o(s(),1);function g({src:e,options:t}){return(0,h.preloadModule)(e,t),(0,p.jsx)(`script`,{type:`module`,src:e})}function _({children:e}){return(0,p.jsxs)(`html`,{lang:`pl`,"data-timestamp":1780500779629,children:[(0,p.jsxs)(`head`,{children:[(0,p.jsx)(`meta`,{charSet:`utf-8`}),(0,p.jsx)(`meta`,{name:`viewport`,content:`width=device-width, initial-scale=1`}),(0,p.jsx)(`link`,{rel:`icon`,href:`/favicon.svg`,sizes:`any`,type:`image/svg+xml`}),(0,p.jsx)(`link`,{rel:`preload`,as:`style`,href:d}),(0,p.jsx)(`link`,{rel:`stylesheet`,href:d}),(0,p.jsx)(`link`,{rel:`preload prefetch`,href:`/fonts/geist.ttf`,as:`font`,type:`font/ttf`,crossOrigin:`anonymous`}),(0,p.jsx)(`link`,{rel:`preload prefetch`,href:`/fonts/geist-mono.ttf`,as:`font`,type:`font/ttf`,crossOrigin:`anonymous`}),(0,p.jsx)(m,{code:`
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
          `}),(0,p.jsx)(g,{src:`/fetch.js`}),(0,p.jsx)(a,{}),(0,p.jsx)(t,{})]}),(0,p.jsxs)(`body`,{children:[e,(0,p.jsx)(i,{getKey:u,storageKey:l()}),(0,p.jsx)(r,{})]})]})}var v=e(function(){return(0,p.jsx)(n,{})});export{_ as Layout,v as default};