import{j as r}from"../react-vvBGimMH.js";import{S as o,C as n,A as c}from"../components-D0-JMKwm.js";import{d as l,e as y,j as s}from"../utils-BcD-Ro5x.js";import{g as u,a as j,b as m}from"./article-details-DY31pkui.js";import"../runtime-BVelM1Lx.js";import"../routing-CDreLu1L.js";async function x({params:i,request:a}){const t=i.category,e=await u(a);if(t){if(!e.includes(t))throw new Response(null,{status:404,statusText:"Nie znaleziono"});return s({articles:await j(a,t),categories:e,category:t})}return s({articles:await m(a),categories:e,category:t})}function A(){const{articles:i,categories:a,category:t}=l(),e=t?y(t):void 0;return r.jsxs(r.Fragment,{children:[r.jsx(o,{title:e?`Artykuły / ${e}`:"Artykuły",description:"Zbiór artykułów o frontendzie, obejmujących tematy takie jak HTML, CSS, JavaScript i frameworki. Odkrywaj nowości i najlepsze praktyki w tworzeniu stron oraz aplikacji internetowych."}),r.jsxs("header",{className:"prose container",children:[r.jsx("h1",{children:e??"Artykuły"}),r.jsx(n,{showAllCategory:!0,categories:a})]}),r.jsx(c,{articles:i})]})}export{A as default,x as loader};