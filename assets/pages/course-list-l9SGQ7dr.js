import{j as e}from"../vendor/react-BpTz6Pah.js";import{f as a,i,d as n,h as c,n as u}from"../shared-CEE3kyka.js";import{C as m,a as p,b as d,c as j,d as g}from"../modules/courses-BKNdViV9.js";import"../index-COhRXcek.js";import"../vendor/routing-f0kELty9.js";import"../vendor/libs-CzKGx2XM.js";import"../modules/articles-Nklo1sx3.js";import"../modules/projects-VzTxlLKn.js";import"../core-B_B1_SJC.js";const S=c(async({params:s})=>{const o=s.category,r=await d();if(o){if(!r.includes(o))throw u();return{category:o,categories:r,courses:await j(o)}}return{courses:await g(),categories:r}});function b(){const{courses:s,categories:o,category:r}=a(),t=i(r??"Learning");return e.jsxs(e.Fragment,{children:[e.jsx(n,{title:t,description:"Kursy frontendowe obejmujące HTML, CSS, JavaScript i nowoczesne frameworki. Rozwijaj swoje umiejętności i twórz nowoczesne strony oraz aplikacje internetowe."}),e.jsxs("header",{className:"prose container",children:[e.jsx("h1",{children:t}),e.jsx(m,{showAllCategory:!0,categories:o})]}),e.jsx(p,{courses:s})]})}export{b as default,S as loader};
