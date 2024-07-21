const __vite__fileDeps=["assets/pages/home-Lqi8fOkk.js","assets/vendor/react-gCMm95E7.js","assets/index-CdEL2L_T.js","assets/vendor/routing-D8bEdgx2.js","assets/vendor/libs-BXnLyxX4.js","assets/shared-C7U4w3GM.js","assets/modules/articles-B9wwq4Zf.js","assets/modules/courses-DhNmREiM.js","assets/modules/projects-Bl1idXuN.js","assets/index-6QAAIp2R.css","assets/pages/search-BLnX61uM.js","assets/pages/about-CFKeXvWB.js","assets/pages/not-found-EiQkjE_K.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as c}from"./index-CdEL2L_T.js";import{c as d,u as z,B as t,L as o,g as p}from"./shared-C7U4w3GM.js";import{j as e,r as h}from"./vendor/react-gCMm95E7.js";import{c as u,v as x,I as g,a as b,b as v,X as L}from"./vendor/libs-BXnLyxX4.js";import{L as y,u as N}from"./vendor/routing-D8bEdgx2.js";const I=[d("").addModule(()=>c(()=>import("./pages/home-Lqi8fOkk.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]))).setIndex(!0),d("search").addModule(()=>c(()=>import("./pages/search-BLnX61uM.js"),__vite__mapDeps([10,1,2,3,4,5,6,7,8,9]))),d("me").addModule(()=>c(()=>import("./pages/about-CFKeXvWB.js"),__vite__mapDeps([11,1,2,3,4,5,6,7,8,9]))),d("*").addModule(()=>c(()=>import("./pages/not-found-EiQkjE_K.js"),__vite__mapDeps([12,1,2,3,4,5,6,7,8,9])))];function w(n){return z().socials.map(i=>e.jsx(t,{asChild:!0,size:n.hideLabels?"icon":"sm",variant:n.variant??"ghost",className:"inline-flex items-center gap-1 no-underline",title:i.label,"aria-label":i.label,children:e.jsxs("a",{href:i.href,target:"_blank",children:[e.jsx(i.icon,{}),e.jsx("span",{className:u(n.hideLabels&&"sr-only"),children:i.label})]})},x()))}function j(n){return e.jsx(t,{asChild:!0,className:n.className,onClick:n.onClick,variant:n.variant??"ghost",size:n.size??"sm",children:e.jsx(o,{to:n.to,children:n.children})})}function _(n){const[l,i]=h.useState(!1),m=h.useRef(null),f=()=>{var a;i(!1),(a=m.current)==null||a.focus()},k=()=>{i(a=>!a)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("nav",{className:"hidden items-center lg:flex",children:n.children.map(a=>h.createElement(j,{...a.props,key:x()}))}),e.jsx(t,{size:"icon",variant:"ghost",asChild:!0,className:"inline-flex items-center justify-center","aria-label":"Szukaj",title:"Szukaj",children:e.jsxs(o,{to:"/search",children:[e.jsx("span",{className:"sr-only",children:"Szukaj"}),e.jsx(g,{className:"h-6"})]})}),e.jsx(w,{hideLabels:!0}),e.jsxs(t,{size:"icon",ref:m,onClick:k,className:u("inline-flex items-center justify-center relative z-50 lg:hidden",l&&"dark"),variant:"link","aria-label":l?"Zamknij menu":"Otwórz menu",title:l?"Zamknij menu":"Otwórz menu",children:[e.jsx("span",{className:"sr-only",children:l?"Zamknij menu":"Otwórz menu"}),l?e.jsx(b,{className:"!text-white h-6"}):e.jsx(v,{className:"h-6 !text-black"})]})]}),e.jsx(L,{show:l,children:e.jsx("nav",{className:u("flex flex-col gap-1 justify-center items-center fixed inset-0 dark bg-background text-foreground z-40 lg:hidden","transition-[transform,opacity,visibility] duration-150","data-[closed]:opacity-0 data-[closed]:invisible","data-[enter]:translate-y-0 data-[enter]:data-[closed]:translate-y-10"),children:n.children.map(a=>h.createElement(j,{...a.props,key:x(),size:"lg",onClick:f}))})})]})}function s(n){return e.jsx("header",{className:"fixed w-full bg-background top-0 left-0 z-50 h-[68px] lg:relative lg:h-auto",children:e.jsx("div",{className:"container pb-3 pt-4 flex justify-between items-center px-3 lg:py-6",children:n.children})})}s.Link=j;s.Menu=_;function S(n){return e.jsx(t,{asChild:!0,variant:"link",size:"sm",className:"no-underline hover:underline",children:e.jsx(o,{to:n.to,children:n.children})})}function r(n){return e.jsx("footer",{className:"prose max-w-full border-t",children:e.jsxs("div",{className:"container flex items-center gap-3 justify-start flex-wrap-reverse lg:justify-between",children:[e.jsxs("p",{className:"xl:text-sm",children:["© ",p()," ",e.jsx(y,{to:"/",children:"jakubszpil"})]}),e.jsx("nav",{className:"flex items-center flex-wrap -ml-3",children:n.children})]})})}r.Link=S;function R(n){return e.jsxs(e.Fragment,{children:[e.jsxs(s,{children:[e.jsx(s.Link,{className:"font-bold",to:"/",children:"jakubszpil"}),e.jsxs(s.Menu,{children:[e.jsx(s.Link,{to:"/",children:"🏠 Strona główna"}),e.jsx(s.Link,{to:"/blog",children:"📝 Blog"}),e.jsx(s.Link,{to:"/learning",children:"🏫 Learning"}),e.jsx(s.Link,{to:"/portfolio",children:"🛠️ Portfolio"}),e.jsx(s.Link,{to:"/me",children:"🙋‍♂️ O mnie"})]})]}),e.jsx("main",{className:"mt-[68px] lg:mt-auto",children:n.children}),e.jsxs(r,{children:[e.jsx(r.Link,{to:"/",children:"🏠 Strona główna"}),e.jsx(r.Link,{to:"/blog",children:"📝 Blog"}),e.jsx(r.Link,{to:"/learning",children:"🏫 Learning"}),e.jsx(r.Link,{to:"/portfolio",children:"🛠️ Portfolio"}),e.jsx(r.Link,{to:"/me",children:"🙋‍♂️ O mnie"}),e.jsx(r.Link,{to:"/search",children:"🔍 Szukaj"})]})]})}function F(){const n=N();return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Oops! Strona nie została znaleziona 🙁 (404)"}),e.jsx("p",{children:"Przepraszam, ale strona, której szukasz, nie istnieje. Może to być spowodowane jednym z poniższych powodów:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Adres strony został wpisany niepoprawnie."}),e.jsx("li",{children:"Strona została przeniesiona lub usunięta."}),e.jsx("li",{children:"Link może być nieaktualny."})]}),e.jsx("p",{children:e.jsx("strong",{children:"Co możesz teraz zrobić?"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx(t,{asChild:!0,size:"sm",variant:"link",className:"text-base no-underline hover:underline",children:e.jsx(o,{replace:!0,to:n.pathname,children:"🤔 Sprawdź adres URL"})}),"- Upewnij się, że wpisany adres jest poprawny."]}),e.jsxs("li",{children:[e.jsx(t,{asChild:!0,size:"sm",variant:"link",className:"text-base no-underline hover:underline",children:e.jsx(o,{replace:!0,to:"/",children:"🏠 Przejdź do strony głównej"})}),"- Kliknij tutaj aby wrócić na stronę główną."]}),e.jsxs("li",{children:[e.jsx(t,{asChild:!0,size:"sm",variant:"link",className:"text-base no-underline hover:underline",children:e.jsx(o,{replace:!0,to:"/search",children:"🔍 Szukaj"})}),"- Skorzystaj z wyszukiwarki, aby znaleźć potrzebne informacje."]})]}),e.jsx("p",{children:"Dziękuję za zrozumienie i przepraszam za wszelkie niedogodności!"})]})}export{R as L,F as N,w as S,I as r};
