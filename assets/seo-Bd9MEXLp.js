import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{a as r,v as y}from"./chunk-DQRVZFIR-C10YmIek.js";/**
 * @license @tabler/icons-react v3.17.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var b={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};/**
 * @license @tabler/icons-react v3.17.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=(e,i,n,o)=>{const s=r.forwardRef(({color:d="currentColor",size:a=24,stroke:c=2,title:p,className:h,children:l,...k},g)=>r.createElement("svg",{ref:g,...b[e],width:a,height:a,className:["tabler-icon",`tabler-icon-${i}`,h].join(" "),strokeWidth:c,stroke:d,...k},[p&&r.createElement("title",{key:"svg-title"},p),...o.map(([j,w])=>r.createElement(j,w)),...Array.isArray(l)?l:[l]]));return s.displayName=`${n}`,s};/**
 * @license @tabler/icons-react v3.17.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var f=u("outline","brand-github","IconBrandGithub",[["path",{d:"M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5",key:"svg-0"}]]);/**
 * @license @tabler/icons-react v3.17.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var v=u("outline","brand-linkedin","IconBrandLinkedin",[["path",{d:"M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M8 11l0 5",key:"svg-1"}],["path",{d:"M8 8l0 .01",key:"svg-2"}],["path",{d:"M12 16l0 -5",key:"svg-3"}],["path",{d:"M16 16v-3a2 2 0 0 0 -4 0",key:"svg-4"}]]);const m={socials:[{href:"https://www.linkedin.com/in/jakubszpil/",label:"LinkedIn",icon:v},{href:"https://github.com/jakubszpil/",label:"GitHub",icon:f}],meta:{defaultTitle:"Jakub Szpil",titleTemplate:"%s - Jakub Szpil",description:"Cześć, jestem Kuba, jestem frontend developerem. Witaj na mojej stronie, gdzie znajdziesz blog z artykułami, głównie o tematyce frontendowej, sekcję z kursami, dzięki którym nabędziesz wiedzę i doświadczenie z frontu, jak i portfolio, które przywita Cię moimi ostatnimi projektami. Bon vojage! 🚢"}};function x(e){r.useEffect(()=>{const i=document.createElement("link");i.setAttribute("rel","prefetch"),i.setAttribute("as","fetch"),i.setAttribute("href",e),document.head.appendChild(i)},[e])}const B=e=>{var c;const{pathname:i}=y();x("/search.data");const n=e.title?m.meta.titleTemplate.replace("%s",e.title):m.meta.defaultTitle,o=e.description??m.meta.description,s=(c=e.keywords)==null?void 0:c.join(","),a=`https://jakubszpil.github.io${i}`;return t.jsxs(t.Fragment,{children:[t.jsx("title",{children:n}),t.jsx("meta",{name:"description",content:o}),t.jsx("meta",{name:"keywords",content:s}),e.publishedTime&&t.jsx("meta",{property:"article:published_time",content:e.publishedTime.toISOString()}),t.jsx("meta",{property:"og:type",content:e.type??"website"}),t.jsx("meta",{property:"og:url",content:a}),t.jsx("meta",{property:"og:title",content:n}),t.jsx("meta",{property:"og:description",content:o}),t.jsx("meta",{property:"twitter:card",content:"summary_large_image"}),t.jsx("meta",{property:"twitter:url",content:a}),t.jsx("meta",{property:"twitter:title",content:n}),t.jsx("meta",{property:"twitter:description",content:o})]})};export{f as I,B as S,m as a,u as c};
