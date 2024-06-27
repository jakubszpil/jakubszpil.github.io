import{_ as h,A as y,g as N}from"./articles-CGzhBGrG.js";import{c as x,u as v,S as z,B as i,d as g,I as L,n as S}from"./shared-Bb9qxY0T.js";import{j as e,L as d,F as O,a as p,r as f,v as b,I as P,b as C,c as w,d as M,e as F,X as E}from"./runtime-MotIFk6S.js";import{g as _}from"./projects-lltp0uUX.js";const Y=[x("").addModule(()=>h(()=>Promise.resolve().then(()=>T),void 0)),x("szukaj").addModule(()=>h(()=>Promise.resolve().then(()=>q),void 0)),x("me").addModule(()=>h(()=>Promise.resolve().then(()=>D),void 0)),x("*").addModule(()=>h(()=>Promise.resolve().then(()=>Z),void 0))],I=g(()=>{const n=N(3),s=_(3);return{articles:n,projects:s}});function R(){const n=v();return e.jsxs(e.Fragment,{children:[e.jsx(z,{title:"Strona główna",description:"Witaj na mojej stronie, gdzie znajdziesz blog z artykułami, głównie o tematyce frontendowej, sekcję z kursami, dzięki którym nabędziesz wiedzę i doświadczenie z frontu, jak i portfolio, które przywita Cię moimi ostatnimi projektami. Bon vojage! 🚢"}),e.jsxs("header",{className:"container prose",children:[e.jsx("h1",{className:"mt-8",children:"Cześć, jestem Kuba! 🙋‍♂️"}),e.jsx("p",{className:"max-w-2xl",children:"Witaj na mojej stronie, gdzie znajdziesz blog z artykułami, głównie o tematyce frontendowej, sekcję z kursami, dzięki którym nabędziesz wiedzę i doświadczenie z frontu, jak i portfolio, które przywita Cię moimi ostatnimi projektami. Bon vojage! 🚢"}),e.jsxs("nav",{className:"grid grid-flow-row sm:grid-flow-col sm:w-max gap-2",children:[e.jsx(i,{size:"sm",asChild:!0,className:"!no-underline",children:e.jsx(d,{to:"/blog",children:"📝 Najnowsze artykuły"})}),e.jsx(i,{size:"sm",variant:"outline",asChild:!0,className:"!no-underline",children:e.jsx(d,{to:"/learning",children:"🏫 Lista kursów"})})]})]}),e.jsxs("section",{className:"prose max-w-full bg-background",children:[e.jsxs("header",{className:"container pb-0",children:[e.jsx("h2",{children:"Artykuły 📝"}),e.jsx("p",{children:"Zbiór artykułów o frontendzie, obejmujących tematy takie jak HTML, CSS, JavaScript i frameworki. Odkrywaj nowości i najlepsze praktyki w tworzeniu stron oraz aplikacji internetowych."}),e.jsx("p",{children:"Czytaj, ucz się i bądź na bieżąco z najnowszymi trendami w świecie frontend developmentu!"})]}),e.jsx(y,{variant:"outline",className:"",articles:n.articles}),e.jsx("nav",{className:"container pt-0",children:e.jsx(i,{asChild:!0,size:"sm",className:"!no-underline",children:e.jsx(d,{to:"/blog",children:"Zobacz wszystkie artykuły"})})})]}),e.jsx("section",{className:"prose max-w-full bg-background",children:e.jsxs("header",{className:"container pb-0",children:[e.jsx("h2",{children:"Kursy 🏫 (a.k.a Learning)"}),e.jsx("p",{children:"Kursy frontendowe obejmujące HTML, CSS, JavaScript i nowoczesne frameworki. Rozwijaj swoje umiejętności i twórz nowoczesne strony oraz aplikacje internetowe."})]})}),e.jsx("section",{className:"prose max-w-full bg-background",children:e.jsxs("header",{className:"container pb-0",children:[e.jsx("h2",{children:"Portfolio 🛠️"}),e.jsx("p",{children:"Oto moje portfolio frontendowe z projektami nowoczesnych stron i aplikacji internetowych. Sprawdź moje realizacje i zobacz, co potrafię!"})]})})]})}const T=Object.freeze(Object.defineProperty({__proto__:null,default:R,loader:I},Symbol.toStringTag,{value:"Module"})),A=g(({request:n})=>{const s=new URL(n.url),a=s.searchParams.get("q");if(a){if(a==="")throw s.searchParams.delete("q"),p(s.toString());const r=a.trim().split(" ").filter(Boolean).join(" ");if(a!==r)throw s.searchParams.set("q",r),p(s.toString())}const l=r=>{if(!a)return!1;const u=JSON.stringify(r),m=a.toLowerCase();return u.toLowerCase().includes(m)},j=N().filter(l),c=_().filter(l);return{query:a,articles:j,projects:c}});function B(){const{query:n,articles:s,projects:a}=v(),l=s.length+a.length,j=(c,r,u,m)=>c?r===0?e.jsxs("h2",{children:["Brak wyników wyszukiwania dla zapytania: ",c]}):e.jsxs(e.Fragment,{children:[e.jsxs("h2",{children:["Wyniki wyszukiwania (",r,")"]}),u.length>0&&e.jsxs("section",{children:[e.jsxs("h3",{children:["Artykuły (",u.length,")"]}),e.jsx(y,{className:"px-0 !grid-cols-1",articles:u})]}),m.length>0&&e.jsx("section",{children:e.jsxs("h3",{children:["Projekty (",m.length,")"]})})]}):null;return e.jsxs("section",{className:"prose max-w-full",children:[e.jsx(z,{title:`Szukaj${n?`: ${n}`:""}`}),e.jsx("header",{className:"container pb-0",children:e.jsx("h1",{className:"mb-0",children:"Wyszukaj"})}),e.jsxs(O,{method:"get",className:"container pb-0 flex gap-2",children:[e.jsx(L,{type:"text",name:"q",placeholder:"Treść zapytania",defaultValue:n??"",required:!0},n),e.jsx(i,{type:"submit",children:"Szukaj"})]}),e.jsx("div",{className:"container pt-0",children:j(n,l,s,a)})]})}const q=Object.freeze(Object.defineProperty({__proto__:null,default:B,loader:A},Symbol.toStringTag,{value:"Module"}));function W(){return e.jsxs("div",{className:"container prose",children:[e.jsx(z,{title:"O mnie"}),e.jsx("h1",{children:"O mnie"})]})}const D=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"})),V=g(()=>{throw S()});function $(){return e.jsx("div",{children:"NotFound"})}const Z=Object.freeze(Object.defineProperty({__proto__:null,default:$,loader:V},Symbol.toStringTag,{value:"Module"}));function k(n){return e.jsx(i,{asChild:!0,className:n.className,onClick:n.onClick,variant:n.variant??"ghost",size:n.size??"sm",children:e.jsx(d,{to:n.to,children:n.children})})}function H(n){const[s,a]=f.useState(!1),l=f.useRef(null),j=()=>{var r;a(!1),(r=l.current)==null||r.focus()},c=()=>{a(r=>!r)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("nav",{className:"hidden items-center md:flex",children:n.children.map(r=>f.createElement(k,{...r.props,key:b()}))}),e.jsx(i,{size:"icon",variant:"ghost",asChild:!0,className:"inline-flex items-center justify-center","aria-label":"Szukaj",children:e.jsxs(d,{to:"/szukaj",children:[e.jsx("span",{className:"sr-only",children:"Szukaj"}),e.jsx(P,{className:"h-6"})]})}),e.jsx(i,{size:"icon",variant:"ghost",asChild:!0,className:"inline-flex items-center justify-center","aria-label":"Mój github",children:e.jsxs("a",{href:"https://github.com/jakubszpil",target:"_blank",children:[e.jsx("span",{className:"sr-only",children:"Mój github"}),e.jsx(C,{className:"h-6"})]})}),e.jsxs(i,{size:"icon",ref:l,onClick:c,className:w("inline-flex items-center justify-center relative z-50 md:hidden",s&&"dark"),variant:"link","aria-label":s?"Zamknij menu":"Otwórz menu",children:[e.jsx("span",{className:"sr-only",children:s?"Zamknij menu":"Otwórz menu"}),s?e.jsx(M,{className:"!text-white h-6"}):e.jsx(F,{className:"h-6 !text-black"})]})]}),e.jsx(E,{show:s,children:e.jsx("nav",{className:w("flex flex-col gap-1 justify-center items-center fixed inset-0 dark bg-background text-foreground z-40 md:hidden","transition-[transform,opacity,visibility] duration-150","data-[closed]:opacity-0 data-[closed]:invisible","data-[enter]:translate-y-0 data-[enter]:data-[closed]:translate-y-10"),children:n.children.map(r=>f.createElement(k,{...r.props,key:b(),size:"lg",onClick:j}))})})]})}function t(n){return e.jsx("header",{className:"sticky bg-background top-0 left-0 z-50 md:relative",children:e.jsx("div",{className:"container pb-3 pt-4 flex justify-between items-center px-3 md:py-6",children:n.children})})}t.Link=k;t.Menu=H;function J(n){return e.jsx(i,{asChild:!0,variant:"link",size:"sm",className:"no-underline hover:underline",children:e.jsx(d,{to:n.to,children:n.children})})}function o(n){return e.jsx("footer",{className:"prose max-w-full border-t mt-12",children:e.jsxs("div",{className:"container flex items-center gap-3 justify-start flex-wrap-reverse xl:justify-between",children:[e.jsxs("p",{className:"xl:text-sm",children:["© ",new Date().getFullYear()," jakubszpil - Wszelkie prawa zastrzeżone."]}),e.jsx("nav",{className:"flex items-center gap-1 flex-wrap -ml-3",children:n.children})]})})}o.Link=J;function Q(n){return e.jsxs(e.Fragment,{children:[e.jsxs(t,{children:[e.jsx(t.Link,{className:"font-bold",to:"/",children:"jakubszpil"}),e.jsxs(t.Menu,{children:[e.jsx(t.Link,{to:"/",children:"🏠 Strona główna"}),e.jsx(t.Link,{to:"/blog",children:"📝 Blog"}),e.jsx(t.Link,{to:"/learning",children:"🏫 Learning"}),e.jsx(t.Link,{to:"/portfolio",children:"🛠️ Portfolio"}),e.jsx(t.Link,{to:"/me",children:"🙋‍♂️ O mnie"})]})]}),e.jsx("main",{children:n.children}),e.jsxs(o,{children:[e.jsx(o.Link,{to:"/",children:"🏠 Strona główna"}),e.jsx(o.Link,{to:"/blog",children:"📝 Blog"}),e.jsx(o.Link,{to:"/learning",children:"🏫 Learning"}),e.jsx(o.Link,{to:"/portfolio",children:"🛠️ Portfolio"}),e.jsx(o.Link,{to:"/me",children:"🙋‍♂️ O mnie"}),e.jsx(o.Link,{to:"/szukaj",children:"🔍 Wyszukaj"})]})]})}export{Q as L,Y as r};
