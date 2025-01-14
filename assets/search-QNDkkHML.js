import{w as d,S as h}from"./seo-CKrSCG3-.js";import{n as e,y as l,z as m,x as p,a as f,A as x}from"./chunk-K6AXKMTT-CzbRfI_4.js";import{A as y}from"./articles-TwmWE7mo.js";import{C as w}from"./courses-Cqit08aS.js";import{c as j,B as g}from"./button-BchY-9V6.js";import{I as k}from"./IconSearch-Drg7MNtE.js";import"./date-Id6XWU1s.js";const u=({className:a,type:r,ref:t,...s})=>e.jsx("input",{type:r,className:j("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",a),ref:t,...s});u.displayName="Input";const o=new Map;async function b(a,r){const s=new URL(a).pathname;if(o.has(s))return o.get(s);const n=await r();return o.set(s,n),o.get(s)}const z=a=>{try{return new URL(a),!0}catch{return!1}},i="query";function S(a,r){const t=s=>r?JSON.stringify(s).toLowerCase().includes(r.toLowerCase()):!1;return Object.fromEntries(Object.entries(a).map(([s,n])=>[s,n.filter(t)]))}function N(a){return Object.values(a).reduce((r,{length:t})=>r+t,0)}function v(a){const r=new URL(a),t=r.searchParams.get(i);if(t){if(t==="")throw r.searchParams.delete(i),l(r.toString());const s=t.trim().split(" ").filter(Boolean).join(" ");if(t!==s)throw s?r.searchParams.set(i,s):r.searchParams.delete(i),l(r.toString())}if(t&&z(t)){const s=new URL(a),n=new URL(t);if(s.origin===n.origin)throw l(m(n).replace("#/",""))}return t}async function L({request:a,serverLoader:r}){const t=await b(a.url,r),s=v(a.url),n=S(t,s),c=N(n);return{...n,resultsCount:c,query:s}}L.hydrate=!0;const B=d(function(){const{query:r,articles:t,courses:s,resultsCount:n}=p(),c=f.useCallback(()=>r?n===0?e.jsxs("h2",{children:["Brak wyników wyszukiwania dla zapytania: ",r]}):e.jsxs(e.Fragment,{children:[e.jsxs("h2",{children:["Wyniki wyszukiwania (",n,")"]}),t.length>0&&e.jsxs("section",{children:[e.jsxs("h3",{children:["Artykuły (",t.length,")"]}),e.jsx(y,{className:"px-0 !grid-cols-1",articles:t})]}),s.length>0&&e.jsxs("section",{children:[e.jsxs("h3",{children:["Kursy (",s.length,")"]}),e.jsx(w,{className:"px-0 !grid-cols-1",courses:s})]})]}):null,[t,s,r,n]);return e.jsxs("section",{className:"prose max-w-full",children:[e.jsx(h,{title:r?`(${n}) Rezultaty wyszukiwania dla ${r}`:"Szukaj"}),e.jsxs("header",{className:"container pb-0",children:[e.jsx("h1",{className:"mb-0",children:"Szukaj"}),e.jsx("p",{children:"Wskazówka: Obszary po których możesz szukać:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Artykuły: (tytuł, opis, słowa klucz, kategorie, zawartość)"}),e.jsx("li",{children:"Kursy: (tytuł, opis, słowa klucz, kategorie, zawartość)"}),e.jsx("li",{children:"Projekty: (tytuł, opis, słowa klucz, technologie, zawartość)"})]}),e.jsx("p",{children:"Możesz też wkleić skopiowany link aby spróbować przejść do wskazanej strony"})]}),e.jsxs(x,{preventScrollReset:!0,method:"get",className:"container py-0 bg-background flex gap-2",children:[e.jsx("div",{className:"flex-1 relative",children:e.jsx(u,{type:"text",name:i,placeholder:"Treść zapytania",defaultValue:r??"",required:!0},r)}),e.jsxs(g,{type:"submit",children:[e.jsx(k,{className:"h-5 w-5 mr-1"}),"Szukaj"]})]}),e.jsx("div",{className:"container pt-0",children:c()})]})});export{L as clientLoader,B as default};