import{j as t}from"../vendor/react-Dst-dStX.js";import{i as s,e as o,j as i}from"../shared-1F-TQtzb.js";import{C as a,g as n}from"../modules/articles-Cn_iDweW.js";import"../index-DgGhzT35.js";import"../vendor/routing-CMUP3MO5.js";import"../vendor/libs-in0mXps2.js";import"../modules/courses-CEXXhdPD.js";import"../modules/projects-Di8S82Wk.js";import"../core-CzEY8Zo1.js";async function f({params:e}){const r=await n(e.slug);if(!r)throw new Response(null,{status:404,statusText:"Nie znaleziono"});return i(r)}function h(){const e=s();return t.jsxs(t.Fragment,{children:[t.jsx(o,{title:e.title,description:e.description,keywords:e.keywords}),t.jsxs("header",{className:"prose container",children:[t.jsx("h1",{children:e.title}),t.jsx(a,{categories:e.categories})]}),t.jsx("article",{className:"prose container",dangerouslySetInnerHTML:{__html:e.content}})]})}export{h as default,f as loader};
