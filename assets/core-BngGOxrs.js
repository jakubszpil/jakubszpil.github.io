const __vite__fileDeps=["assets/pages/home-DpEXbPw4.js","assets/vendor/react-DtcCowca.js","assets/index--lLcnNHB.js","assets/vendor/routing-BKIj40I1.js","assets/vendor/libs-BizHLOBV.js","assets/shared-C6n8mrAM.js","assets/modules/articles-C0LZSND7.js","assets/content/articles/dependency-injection-kontra-typescript-J3xuld3v.js","assets/content/articles/obserwatorium-czyli-wzorzec-projektowy-obserwatora-JM83ArLk.js","assets/content/articles/signalizacja-czyli-koncept-signals-w-typescript-BkEXviKK.js","assets/modules/courses-hXxrl4Rh.js","assets/content/courses/nowoczesny-javascript-0VhTU8dc.js","assets/content/courses/semantyczny-html-DAC5wx7T.js","assets/content/courses/szybszy-css-czyli-wprowadzenie-do-bem-0gbxvLAe.js","assets/content/courses/wprowadzenie-do-css-CVGbNyX8.js","assets/content/courses/wprowadzenie-do-dom-CK1H7bM8.js","assets/content/courses/wprowadzenie-do-html-BEbTkkD-.js","assets/content/courses/wprowadzenie-do-javascript-0Bz9Jok0.js","assets/modules/projects-ZpBJWrJA.js","assets/index-bHvMkY2M.css","assets/pages/search-DorBRKZw.js","assets/pages/about-gajryzL5.js","assets/pages/not-found-D6Z84YUR.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as c}from"./index--lLcnNHB.js";import{c as d,u as z,B as t,a as u}from"./shared-C6n8mrAM.js";import{j as e,r as h}from"./vendor/react-DtcCowca.js";import{L as o,u as p}from"./vendor/routing-BKIj40I1.js";import{c as j,I as g,a as b,b as y,X as v}from"./vendor/libs-BizHLOBV.js";const O=[d("").addModule(()=>c(()=>import("./pages/home-DpEXbPw4.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]))),d("search").addModule(()=>c(()=>import("./pages/search-DorBRKZw.js"),__vite__mapDeps([20,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]))),d("me").addModule(()=>c(()=>import("./pages/about-gajryzL5.js"),__vite__mapDeps([21,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]))),d("*").addModule(()=>c(()=>import("./pages/not-found-D6Z84YUR.js"),__vite__mapDeps([22,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19])))];function L(n){return z().socials.map(i=>e.jsx(t,{asChild:!0,size:n.hideLabels?"icon":"sm",variant:n.variant??"ghost",className:"inline-flex items-center gap-1 no-underline",title:i.label,"aria-label":i.label,children:e.jsxs("a",{href:i.href,target:"_blank",children:[e.jsx(i.icon,{}),e.jsx("span",{className:j(n.hideLabels&&"sr-only"),children:i.label})]})},u()))}function x(n){return e.jsx(t,{asChild:!0,className:n.className,onClick:n.onClick,variant:n.variant??"ghost",size:n.size??"sm",children:e.jsx(o,{to:n.to,children:n.children})})}function N(n){const[l,i]=h.useState(!1),m=h.useRef(null),k=()=>{var a;i(!1),(a=m.current)==null||a.focus()},f=()=>{i(a=>!a)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("nav",{className:"hidden items-center lg:flex",children:n.children.map(a=>h.createElement(x,{...a.props,key:u()}))}),e.jsx(t,{size:"icon",variant:"ghost",asChild:!0,className:"inline-flex items-center justify-center","aria-label":"Szukaj",title:"Szukaj",children:e.jsxs(o,{to:"/search",children:[e.jsx("span",{className:"sr-only",children:"Szukaj"}),e.jsx(g,{className:"h-6"})]})}),e.jsx(L,{hideLabels:!0}),e.jsxs(t,{size:"icon",ref:m,onClick:f,className:j("inline-flex items-center justify-center relative z-50 lg:hidden",l&&"dark"),variant:"link","aria-label":l?"Zamknij menu":"Otwórz menu",title:l?"Zamknij menu":"Otwórz menu",children:[e.jsx("span",{className:"sr-only",children:l?"Zamknij menu":"Otwórz menu"}),l?e.jsx(b,{className:"!text-white h-6"}):e.jsx(y,{className:"h-6 !text-black"})]})]}),e.jsx(v,{show:l,children:e.jsx("nav",{className:j("flex flex-col gap-1 justify-center items-center fixed inset-0 dark bg-background text-foreground z-40 lg:hidden","transition-[transform,opacity,visibility] duration-150","data-[closed]:opacity-0 data-[closed]:invisible","data-[enter]:translate-y-0 data-[enter]:data-[closed]:translate-y-10"),children:n.children.map(a=>h.createElement(x,{...a.props,key:u(),size:"lg",onClick:k}))})})]})}function s(n){return e.jsx("header",{className:"sticky bg-background top-0 left-0 z-50 lg:relative",children:e.jsx("div",{className:"container pb-3 pt-4 flex justify-between items-center px-3 lg:py-6",children:n.children})})}s.Link=x;s.Menu=N;function w(n){return e.jsx(t,{asChild:!0,variant:"link",size:"sm",className:"no-underline hover:underline",children:e.jsx(o,{to:n.to,children:n.children})})}function r(n){return e.jsx("footer",{className:"prose max-w-full border-t",children:e.jsxs("div",{className:"container flex items-center gap-3 justify-start flex-wrap-reverse lg:justify-between",children:[e.jsxs("p",{className:"xl:text-sm",children:["© ",new Date().getFullYear()," ",e.jsx(o,{to:"/",children:"jakubszpil"})]}),e.jsx("nav",{className:"flex items-center flex-wrap -ml-3",children:n.children})]})})}r.Link=w;function P(n){return e.jsxs(e.Fragment,{children:[e.jsxs(s,{children:[e.jsx(s.Link,{className:"font-bold",to:"/",children:"jakubszpil"}),e.jsxs(s.Menu,{children:[e.jsx(s.Link,{to:"/",children:"🏠 Strona główna"}),e.jsx(s.Link,{to:"/blog",children:"📝 Blog"}),e.jsx(s.Link,{to:"/learning",children:"🏫 Learning"}),e.jsx(s.Link,{to:"/portfolio",children:"🛠️ Portfolio"}),e.jsx(s.Link,{to:"/me",children:"🙋‍♂️ O mnie"})]})]}),e.jsx("main",{children:n.children}),e.jsxs(r,{children:[e.jsx(r.Link,{to:"/",children:"🏠 Strona główna"}),e.jsx(r.Link,{to:"/blog",children:"📝 Blog"}),e.jsx(r.Link,{to:"/learning",children:"🏫 Learning"}),e.jsx(r.Link,{to:"/portfolio",children:"🛠️ Portfolio"}),e.jsx(r.Link,{to:"/me",children:"🙋‍♂️ O mnie"}),e.jsx(r.Link,{to:"/search",children:"🔍 Wyszukaj"})]})]})}function R(){const n=p();return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Oops! Strona nie została znaleziona 🙁 (404)"}),e.jsx("p",{children:"Przepraszam, ale strona, której szukasz, nie istnieje. Może to być spowodowane jednym z poniższych powodów:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Adres strony został wpisany niepoprawnie."}),e.jsx("li",{children:"Strona została przeniesiona lub usunięta."}),e.jsx("li",{children:"Link może być nieaktualny."})]}),e.jsx("p",{children:e.jsx("strong",{children:"Co możesz teraz zrobić?"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx(t,{asChild:!0,size:"sm",variant:"link",className:"text-base no-underline hover:underline",children:e.jsx(o,{replace:!0,to:n.pathname,children:"🤔 Sprawdź adres URL"})}),"- Upewnij się, że wpisany adres jest poprawny."]}),e.jsxs("li",{children:[e.jsx(t,{asChild:!0,size:"sm",variant:"link",className:"text-base no-underline hover:underline",children:e.jsx(o,{replace:!0,to:"/",children:"🏠 Przejdź do strony głównej"})}),"- Kliknij tutaj aby wrócić na stronę główną."]}),e.jsxs("li",{children:[e.jsx(t,{asChild:!0,size:"sm",variant:"link",className:"text-base no-underline hover:underline",children:e.jsx(o,{replace:!0,to:"/search",children:"🔍 Szukaj"})}),"- Skorzystaj z wyszukiwarki, aby znaleźć potrzebne informacje."]})]}),e.jsx("p",{children:"Dziękuję za zrozumienie i przepraszam za wszelkie niedogodności!"})]})}export{P as L,R as N,L as S,O as r};