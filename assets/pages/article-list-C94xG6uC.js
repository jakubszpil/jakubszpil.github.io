import{j as t}from"../vendor/react-D-qdk-9g.js";import{f as o,i as s,b as c,h as n,n as l}from"../shared-k2fhiepv.js";import{C as m,A as p,a as y,b as d,c as j}from"../modules/articles-uRjfQdg0.js";import"../index-BD_GxyCz.js";import"../vendor/routing-CqRI7XUL.js";import"../vendor/libs-DCiq-c8P.js";import"../modules/courses-DU3-seI7.js";import"../modules/projects-C10mSicw.js";import"../core-BnLcCy34.js";const z=n(async({params:a})=>{const r=a.category,e=await y();if(r){if(!e.includes(r))throw l();return{articles:await d(r),categories:e,category:r}}return{articles:await j(),categories:e}});function b(){const{articles:a,categories:r,category:e}=o(),i=s(e??"Artykuły");return t.jsxs(t.Fragment,{children:[t.jsx(c,{title:i,description:"Zbiór artykułów o frontendzie, obejmujących tematy takie jak HTML, CSS, JavaScript i frameworki. Odkrywaj nowości i najlepsze praktyki w tworzeniu stron oraz aplikacji internetowych."}),t.jsxs("header",{className:"prose container",children:[t.jsx("h1",{children:i}),t.jsx(m,{showAllCategory:!0,categories:r})]}),t.jsx(p,{articles:a})]})}export{b as default,z as loader};
