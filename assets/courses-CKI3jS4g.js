import{f as o}from"./fetch-ByD2TCbb.js";async function t(e,s){const c=await(await o("/content/courses.json",{cache:"force-cache",signal:e.signal})).json();return c.slice(0,s??c.length)}async function r(e){const s=await o("/content/courses/slugs.json",{cache:"force-cache",signal:e.signal});if(!s.ok)throw s;return s.json()}async function i(e,s){const n=await o(`/content/courses/${s}.json`,{cache:"force-cache",signal:e.signal});if(!n.ok)throw n;return n.json()}async function u(e){return await(await o("/content/courses/categories.json",{cache:"force-cache",signal:e.signal})).json()}async function g(e,s){return await(await o(`/content/courses/categories/${s}.json`,{cache:"force-cache",signal:e.signal})).json()}export{u as a,g as b,r as c,i as d,t as g};
