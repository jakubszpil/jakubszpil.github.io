import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{L as s}from"./chunk-HA7DTUK3-BaD1cgcl.js";import{a as r}from"./date-Id6XWU1s.js";import{B as n}from"./button-CQ7KyfO8.js";function m(a){return e.jsx("section",{className:`container pt-0 prose grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 ${a.className??""}`,children:a.articles.map(t=>e.jsx(n,{asChild:!0,variant:a.variant??"outline",className:"inline-flex flex-col items-start justify-start text-left h-auto w-auto text-wrap !no-underline truncate p-6",children:e.jsxs(s,{prefetch:"intent",to:`/blog/${t.slug}`,children:[e.jsx("h2",{className:"line-clamp-3 text-base font-semibold flex-1 m-0",children:t.title}),e.jsx("p",{className:"line-clamp-3 mt-2 text-neutral-700 font-normal dark:text-neutral-300",children:t.description}),t.createdAt&&e.jsx("span",{className:"text-neutral-600 text-xs dark:text-neutral-400",children:r(t.createdAt)})]})},t.id))})}export{m as A};
