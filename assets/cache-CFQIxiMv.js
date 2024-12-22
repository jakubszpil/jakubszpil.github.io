const r=new Map;async function t(a,s){const e=a.join(".");if(r.has(e))return r.get(e);const n=await s();return r.set(e,n),n}export{t as c};
