import{j as r}from"../react-vvBGimMH.js";import{g as o,a as n,b as c}from"./article-details-rZAUA8-p.js";import{S as l,C as y,A as u}from"../components-Lf0NVCX9.js";import{d as j,e as m,j as s}from"../utils-BZMZnvBm.js";import"../runtime-Fe8qnWBl.js";import"../routing-CDreLu1L.js";async function x({params:i,request:a}){const t=i.category,e=await o(a);if(t){if(!e.includes(t))throw new Response(null,{status:404,statusText:"Nie znaleziono"});return s({articles:await n(a,t),categories:e,category:t})}return s({articles:await c(a),categories:e,category:t})}function A(){const{articles:i,categories:a,category:t}=j(),e=t?m(t):void 0;return r.jsxs(r.Fragment,{children:[r.jsx(l,{title:e?`Artykuły / ${e}`:"Artykuły",description:"Zbiór artykułów o frontendzie, obejmujących tematy takie jak HTML, CSS, JavaScript i frameworki. Odkrywaj nowości i najlepsze praktyki w tworzeniu stron oraz aplikacji internetowych."}),r.jsxs("header",{className:"prose container",children:[r.jsx("h1",{children:e??"Artykuły"}),r.jsx(y,{showAllCategory:!0,categories:a})]}),r.jsx(u,{articles:i})]})}export{A as default,x as loader};
