import{j as t}from"../vendor/react-KwYbH8cK.js";import{i as r,e as o}from"../shared-u2vI9lnt.js";import{C as i,g as n}from"../modules/courses-6dZYOJx4.js";import"../index-DSsD3qyv.js";import"../vendor/routing-Cqygv9cq.js";import"../vendor/libs-5-INbZ1m.js";import"../modules/articles-DXaZjhvE.js";import"../modules/projects-BGOCkGn9.js";import"../core-Do7H_sW0.js";async function j({params:e}){const s=await n(e.slug);if(!s)throw new Response(null,{status:404,statusText:"Nie znaleziono"});return s}function f(){const e=r();return t.jsxs(t.Fragment,{children:[t.jsx(o,{title:e.title,description:e.description,keywords:e.keywords}),t.jsxs("header",{className:"prose container",children:[t.jsx("h1",{children:e.title}),t.jsx(i,{categories:e.categories})]}),t.jsx("article",{className:"prose container",dangerouslySetInnerHTML:{__html:e.content}})]})}export{f as default,j as loader};