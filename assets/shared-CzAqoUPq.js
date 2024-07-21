import{i as g,t as A,f as F,g as $,$ as B,H as D,h as N}from"./vendor/libs-B_oCt8fy.js";import{r as f,j as u}from"./vendor/react-Bg3WAmfo.js";import{m as H,L as I,b as S,d as M,e as O}from"./vendor/routing-CR4d7Vrv.js";async function z(e,t){return(await Promise.all(e.slice(0,t??e.length).map(r=>r().then(a=>a.default)))).sort((r,a)=>{g(r.createdAt),g(a.createdAt);const i=new Date(r.createdAt).getTime();return new Date(a.createdAt).getTime()-i})}function Q(e,t){async function n(s){return await z(Object.values(e),s)}async function r(s){return g(s),(await z(Object.entries(e).filter(([o])=>o.includes(s)).map(([,o])=>o))).find(o=>o.slug===s)}async function a(){const s=await n(),l={};return s.reduce((c,d)=>{const m=d[t];return Array.isArray(m)&&m.forEach(h=>{h in l||(l[h]=0),c.includes(h)||c.push(h),l[h]++}),c},[]).sort((c,d)=>l[d]-l[c])}async function i(s){return(await n()).filter(o=>{const c=o[t];return Array.isArray(c)?c.includes(s):!1})}return[n,r,a,i]}const R=f.createContext({});function E(){return f.useContext(R)}function X(e){return u.jsx(R.Provider,{value:e.config,children:e.children})}function T(...e){return A(F(e))}const U=$("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),P=f.forwardRef(({className:e,variant:t,size:n,asChild:r=!1,...a},i)=>{const s=r?B:"button";return u.jsx(s,{className:T(U({variant:t,size:n,className:e})),ref:i,...a})});P.displayName="Button";const q=f.forwardRef(({className:e,type:t,...n},r)=>u.jsx("input",{type:t,className:T("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:r,...n}));q.displayName="Input";function V(){const e=[];return{addProperty(t,n){return n&&e.push({property:t,content:n}),this},addTag(t,n){return n&&e.push({name:t,content:n}),this},build(){return e}}}const Z=e=>{var i;const t=E(),n=s=>s?`${s} - ${t.meta.title}`:null,r=s=>s??t.meta.description,a=V().addTag("description",r(e.description)).addTag("keywords",(i=e.keywords)==null?void 0:i.join(",")).addProperty("og:title",n(e.title)).addProperty("og:description",r(e.description)).addProperty("twitter:title",n(e.title)).addProperty("twitter:description",r(e.description)).build();return u.jsx(D,{...e,title:e.title,meta:a,prioritizeSeoTags:!0})},_=e=>u.jsx(N,{children:e.children});function W({prefetch:e="intent",...t}){const{routes:n}=E(),r=f.useRef(null),a=f.useMemo(()=>H(n,t.to),[t.to,n]),i=f.useCallback(()=>{var c,d;const o=a==null?void 0:a.at(-1);o&&((d=(c=o.route).lazy)==null||d.call(c).then(m=>{m.loader instanceof Function&&m.loader({params:o.params,request:new Request(t.to)})}))},[a,t.to]),s=f.useCallback(()=>{var m,h,v,b,y,p;let o=null;const c=()=>{o=setTimeout(i,500)},d=()=>{o!==null&&(clearTimeout(o),o=null)};return(m=r.current)==null||m.addEventListener("click",i),(h=r.current)==null||h.addEventListener("mouseenter",c),(v=r.current)==null||v.addEventListener("focus",c),(b=r.current)==null||b.addEventListener("mouseleave",d),(y=r.current)==null||y.addEventListener("blur",d),(p=r.current)==null||p.addEventListener("touchstart",i),()=>{var x,w,j,L,C,k;o!==null&&clearTimeout(o),(x=r.current)==null||x.removeEventListener("click",i),(w=r.current)==null||w.removeEventListener("mouseenter",c),(j=r.current)==null||j.removeEventListener("focus",c),(L=r.current)==null||L.removeEventListener("mouseleave",d),(C=r.current)==null||C.removeEventListener("blur",d),(k=r.current)==null||k.removeEventListener("touchstart",i)}},[i]),l=f.useCallback(()=>(i(),()=>{}),[i]);return f.useEffect(()=>{if(e){if(e==="intent")return s();if(e==="render")return l()}},[e,s,l]),u.jsx(I,{...t,ref:r})}function K(){return u.jsxs("header",{className:"prose container",children:[u.jsx("h1",{children:"Strona, której szukasz, jest jeszcze niedostępna."}),u.jsx("p",{children:"Wróć tutaj za jakiś czas 😜"}),u.jsx(P,{asChild:!0,variant:"secondary",className:"no-underline",size:"sm",children:u.jsx(W,{to:"/",children:"Powrót do strony głównej"})})]})}function ee(e){return new Intl.DateTimeFormat("pl-PL",{day:"numeric",month:"long",year:"numeric"}).format(new Date(e))}function te(){return new Date().getFullYear()}function re(e){const t={path:e,children:[],index:!1};return{addModule(n){return t.lazy=()=>n().then(r=>{const a=r.default;return{element:u.jsx(a,{}),loader:r.loader,action:r.action,ErrorBoundary:r.ErrorBoundary,HydrateFallback:r.HydrateFallback}}),this},setIndex(n){return t.index=n,this},addChildren(...n){return t.children.push(...n),this},build(){var n;return t.index?{path:t.path,lazy:t.lazy}:{path:t.path,lazy:t.lazy,children:(n=t.children)==null?void 0:n.map(r=>r.build())}}}}function ne(e){throw new Response(null,{status:404,statusText:"Nie znaleziono strony"})}function se(...e){return e.map(t=>t.build())}function oe(e,t){return t!=null&&t.hashLocation?(window.location.hash||history.replaceState(null,"","/#/"),S(e,t)):O(e,t)}function ae(e){return e}function ie(){return M()}const ce=e=>e.toLowerCase().split(" ").map(t=>`${t.slice(0,1).toUpperCase()}${t.slice(1)}`).join(" ");export{P as B,X as C,q as I,W as L,_ as S,K as U,oe as a,se as b,re as c,Z as d,Q as e,ee as f,te as g,ie as h,ae as i,ce as j,ne as n,E as u};
