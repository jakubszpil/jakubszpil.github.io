import{e as a,j as s,f as i}from"./index-CvRpRBP1.js";import{B as n,E as c}from"./edit-resource-B2-8Oevo.js";import{d as l}from"./seo-rJwk32Kw.js";import{c as u,d}from"./articles-BaobyA-w.js";import{C as m}from"./categories-S4vLqqlA.js";import"./link-with-prefetch-B9_LceBL.js";import"./fetch-ByD2TCbb.js";async function k({params:e,request:t}){const r=e.slug;if(!(await u(t)).includes(r))throw new Response(null,{status:404,statusText:"Nie znaleziono"});const o=await d(t,r);return i(o)}function A(){const e=a();return s.jsxs(s.Fragment,{children:[s.jsx(l,{title:e.title,description:e.description,keywords:e.keywords}),s.jsxs("header",{className:"prose container",children:[s.jsx(n,{}),s.jsx("h1",{children:e.title}),s.jsx(m,{categories:e.categories})]}),s.jsx("article",{className:"prose container",dangerouslySetInnerHTML:{__html:e.content}}),s.jsx(c,{resourceUrl:e.resourceUrl})]})}export{A as default,k as loader};
