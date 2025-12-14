import{B as e,I as t,a as n,c as r,d as i,f as a,o}from"./chunk-WWGJGFF6-54t5r2mJ.js";import{t as s}from"./jsx-runtime-Dxk_9Fs5.js";import{a as c,s as l}from"./src-BaSMoaNw.js";var u=`/assets/styles-C3EcCLtJ.css`,d=e(s(),1);function f({children:e}){return(0,d.jsxs)(`html`,{lang:`pl`,"data-timestamp":1765713265859,children:[(0,d.jsxs)(`head`,{children:[(0,d.jsx)(`meta`,{charSet:`utf-8`}),(0,d.jsx)(`meta`,{name:`viewport`,content:`width=device-width, initial-scale=1`}),(0,d.jsx)(`link`,{rel:`icon`,href:`/favicon.svg`,sizes:`any`,type:`image/svg+xml`}),(0,d.jsx)(`link`,{rel:`preload`,as:`style`,href:u}),(0,d.jsx)(`link`,{rel:`stylesheet`,href:u}),(0,d.jsx)(`link`,{rel:`preload prefetch`,href:`/fonts/geist.ttf`,as:`font`,type:`font/ttf`,crossOrigin:`anonymous`}),(0,d.jsx)(l,{code:`
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
          `}),(0,d.jsx)(c,{src:`/fetch.js`}),(0,d.jsx)(o,{}),(0,d.jsx)(n,{})]}),(0,d.jsxs)(`body`,{style:{WebkitTapHighlightColor:`transparent`},children:[e,(0,d.jsx)(a,{getKey:e=>Object.values(e).filter(Boolean).join(`.`)}),(0,d.jsx)(i,{})]})]})}var p=t(function(){return(0,d.jsx)(r,{})});export{f as Layout,p as default};