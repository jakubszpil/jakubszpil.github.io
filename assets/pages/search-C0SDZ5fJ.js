import{r as h,j as s}from"../react-vvBGimMH.js";import{F as d,r as n,c as m}from"../routing-CDreLu1L.js";import{b as p}from"./article-details-DCb2pzVm.js";import{A as j,d as x,S as w,I as y,B as k}from"../components-Chjwwj7i.js";import{b as f}from"./course-details-BZbeSvXF.js";import{d as g,i as z,j as b}from"../utils-BZMZnvBm.js";import{p as S}from"../runtime-Fe8qnWBl.js";async function U({request:r}){const t=new URL(r.url),e=t.searchParams.get("q");if(e){if(e==="")throw t.searchParams.delete("q"),n(t.toString());const i=e.trim().split(" ").filter(Boolean).join(" ");if(e!==i)throw i?t.searchParams.set("q",i):t.searchParams.delete("q"),n(t.toString())}if(e&&z(e)){const i=new URL(r.url),c=new URL(e);if(i.origin===c.origin)throw n(m(c).replace("#/",""))}const a=i=>e?JSON.stringify(i).toLowerCase().includes(e.toLowerCase()):!1,o=(await p(r)).filter(a),l=(await f(r)).filter(a),u=o.length+l.length;return b({query:e,articles:o,courses:l,resultsCount:u})}function B(){const{query:r,articles:t,courses:e,resultsCount:a}=g(),o=h.useCallback(()=>r?a===0?s.jsxs("h2",{children:["Brak wyników wyszukiwania dla zapytania: ",r]}):s.jsxs(s.Fragment,{children:[s.jsxs("h2",{children:["Wyniki wyszukiwania (",a,")"]}),t.length>0&&s.jsxs("section",{children:[s.jsxs("h3",{children:["Artykuły (",t.length,")"]}),s.jsx(j,{className:"px-0 !grid-cols-1",articles:t})]}),e.length>0&&s.jsxs("section",{children:[s.jsxs("h3",{children:["Kursy (",e.length,")"]}),s.jsx(x,{className:"px-0 !grid-cols-1",courses:e})]})]}):null,[t,e,r,a]);return s.jsxs("section",{className:"prose max-w-full",children:[s.jsx(w,{title:r?`(${a}) Rezultaty wyszukiwania dla ${r}`:"Szukaj"}),s.jsxs("header",{className:"container pb-0",children:[s.jsx("h1",{className:"mb-0",children:"Szukaj"}),s.jsx("p",{children:"Wskazówka: Obszary po których możesz szukać:"}),s.jsxs("ul",{children:[s.jsx("li",{children:"Artykuły: (tytuł, opis, słowa klucz, kategorie, zawartość)"}),s.jsx("li",{children:"Kursy: (tytuł, opis, słowa klucz, kategorie, zawartość)"}),s.jsx("li",{children:"Projekty: (tytuł, opis, słowa klucz, technologie, zawartość)"})]}),s.jsx("p",{children:"Możesz też wkleić skopiowany link aby spróbować przejść do wskazanej strony"})]}),s.jsxs(d,{preventScrollReset:!0,method:"get",className:"container py-0 bg-background flex gap-2",children:[s.jsx(y,{type:"text",name:"q",placeholder:"Treść zapytania",defaultValue:r??"",required:!0},r),s.jsxs(k,{type:"submit",children:[s.jsx(S,{className:"h-5 w-5 mr-1"}),"Szukaj"]})]}),s.jsx("div",{className:"container pt-0",children:o()})]})}export{B as default,U as loader};
