import{j as e,a as n,l as c}from"./index.f3596eb7.js";import{r as a,L as s,c as l,R as d,B as p,a as h,b as t}from"./vendor.ac1a5cab.js";function m(){const[r,i]=a.exports.useState(0);return e("div",{className:"App",children:n("header",{className:"App-header",children:[e("img",{src:c,className:"App-logo",alt:"logo"}),e("p",{children:"Hello Vite + React!"}),e("p",{children:n("button",{type:"button",onClick:()=>i(o=>o+1),children:["count is: ",r]})}),e("div",{children:n("nav",{style:{paddingBottom:"1rem"},children:[e(s,{to:"/invoices",children:"Invoices"})," |"," ",e(s,{to:"/expenses",children:"Expenses"})]})})]})})}function u(){return e("main",{style:{padding:"1rem 0"},children:e("h2",{children:"Index Expenses"})})}function x(){return e("main",{style:{padding:"1rem 0"},children:e("h2",{children:"Index Invoices"})})}l.createRoot(document.getElementById("root")).render(e(d.StrictMode,{children:e(p,{children:n(h,{children:[e(t,{path:"/",element:e(m,{})}),e(t,{path:"/expenses",element:e(u,{})}),e(t,{path:"/invoices",element:e(x,{})})]})})}));