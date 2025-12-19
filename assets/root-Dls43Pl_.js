import{F as e,a as t,c as n,d as r,f as i,o as a,z as o}from"./chunk-JMJ3UQ3L-dDUQdLOL.js";import{t as s}from"./jsx-runtime-D2tNQFW-.js";import{a as c,s as l}from"./src-j7j9j4Lx.js";var u=`/assets/styles-B8yUUhgr.css`,d=o(s(),1);function f({children:e}){return(0,d.jsxs)(`html`,{lang:`pl`,"data-timestamp":1766168803855,children:[(0,d.jsxs)(`head`,{children:[(0,d.jsx)(`meta`,{charSet:`utf-8`}),(0,d.jsx)(`meta`,{name:`viewport`,content:`width=device-width, initial-scale=1`}),(0,d.jsx)(`link`,{rel:`icon`,href:`/favicon.svg`,sizes:`any`,type:`image/svg+xml`}),(0,d.jsx)(`link`,{rel:`preload`,as:`style`,href:u}),(0,d.jsx)(`link`,{rel:`stylesheet`,href:u}),(0,d.jsx)(`link`,{rel:`preload prefetch`,href:`/fonts/geist.ttf`,as:`font`,type:`font/ttf`,crossOrigin:`anonymous`}),(0,d.jsx)(l,{code:`
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
          `}),(0,d.jsx)(c,{src:`/fetch.js`}),(0,d.jsx)(a,{}),(0,d.jsx)(t,{})]}),(0,d.jsxs)(`body`,{style:{WebkitTapHighlightColor:`transparent`},children:[e,(0,d.jsx)(i,{getKey:e=>Object.values(e).filter(Boolean).join(`.`)}),(0,d.jsx)(r,{})]})]})}var p=e(function(){return(0,d.jsx)(n,{})});export{f as Layout,p as default};