import{j as d,L as u,R as g,a as h,c as v,H as A,b}from"./vendor.8b4424a0.js";const x=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}};x();const r=d.exports.jsx,l=d.exports.jsxs,a=d.exports.Fragment,L=()=>l("div",{children:[r(u,{to:"/",children:"Home"}),"\xA0|\xA0",r(u,{to:"/about",children:"About"}),"\xA0|\xA0",r(u,{to:"/careers",children:"Careers"})]});function j(){return r(a,{children:r("h1",{children:"About"})})}function y(){return r(a,{children:r("h1",{children:"Careers"})})}var R="/react-gh-pages-playground/assets/logo.6000b0e9.svg";function N(){return r(a,{children:r("div",{className:"App",children:l("header",{className:"App-header",children:[r("img",{src:R,className:"App-logo",alt:"logo"}),l("p",{children:["Edit ",r("code",{children:"src/App.js"})," and save to reload."]}),r("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})})}function _(){return l(a,{children:[r(L,{}),l(g,{children:[r(h,{path:"/",element:r(N,{})}),r(h,{path:"/about",element:r(j,{})}),r(h,{path:"/careers",element:r(y,{})})]})]})}const k="modulepreload",p={},O="/react-gh-pages-playground/",C=function(i,c){return!c||c.length===0?i():Promise.all(c.map(n=>{if(n=`${O}${n}`,n in p)return;p[n]=!0;const e=n.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${t}`))return;const o=document.createElement("link");if(o.rel=e?"stylesheet":k,e||(o.as="script",o.crossOrigin=""),o.href=n,document.head.appendChild(o),e)return new Promise((m,f)=>{o.addEventListener("load",m),o.addEventListener("error",f)})})).then(()=>i())},$=s=>{s&&s instanceof Function&&C(()=>import("./web-vitals.67dce932.js"),[]).then(({getCLS:i,getFID:c,getFCP:n,getLCP:e,getTTFB:t})=>{i(s),c(s),n(s),e(s),t(s)})},F=v.createRoot(document.getElementById("root"));F.render(r(A,{children:r(b.StrictMode,{children:r(_,{})})}));$();
