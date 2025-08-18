import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{a as r,x as w}from"./chunk-UH6JLGW7-Oh62NarD.js";/**
 * @license @tabler/icons-react v3.34.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var b={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};/**
 * @license @tabler/icons-react v3.34.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=(e,s,i,n)=>{const a=r.forwardRef(({color:p="currentColor",size:o=24,stroke:u=2,title:d,className:h,children:c,...k},j)=>r.createElement("svg",{ref:j,...b[e],width:o,height:o,className:["tabler-icon",`tabler-icon-${s}`,h].join(" "),strokeWidth:u,stroke:p,...k},[d&&r.createElement("title",{key:"svg-title"},d),...n.map(([g,y])=>r.createElement(g,y)),...Array.isArray(c)?c:[c]]));return a.displayName=`${i}`,a};/**
 * @license @tabler/icons-react v3.34.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["path",{d:"M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5",key:"svg-0"}]],x=m("outline","brand-github","BrandGithub",v);/**
 * @license @tabler/icons-react v3.34.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["path",{d:"M8 11v5",key:"svg-0"}],["path",{d:"M8 8v.01",key:"svg-1"}],["path",{d:"M12 16v-5",key:"svg-2"}],["path",{d:"M16 16v-3a2 2 0 1 0 -4 0",key:"svg-3"}],["path",{d:"M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z",key:"svg-4"}]],f=m("outline","brand-linkedin","BrandLinkedin",z),l={socials:[{href:"https://www.linkedin.com/in/jakubszpil/",label:"LinkedIn",icon:f},{href:"https://github.com/jakubszpil/",label:"GitHub",icon:x}],meta:{defaultTitle:"Jakub Szpil",titleTemplate:"%s - Jakub Szpil",description:"Cześć, jestem Kuba, jestem frontend developerem. Witaj na mojej stronie, gdzie znajdziesz blog z artykułami, głównie o tematyce frontendowej, sekcję z kursami, dzięki którym nabędziesz wiedzę i doświadczenie z frontu, jak i portfolio, które przywita Cię moimi ostatnimi projektami. Bon vojage! 🚢"},individualNames:{javascript:"JavaScript",typescript:"TypeScript",github:"GitHub",css:"CSS",sql:"SQL",html:"HTML",ci:"CI/CD",devops:"DevOps",nestjs:"NestJS"}},L=e=>{const{pathname:s}=w(),i=e.title?l.meta.titleTemplate.replace("%s",e.title):l.meta.defaultTitle,n=e.description??l.meta.description,a=e.keywords?.join(","),o=`https://jakubszpil.github.io${s}`;return t.jsxs(t.Fragment,{children:[t.jsx("title",{children:i}),t.jsx("meta",{name:"description",content:n}),t.jsx("meta",{name:"keywords",content:a}),e.publishedTime&&t.jsx("meta",{property:"article:published_time",content:e.publishedTime}),t.jsx("meta",{property:"og:type",content:e.type??"website"}),t.jsx("meta",{property:"og:url",content:o}),t.jsx("meta",{property:"og:title",content:i}),t.jsx("meta",{property:"og:description",content:n}),t.jsx("meta",{property:"twitter:card",content:"summary_large_image"}),t.jsx("meta",{property:"twitter:url",content:o}),t.jsx("meta",{property:"twitter:title",content:i}),t.jsx("meta",{property:"twitter:description",content:n})]})};export{x as I,L as S,l as a,m as c};
