import{j as e,c as j,r as p}from"./vendor-gTNXkbjy.js";import{c as n,a as h,B as l,g as f,u as d,S as u,d as _,n as m}from"./shared-hYE2DrD3.js";import{_ as i}from"./index-BbDlArVq.js";import{L as g}from"./routing-BnMAHfRZ.js";import{_ as w,a as y,b as v,c as b,d as z,e as C}from"./content/courses-D-axmklc.js";const F=[n("").addModule(()=>i(()=>Promise.resolve().then(()=>c),void 0)),n("kategorie/:category").addModule(()=>i(()=>Promise.resolve().then(()=>c),void 0)),n(":slug").addModule(()=>i(()=>Promise.resolve().then(()=>R),void 0))],[L,N,S,k]=h(Object.assign({"../../../../content/courses/nowoczesny-javascript.mdx":w,"../../../../content/courses/szybszy-css-czyli-wprowadzenie-do-bem.mdx":y,"../../../../content/courses/wprowadzenie-do-css.mdx":v,"../../../../content/courses/wprowadzenie-do-dom.mdx":b,"../../../../content/courses/wprowadzenie-do-html.mdx":z,"../../../../content/courses/wprowadzenie-do-javascript.mdx":C}),"categories");function P(s){return e.jsx("section",{className:j("container pt-0 prose grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3",s.className),children:s.courses.map(t=>e.jsx(l,{asChild:!0,variant:s.variant??"outline",className:"inline-flex flex-col items-start justify-start text-left h-auto w-auto text-wrap !no-underline truncate p-6",children:e.jsxs(g,{to:`/learning/${t.slug}`,children:[e.jsx("h2",{className:"line-clamp-3 text-base font-semibold flex-1 m-0",children:t.title}),e.jsx("p",{className:"line-clamp-3 mt-2 text-neutral-700 font-normal",children:t.description}),t.createdAt&&e.jsx("span",{className:"text-neutral-600 text-xs",children:f(t.createdAt)})]})},t.id))})}function x(s){var r;const t=p.useCallback((o,a)=>e.jsx(l,{asChild:!0,variant:"secondary",size:"sm",className:"!no-underline lowercase",children:e.jsxs(g,{to:a,children:["#",o]})},o),[]);return e.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[s.showAllCategory&&t("wszystko","/learning"),(r=s.categories)==null?void 0:r.map(o=>t(o,`/learning/kategorie/${o}`))]})}const E=_(({params:s})=>{const t=s.category,r=S();if(t){if(!r.includes(t))throw m();const a=k(t);return{category:t,categories:r,courses:a}}return{courses:L(),categories:r}});function O(){const{courses:s,categories:t,category:r}=d();return e.jsxs(e.Fragment,{children:[e.jsx(u,{title:r?`Kategoria: ${r}`:"Learning",description:"Kursy frontendowe obejmujące HTML, CSS, JavaScript i nowoczesne frameworki. Rozwijaj swoje umiejętności i twórz nowoczesne strony oraz aplikacje internetowe."}),e.jsxs("header",{className:"prose container",children:[e.jsx("h1",{className:"capitalize",children:r??"Learning"}),e.jsx(x,{showAllCategory:!0,categories:t})]}),e.jsx(P,{courses:s})]})}const c=Object.freeze(Object.defineProperty({__proto__:null,default:O,loader:E},Symbol.toStringTag,{value:"Module"})),A=_(s=>{const t=N(s.params.slug);if(!t)throw m();return t});function M(){const s=d();return e.jsxs(e.Fragment,{children:[e.jsx(u,{title:s.title,description:s.description,keywords:s.keywords}),e.jsxs("header",{className:"prose container",children:[e.jsx("h1",{children:s.title}),e.jsx(x,{categories:s.categories})]}),e.jsx("article",{className:"prose container",dangerouslySetInnerHTML:{__html:s.content}})]})}const R=Object.freeze(Object.defineProperty({__proto__:null,default:M,loader:A},Symbol.toStringTag,{value:"Module"}));export{P as C,L as g,F as r};
