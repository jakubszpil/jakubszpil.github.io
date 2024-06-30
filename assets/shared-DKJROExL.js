import{v,g as x,r as f,j as a,t as y,h as w,i as j,S as z,H as A,k as C,L as S,l as T,m as R}from"./runtime-BrFHtimR.js";function k(e){return Object.entries(e).map(([r,t])=>{var o,s;const n=r.slice(r.lastIndexOf("/")+1).replace(".mdx","").replace(".md","");return{...t.frontmatter,id:v(),slug:n,content:x(t.default()),createdAt:(o=t.frontmatter)!=null&&o.createdAt?new Date(t.frontmatter.createdAt).toISOString():void 0,updatedAt:(s=t.frontmatter)!=null&&s.updatedAt?new Date(t.frontmatter.updatedAt).toISOString():void 0}}).sort((r,t)=>{const n=r.createdAt?new Date(r.createdAt):void 0,o=t.createdAt?new Date(t.createdAt):void 0,s=(n==null?void 0:n.getTime())??0;return((o==null?void 0:o.getTime())??0)-s})}function D(e,r){const t=k(e);function n(i){return i!==void 0?t.slice(0,i):t}function o(i){return t.find(l=>l.slug===i)}function s(){const i={};return t.reduce((c,g)=>{const m=g[r];return Array.isArray(m)&&m.forEach(u=>{u in i||(i[u]=0),c.includes(u)||c.push(u),i[u]++}),c},[]).sort((c,g)=>i[g]-i[c])}function d(i){return t.filter(l=>{const c=l[r];return Array.isArray(c)?c.includes(i):!1})}return[n,o,s,d]}const h=f.createContext({});function P(){return f.useContext(h)}function E(e){return a.jsx(h.Provider,{value:e.config,children:typeof e.children=="function"?e.children(e.config):e.children})}function p(...e){return y(w(e))}const I=j("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),b=f.forwardRef(({className:e,variant:r,size:t,asChild:n=!1,...o},s)=>{const d=n?z:"button";return a.jsx(d,{className:p(I({variant:r,size:t,className:e})),ref:s,...o})});b.displayName="Button";const L=f.forwardRef(({className:e,type:r,...t},n)=>a.jsx("input",{type:r,className:p("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:n,...t}));L.displayName="Input";function N(){const e=[];return{addProperty(r,t){return t&&e.push({property:r,content:t}),this},addTag(r,t){return t&&e.push({name:r,content:t}),this},build(){return e}}}const H=e=>{var s;const r=P(),t=d=>d?`${d} - ${r.meta.title}`:null,n=d=>d??r.meta.description,o=N().addTag("description",n(e.description)).addTag("keywords",(s=e.keywords)==null?void 0:s.join(",")).addProperty("og:title",t(e.title)).addProperty("og:description",n(e.description)).addProperty("twitter:title",t(e.title)).addProperty("twitter:description",n(e.description)).build();return a.jsx(A,{...e,title:e.title,meta:o,prioritizeSeoTags:!0})},F=e=>a.jsx(C,{children:e.children});function O(){return a.jsxs("header",{className:"prose container",children:[a.jsx("h1",{children:"Strona, której szukasz, jest jeszcze niedostępna."}),a.jsx("p",{children:"Wróć tutaj za jakiś czas 😜"}),a.jsx(b,{asChild:!0,variant:"secondary",className:"no-underline",size:"sm",children:a.jsx(S,{to:"/",children:"Powrót do strony głównej"})})]})}function M(e){return new Intl.DateTimeFormat("pl-PL",{day:"numeric",month:"long",year:"numeric"}).format(new Date(e))}function U(e){const r={path:e,children:[]};return{addModule(t){return r.lazy=()=>t().then(n=>{const o=n.default;return{element:a.jsx(o,{}),loader:n.loader,action:n.action,ErrorBoundary:n.ErrorBoundary}}),this},addChildren(...t){return r.children.push(...t),this},build(){var t;return{path:r.path,lazy:r.lazy,children:(t=r.children)==null?void 0:t.map(n=>n.build())}}}}function V(e){throw new Response(null,{status:404,statusText:"Nie znaleziono strony"})}function $(e,r){const t=[e.build()];return window.location.hash||history.replaceState(null,"","/#/"),T(t)}function W(e){return e}function q(){return R()}export{b as B,E as C,L as I,H as S,O as U,D as a,P as b,U as c,W as d,$ as e,F as f,M as g,V as n,q as u};
