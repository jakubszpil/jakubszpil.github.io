import{r as i,j as s}from"../react-BDnC2YFb.js";import{_ as t,B as c,u as d,S as u,j as l}from"./about-DK_XtsX2.js";import{c as _,L as m}from"./article-details-VxgGs1tD.js";const p=Object.assign({"../../../../content/courses/nowoczesny-javascript.mdx":()=>t(()=>import("../content/nowoczesny-javascript-h99QkkSt.js"),[]),"../../../../content/courses/semantyczny-html.mdx":()=>t(()=>import("../content/semantyczny-html-C6qCsUTo.js"),[]),"../../../../content/courses/szybszy-css-czyli-wprowadzenie-do-bem.mdx":()=>t(()=>import("../content/szybszy-css-czyli-wprowadzenie-do-bem-B493ESxp.js"),[]),"../../../../content/courses/wprowadzenie-do-css.mdx":()=>t(()=>import("../content/wprowadzenie-do-css-DtbokX3s.js"),[]),"../../../../content/courses/wprowadzenie-do-dom.mdx":()=>t(()=>import("../content/wprowadzenie-do-dom-BsC20uR2.js"),[]),"../../../../content/courses/wprowadzenie-do-html.mdx":()=>t(()=>import("../content/wprowadzenie-do-html-DcFFAFJV.js"),[]),"../../../../content/courses/wprowadzenie-do-javascript.mdx":()=>t(()=>import("../content/wprowadzenie-do-javascript-HdzEzh-w.js"),[])}),[z,g,f,v]=_(p,"categories");function x(e){var n;const o=i.useCallback((r,a)=>s.jsx(c,{asChild:!0,variant:"secondary",size:"sm",className:"!no-underline lowercase",children:s.jsxs(m,{to:a,children:["#",r]})},r),[]);return s.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[e.showAllCategory&&o("wszystko","/learning"),(n=e.categories)==null?void 0:n.map(r=>o(r,`/learning/kategorie/${r}`))]})}async function w({params:e}){const o=await g(e.slug);if(!o)throw new Response(null,{status:404,statusText:"Nie znaleziono"});return l(o)}function j(){const e=d();return s.jsxs(s.Fragment,{children:[s.jsx(u,{title:e.title,description:e.description,keywords:e.keywords}),s.jsxs("header",{className:"prose container",children:[s.jsx("h1",{children:e.title}),s.jsx(x,{categories:e.categories})]}),s.jsx("article",{className:"prose container",dangerouslySetInnerHTML:{__html:e.content}})]})}const C=Object.freeze(Object.defineProperty({__proto__:null,default:j,loader:w},Symbol.toStringTag,{value:"Module"}));export{x as C,v as a,z as b,C as c,f as g};
