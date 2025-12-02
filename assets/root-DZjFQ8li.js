import{I as e,a as t,c as n,d as r,f as i,o as a}from"./chunk-4WY6JWTD-Dl-7X7EE.js";import{t as o}from"./jsx-runtime-BgpLoS8-.js";import{a as s,s as c}from"./src-FAX0eCHP.js";var l=`/assets/styles-C3EcCLtJ.css`,u=o();function d({children:e}){return(0,u.jsxs)(`html`,{lang:`pl`,"data-timestamp":1764700053179,children:[(0,u.jsxs)(`head`,{children:[(0,u.jsx)(`meta`,{charSet:`utf-8`}),(0,u.jsx)(`meta`,{name:`viewport`,content:`width=device-width, initial-scale=1`}),(0,u.jsx)(`link`,{rel:`icon`,href:`/favicon.svg`,sizes:`any`,type:`image/svg+xml`}),(0,u.jsx)(`link`,{rel:`preload`,as:`style`,href:l}),(0,u.jsx)(`link`,{rel:`stylesheet`,href:l}),(0,u.jsx)(`link`,{rel:`preload prefetch`,href:`/fonts/geist.ttf`,as:`font`,type:`font/ttf`,crossOrigin:`anonymous`}),(0,u.jsx)(c,{code:`
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
          `}),(0,u.jsx)(s,{src:`/fetch.js`}),(0,u.jsx)(a,{}),(0,u.jsx)(t,{})]}),(0,u.jsxs)(`body`,{style:{WebkitTapHighlightColor:`transparent`},children:[e,(0,u.jsx)(i,{getKey:e=>Object.values(e).filter(Boolean).join(`.`)}),(0,u.jsx)(r,{})]})]})}var f=e(function(){return(0,u.jsx)(n,{})});export{d as Layout,f as default};