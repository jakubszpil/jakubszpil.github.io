import{e as a,j as e,f as i}from"./index-NsJUTium.js";import{B as n,E as c}from"./edit-resource-ThXjqjJB.js";import{S as l}from"./seo-bCP9g-TW.js";import{c as u,d as m}from"./courses-qdES9uzt.js";import{C as d}from"./categories-yl_8BgJ1.js";import"./button-wTNYL8N3.js";import"./link-with-prefetch-C105oE90.js";import"./fetch-EPc65CvA.js";async function S({params:s,request:r}){const t=s.slug;if(!(await u(r)).includes(t))throw new Response(null,{status:404,statusText:"Nie znaleziono"});const o=await m(r,t);return i(o)}function k(){const s=a();return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:s.title,description:s.description,keywords:s.keywords}),e.jsxs("header",{className:"prose container",children:[e.jsx(n,{}),e.jsx("h1",{children:s.title}),e.jsx(d,{categories:s.categories})]}),e.jsx("article",{className:"prose container",dangerouslySetInnerHTML:{__html:s.content}}),e.jsx(c,{resourceUrl:s.resourceUrl})]})}export{k as default,S as loader};
