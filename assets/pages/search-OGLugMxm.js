import{j as s}from"../vendor/react-CFpgdT8K.js";import{F as p,r as u}from"../vendor/routing-D1rnJZHu.js";import{f as d,d as j,I as x,B as f,h as g}from"../shared-C0O4mna4.js";import{A as y,c as k}from"../modules/articles-D4_WyJlG.js";import{g as w}from"../modules/projects-DKYqQX6h.js";import{a as z,d as N}from"../modules/courses-D0xGr9rt.js";import{I as S}from"../vendor/libs-Dgr5UeD8.js";import"../index-fAB-Hc0m.js";import"../core-DthUg1gT.js";import"../content/articles/dependency-injection-kontra-typescript--lHtd-Bj.js";import"../content/articles/obserwatorium-czyli-wzorzec-projektowy-obserwatora-BmxXmuzX.js";import"../content/articles/signalizacja-czyli-koncept-signals-w-typescript-CAZ31kIf.js";import"../content/courses/nowoczesny-javascript-gbeECjV1.js";import"../content/courses/semantyczny-html-7pMmxkV9.js";import"../content/courses/szybszy-css-czyli-wprowadzenie-do-bem-CtuKKbIG.js";import"../content/courses/wprowadzenie-do-css-EY5cjLBL.js";import"../content/courses/wprowadzenie-do-dom-BL_WFjrb.js";import"../content/courses/wprowadzenie-do-html-C79jeOGl.js";import"../content/courses/wprowadzenie-do-javascript-Du6Kziuk.js";const V=g(({request:t})=>{const r=new URL(t.url),e=r.searchParams.get("q");if(e){if(e==="")throw r.searchParams.delete("q"),u(r.toString());const a=e.trim().split(" ").filter(Boolean).join(" ");if(e!==a)throw r.searchParams.set("q",a),u(r.toString())}if(!e)return{query:e,articles:[],courses:[],projects:[]};const i=a=>{if(!e)return!1;const o=JSON.stringify(a),c=e.toLowerCase();return o.toLowerCase().includes(c)},l=k().filter(i),m=N().filter(i),n=w().filter(i);return{query:e,articles:l,courses:m,projects:n}});function D(){const{query:t,articles:r,projects:e,courses:i}=d(),l=r.length+e.length+i.length,m=(n,a,o,c,h)=>n?a===0?s.jsxs("h2",{className:"mt-4",children:["Brak wyników wyszukiwania dla zapytania: ",n]}):s.jsxs(s.Fragment,{children:[s.jsxs("h2",{className:"mt-4",children:["Wyniki wyszukiwania (",a,")"]}),o.length>0&&s.jsxs("section",{children:[s.jsxs("h3",{children:["Artykuły (",o.length,")"]}),s.jsx(y,{className:"px-0 !grid-cols-1",articles:o})]}),c.length>0&&s.jsx("section",{children:s.jsxs("h3",{children:["Projekty (",c.length,")"]})}),h.length>0&&s.jsxs("section",{children:[s.jsxs("h3",{children:["Kursy (",h.length,")"]}),s.jsx(z,{className:"px-0 !grid-cols-1",courses:h})]})]}):null;return s.jsxs("section",{className:"prose max-w-full",children:[s.jsx(j,{title:`Szukaj${t?`: ${t}`:""}`}),s.jsxs("header",{className:"container pb-0",children:[s.jsx("h1",{className:"mb-0",children:"Wyszukaj"}),s.jsx("p",{children:"Wskazówka: Obszary po których możesz szukać:"}),s.jsxs("ul",{children:[s.jsx("li",{children:"Artykuły: (tytuł, opis, słowa klucz, kategorie, zawartość)"}),s.jsx("li",{children:"Kursy: (tytuł, opis, słowa klucz, kategorie, zawartość)"}),s.jsx("li",{children:"Projekty: (tytuł, opis, słowa klucz, technologie, zawartość)"})]})]}),s.jsxs(p,{method:"get",className:"container bg-background sticky top-12 z-10 left-0 pb-3 flex gap-2 lg:static",children:[s.jsx(x,{type:"text",name:"q",placeholder:"Treść zapytania",defaultValue:t??"",required:!0},t),s.jsxs(f,{type:"submit",children:[s.jsx(S,{className:"h-5 w-5 mr-1"}),"Szukaj"]})]}),s.jsx("div",{className:"container pt-0",children:m(t,l,r,e,i)})]})}export{D as default,V as loader};