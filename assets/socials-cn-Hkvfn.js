import{j as r}from"./index-NsJUTium.js";import{a as d}from"./seo-bCP9g-TW.js";import{B as l}from"./button-wTNYL8N3.js";const t=[];for(let n=0;n<256;++n)t.push((n+256).toString(16).slice(1));function u(n,e=0){return(t[n[e+0]]+t[n[e+1]]+t[n[e+2]]+t[n[e+3]]+"-"+t[n[e+4]]+t[n[e+5]]+"-"+t[n[e+6]]+t[n[e+7]]+"-"+t[n[e+8]]+t[n[e+9]]+"-"+t[n[e+10]]+t[n[e+11]]+t[n[e+12]]+t[n[e+13]]+t[n[e+14]]+t[n[e+15]]).toLowerCase()}let a;const c=new Uint8Array(16);function s(){if(!a){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");a=crypto.getRandomValues.bind(crypto)}return a(c)}const m=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),o={randomUUID:m};function p(n,e,y){if(o.randomUUID&&!e&&!n)return o.randomUUID();n=n||{};const i=n.random||(n.rng||s)();return i[6]=i[6]&15|64,i[8]=i[8]&63|128,u(i)}function b(n){return d.socials.map(e=>r.jsx(l,{asChild:!0,size:n.hideLabels?"icon":"sm",variant:n.variant??"ghost",className:"inline-flex items-center gap-1 no-underline",title:e.label,"aria-label":e.label,children:r.jsxs("a",{href:e.href,target:"_blank",rel:"noreferrer",children:[r.jsx(e.icon,{className:"h-6"}),r.jsx("span",{className:`${n.hideLabels?"sr-only":""}`,children:e.label})]})},p()))}export{b as S,p as v};
