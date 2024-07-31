import{r,j as e}from"./react-vvBGimMH.js";import{a as x,u as $,g as z,b as O}from"./utils-BZMZnvBm.js";import{c as Y,S as U,I as V,a as W,H as Z,v as k,b as N,d as q,e as C,P as X,C as L,f as S,g as T,h as I,i as J,R,j as _,L as M,k as D,l as Q,T as ee,m as A,n as E,o as te,p as ne,q as ae,r as se,X as ie}from"./runtime-Fe8qnWBl.js";import{m as re,L as P,a as oe}from"./routing-CDreLu1L.js";const le=Y("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),u=r.forwardRef(({className:n,variant:t,size:a,asChild:s=!1,...l},c)=>{const o=s?U:"button";return e.jsx(o,{className:x(le({variant:t,size:a,className:n})),ref:c,...l})});u.displayName="Button";function m({prefetch:n="intent",...t}){const{routes:a}=$(),s=r.useCallback(()=>{var c;(c=re(a,t.to))==null||c.forEach(o=>{var j,d;(d=(j=o.route).lazy)==null||d.call(j).then(i=>{i.loader instanceof Function&&i.loader({params:o.params,request:new Request(t.to)})})})},[t.to,a]),l=r.useMemo(()=>{let c=null;const o=()=>{c=setTimeout(s,150)},j=()=>{c!==null&&(clearTimeout(c),c=null)};return n==="intent"?{onClick:d=>{var i;s(),(i=t.onClick)==null||i.call(t,d)},onTouchStartCapture:d=>{var i;s(),(i=t.onTouchStartCapture)==null||i.call(t,d)},onTouchStart:d=>{var i;s(),(i=t.onTouchStart)==null||i.call(t,d)},onMouseEnter:d=>{var i;o(),(i=t.onMouseEnter)==null||i.call(t,d)},onMouseLeave:d=>{var i;j(),(i=t.onMouseLeave)==null||i.call(t,d)},onFocus:d=>{var i;o(),(i=t.onFocus)==null||i.call(t,d)},onBlur:d=>{var i;j(),(i=t.onBlur)==null||i.call(t,d)}}:{}},[n,s,t]);return e.jsx(P,{...t,...l})}function Ie(n){return e.jsx("section",{className:`container pt-0 prose grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 ${n.className??""}`,children:n.articles.map(t=>e.jsx(u,{asChild:!0,variant:n.variant??"outline",className:"inline-flex flex-col items-start justify-start text-left h-auto w-auto text-wrap !no-underline truncate p-6",children:e.jsxs(m,{to:`/blog/${t.slug}`,children:[e.jsx("h2",{className:"line-clamp-3 text-base font-semibold flex-1 m-0",children:t.title}),e.jsx("p",{className:"line-clamp-3 mt-2 text-neutral-700 font-normal dark:text-neutral-300",children:t.description}),t.createdAt&&e.jsx("span",{className:"text-neutral-600 text-xs dark:text-neutral-400",children:z(t.createdAt)})]})},t.id))})}function Re(n){return e.jsx("section",{className:`container pt-0 prose grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 ${n.className??""}`,children:n.courses.map(t=>e.jsx(u,{asChild:!0,variant:n.variant??"outline",className:"inline-flex flex-col items-start justify-start text-left h-auto w-auto text-wrap !no-underline truncate p-6",children:e.jsxs(m,{to:`/learning/${t.slug}`,children:[e.jsx("h2",{className:"line-clamp-3 text-base font-semibold flex-1 m-0",children:t.title}),e.jsx("p",{className:"line-clamp-3 mt-2 text-neutral-700 font-normal dark:text-neutral-300",children:t.description}),t.createdAt&&e.jsx("span",{className:"text-neutral-600 text-xs dark:text-neutral-400",children:z(t.createdAt)})]})},t.id))})}const p={socials:[{href:"https://www.linkedin.com/in/jakubszpil/",label:"LinkedIn",icon:V},{href:"https://github.com/jakubszpil/",label:"GitHub",icon:W}],meta:{defaultTitle:"Trwa ładowanie",description:"Cześć, jestem Kuba, jestem frontend developerem. Witaj na mojej stronie, gdzie znajdziesz blog z artykułami, głównie o tematyce frontendowej, sekcję z kursami, dzięki którym nabędziesz wiedzę i doświadczenie z frontu, jak i portfolio, które przywita Cię moimi ostatnimi projektami. Bon vojage! 🚢"}};function ce(){const n=[];return{addProperty(t,a){return a&&n.push({property:t,content:a}),this},addTag(t,a){return a&&n.push({name:t,content:a}),this},build(){return n}}}const Me=n=>{const t=n.title??p.meta.defaultTitle,a=n.description??p.meta.description,s=r.useMemo(()=>{var l;return ce().addTag("description",a).addTag("keywords",(l=n.keywords)==null?void 0:l.join(",")).addProperty("og:title",t).addProperty("og:description",a).addProperty("twitter:title",t).addProperty("twitter:description",a).build()},[a,n.keywords,t]);return e.jsx(Z,{title:t,meta:s})},de=r.forwardRef(({className:n,type:t,...a},s)=>e.jsx("input",{type:t,className:x("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",n),ref:s,...a}));de.displayName="Input";function ue(n){return p.socials.map(t=>e.jsx(u,{asChild:!0,size:n.hideLabels?"icon":"sm",variant:n.variant??"ghost",className:"inline-flex items-center gap-1 no-underline",title:t.label,"aria-label":t.label,children:e.jsxs("a",{href:t.href,target:"_blank",children:[e.jsx(t.icon,{}),e.jsx("span",{className:`${n.hideLabels?"sr-only":""}`,children:t.label})]})},k()))}function De(n){var a;const t=r.useCallback((s,l)=>e.jsx(u,{asChild:!0,variant:"secondary",size:"sm",className:"!no-underline lowercase",children:e.jsxs(m,{to:l,children:["#",s]})},s),[]);return e.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[n.showAllCategory&&t("wszystko","/blog"),(a=n.categories)==null?void 0:a.map(s=>t(s,`/blog/kategorie/${s}`))]})}function Ae(n){var a;const t=r.useCallback((s,l)=>e.jsx(u,{asChild:!0,variant:"secondary",size:"sm",className:"!no-underline lowercase",children:e.jsxs(m,{to:l,children:["#",s]})},s),[]);return e.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[n.showAllCategory&&t("wszystko","/learning"),(a=n.categories)==null?void 0:a.map(s=>t(s,`/learning/kategorie/${s}`))]})}function Ee(){return e.jsxs("header",{className:"prose container",children:[e.jsx("h1",{children:"Strona, której szukasz, jest jeszcze niedostępna."}),e.jsx("p",{children:"Wróć tutaj za jakiś czas 😜"}),e.jsx(u,{asChild:!0,variant:"secondary",className:"no-underline",size:"sm",children:e.jsx(m,{to:"/",children:"Powrót do strony głównej"})})]})}var g=(n=>(n.LIGHT="LIGHT",n.DARK="DARK",n.SYSTEM="SYSTEM",n))(g||{});function me(n){return Object.values(g).includes(n)}function K(){const n=localStorage.getItem("theme");return n&&me(n)?n:"SYSTEM"}function B(n){return n==="SYSTEM"?window.matchMedia("(prefers-color-scheme: dark)").matches?"DARK":"LIGHT":n==="DARK"?"DARK":"LIGHT"}function v(n){localStorage.setItem("theme",n)}const w=K(),H=r.createContext({theme:w,resolvedTheme:B(w),setTheme:()=>{}});function he(n){const[t,a]=r.useState(K()),s=r.useMemo(()=>B(t),[t]),l=r.useCallback(c=>{a(c),v(c)},[]);return r.useEffect(()=>{s==="DARK"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark");const c=new AbortController,o=s==="DARK"?"LIGHT":"DARK",j=i=>{(i.metaKey||i.ctrlKey)&&i.key==="k"&&(i.preventDefault(),document.documentElement.classList.add("switching-theme"),a(o),v(o))},d=i=>{document.documentElement.classList.contains("switching-theme")&&(i.preventDefault(),document.documentElement.classList.remove("switching-theme"))};return document.addEventListener("keydown",j,{signal:c.signal}),document.addEventListener("keyup",d,{signal:c.signal}),()=>c.abort()},[s]),e.jsx(H.Provider,{value:{theme:w,resolvedTheme:s,setTheme:l},children:n.children})}function xe(){return r.useContext(H)}function y(n){return e.jsx(u,{asChild:!0,className:n.className,onClick:n.onClick,variant:n.variant??"ghost",size:n.size??"sm",children:e.jsx(m,{to:n.to,children:n.children})})}const fe=Q,je=ee,ge=r.forwardRef(({className:n,inset:t,children:a,...s},l)=>e.jsxs(N,{ref:l,className:x("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",t&&"pl-8",n),...s,children:[a,e.jsx(q,{className:"ml-auto h-4 w-4"})]}));ge.displayName=N.displayName;const be=r.forwardRef(({className:n,...t},a)=>e.jsx(C,{ref:a,className:x("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...t}));be.displayName=C.displayName;const F=r.forwardRef(({className:n,sideOffset:t=4,...a},s)=>e.jsx(X,{children:e.jsx(L,{ref:s,sideOffset:t,className:x("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...a})}));F.displayName=L.displayName;const b=r.forwardRef(({className:n,inset:t,...a},s)=>e.jsx(S,{ref:s,className:x("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",t&&"pl-8",n),...a}));b.displayName=S.displayName;const ke=r.forwardRef(({className:n,children:t,checked:a,...s},l)=>e.jsxs(T,{ref:l,className:x("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",n),checked:a,...s,children:[e.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:e.jsx(I,{children:e.jsx(J,{className:"h-4 w-4"})})}),t]}));ke.displayName=T.displayName;const pe=r.forwardRef(({className:n,children:t,...a},s)=>e.jsxs(R,{ref:s,className:x("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",n),...a,children:[e.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:e.jsx(I,{children:e.jsx(_,{className:"h-2 w-2 fill-current"})})}),t]}));pe.displayName=R.displayName;const G=r.forwardRef(({className:n,inset:t,...a},s)=>e.jsx(M,{ref:s,className:x("px-2 py-1.5 text-sm font-semibold",t&&"pl-8",n),...a}));G.displayName=M.displayName;const we=r.forwardRef(({className:n,...t},a)=>e.jsx(D,{ref:a,className:x("-mx-1 my-1 h-px bg-muted",n),...t}));we.displayName=D.displayName;const ye={LIGHT:A,DARK:E};function ve(){const{resolvedTheme:n,setTheme:t}=xe(),a=r.useMemo(()=>ye[n],[n]);return e.jsxs(fe,{onOpenChange:s=>{s?document.documentElement.classList.add("switching-theme"):document.documentElement.classList.remove("switching-theme")},children:[e.jsx(je,{asChild:!0,children:e.jsx(u,{title:"Zmień motyw",size:"icon",variant:"ghost",children:e.jsx(a,{})})}),e.jsxs(F,{children:[e.jsx(G,{children:"Wybierz motyw"}),e.jsxs(b,{className:"cursor-pointer",onClick:()=>t(g.LIGHT),children:[e.jsx(A,{className:"mr-2"})," Jasny"]}),e.jsxs(b,{className:"cursor-pointer",onClick:()=>t(g.DARK),children:[e.jsx(E,{className:"mr-2"})," Ciemny"]}),e.jsxs(b,{className:"cursor-pointer",onClick:()=>t(g.SYSTEM),children:[e.jsx(te,{className:"mr-2"})," System"]})]})]})}function ze(n){const[t,a]=r.useState(!1),s=r.useRef(null),l=r.useCallback(()=>{var o;a(!1),(o=s.current)==null||o.focus()},[]),c=r.useCallback(()=>{a(o=>!o)},[]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center sm:gap-1",children:[e.jsx("nav",{className:"hidden items-center lg:flex",children:n.children.map(o=>r.createElement(y,{...o.props,key:k()}))}),e.jsx(u,{size:"icon",variant:"ghost",asChild:!0,className:"inline-flex items-center justify-center","aria-label":"Szukaj",title:"Szukaj",children:e.jsxs(m,{to:"/search",children:[e.jsx("span",{className:"sr-only",children:"Szukaj"}),e.jsx(ne,{className:"h-6"})]})}),e.jsx(ue,{hideLabels:!0}),e.jsx(ve,{}),e.jsxs(u,{size:"icon",ref:s,onClick:c,className:`inline-flex items-center justify-center relative z-50 lg:hidden${t?" dark":""}`,variant:"link","aria-label":t?"Zamknij menu":"Otwórz menu",title:t?"Zamknij menu":"Otwórz menu",children:[e.jsx("span",{className:"sr-only",children:t?"Zamknij menu":"Otwórz menu"}),t?e.jsx(ae,{className:"!text-white h-6"}):e.jsx(se,{className:"h-6 !text-black dark:!text-white"})]})]}),e.jsx(ie,{show:t,children:e.jsx("nav",{className:"flex flex-col gap-1 justify-center items-center fixed inset-0 dark bg-background text-foreground z-40 lg:hidden transition-[transform,opacity,visibility] duration-150 data-[closed]:opacity-0 data-[closed]:invisible data-[enter]:translate-y-0 data-[enter]:data-[closed]:translate-y-10",children:n.children.map(o=>r.createElement(y,{...o.props,key:k(),size:"lg",onClick:l}))})})]})}function h(n){return e.jsx("header",{className:"sticky w-full bg-background top-0 left-0 z-50 lg:relative",children:e.jsx("div",{className:"container pb-3 pt-4 flex justify-between items-center px-3 lg:py-6",children:n.children})})}h.Link=y;h.Menu=ze;function Ne(n){return e.jsx(u,{asChild:!0,variant:"link",size:"sm",className:"no-underline hover:underline",children:e.jsx(m,{to:n.to,children:n.children})})}function f(n){return e.jsx("footer",{className:"prose max-w-full border-t",children:e.jsxs("div",{className:"container flex items-center gap-3 justify-start flex-wrap-reverse lg:justify-between",children:[e.jsxs("p",{className:"xl:text-sm",children:["© ",O(),e.jsx(u,{asChild:!0,variant:"link",size:"sm",children:e.jsx(P,{to:"/",className:"no-underline hover:underline",children:"jakubszpil"})})]}),e.jsx("nav",{className:"flex items-center flex-wrap -ml-3",children:n.children})]})})}f.Link=Ne;function Pe(n){return e.jsxs(he,{children:[e.jsxs(h,{children:[e.jsx(h.Link,{className:"font-bold",to:"/",children:"jakubszpil"}),e.jsxs(h.Menu,{children:[e.jsx(h.Link,{to:"/",children:"🏠 Strona główna"}),e.jsx(h.Link,{to:"/blog",children:"📝 Blog"}),e.jsx(h.Link,{to:"/learning",children:"🏫 Learning"}),e.jsx(h.Link,{to:"/portfolio",children:"🛠️ Portfolio"}),e.jsx(h.Link,{to:"/me",children:"🙋‍♂️ O mnie"})]})]}),e.jsx("main",{children:n.children}),e.jsxs(f,{children:[e.jsx(f.Link,{to:"/",children:"🏠 Strona główna"}),e.jsx(f.Link,{to:"/blog",children:"📝 Blog"}),e.jsx(f.Link,{to:"/learning",children:"🏫 Learning"}),e.jsx(f.Link,{to:"/portfolio",children:"🛠️ Portfolio"}),e.jsx(f.Link,{to:"/me",children:"🙋‍♂️ O mnie"}),e.jsx(f.Link,{to:"/search",children:"🔍 Szukaj"})]})]})}function Ke(){const n=oe();return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Oops! Strona nie została znaleziona 🙁 (404)"}),e.jsx("p",{children:"Przepraszam, ale strona, której szukasz, nie istnieje. Może to być spowodowane jednym z poniższych powodów:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Adres strony został wpisany niepoprawnie."}),e.jsx("li",{children:"Strona została przeniesiona lub usunięta."}),e.jsx("li",{children:"Link może być nieaktualny."})]}),e.jsx("p",{children:e.jsx("strong",{children:"Co możesz teraz zrobić?"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx(u,{asChild:!0,size:"sm",variant:"link",className:"text-base no-underline hover:underline",children:e.jsx(m,{replace:!0,to:n.pathname,children:"🤔 Sprawdź adres URL"})}),"- Upewnij się, że wpisany adres jest poprawny."]}),e.jsxs("li",{children:[e.jsx(u,{asChild:!0,size:"sm",variant:"link",className:"text-base no-underline hover:underline",children:e.jsx(m,{replace:!0,to:"/",children:"🏠 Przejdź do strony głównej"})}),"- Kliknij tutaj aby wrócić na stronę główną."]}),e.jsxs("li",{children:[e.jsx(u,{asChild:!0,size:"sm",variant:"link",className:"text-base no-underline hover:underline",children:e.jsx(m,{replace:!0,to:"/search",children:"🔍 Szukaj"})}),"- Skorzystaj z wyszukiwarki, aby znaleźć potrzebne informacje."]})]}),e.jsx("p",{children:"Dziękuję za zrozumienie i przepraszam za wszelkie niedogodności!"})]})}export{Ie as A,u as B,De as C,de as I,Pe as L,Ke as N,Me as S,Ee as U,m as a,ue as b,Ae as c,Re as d};
