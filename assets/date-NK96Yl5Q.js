function i(e){return new Intl.DateTimeFormat("pl-PL",{day:"numeric",month:"long",year:"numeric"}).format(new Date(e))}function o(){return new Date().getFullYear()}function f(e){const n=new Date;if(isNaN(e.getTime()))throw new Error("Invalid startDate date format");const t=(n.getTime()-e.getTime())/(1e3*60*60*24)/365;return Math.round(t*2)/2}export{i as a,f as b,o as g};
