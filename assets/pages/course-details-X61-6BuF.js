import{j as r}from"../vendor/react-BR4j9ofd.js";import{i as t,e as o,j as i,n as a}from"../shared-D1PhAiIK.js";import{C as n,g as c}from"../modules/courses-f8K3VnBt.js";import"../index-CLoOBwaz.js";import"../vendor/routing-BHh6CERJ.js";import"../vendor/libs-DpRUMLxl.js";import"../modules/articles-C1O7NWhx.js";import"../modules/projects-DIXoxknR.js";import"../core-DwU-IhM0.js";const h=i(async({params:e})=>{const s=await c(e.slug);if(!s)throw a();return s});function w(){const e=t();return r.jsxs(r.Fragment,{children:[r.jsx(o,{title:e.title,description:e.description,keywords:e.keywords}),r.jsxs("header",{className:"prose container",children:[r.jsx("h1",{children:e.title}),r.jsx(n,{categories:e.categories})]}),r.jsx("article",{className:"prose container",dangerouslySetInnerHTML:{__html:e.content}})]})}export{w as default,h as loader};