import{i as m,t as y,f as v,g as w,$ as j,H as z,h as C}from"./vendor/libs-F3riCzjR.js";import{r as f,j as i}from"./vendor/react-Bw4CMnMy.js";import{L as R,c as T,b as k}from"./vendor/routing-DQuFDZ1V.js";function P(e){return e.map(r=>r.default).sort((r,t)=>{m(r.createdAt),m(t.createdAt);const n=new Date(r.createdAt).getTime();return new Date(t.createdAt).getTime()-n})}function E(e,r){const t=P(Object.values(e));function n(o){return o!==void 0?t.slice(0,o):t}function s(o){return t.find(l=>l.slug===o)}function d(){const o={};return t.reduce((c,g)=>{const h=g[r];return Array.isArray(h)&&h.forEach(u=>{u in o||(o[u]=0),c.includes(u)||c.push(u),o[u]++}),c},[]).sort((c,g)=>o[g]-o[c])}function a(o){return t.filter(l=>{const c=l[r];return Array.isArray(c)?c.includes(o):!1})}return[n,s,d,a]}const p=f.createContext({});function S(){return f.useContext(p)}function H(e){return i.jsx(p.Provider,{value:e.config,children:e.children})}function b(...e){return y(v(e))}const A=w("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),x=f.forwardRef(({className:e,variant:r,size:t,asChild:n=!1,...s},d)=>{const a=n?j:"button";return i.jsx(a,{className:b(A({variant:r,size:t,className:e})),ref:d,...s})});x.displayName="Button";const D=f.forwardRef(({className:e,type:r,...t},n)=>i.jsx("input",{type:r,className:b("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:n,...t}));D.displayName="Input";function L(){const e=[];return{addProperty(r,t){return t&&e.push({property:r,content:t}),this},addTag(r,t){return t&&e.push({name:r,content:t}),this},build(){return e}}}const I=e=>{var d;const r=S(),t=a=>a?`${a} - ${r.meta.title}`:null,n=a=>a??r.meta.description,s=L().addTag("description",n(e.description)).addTag("keywords",(d=e.keywords)==null?void 0:d.join(",")).addProperty("og:title",t(e.title)).addProperty("og:description",n(e.description)).addProperty("twitter:title",t(e.title)).addProperty("twitter:description",n(e.description)).build();return i.jsx(z,{...e,title:e.title,meta:s,prioritizeSeoTags:!0})},M=e=>i.jsx(C,{children:e.children});function F(){return i.jsxs("header",{className:"prose container",children:[i.jsx("h1",{children:"Strona, której szukasz, jest jeszcze niedostępna."}),i.jsx("p",{children:"Wróć tutaj za jakiś czas 😜"}),i.jsx(x,{asChild:!0,variant:"secondary",className:"no-underline",size:"sm",children:i.jsx(R,{to:"/",children:"Powrót do strony głównej"})})]})}function V(e){return new Intl.DateTimeFormat("pl-PL",{day:"numeric",month:"long",year:"numeric"}).format(new Date(e))}function O(e){const r={path:e,children:[]};return{addModule(t){return r.lazy=()=>t().then(n=>{const s=n.default;return{element:i.jsx(s,{}),loader:n.loader,action:n.action,ErrorBoundary:n.ErrorBoundary}}),this},addChildren(...t){return r.children.push(...t),this},build(){var t;return{path:r.path,lazy:r.lazy,children:(t=r.children)==null?void 0:t.map(n=>n.build())}}}}function W(e){throw new Response(null,{status:404,statusText:"Nie znaleziono strony"})}function q(e,r){const t=[e.build()];return window.location.hash||history.replaceState(null,"","/#/"),T(t)}function G(e){return e}function J(){return k()}const Q=e=>e.toLowerCase().split(" ").map(r=>`${r.slice(0,1).toUpperCase()}${r.slice(1)}`).join(" "),$=()=>{const e=new Set,r=()=>(Math.random().toString(36).slice(2)+Date.now().toString(36)+Math.random().toString(36).slice(2)).slice(0,20).match(/.{5}/g).join("-");return()=>{let t;do t=r();while(e.has(t));return e.add(t),t}},X=$();export{x as B,H as C,D as I,M as S,F as U,X as a,q as b,O as c,I as d,E as e,J as f,V as g,G as h,Q as i,W as n,S as u};
