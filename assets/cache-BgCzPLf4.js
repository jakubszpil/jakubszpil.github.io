const a=new Map;async function c(e,n){const r=new URL(e).pathname;if(a.has(r))return a.get(r);const t=await n();return a.set(r,t),a.get(r)}async function o(e){const n=()=>e.serverLoader();return c(e.request.url,n)}export{c as a,o as c};