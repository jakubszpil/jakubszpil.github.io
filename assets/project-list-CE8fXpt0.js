import{w as l}from"./with-props-vNSq05BM.js";import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{a,o as h,A as d,B as c}from"./chunk-GNGMS2XR-C5oA2J7v.js";import{B as m}from"./button-cu78wP1F.js";import{P as p}from"./projects-eFNrEd7n.js";import{S as j}from"./seo-DNDuvcb9.js";import{c as f}from"./string-BZnAEtKi.js";import"./date-Id6XWU1s.js";function u(s){const r=a.useCallback((e,t)=>o.jsx(m,{asChild:!0,variant:"secondary",size:"sm",className:"!no-underline lowercase",children:o.jsxs(h,{prefetch:"intent",to:t,children:["#",e]})},e),[]);return o.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[s.showAllTechnology&&r("wszystko","/portfolio"),s.technologies.map(e=>r(e,`/portfolio/technologie/${e}`))]})}function k({currentParams:s,nextParams:r}){const e=s.technology,t=r.technology;return e!==t}const A=l(function(){const{projects:r,technologies:e,technology:t}=d(),n=t?f(t):void 0;return o.jsxs(o.Fragment,{children:[o.jsx(j,{title:n?`Portfolio / ${n}`:"Portfolio",description:"Projekty frontendowe wykonane przeze mnie w wolnym czasie obrazujące dotychczasowe zdobyte doświadczenie i umiejętności"}),o.jsx(c,{resolve:e,children:i=>o.jsxs("header",{className:"prose container",children:[o.jsx("h1",{children:n??"Portfolio"}),o.jsx(u,{showAllTechnology:!0,technologies:i})]})}),o.jsx(c,{resolve:r,children:i=>o.jsx(p,{projects:i},t)})]})});export{A as default,k as shouldRevalidate};
