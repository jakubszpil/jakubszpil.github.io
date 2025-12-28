import{B as e,I as t,f as n,l as r,o as i,p as a,s as o}from"./chunk-JMJ3UQ3L-BvJNu3y5.js";import{t as s}from"./jsx-runtime-wtV8vj6d.js";import{a as c,s as l}from"./src-YQrh7BjR.js";import{n as u,t as d}from"./scroll-restoration-Cft_lHZX.js";var f=`/assets/styles-B8yUUhgr.css`,p=e(s(),1);function m({children:e}){return(0,p.jsxs)(`html`,{lang:`pl`,"data-timestamp":1766919203501,children:[(0,p.jsxs)(`head`,{children:[(0,p.jsx)(`meta`,{charSet:`utf-8`}),(0,p.jsx)(`meta`,{name:`viewport`,content:`width=device-width, initial-scale=1`}),(0,p.jsx)(`link`,{rel:`icon`,href:`/favicon.svg`,sizes:`any`,type:`image/svg+xml`}),(0,p.jsx)(`link`,{rel:`preload`,as:`style`,href:f}),(0,p.jsx)(`link`,{rel:`stylesheet`,href:f}),(0,p.jsx)(`link`,{rel:`preload prefetch`,href:`/fonts/geist.ttf`,as:`font`,type:`font/ttf`,crossOrigin:`anonymous`}),(0,p.jsx)(l,{code:`
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
          `}),(0,p.jsx)(c,{src:`/fetch.js`}),(0,p.jsx)(o,{}),(0,p.jsx)(i,{})]}),(0,p.jsxs)(`body`,{style:{WebkitTapHighlightColor:`transparent`},children:[e,(0,p.jsx)(a,{getKey:d,storageKey:u()}),(0,p.jsx)(n,{})]})]})}var h=t(function(){return(0,p.jsx)(r,{})});export{m as Layout,h as default};