import{r as i,j as e}from"./react-vvBGimMH.js";import{a as j,u as V,g as T,b as X}from"./utils-BP33bPXo.js";import{m as Z,L as I,a as R,b as _}from"./routing-CpIhnanH.js";import{c as J,S as Q,I as ee,a as te,b as ae,H as ne,v as k,d as se,e as M,f as ie,g as D,P as re,C as A,h as E,i as P,j as K,k as oe,R as B,l as le,L as $,m as F,n as ce,T as de,o as H,p as G,q as ue,r as me,s as he,t as xe,X as fe}from"./runtime-6LeYYcLH.js";const je=J("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover-available:hover:bg-primary/90 hover-unavailable:active:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover-available:hover:bg-destructive/90 hover-unavailable:active:bg-destructive/90",outline:"border border-input bg-background hover-available:hover:bg-accent hover-available:hover:text-accent-foreground hover-unavailable:active:bg-accent hover-unavailable:active:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover-available:hover:bg-secondary/80 hover-unavailable:active:bg-secondary/80",ghost:"hover-available:hover:bg-accent hover-available:hover:text-accent-foreground hover-unavailable:active:bg-accent hover-unavailable:active:text-accent-foreground",link:"text-primary no-underline underline-offset-4 hover-available:hover:underline hover-unavailable:active:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),o=i.forwardRef(({className:t,variant:a,size:n,asChild:s=!1,...l},c)=>{const u=s?Q:"button";return e.jsx(u,{className:j(je({variant:a,size:n,className:t})),ref:c,...l})});o.displayName="Button";function m({prefetch:t="intent",...a}){const{routes:n}=V(),[s,l]=i.useState(!1),c=i.useCallback(()=>{var g;s||((g=Z(n,a.to))==null||g.forEach(x=>{var r,N;const h=new URL(`${window.location.origin}${x.pathname}`),d={params:x.params,request:new Request(h)};x.route.loader instanceof Function&&x.route.loader(d),(N=(r=x.route).lazy)==null||N.call(r).then(C=>{C.loader instanceof Function&&C.loader(d)})}),l(!0))},[s,a.to,n]),u=i.useMemo(()=>{let g=null;const x=()=>{g=setTimeout(c,300)},h=()=>{g!==null&&(clearTimeout(g),g=null)};return t==="intent"?{onClick:d=>{var r;c(),(r=a.onClick)==null||r.call(a,d)},onTouchStartCapture:d=>{var r;c(),(r=a.onTouchStartCapture)==null||r.call(a,d)},onTouchStart:d=>{var r;c(),(r=a.onTouchStart)==null||r.call(a,d)},onMouseEnter:d=>{var r;x(),(r=a.onMouseEnter)==null||r.call(a,d)},onMouseLeave:d=>{var r;h(),(r=a.onMouseLeave)==null||r.call(a,d)},onFocus:d=>{var r;x(),(r=a.onFocus)==null||r.call(a,d)},onBlur:d=>{var r;h(),(r=a.onBlur)==null||r.call(a,d)}}:{}},[t,c,a]);return e.jsx(I,{...a,...u})}function Be(t){return e.jsx("section",{className:`container pt-0 prose grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 ${t.className??""}`,children:t.articles.map(a=>e.jsx(o,{asChild:!0,variant:t.variant??"outline",className:"inline-flex flex-col items-start justify-start text-left h-auto w-auto text-wrap !no-underline truncate p-6",children:e.jsxs(m,{to:`/blog/${a.slug}`,state:t.locationState,children:[e.jsx("h2",{className:"line-clamp-3 text-base font-semibold flex-1 m-0",children:a.title}),e.jsx("p",{className:"line-clamp-3 mt-2 text-neutral-700 font-normal dark:text-neutral-300",children:a.description}),a.createdAt&&e.jsx("span",{className:"text-neutral-600 text-xs dark:text-neutral-400",children:T(a.createdAt)})]})},a.id))})}function $e(t){return e.jsx("section",{className:`container pt-0 prose grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 ${t.className??""}`,children:t.courses.map(a=>e.jsx(o,{asChild:!0,variant:t.variant??"outline",className:"inline-flex flex-col items-start justify-start text-left h-auto w-auto text-wrap !no-underline truncate p-6",children:e.jsxs(m,{to:`/learning/${a.slug}`,state:t.locationState,children:[e.jsx("h2",{className:"line-clamp-3 text-base font-semibold flex-1 m-0",children:a.title}),e.jsx("p",{className:"line-clamp-3 mt-2 text-neutral-700 font-normal dark:text-neutral-300",children:a.description}),a.createdAt&&e.jsx("span",{className:"text-neutral-600 text-xs dark:text-neutral-400",children:T(a.createdAt)})]})},a.id))})}const w={socials:[{href:"https://www.linkedin.com/in/jakubszpil/",label:"LinkedIn",icon:ee},{href:"https://github.com/jakubszpil/",label:"GitHub",icon:te},{href:"https://github.com/jakubszpil/jakubszpil.github.io/discussions/categories/q-a",label:"Q&A",icon:ae}],meta:{defaultTitle:"Trwa ładowanie",description:"Cześć, jestem Kuba, jestem frontend developerem. Witaj na mojej stronie, gdzie znajdziesz blog z artykułami, głównie o tematyce frontendowej, sekcję z kursami, dzięki którym nabędziesz wiedzę i doświadczenie z frontu, jak i portfolio, które przywita Cię moimi ostatnimi projektami. Bon vojage! 🚢"}};function ge(){const t=[];return{addProperty(a,n){return n&&t.push({property:a,content:n}),this},addTag(a,n){return n&&t.push({name:a,content:n}),this},build(){return t}}}const be=t=>{const a=t.title??w.meta.defaultTitle,n=t.description??w.meta.description,s=i.useMemo(()=>{var l;return ge().addTag("description",n).addTag("keywords",(l=t.keywords)==null?void 0:l.join(",")).addProperty("og:title",a).addProperty("og:description",n).addProperty("twitter:title",a).addProperty("twitter:description",n).build()},[n,t.keywords,a]);return e.jsx(ne,{title:a,meta:s})},ve=i.forwardRef(({className:t,type:a,...n},s)=>e.jsx("input",{type:a,className:j("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:s,...n}));ve.displayName="Input";function L(t){return w.socials.map(a=>e.jsx(o,{asChild:!0,size:t.hideLabels?"icon":"sm",variant:t.variant??"ghost",className:"inline-flex items-center gap-1 no-underline",title:a.label,"aria-label":a.label,children:e.jsxs("a",{href:a.href,target:"_blank",rel:"noreferrer",children:[e.jsx(a.icon,{className:"h-6"}),e.jsx("span",{className:`${t.hideLabels?"sr-only":""}`,children:a.label})]})},k()))}function Fe(t){var n;const a=i.useCallback((s,l)=>e.jsx(o,{asChild:!0,variant:"secondary",size:"sm",className:"!no-underline lowercase",children:e.jsxs(m,{to:l,children:["#",s]})},s),[]);return e.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[t.showAllCategory&&a("wszystko","/blog"),(n=t.categories)==null?void 0:n.map(s=>a(s,`/blog/kategorie/${s}`))]})}function He(){const t=R(),a=_(),n=t.state;return!(n!=null&&n.label)||!(n!=null&&n.pathname)?null:e.jsx(o,{asChild:!0,variant:"link",size:"sm",className:"-ml-3 mb-3 inline-flex gap-2",children:e.jsxs(m,{to:n.pathname,onClick:s=>{s.preventDefault(),a(-1)},children:[e.jsx(se,{className:"h-5"})," ",n.label]})})}function Ge(t){return t.resourceUrl?e.jsx("div",{className:"container",children:e.jsx(o,{asChild:!0,variant:"secondary",size:"lg",className:"w-full p-10 text-wrap flex-wrap h-auto text-center gap-y-4",children:e.jsxs("p",{children:["Widzisz jakiś błąd, bądź literówkę? Chcesz coś poprawić?",e.jsx(o,{asChild:!0,variant:"link",children:e.jsx("a",{href:t.resourceUrl,target:"_blank",rel:"noreferrer",children:"✏️ Przejdź do edycji tego pliku"})})]})})}):null}function Oe(t){var n;const a=i.useCallback((s,l)=>e.jsx(o,{asChild:!0,variant:"secondary",size:"sm",className:"!no-underline lowercase",children:e.jsxs(m,{to:l,children:["#",s]})},s),[]);return e.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[t.showAllCategory&&a("wszystko","/learning"),(n=t.categories)==null?void 0:n.map(s=>a(s,`/learning/kategorie/${s}`))]})}function Ue(){return e.jsxs("header",{className:"prose container",children:[e.jsx("h1",{children:"Strona, której szukasz, jest jeszcze niedostępna."}),e.jsx("p",{children:"Wróć tutaj za jakiś czas 😜"}),e.jsx(o,{asChild:!0,variant:"secondary",className:"no-underline",size:"sm",children:e.jsx(m,{to:"/",children:"Powrót do strony głównej"})})]})}var v=(t=>(t.LIGHT="LIGHT",t.DARK="DARK",t.SYSTEM="SYSTEM",t))(v||{});function pe(t){return Object.values(v).includes(t)}function O(){const t=localStorage.getItem("theme");return t&&pe(t)?t:"SYSTEM"}function U(t){return t==="SYSTEM"?window.matchMedia("(prefers-color-scheme: dark)").matches?"DARK":"LIGHT":t==="DARK"?"DARK":"LIGHT"}function S(t){localStorage.setItem("theme",t)}const y=O(),Y=i.createContext({theme:y,resolvedTheme:U(y),setTheme:()=>{}});function ke(t){const[a,n]=i.useState(O()),s=i.useMemo(()=>U(a),[a]),l=i.useCallback(c=>{n(c),S(c)},[]);return i.useEffect(()=>{s==="DARK"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark");const c=new AbortController,u=s==="DARK"?"LIGHT":"DARK",g=h=>{(h.metaKey||h.ctrlKey)&&h.key==="k"&&(h.preventDefault(),document.documentElement.classList.add("switching-theme"),n(u),S(u))},x=h=>{document.documentElement.classList.contains("switching-theme")&&(h.preventDefault(),document.documentElement.classList.remove("switching-theme"))};return document.addEventListener("keydown",g,{signal:c.signal}),document.addEventListener("keyup",x,{signal:c.signal}),()=>c.abort()},[s]),e.jsx(Y.Provider,{value:{theme:y,resolvedTheme:s,setTheme:l},children:t.children})}function we(){return i.useContext(Y)}function z(t){return e.jsx(o,{asChild:!0,className:t.className,onClick:t.onClick,variant:t.variant??"ghost",size:t.size??"sm",children:e.jsx(m,{to:t.to,children:t.children})})}const ye=ce,ze=de,Ne=i.forwardRef(({className:t,inset:a,children:n,...s},l)=>e.jsxs(M,{ref:l,className:j("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",a&&"pl-8",t),...s,children:[n,e.jsx(ie,{className:"ml-auto h-4 w-4"})]}));Ne.displayName=M.displayName;const Ce=i.forwardRef(({className:t,...a},n)=>e.jsx(D,{ref:n,className:j("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...a}));Ce.displayName=D.displayName;const W=i.forwardRef(({className:t,sideOffset:a=4,...n},s)=>e.jsx(re,{children:e.jsx(A,{ref:s,sideOffset:a,className:j("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...n})}));W.displayName=A.displayName;const p=i.forwardRef(({className:t,inset:a,...n},s)=>e.jsx(E,{ref:s,className:j("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a&&"pl-8",t),...n}));p.displayName=E.displayName;const Le=i.forwardRef(({className:t,children:a,checked:n,...s},l)=>e.jsxs(P,{ref:l,className:j("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t),checked:n,...s,children:[e.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:e.jsx(K,{children:e.jsx(oe,{className:"h-4 w-4"})})}),a]}));Le.displayName=P.displayName;const Se=i.forwardRef(({className:t,children:a,...n},s)=>e.jsxs(B,{ref:s,className:j("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t),...n,children:[e.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:e.jsx(K,{children:e.jsx(le,{className:"h-2 w-2 fill-current"})})}),a]}));Se.displayName=B.displayName;const q=i.forwardRef(({className:t,inset:a,...n},s)=>e.jsx($,{ref:s,className:j("px-2 py-1.5 text-sm font-semibold",a&&"pl-8",t),...n}));q.displayName=$.displayName;const Te=i.forwardRef(({className:t,...a},n)=>e.jsx(F,{ref:n,className:j("-mx-1 my-1 h-px bg-muted",t),...a}));Te.displayName=F.displayName;const Ie={LIGHT:H,DARK:G};function Re(){const{resolvedTheme:t,setTheme:a}=we(),n=i.useMemo(()=>Ie[t],[t]);return e.jsxs(ye,{onOpenChange:s=>{s?document.documentElement.classList.add("switching-theme"):document.documentElement.classList.remove("switching-theme")},children:[e.jsx(ze,{asChild:!0,children:e.jsx(o,{title:"Zmień motyw",size:"icon",variant:"ghost",children:e.jsx(n,{className:"h-6"})})}),e.jsxs(W,{children:[e.jsx(q,{children:"Wybierz motyw"}),e.jsxs(p,{className:"cursor-pointer",onClick:()=>a(v.LIGHT),children:[e.jsx(H,{className:"mr-2"})," Jasny"]}),e.jsxs(p,{className:"cursor-pointer",onClick:()=>a(v.DARK),children:[e.jsx(G,{className:"mr-2"})," Ciemny"]}),e.jsxs(p,{className:"cursor-pointer",onClick:()=>a(v.SYSTEM),children:[e.jsx(ue,{className:"mr-2"})," System"]})]})]})}function Me(t){const[a,n]=i.useState(!1),s=i.useRef(null),l=i.useCallback(()=>{var u;n(!1),(u=s.current)==null||u.focus()},[]),c=i.useCallback(()=>{n(u=>!u)},[]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center sm:gap-1",children:[e.jsx("nav",{className:"hidden items-center lg:flex",children:t.children.map(u=>i.createElement(z,{...u.props,key:k()}))}),e.jsx(o,{size:"icon",variant:"ghost",asChild:!0,className:"inline-flex items-center justify-center","aria-label":"Szukaj",title:"Szukaj",children:e.jsxs(m,{to:"/search",children:[e.jsx("span",{className:"sr-only",children:"Szukaj"}),e.jsx(me,{className:"h-6"})]})}),e.jsx("div",{className:"hidden xs:flex items-center sm:gap-1",children:e.jsx(L,{hideLabels:!0})}),e.jsx(Re,{}),e.jsxs(o,{size:"icon",ref:s,onClick:c,className:`inline-flex items-center justify-center relative z-50 lg:hidden${a?" dark":""}`,variant:"link","aria-label":a?"Zamknij menu":"Otwórz menu",children:[e.jsx("span",{className:"sr-only",children:a?"Zamknij menu":"Otwórz menu"}),a?e.jsx(he,{className:"!text-white h-6"}):e.jsx(xe,{className:"h-6 !text-black dark:!text-white"})]})]}),e.jsx(fe,{show:a,children:e.jsxs("nav",{className:"flex flex-col gap-1 justify-center items-center fixed inset-0 dark bg-background text-foreground z-40 lg:hidden transition-[transform,opacity,visibility] duration-150 data-[closed]:opacity-0 data-[closed]:invisible data-[enter]:translate-y-0 data-[enter]:data-[closed]:translate-y-10",children:[t.children.map(u=>i.createElement(z,{...u.props,key:k(),size:"lg",onClick:l})),e.jsx("div",{className:"flex absolute bottom-20 gap-3 xs:hidden",children:e.jsx(L,{hideLabels:!0})})]})})]})}function f(t){return e.jsx("header",{className:"sticky w-full bg-background top-0 left-0 z-50 lg:relative",children:e.jsx("div",{className:"container pb-3 pt-4 flex justify-between items-center px-3 lg:py-6",children:t.children})})}f.Link=z;f.Menu=Me;function De(t){return e.jsx(o,{asChild:!0,variant:"link",size:"sm",children:e.jsx(m,{to:t.to,children:t.children})})}function b(t){return e.jsx("footer",{className:"prose max-w-full border-t",children:e.jsxs("div",{className:"container flex items-center gap-3 justify-start flex-wrap-reverse lg:justify-between",children:[e.jsxs("p",{className:"xl:text-sm",children:["© ",X(),e.jsx(o,{asChild:!0,variant:"link",size:"sm",children:e.jsx(I,{to:"/",children:"jakubszpil"})})]}),e.jsx("nav",{className:"flex items-center flex-wrap -ml-3",children:t.children})]})})}b.Link=De;function Ye(t){return e.jsxs(ke,{children:[e.jsxs(f,{children:[e.jsx(f.Link,{className:"font-bold",to:"/",children:"jakubszpil"}),e.jsxs(f.Menu,{children:[e.jsx(f.Link,{to:"/",children:"🏠 Strona główna"}),e.jsx(f.Link,{to:"/blog",children:"📝 Blog"}),e.jsx(f.Link,{to:"/learning",children:"🏫 Learning"}),e.jsx(f.Link,{to:"/portfolio",children:"🛠️ Portfolio"}),e.jsx(f.Link,{to:"/me",children:"🙋‍♂️ O mnie"})]})]}),e.jsx("main",{children:t.children}),e.jsxs(b,{children:[e.jsx(b.Link,{to:"/",children:"🏠 Strona główna"}),e.jsx(b.Link,{to:"/blog",children:"📝 Blog"}),e.jsx(b.Link,{to:"/learning",children:"🏫 Learning"}),e.jsx(b.Link,{to:"/portfolio",children:"🛠️ Portfolio"}),e.jsx(b.Link,{to:"/me",children:"🙋‍♂️ O mnie"}),e.jsx(b.Link,{to:"/search",children:"🔍 Szukaj"})]})]})}function We(){const t=R();return e.jsxs(e.Fragment,{children:[e.jsx(be,{title:"404: Nie znaleziono strony"}),e.jsx("h1",{children:"Oops! Strona nie została znaleziona 🙁 (404)"}),e.jsx("p",{children:"Przepraszam, ale strona, której szukasz, nie istnieje. Może to być spowodowane jednym z poniższych powodów:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Adres strony został wpisany niepoprawnie."}),e.jsx("li",{children:"Strona została przeniesiona lub usunięta."}),e.jsx("li",{children:"Link może być nieaktualny."})]}),e.jsx("p",{children:e.jsx("strong",{children:"Co możesz teraz zrobić?"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx(o,{asChild:!0,size:"sm",variant:"link",className:"text-base",children:e.jsx(m,{replace:!0,to:t.pathname,children:"🤔 Sprawdź adres URL"})}),"- Upewnij się, że wpisany adres jest poprawny."]}),e.jsxs("li",{children:[e.jsx(o,{asChild:!0,size:"sm",variant:"link",className:"text-base",children:e.jsx(m,{replace:!0,to:"/",children:"🏠 Przejdź do strony głównej"})}),"- Kliknij tutaj aby wrócić na stronę główną."]}),e.jsxs("li",{children:[e.jsx(o,{asChild:!0,size:"sm",variant:"link",className:"text-base",children:e.jsx(m,{replace:!0,to:"/search",children:"🔍 Szukaj"})}),"- Skorzystaj z wyszukiwarki, aby znaleźć potrzebne informacje."]})]}),e.jsx("p",{children:"Dziękuję za zrozumienie i przepraszam za wszelkie niedogodności!"})]})}export{Be as A,o as B,Fe as C,Ge as E,ve as I,Ye as L,We as N,be as S,Ue as U,m as a,L as b,He as c,Oe as d,$e as e};
