const __vite__fileDeps=["assets/pages/course-list-BoeFttMv.js","assets/vendor/react-DtcCowca.js","assets/index--lLcnNHB.js","assets/vendor/routing-BKIj40I1.js","assets/vendor/libs-BizHLOBV.js","assets/shared-C6n8mrAM.js","assets/modules/articles-C0LZSND7.js","assets/content/articles/dependency-injection-kontra-typescript-J3xuld3v.js","assets/content/articles/obserwatorium-czyli-wzorzec-projektowy-obserwatora-JM83ArLk.js","assets/content/articles/signalizacja-czyli-koncept-signals-w-typescript-BkEXviKK.js","assets/modules/projects-ZpBJWrJA.js","assets/core-BngGOxrs.js","assets/content/courses/nowoczesny-javascript-0VhTU8dc.js","assets/content/courses/semantyczny-html-DAC5wx7T.js","assets/content/courses/szybszy-css-czyli-wprowadzenie-do-bem-0gbxvLAe.js","assets/content/courses/wprowadzenie-do-css-CVGbNyX8.js","assets/content/courses/wprowadzenie-do-dom-CK1H7bM8.js","assets/content/courses/wprowadzenie-do-html-BEbTkkD-.js","assets/content/courses/wprowadzenie-do-javascript-0Bz9Jok0.js","assets/index-bHvMkY2M.css","assets/pages/course-details-fpxLVZFH.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{j as t,r as _}from"../vendor/react-DtcCowca.js";import{c as m}from"../vendor/libs-BizHLOBV.js";import{L as n}from"../vendor/routing-BKIj40I1.js";import{c as r,e as d,B as l,g as u}from"../shared-C6n8mrAM.js";import{_ as a}from"../index--lLcnNHB.js";import{_ as g}from"../content/courses/nowoczesny-javascript-0VhTU8dc.js";import{_ as p}from"../content/courses/semantyczny-html-DAC5wx7T.js";import{_ as x}from"../content/courses/szybszy-css-czyli-wprowadzenie-do-bem-0gbxvLAe.js";import{_ as f}from"../content/courses/wprowadzenie-do-css-CVGbNyX8.js";import{_ as v}from"../content/courses/wprowadzenie-do-dom-CK1H7bM8.js";import{_ as w}from"../content/courses/wprowadzenie-do-html-BEbTkkD-.js";import{_ as h}from"../content/courses/wprowadzenie-do-javascript-0Bz9Jok0.js";const O=[r("").addModule(()=>a(()=>import("../pages/course-list-BoeFttMv.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]))),r("kategorie/:category").addModule(()=>a(()=>import("../pages/course-list-BoeFttMv.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]))),r(":slug").addModule(()=>a(()=>import("../pages/course-details-fpxLVZFH.js"),__vite__mapDeps([20,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19])))],[P,B,I,M]=d(Object.assign({"../../../../content/courses/nowoczesny-javascript.mdx":g,"../../../../content/courses/semantyczny-html.mdx":p,"../../../../content/courses/szybszy-css-czyli-wprowadzenie-do-bem.mdx":x,"../../../../content/courses/wprowadzenie-do-css.mdx":f,"../../../../content/courses/wprowadzenie-do-dom.mdx":v,"../../../../content/courses/wprowadzenie-do-html.mdx":w,"../../../../content/courses/wprowadzenie-do-javascript.mdx":h}),"categories");function T(s){return t.jsx("section",{className:m("container pt-0 prose grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3",s.className),children:s.courses.map(e=>t.jsx(l,{asChild:!0,variant:s.variant??"outline",className:"inline-flex flex-col items-start justify-start text-left h-auto w-auto text-wrap !no-underline truncate p-6",children:t.jsxs(n,{to:`/learning/${e.slug}`,children:[t.jsx("h2",{className:"line-clamp-3 text-base font-semibold flex-1 m-0",children:e.title}),t.jsx("p",{className:"line-clamp-3 mt-2 text-neutral-700 font-normal",children:e.description}),e.createdAt&&t.jsx("span",{className:"text-neutral-600 text-xs",children:u(e.createdAt)})]})},e.id))})}function V(s){var i;const e=_.useCallback((o,c)=>t.jsx(l,{asChild:!0,variant:"secondary",size:"sm",className:"!no-underline lowercase",children:t.jsxs(n,{to:c,children:["#",o]})},o),[]);return t.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[s.showAllCategory&&e("wszystko","/learning"),(i=s.categories)==null?void 0:i.map(o=>e(o,`/learning/kategorie/${o}`))]})}export{V as C,T as a,I as b,M as c,P as d,B as g,O as r};
