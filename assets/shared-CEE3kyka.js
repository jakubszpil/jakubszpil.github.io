import{i as m,t as v,f as w,g as j,$ as z,H as C,h as P}from"./vendor/libs-CzKGx2XM.js";import{r as f,j as i}from"./vendor/react-BpTz6Pah.js";import{L as R,c as T,b as k}from"./vendor/routing-f0kELty9.js";async function p(e,r){return(await Promise.all(e.slice(0,r??e.length).map(n=>n().then(s=>s.default)))).sort((n,s)=>{m(n.createdAt),m(s.createdAt);const a=new Date(n.createdAt).getTime();return new Date(s.createdAt).getTime()-a})}function E(e,r){async function t(o){return await p(Object.values(e),o)}async function n(o){return(await p(Object.entries(e).filter(([c])=>c.includes(o)).map(([,c])=>c))).find(c=>c.slug===o)}async function s(){const o=await t(),d={};return o.reduce((u,g)=>{const h=g[r];return Array.isArray(h)&&h.forEach(l=>{l in d||(d[l]=0),u.includes(l)||u.push(l),d[l]++}),u},[]).sort((u,g)=>d[g]-d[u])}async function a(o){return(await t()).filter(c=>{const u=c[r];return Array.isArray(u)?u.includes(o):!1})}return[t,n,s,a]}const b=f.createContext({});function S(){return f.useContext(b)}function H(e){return i.jsx(b.Provider,{value:e.config,children:e.children})}function y(...e){return v(w(e))}const A=j("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),x=f.forwardRef(({className:e,variant:r,size:t,asChild:n=!1,...s},a)=>{const o=n?z:"button";return i.jsx(o,{className:y(A({variant:r,size:t,className:e})),ref:a,...s})});x.displayName="Button";const D=f.forwardRef(({className:e,type:r,...t},n)=>i.jsx("input",{type:r,className:y("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:n,...t}));D.displayName="Input";function L(){const e=[];return{addProperty(r,t){return t&&e.push({property:r,content:t}),this},addTag(r,t){return t&&e.push({name:r,content:t}),this},build(){return e}}}const I=e=>{var a;const r=S(),t=o=>o?`${o} - ${r.meta.title}`:null,n=o=>o??r.meta.description,s=L().addTag("description",n(e.description)).addTag("keywords",(a=e.keywords)==null?void 0:a.join(",")).addProperty("og:title",t(e.title)).addProperty("og:description",n(e.description)).addProperty("twitter:title",t(e.title)).addProperty("twitter:description",n(e.description)).build();return i.jsx(C,{...e,title:e.title,meta:s,prioritizeSeoTags:!0})},M=e=>i.jsx(P,{children:e.children});function F(){return i.jsxs("header",{className:"prose container",children:[i.jsx("h1",{children:"Strona, której szukasz, jest jeszcze niedostępna."}),i.jsx("p",{children:"Wróć tutaj za jakiś czas 😜"}),i.jsx(x,{asChild:!0,variant:"secondary",className:"no-underline",size:"sm",children:i.jsx(R,{to:"/",children:"Powrót do strony głównej"})})]})}function O(e){return new Intl.DateTimeFormat("pl-PL",{day:"numeric",month:"long",year:"numeric"}).format(new Date(e))}function V(e){const r={path:e,children:[]};return{addModule(t){return r.lazy=()=>t().then(n=>{const s=n.default;return{element:i.jsx(s,{}),loader:n.loader,action:n.action,ErrorBoundary:n.ErrorBoundary}}),this},addChildren(...t){return r.children.push(...t),this},build(){var t;return{path:r.path,lazy:r.lazy,children:(t=r.children)==null?void 0:t.map(n=>n.build())}}}}function W(e){throw new Response(null,{status:404,statusText:"Nie znaleziono strony"})}function q(e,r){const t=[e.build()];return window.location.hash||history.replaceState(null,"","/#/"),T(t)}function G(e){return e}function J(){return k()}const Q=e=>e.toLowerCase().split(" ").map(r=>`${r.slice(0,1).toUpperCase()}${r.slice(1)}`).join(" "),$=()=>{const e=new Set,r=()=>(Math.random().toString(36).slice(2)+Date.now().toString(36)+Math.random().toString(36).slice(2)).slice(0,20).match(/.{5}/g).join("-");return()=>{let t;do t=r();while(e.has(t));return e.add(t),t}},X=$();export{x as B,H as C,D as I,M as S,F as U,X as a,q as b,V as c,I as d,E as e,J as f,O as g,G as h,Q as i,W as n,S as u};