import{j as o}from"../react-vvBGimMH.js";import{S as i,c as u}from"../components--ICSdJMK.js";import{d as l,j as f}from"../utils-BZMZnvBm.js";async function d(e){const r=await(await fetch("/content/courses.json",{cache:"force-cache"})).json();return r.slice(0,e??r.length)}async function h(e){const s=await fetch(`/content/courses/${e}.json`,{cache:"force-cache"});if(!s.ok)throw s;return s.json()}async function x(){const e=await d(),s={};return{categories:e.reduce((t,c)=>{var a;return(a=c.categories)==null||a.forEach(n=>{n in s||(s[n]=0),t.includes(n)||t.push(n),s[n]++}),t},[]).sort((t,c)=>s[c]-s[t]),courses:e}}async function y(e,s){return e.filter(r=>{var t;return(t=r.categories)==null?void 0:t.includes(s)})}async function j({params:e}){const s=await h(e.slug);if(!s)throw new Response(null,{status:404,statusText:"Nie znaleziono"});return f(s)}function g(){const e=l();return o.jsxs(o.Fragment,{children:[o.jsx(i,{title:e.title,description:e.description,keywords:e.keywords}),o.jsxs("header",{className:"prose container",children:[o.jsx("h1",{children:e.title}),o.jsx(u,{categories:e.categories})]}),o.jsx("article",{className:"prose container",dangerouslySetInnerHTML:{__html:e.content}})]})}const C=Object.freeze(Object.defineProperty({__proto__:null,default:g,loader:j},Symbol.toStringTag,{value:"Module"}));export{y as a,d as b,C as c,x as g};
