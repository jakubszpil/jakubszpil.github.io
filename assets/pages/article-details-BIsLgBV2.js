import{j as t}from"../vendor/react-KwYbH8cK.js";import{i as s,e as i}from"../shared-u2vI9lnt.js";import{C as o,g as a}from"../modules/articles-DXaZjhvE.js";import"../index-DSsD3qyv.js";import"../vendor/routing-Cqygv9cq.js";import"../vendor/libs-5-INbZ1m.js";import"../modules/courses-6dZYOJx4.js";import"../modules/projects-BGOCkGn9.js";import"../core-Do7H_sW0.js";async function j({params:e}){const r=await a(e.slug);if(!r)throw new Response(null,{status:404,statusText:"Nie znaleziono"});return r}function f(){const e=s();return t.jsxs(t.Fragment,{children:[t.jsx(i,{title:e.title,description:e.description,keywords:e.keywords}),t.jsxs("header",{className:"prose container",children:[t.jsx("h1",{children:e.title}),t.jsx(o,{categories:e.categories})]}),t.jsx("article",{className:"prose container",dangerouslySetInnerHTML:{__html:e.content}})]})}export{f as default,j as loader};
