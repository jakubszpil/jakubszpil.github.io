const __vite__fileDeps=["assets/pages/home-C7mnhcpH.js","assets/vendor/react-D-qdk-9g.js","assets/index-BD_GxyCz.js","assets/vendor/routing-CqRI7XUL.js","assets/vendor/libs-DCiq-c8P.js","assets/shared-k2fhiepv.js","assets/modules/articles-uRjfQdg0.js","assets/modules/courses-DU3-seI7.js","assets/modules/projects-C10mSicw.js","assets/index-bHvMkY2M.css","assets/pages/search-D0UpH9Cz.js","assets/pages/about-2u2L3ftz.js","assets/pages/not-found-Dbc02mBE.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as c}from"./index-BD_GxyCz.js";import{c as d,u as z,B as t,g as p}from"./shared-k2fhiepv.js";import{j as e,r as h}from"./vendor/react-D-qdk-9g.js";import{L as o,u as g}from"./vendor/routing-CqRI7XUL.js";import{c as u,v as j,I as b,a as v,b as y,X as L}from"./vendor/libs-DCiq-c8P.js";const P=[d("").addModule(()=>c(()=>import("./pages/home-C7mnhcpH.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]))),d("search").addModule(()=>c(()=>import("./pages/search-D0UpH9Cz.js"),__vite__mapDeps([10,1,2,3,4,5,6,7,8,9]))),d("me").addModule(()=>c(()=>import("./pages/about-2u2L3ftz.js"),__vite__mapDeps([11,1,2,3,4,5,6,7,8,9]))),d("*").addModule(()=>c(()=>import("./pages/not-found-Dbc02mBE.js"),__vite__mapDeps([12,1,2,3,4,5,6,7,8,9])))];function N(n){return z().socials.map(i=>e.jsx(t,{asChild:!0,size:n.hideLabels?"icon":"sm",variant:n.variant??"ghost",className:"inline-flex items-center gap-1 no-underline",title:i.label,"aria-label":i.label,children:e.jsxs("a",{href:i.href,target:"_blank",children:[e.jsx(i.icon,{}),e.jsx("span",{className:u(n.hideLabels&&"sr-only"),children:i.label})]})},j()))}function x(n){return e.jsx(t,{asChild:!0,className:n.className,onClick:n.onClick,variant:n.variant??"ghost",size:n.size??"sm",children:e.jsx(o,{to:n.to,children:n.children})})}function w(n){const[l,i]=h.useState(!1),m=h.useRef(null),k=()=>{var a;i(!1),(a=m.current)==null||a.focus()},f=()=>{i(a=>!a)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("nav",{className:"hidden items-center lg:flex",children:n.children.map(a=>h.createElement(x,{...a.props,key:j()}))}),e.jsx(t,{size:"icon",variant:"ghost",asChild:!0,className:"inline-flex items-center justify-center","aria-label":"Szukaj",title:"Szukaj",children:e.jsxs(o,{to:"/search",children:[e.jsx("span",{className:"sr-only",children:"Szukaj"}),e.jsx(b,{className:"h-6"})]})}),e.jsx(N,{hideLabels:!0}),e.jsxs(t,{size:"icon",ref:m,onClick:f,className:u("inline-flex items-center justify-center relative z-50 lg:hidden",l&&"dark"),variant:"link","aria-label":l?"Zamknij menu":"Otwórz menu",title:l?"Zamknij menu":"Otwórz menu",children:[e.jsx("span",{className:"sr-only",children:l?"Zamknij menu":"Otwórz menu"}),l?e.jsx(v,{className:"!text-white h-6"}):e.jsx(y,{className:"h-6 !text-black"})]})]}),e.jsx(L,{show:l,children:e.jsx("nav",{className:u("flex flex-col gap-1 justify-center items-center fixed inset-0 dark bg-background text-foreground z-40 lg:hidden","transition-[transform,opacity,visibility] duration-150","data-[closed]:opacity-0 data-[closed]:invisible","data-[enter]:translate-y-0 data-[enter]:data-[closed]:translate-y-10"),children:n.children.map(a=>h.createElement(x,{...a.props,key:j(),size:"lg",onClick:k}))})})]})}function s(n){return e.jsx("header",{className:"sticky bg-background top-0 left-0 z-50 lg:relative",children:e.jsx("div",{className:"container pb-3 pt-4 flex justify-between items-center px-3 lg:py-6",children:n.children})})}s.Link=x;s.Menu=w;function _(n){return e.jsx(t,{asChild:!0,variant:"link",size:"sm",className:"no-underline hover:underline",children:e.jsx(o,{to:n.to,children:n.children})})}function r(n){return e.jsx("footer",{className:"prose max-w-full border-t",children:e.jsxs("div",{className:"container flex items-center gap-3 justify-start flex-wrap-reverse lg:justify-between",children:[e.jsxs("p",{className:"xl:text-sm",children:["© ",p()," ",e.jsx(o,{to:"/",children:"jakubszpil"})]}),e.jsx("nav",{className:"flex items-center flex-wrap -ml-3",children:n.children})]})})}r.Link=_;function R(n){return e.jsxs(e.Fragment,{children:[e.jsxs(s,{children:[e.jsx(s.Link,{className:"font-bold",to:"/",children:"jakubszpil"}),e.jsxs(s.Menu,{children:[e.jsx(s.Link,{to:"/",children:"🏠 Strona główna"}),e.jsx(s.Link,{to:"/blog",children:"📝 Blog"}),e.jsx(s.Link,{to:"/learning",children:"🏫 Learning"}),e.jsx(s.Link,{to:"/portfolio",children:"🛠️ Portfolio"}),e.jsx(s.Link,{to:"/me",children:"🙋‍♂️ O mnie"})]})]}),e.jsx("main",{children:n.children}),e.jsxs(r,{children:[e.jsx(r.Link,{to:"/",children:"🏠 Strona główna"}),e.jsx(r.Link,{to:"/blog",children:"📝 Blog"}),e.jsx(r.Link,{to:"/learning",children:"🏫 Learning"}),e.jsx(r.Link,{to:"/portfolio",children:"🛠️ Portfolio"}),e.jsx(r.Link,{to:"/me",children:"🙋‍♂️ O mnie"}),e.jsx(r.Link,{to:"/search",children:"🔍 Wyszukaj"})]})]})}function I(){const n=g();return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Oops! Strona nie została znaleziona 🙁 (404)"}),e.jsx("p",{children:"Przepraszam, ale strona, której szukasz, nie istnieje. Może to być spowodowane jednym z poniższych powodów:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Adres strony został wpisany niepoprawnie."}),e.jsx("li",{children:"Strona została przeniesiona lub usunięta."}),e.jsx("li",{children:"Link może być nieaktualny."})]}),e.jsx("p",{children:e.jsx("strong",{children:"Co możesz teraz zrobić?"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx(t,{asChild:!0,size:"sm",variant:"link",className:"text-base no-underline hover:underline",children:e.jsx(o,{replace:!0,to:n.pathname,children:"🤔 Sprawdź adres URL"})}),"- Upewnij się, że wpisany adres jest poprawny."]}),e.jsxs("li",{children:[e.jsx(t,{asChild:!0,size:"sm",variant:"link",className:"text-base no-underline hover:underline",children:e.jsx(o,{replace:!0,to:"/",children:"🏠 Przejdź do strony głównej"})}),"- Kliknij tutaj aby wrócić na stronę główną."]}),e.jsxs("li",{children:[e.jsx(t,{asChild:!0,size:"sm",variant:"link",className:"text-base no-underline hover:underline",children:e.jsx(o,{replace:!0,to:"/search",children:"🔍 Szukaj"})}),"- Skorzystaj z wyszukiwarki, aby znaleźć potrzebne informacje."]})]}),e.jsx("p",{children:"Dziękuję za zrozumienie i przepraszam za wszelkie niedogodności!"})]})}export{R as L,I as N,N as S,P as r};
