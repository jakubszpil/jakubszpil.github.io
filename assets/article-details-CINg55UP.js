import{j as t}from"./react-BDnC2YFb.js";import{c as s}from"./articles-qDKqKXG-.js";import{C as o}from"./categories-ClWQL_f3.js";import{S as i}from"./seo-t9Xlog11.js";import{u as a,j as n}from"./index-Dt24wI1w.js";import"./resources-DyK2mBNK.js";import"./runtime--RgF0kxo.js";import"./link-with-prefetch-DVukV2zR.js";import"./routing-DFXa-LRN.js";async function g({params:e}){const r=await s(e.slug);if(!r)throw new Response(null,{status:404,statusText:"Nie znaleziono"});return n(r)}function h(){const e=a();return t.jsxs(t.Fragment,{children:[t.jsx(i,{title:e.title,description:e.description,keywords:e.keywords}),t.jsxs("header",{className:"prose container",children:[t.jsx("h1",{children:e.title}),t.jsx(o,{categories:e.categories})]}),t.jsx("article",{className:"prose container",dangerouslySetInnerHTML:{__html:e.content}})]})}export{h as default,g as loader};
