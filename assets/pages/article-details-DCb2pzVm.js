import{j as n}from"../react-vvBGimMH.js";import{S as l,C as u}from"../components-Chjwwj7i.js";import{d as f,j as g}from"../utils-BZMZnvBm.js";async function d(e,s){const r=await(await fetch("/content/articles.json",{cache:"force-cache",signal:e.signal})).json();return r.slice(0,s??r.length)}async function h(e,s){const t=await fetch(`/content/articles/${s}.json`,{cache:"force-cache",signal:e.signal});if(!t.ok)throw t;return t.json()}async function y(e){const s=await d(e),t={};return{categories:s.reduce((c,a)=>{var o;return(o=a.categories)==null||o.forEach(i=>{i in t||(t[i]=0),c.includes(i)||c.push(i),t[i]++}),c},[]).sort((c,a)=>t[a]-t[c]),articles:s}}async function _(e,s){return e.filter(t=>{var r;return(r=t.categories)==null?void 0:r.includes(s)})}async function j({params:e,request:s}){const t=await h(s,e.slug);if(!t)throw new Response(null,{status:404,statusText:"Nie znaleziono"});return g(t)}function p(){const e=f();return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:e.title,description:e.description,keywords:e.keywords}),n.jsxs("header",{className:"prose container",children:[n.jsx("h1",{children:e.title}),n.jsx(u,{categories:e.categories})]}),n.jsx("article",{className:"prose container",dangerouslySetInnerHTML:{__html:e.content}})]})}const A=Object.freeze(Object.defineProperty({__proto__:null,default:p,loader:j},Symbol.toStringTag,{value:"Module"}));export{_ as a,d as b,A as c,y as g};
