import{j as t}from"../vendor/react-BpTz6Pah.js";import{f as o,i as s,d as c,h as n,n as l}from"../shared-CEE3kyka.js";import{C as m,A as p,a as d,b as y,c as j}from"../modules/articles-Nklo1sx3.js";import"../index-COhRXcek.js";import"../vendor/routing-f0kELty9.js";import"../vendor/libs-CzKGx2XM.js";import"../modules/courses-BKNdViV9.js";import"../modules/projects-VzTxlLKn.js";import"../core-B_B1_SJC.js";const z=n(async({params:a})=>{const r=a.category,e=await d();if(r){if(!e.includes(r))throw l();return{articles:await y(r),categories:e,category:r}}return{articles:await j(),categories:e}});function L(){const{articles:a,categories:r,category:e}=o(),i=s(e??"Artykuły");return t.jsxs(t.Fragment,{children:[t.jsx(c,{title:i,description:"Zbiór artykułów o frontendzie, obejmujących tematy takie jak HTML, CSS, JavaScript i frameworki. Odkrywaj nowości i najlepsze praktyki w tworzeniu stron oraz aplikacji internetowych."}),t.jsxs("header",{className:"prose container",children:[t.jsx("h1",{children:i}),t.jsx(m,{showAllCategory:!0,categories:r})]}),t.jsx(p,{articles:a})]})}export{L as default,z as loader};