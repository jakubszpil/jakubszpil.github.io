import{e as a,j as e,f as i}from"./index-CvRpRBP1.js";import{B as n,E as c}from"./edit-resource-B2-8Oevo.js";import{d as l}from"./seo-rJwk32Kw.js";import{c as u,d}from"./courses-CKI3jS4g.js";import{C as m}from"./categories-CPdEWu86.js";import"./link-with-prefetch-B9_LceBL.js";import"./fetch-ByD2TCbb.js";async function y({params:s,request:r}){const t=s.slug;if(!(await u(r)).includes(t))throw new Response(null,{status:404,statusText:"Nie znaleziono"});const o=await d(r,t);return i(o)}function k(){const s=a();return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:s.title,description:s.description,keywords:s.keywords}),e.jsxs("header",{className:"prose container",children:[e.jsx(n,{}),e.jsx("h1",{children:s.title}),e.jsx(m,{categories:s.categories})]}),e.jsx("article",{className:"prose container",dangerouslySetInnerHTML:{__html:s.content}}),e.jsx(c,{resourceUrl:s.resourceUrl})]})}export{k as default,y as loader};
