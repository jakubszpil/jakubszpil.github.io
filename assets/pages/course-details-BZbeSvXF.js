import{j as o}from"../react-vvBGimMH.js";import{S as u,c as l}from"../components-Chjwwj7i.js";import{d as f,j as g}from"../utils-BZMZnvBm.js";async function d(e,t){const n=await(await fetch("/content/courses.json",{cache:"force-cache",signal:e.signal})).json();return n.slice(0,t??n.length)}async function h(e,t){const s=await fetch(`/content/courses/${t}.json`,{cache:"force-cache",signal:e.signal});if(!s.ok)throw s;return s.json()}async function y(e){const t=await d(e),s={};return{categories:t.reduce((r,a)=>{var i;return(i=a.categories)==null||i.forEach(c=>{c in s||(s[c]=0),r.includes(c)||r.push(c),s[c]++}),r},[]).sort((r,a)=>s[a]-s[r]),courses:t}}async function C(e,t){return e.filter(s=>{var n;return(n=s.categories)==null?void 0:n.includes(t)})}async function j({params:e,request:t}){const s=await h(t,e.slug);if(!s)throw new Response(null,{status:404,statusText:"Nie znaleziono"});return g(s)}function p(){const e=f();return o.jsxs(o.Fragment,{children:[o.jsx(u,{title:e.title,description:e.description,keywords:e.keywords}),o.jsxs("header",{className:"prose container",children:[o.jsx("h1",{children:e.title}),o.jsx(l,{categories:e.categories})]}),o.jsx("article",{className:"prose container",dangerouslySetInnerHTML:{__html:e.content}})]})}const _=Object.freeze(Object.defineProperty({__proto__:null,default:p,loader:j},Symbol.toStringTag,{value:"Module"}));export{C as a,d as b,_ as c,y as g};
