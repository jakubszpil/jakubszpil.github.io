var h=Object.defineProperty;var f=(s,t,e)=>t in s?h(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var i=(s,t,e)=>f(s,typeof t!="symbol"?t+"":t,e);import{B as u,C as g}from"./chunk-K6CSEXPM-BavuAfpC.js";const p=s=>{try{return new URL(s),!0}catch{return!1}},c="query",m=new Map;function d(s,t){if(t&&m.has(t))return m.get(t);const e=n=>t?JSON.stringify(n).toLowerCase().includes(t.toLowerCase()):!1,r=Object.fromEntries(Object.entries(s).map(([n,a])=>[n,a.filter(e)]));return t&&m.set(t,r),r}function w(s){return Object.values(s).reduce((t,{length:e})=>t+e,0)}function I(s){const t=new URL(s),e=t.searchParams.get(c);if(e){if(e==="")throw t.searchParams.delete(c),u(t.toString());const r=e.trim().split(" ").filter(Boolean).join(" ");if(e!==r)throw r?t.searchParams.set(c,r):t.searchParams.delete(c),u(t.toString())}if(e&&p(e)){const r=new URL(s),n=new URL(e);if(r.origin===n.origin)throw u(g(n).replace("#/",""))}return e}const l=class l{constructor(){i(this,"timestamp",1742037910770);i(this,"storage",localStorage)}setItem(t,e){return this.storage.setItem(t,JSON.stringify({timestamp:this.timestamp,value:e}))}getItem(t){const e=this.storage.getItem(t);if(!e)return null;const r=JSON.parse(e);return!r||r.timestamp!==this.timestamp?null:r.value}static getInstance(){return this.instance||(this.instance=new l),this.instance}};i(l,"instance");let o=l;async function L(s,t){const r=new URL(s).pathname.split("/").filter(Boolean).join(".index.")||"index",n=o.getInstance().getItem(r);if(n!==null)return n;const a=await t();return o.getInstance().setItem(r,a),a}async function R({request:s,serverLoader:t}){const e=await L(s.url,t),r=I(s.url),n=d(e,r),a=w(n);return{...n,resultsCount:a,query:r}}R.hydrate=!0;export{R as c,c as q};
