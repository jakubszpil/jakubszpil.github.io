import{j as n}from"../react-vvBGimMH.js";import{f as t,d as r,j as i}from"../utils-46OwyQtw.js";import{S as u,c as l}from"../components-CxpGlKlM.js";async function y(s,e){const c=await(await t("/content/courses.json",{cache:"force-cache",signal:s.signal})).json();return c.slice(0,e??c.length)}async function g(s){const e=await t("/content/courses/slugs.json",{cache:"force-cache",signal:s.signal});if(!e.ok)throw e;return e.json()}async function f(s,e){const o=await t(`/content/courses/${e}.json`,{cache:"force-cache",signal:s.signal});if(!o.ok)throw o;return o.json()}async function m(s){return await(await t("/content/courses/categories.json",{cache:"force-cache",signal:s.signal})).json()}async function x(s,e){return await(await t(`/content/courses/categories/${e}.json`,{cache:"force-cache",signal:s.signal})).json()}async function j({params:s,request:e}){const o=s.slug;if(!(await g(e)).includes(o))throw new Response(null,{status:404,statusText:"Nie znaleziono"});const a=await f(e,o);return i(a)}function h(){const s=r();return n.jsxs(n.Fragment,{children:[n.jsx(u,{title:s.title,description:s.description,keywords:s.keywords}),n.jsxs("header",{className:"prose container",children:[n.jsx("h1",{children:s.title}),n.jsx(l,{categories:s.categories})]}),n.jsx("article",{className:"prose container",dangerouslySetInnerHTML:{__html:s.content}})]})}const C=Object.freeze(Object.defineProperty({__proto__:null,default:h,loader:j},Symbol.toStringTag,{value:"Module"}));export{x as a,y as b,C as c,m as g};
