const i=new Map,f=new Map;function g(n,c){return new Request(n,c)}async function q(n,c){const s=g(n,c),t=s.url,u=i.get(t);if(u)return u.clone();const o=f.get(t);if(o)return o.then(e=>e.clone());const r=window.fetch(s).then(e=>{if(!e.ok)throw e;return i.set(t,e),e.clone()});return f.set(t,r),r}export{q as f};
