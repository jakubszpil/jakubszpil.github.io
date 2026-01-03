import{H as e,L as t,c as n,m as r,p as i,s as a,t as o,u as s}from"./jsx-runtime-C_PgplXg.js";import{c,o as l}from"./src-QA8DG-eg.js";import{n as u,t as d}from"./scroll-restoration-qMssALf9.js";var f=`/assets/styles-B8yUUhgr.css`,p=e(o(),1);function m({children:e}){return(0,p.jsxs)(`html`,{lang:`pl`,"data-timestamp":1767456329733,children:[(0,p.jsxs)(`head`,{children:[(0,p.jsx)(`meta`,{charSet:`utf-8`}),(0,p.jsx)(`meta`,{name:`viewport`,content:`width=device-width, initial-scale=1`}),(0,p.jsx)(`link`,{rel:`icon`,href:`/favicon.svg`,sizes:`any`,type:`image/svg+xml`}),(0,p.jsx)(`link`,{rel:`preload`,as:`style`,href:f}),(0,p.jsx)(`link`,{rel:`stylesheet`,href:f}),(0,p.jsx)(`link`,{rel:`preload prefetch`,href:`/fonts/geist.ttf`,as:`font`,type:`font/ttf`,crossOrigin:`anonymous`}),(0,p.jsx)(c,{code:`
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
          `}),(0,p.jsx)(l,{src:`/fetch.js`}),(0,p.jsx)(n,{}),(0,p.jsx)(a,{})]}),(0,p.jsxs)(`body`,{style:{WebkitTapHighlightColor:`transparent`},children:[e,(0,p.jsx)(r,{getKey:d,storageKey:u()}),(0,p.jsx)(i,{})]})]})}var h=t(function(){return(0,p.jsx)(s,{})});export{m as Layout,h as default};