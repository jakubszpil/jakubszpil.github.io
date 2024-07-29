import{r as h,j as e}from"./react-BDnC2YFb.js";import{F as f,r as l,e as j}from"./routing-DFXa-LRN.js";import{g}from"./articles-qDKqKXG-.js";import{A as x}from"./articles-DJ5WMtX8.js";import{g as w}from"./courses-DGvid3fe.js";import{C as y}from"./courses-CA3Z7Rib.js";import{g as k}from"./projects-Cds8huth.js";import{c as b,u as z,B as N,j as d}from"./index-Dt24wI1w.js";import{S}from"./seo-t9Xlog11.js";import{q}from"./runtime--RgF0kxo.js";import"./resources-DyK2mBNK.js";import"./link-with-prefetch-DVukV2zR.js";import"./date-BfXueLdd.js";const m=h.forwardRef(({className:s,type:t,...r},a)=>e.jsx("input",{type:t,className:b("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",s),ref:a,...r}));m.displayName="Input";const C=s=>{try{return new URL(s),!0}catch{return!1}};async function W({request:s}){const t=new URL(s.url),r=t.searchParams.get("q");if(r){if(r==="")throw t.searchParams.delete("q"),l(t.toString());const o=r.trim().split(" ").filter(Boolean).join(" ");if(r!==o)throw o?t.searchParams.set("q",o):t.searchParams.delete("q"),l(t.toString())}if(!r)return d({query:r,articles:[],courses:[],projects:[],resultsCount:0});if(C(r)){const o=new URL(s.url),u=new URL(r);if(o.origin===u.origin)throw l(j(u).replace("#/",""))}const a=o=>r?JSON.stringify(o).toLowerCase().includes(r.toLowerCase()):!1,i=(await g()).filter(a),n=(await w()).filter(a),c=(await k()).filter(a),p=i.length+c.length+n.length;return d({query:r,articles:i,courses:n,projects:c,resultsCount:p})}function $(){const{query:s,articles:t,projects:r,courses:a,resultsCount:i}=z(),n=h.useCallback(()=>s?i===0?e.jsxs("h2",{children:["Brak wyników wyszukiwania dla zapytania: ",s]}):e.jsxs(e.Fragment,{children:[e.jsxs("h2",{children:["Wyniki wyszukiwania (",i,")"]}),t.length>0&&e.jsxs("section",{children:[e.jsxs("h3",{children:["Artykuły (",t.length,")"]}),e.jsx(x,{className:"px-0 !grid-cols-1",articles:t})]}),r.length>0&&e.jsx("section",{children:e.jsxs("h3",{children:["Projekty (",r.length,")"]})}),a.length>0&&e.jsxs("section",{children:[e.jsxs("h3",{children:["Kursy (",a.length,")"]}),e.jsx(y,{className:"px-0 !grid-cols-1",courses:a})]})]}):null,[t,a,r.length,s,i]);return e.jsxs("section",{className:"prose max-w-full",children:[e.jsx(S,{title:s?`(${i}) Rezultaty wyszukiwania dla ${s}`:"Szukaj"}),e.jsxs("header",{className:"container pb-0",children:[e.jsx("h1",{className:"mb-0",children:"Szukaj"}),e.jsx("p",{children:"Wskazówka: Obszary po których możesz szukać:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Artykuły: (tytuł, opis, słowa klucz, kategorie, zawartość)"}),e.jsx("li",{children:"Kursy: (tytuł, opis, słowa klucz, kategorie, zawartość)"}),e.jsx("li",{children:"Projekty: (tytuł, opis, słowa klucz, technologie, zawartość)"})]}),e.jsx("p",{children:"Możesz też wkleić skopiowany link aby spróbować przejść do wskazanej strony"})]}),e.jsxs(f,{preventScrollReset:!0,method:"get",className:"container py-0 bg-background flex gap-2",children:[e.jsx(m,{type:"text",name:"q",placeholder:"Treść zapytania",defaultValue:s??"",required:!0},s),e.jsxs(N,{type:"submit",children:[e.jsx(q,{className:"h-5 w-5 mr-1"}),"Szukaj"]})]}),e.jsx("div",{className:"container pt-0",children:n()})]})}export{$ as default,W as loader};
