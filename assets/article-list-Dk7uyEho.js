import{e as s,j as e,f as i}from"./index-BhFGxWmI.js";import{d as c}from"./button-CnGiB9lX.js";import{c as n}from"./string-BZnAEtKi.js";import{a as l,b as m,g as y}from"./articles-8MfEST4K.js";import{C as p}from"./categories-BaiYBVGc.js";import{A as u}from"./articles-BLuSUZOl.js";import"./fetch-LTvvc2Xg.js";import"./link-with-prefetch-CFML5na8.js";import"./date-BfXueLdd.js";async function z({params:o,request:r}){const t=o.category,a=await l(r);if(t){if(!a.includes(t))throw new Response(null,{status:404,statusText:"Nie znaleziono"});return i({articles:await m(r,t),categories:a,category:t})}return i({articles:await y(r),categories:a,category:t})}function b(){const{articles:o,categories:r,category:t}=s(),a=t?n(t):void 0;return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:a?`Artykuły / ${a}`:"Artykuły",description:"Zbiór artykułów o frontendzie, obejmujących tematy takie jak HTML, CSS, JavaScript i frameworki. Odkrywaj nowości i najlepsze praktyki w tworzeniu stron oraz aplikacji internetowych."}),e.jsxs("header",{className:"prose container",children:[e.jsx("h1",{children:a??"Artykuły"}),e.jsx(p,{showAllCategory:!0,categories:r})]}),e.jsx(u,{articles:o,locationState:{pathname:t?`/blog/kategorie/${t}`:"/blog",label:"Powrót do listy artykułów"}})]})}export{b as default,z as loader};
