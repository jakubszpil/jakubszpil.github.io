import{j as t}from"../vendor/react-DKFxVQeA.js";import{h as s,d as o,i,n as a}from"../shared-G1zC7ivf.js";import{C as n,g as c}from"../modules/articles-CI4FVxaD.js";import"../index-C1sxAGo5.js";import"../vendor/routing-wY16MexT.js";import"../vendor/libs-DbVyjwv2.js";import"../modules/courses-CIDRaBtZ.js";import"../modules/projects-C2m9DoPN.js";import"../core-DmOzl_u7.js";const f=i(async({params:e})=>{const r=await c(e.slug);if(!r)throw a();return r});function w(){const e=s();return t.jsxs(t.Fragment,{children:[t.jsx(o,{title:e.title,description:e.description,keywords:e.keywords}),t.jsxs("header",{className:"prose container",children:[t.jsx("h1",{children:e.title}),t.jsx(n,{categories:e.categories})]}),t.jsx("article",{className:"prose container",dangerouslySetInnerHTML:{__html:e.content}})]})}export{w as default,f as loader};
