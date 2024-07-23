const __vite__fileDeps=["assets/pages/home-fSncNiep.js","assets/vendor/react-CovhObVN.js","assets/index-D7vIR3Nl.js","assets/vendor/routing-BkIop_rA.js","assets/vendor/libs-CNSBcFfo.js","assets/shared-BWpC3671.js","assets/modules/articles-DaNOoxs3.js","assets/modules/courses-CZeH5oiY.js","assets/modules/projects-B8lrG3Uj.js","assets/index-FDEPO8-p.css","assets/pages/search-iaQg8K5c.js","assets/pages/about-BMI99zjD.js","assets/pages/not-found-CJTaYMVb.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as c}from"./index-D7vIR3Nl.js";import{c as d,u as f,B as t,L as o,T as z,g as p}from"./shared-BWpC3671.js";import{j as e,r as h}from"./vendor/react-CovhObVN.js";import{v as u,I as g,a as b,b as v,X as L}from"./vendor/libs-CNSBcFfo.js";import{L as y,u as w}from"./vendor/routing-BkIop_rA.js";const I=[d("").addModule(()=>c(()=>import("./pages/home-fSncNiep.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]))).setIndex(!0),d("search").addModule(()=>c(()=>import("./pages/search-iaQg8K5c.js"),__vite__mapDeps([10,1,2,3,4,5,6,7,8,9]))),d("me").addModule(()=>c(()=>import("./pages/about-BMI99zjD.js"),__vite__mapDeps([11,1,2,3,4,5,6,7,8,9]))),d("*").addModule(()=>c(()=>import("./pages/not-found-CJTaYMVb.js"),__vite__mapDeps([12,1,2,3,4,5,6,7,8,9])))];function N(n){return f().socials.map(s=>e.jsx(t,{asChild:!0,size:n.hideLabels?"icon":"sm",variant:n.variant??"ghost",className:"inline-flex items-center gap-1 no-underline",title:s.label,"aria-label":s.label,children:e.jsxs("a",{href:s.href,target:"_blank",children:[e.jsx(s.icon,{}),e.jsx("span",{className:`${n.hideLabels?"sr-only":""}`,children:s.label})]})},u()))}function j(n){return e.jsx(t,{asChild:!0,className:n.className,onClick:n.onClick,variant:n.variant??"ghost",size:n.size??"sm",children:e.jsx(o,{to:n.to,children:n.children})})}function _(n){const[l,s]=h.useState(!1),x=h.useRef(null),m=()=>{var a;s(!1),(a=x.current)==null||a.focus()},k=()=>{s(a=>!a)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center sm:gap-1",children:[e.jsx("nav",{className:"hidden items-center lg:flex",children:n.children.map(a=>h.createElement(j,{...a.props,key:u()}))}),e.jsx(t,{size:"icon",variant:"ghost",asChild:!0,className:"inline-flex items-center justify-center","aria-label":"Szukaj",title:"Szukaj",children:e.jsxs(o,{to:"/search",children:[e.jsx("span",{className:"sr-only",children:"Szukaj"}),e.jsx(g,{className:"h-6"})]})}),e.jsx(N,{hideLabels:!0}),e.jsx(z,{}),e.jsxs(t,{size:"icon",ref:x,onClick:k,className:`inline-flex items-center justify-center relative z-50 lg:hidden${l?" dark":""}`,variant:"link","aria-label":l?"Zamknij menu":"Otwórz menu",title:l?"Zamknij menu":"Otwórz menu",children:[e.jsx("span",{className:"sr-only",children:l?"Zamknij menu":"Otwórz menu"}),l?e.jsx(b,{className:"!text-white h-6"}):e.jsx(v,{className:"h-6 !text-black dark:!text-white"})]})]}),e.jsx(L,{show:l,children:e.jsx("nav",{className:"flex flex-col gap-1 justify-center items-center fixed inset-0 dark bg-background text-foreground z-40 lg:hidden transition-[transform,opacity,visibility] duration-150 data-[closed]:opacity-0 data-[closed]:invisible data-[enter]:translate-y-0 data-[enter]:data-[closed]:translate-y-10",children:n.children.map(a=>h.createElement(j,{...a.props,key:u(),size:"lg",onClick:m}))})})]})}function i(n){return e.jsx("header",{className:"sticky w-full bg-background top-0 left-0 z-50 lg:relative",children:e.jsx("div",{className:"container pb-3 pt-4 flex justify-between items-center px-3 lg:py-6",children:n.children})})}i.Link=j;i.Menu=_;function S(n){return e.jsx(t,{asChild:!0,variant:"link",size:"sm",className:"no-underline hover:underline",children:e.jsx(o,{to:n.to,children:n.children})})}function r(n){return e.jsx("footer",{className:"prose max-w-full border-t",children:e.jsxs("div",{className:"container flex items-center gap-3 justify-start flex-wrap-reverse lg:justify-between",children:[e.jsxs("p",{className:"xl:text-sm",children:["© ",p()," ",e.jsx(y,{to:"/",children:"jakubszpil"})]}),e.jsx("nav",{className:"flex items-center flex-wrap -ml-3",children:n.children})]})})}r.Link=S;function R(n){return e.jsxs(e.Fragment,{children:[e.jsxs(i,{children:[e.jsx(i.Link,{className:"font-bold",to:"/",children:"jakubszpil"}),e.jsxs(i.Menu,{children:[e.jsx(i.Link,{to:"/",children:"🏠 Strona główna"}),e.jsx(i.Link,{to:"/blog",children:"📝 Blog"}),e.jsx(i.Link,{to:"/learning",children:"🏫 Learning"}),e.jsx(i.Link,{to:"/portfolio",children:"🛠️ Portfolio"}),e.jsx(i.Link,{to:"/me",children:"🙋‍♂️ O mnie"})]})]}),e.jsx("main",{children:n.children}),e.jsxs(r,{children:[e.jsx(r.Link,{to:"/",children:"🏠 Strona główna"}),e.jsx(r.Link,{to:"/blog",children:"📝 Blog"}),e.jsx(r.Link,{to:"/learning",children:"🏫 Learning"}),e.jsx(r.Link,{to:"/portfolio",children:"🛠️ Portfolio"}),e.jsx(r.Link,{to:"/me",children:"🙋‍♂️ O mnie"}),e.jsx(r.Link,{to:"/search",children:"🔍 Szukaj"})]})]})}function F(){const n=w();return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Oops! Strona nie została znaleziona 🙁 (404)"}),e.jsx("p",{children:"Przepraszam, ale strona, której szukasz, nie istnieje. Może to być spowodowane jednym z poniższych powodów:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Adres strony został wpisany niepoprawnie."}),e.jsx("li",{children:"Strona została przeniesiona lub usunięta."}),e.jsx("li",{children:"Link może być nieaktualny."})]}),e.jsx("p",{children:e.jsx("strong",{children:"Co możesz teraz zrobić?"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx(t,{asChild:!0,size:"sm",variant:"link",className:"text-base no-underline hover:underline",children:e.jsx(o,{replace:!0,to:n.pathname,children:"🤔 Sprawdź adres URL"})}),"- Upewnij się, że wpisany adres jest poprawny."]}),e.jsxs("li",{children:[e.jsx(t,{asChild:!0,size:"sm",variant:"link",className:"text-base no-underline hover:underline",children:e.jsx(o,{replace:!0,to:"/",children:"🏠 Przejdź do strony głównej"})}),"- Kliknij tutaj aby wrócić na stronę główną."]}),e.jsxs("li",{children:[e.jsx(t,{asChild:!0,size:"sm",variant:"link",className:"text-base no-underline hover:underline",children:e.jsx(o,{replace:!0,to:"/search",children:"🔍 Szukaj"})}),"- Skorzystaj z wyszukiwarki, aby znaleźć potrzebne informacje."]})]}),e.jsx("p",{children:"Dziękuję za zrozumienie i przepraszam za wszelkie niedogodności!"})]})}export{R as L,F as N,N as S,I as r};
