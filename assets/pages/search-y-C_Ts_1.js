import{r as l,j as e}from"../react-vvBGimMH.js";import{r as c,c as u,F as h}from"../routing-CpIhnanH.js";import{A as d,e as j,S as w,I as m,B as y}from"../components-6gXnAQoo.js";import{f as p,i as x,d as f,j as k}from"../utils-BP33bPXo.js";import{r as g}from"../runtime-6LeYYcLH.js";async function z(r,a){const s=await p("/content/search.json",{cache:"force-cache",signal:r.signal}),t=i=>a?JSON.stringify(i).toLowerCase().includes(a.toLowerCase()):!1,n=await s.json();return Object.fromEntries(Object.entries(n).map(([i,o])=>[i,o.filter(t)]))}async function S(r){return Object.values(r).reduce((a,{length:s})=>a+s,0)}async function b(r){const a=new URL(r.url),s=a.searchParams.get("q");if(s){if(s==="")throw a.searchParams.delete("q"),c(a.toString());const t=s.trim().split(" ").filter(Boolean).join(" ");if(s!==t)throw t?a.searchParams.set("q",t):a.searchParams.delete("q"),c(a.toString())}if(s&&x(s)){const t=new URL(r.url),n=new URL(s);if(t.origin===n.origin)throw c(u(n).replace("#/",""))}return s}async function C({request:r}){const a=await b(r),s=await z(r,a),t=await S(s);return k({...s,query:a,resultsCount:t})}function O(){const{query:r,articles:a,courses:s,resultsCount:t}=f(),n=l.useCallback(()=>{if(!r)return null;if(t===0)return e.jsxs("h2",{children:["Brak wyników wyszukiwania dla zapytania: ",r]});const i={pathname:`/search?q=${r}`,label:"Powrót do wyników wyszukiwania"};return e.jsxs(e.Fragment,{children:[e.jsxs("h2",{children:["Wyniki wyszukiwania (",t,")"]}),a.length>0&&e.jsxs("section",{children:[e.jsxs("h3",{children:["Artykuły (",a.length,")"]}),e.jsx(d,{className:"px-0 !grid-cols-1",articles:a,locationState:i})]}),s.length>0&&e.jsxs("section",{children:[e.jsxs("h3",{children:["Kursy (",s.length,")"]}),e.jsx(j,{className:"px-0 !grid-cols-1",courses:s,locationState:i})]})]})},[a,s,r,t]);return e.jsxs("section",{className:"prose max-w-full",children:[e.jsx(w,{title:r?`(${t}) Rezultaty wyszukiwania dla ${r}`:"Szukaj"}),e.jsxs("header",{className:"container pb-0",children:[e.jsx("h1",{className:"mb-0",children:"Szukaj"}),e.jsx("p",{children:"Wskazówka: Obszary po których możesz szukać:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Artykuły: (tytuł, opis, słowa klucz, kategorie, zawartość)"}),e.jsx("li",{children:"Kursy: (tytuł, opis, słowa klucz, kategorie, zawartość)"}),e.jsx("li",{children:"Projekty: (tytuł, opis, słowa klucz, technologie, zawartość)"})]}),e.jsx("p",{children:"Możesz też wkleić skopiowany link aby spróbować przejść do wskazanej strony"})]}),e.jsxs(h,{preventScrollReset:!0,method:"get",className:"container py-0 bg-background flex gap-2",children:[e.jsx(m,{type:"text",name:"q",placeholder:"Treść zapytania",defaultValue:r??"",required:!0},r),e.jsxs(y,{type:"submit",children:[e.jsx(g,{className:"h-5 w-5 mr-1"}),"Szukaj"]})]}),e.jsx("div",{className:"container pt-0",children:n()})]})}export{O as default,C as loader};
