import{j as d,u as f,N as g,R as b,a as u,c as v,H as x,b as y}from"./vendor.c391e918.js";const A=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}};A();const t=d.exports.jsx,c=d.exports.jsxs,l=d.exports.Fragment,N=f.ul`
    display: flex;

    a {
        text-decoration: none;
    }

    li {
        color: black;
        font-size: 1.3rem;
        list-style: none;
        margin: 0 0.8rem;
        position: relative;
    }

    .current {
        li {
            border-bottom: 2px solid black;
        }
    }
`,j=[{name:"Home",path:"/"},{name:"Careers",path:"/careers"},{name:"About",path:"/about"}],L=({isActive:n})=>n?"current":"",R=()=>c(N,{children:[" ",j.map((n,i)=>t(g,{to:n.path,exact:!0,className:L,children:t("li",{children:n.name})},i))]});function k(){return t(l,{children:t("h1",{children:"About"})})}function _(){return t(l,{children:t("h1",{children:"Careers"})})}var C="/react-gh-pages-playground/assets/logo.6000b0e9.svg";function O(){return t(l,{children:t("div",{className:"App",children:c("header",{className:"App-header",children:[t("img",{src:C,className:"App-logo",alt:"logo"}),c("p",{children:["Edit ",t("code",{children:"src/App.js"})," and save to reload."]}),t("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})})}function $(){return c(l,{children:[t(R,{}),c(b,{children:[t(u,{path:"/",element:t(O,{})}),t(u,{path:"/about",element:t(k,{})}),t(u,{path:"/careers",element:t(_,{})})]})]})}const F="modulepreload",h={},H="/react-gh-pages-playground/",S=function(i,a){return!a||a.length===0?i():Promise.all(a.map(o=>{if(o=`${H}${o}`,o in h)return;h[o]=!0;const e=o.endsWith(".css"),r=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${r}`))return;const s=document.createElement("link");if(s.rel=e?"stylesheet":F,e||(s.as="script",s.crossOrigin=""),s.href=o,document.head.appendChild(s),e)return new Promise((p,m)=>{s.addEventListener("load",p),s.addEventListener("error",m)})})).then(()=>i())},w=n=>{n&&n instanceof Function&&S(()=>import("./web-vitals.67dce932.js"),[]).then(({getCLS:i,getFID:a,getFCP:o,getLCP:e,getTTFB:r})=>{i(n),a(n),o(n),e(n),r(n)})},I=v.createRoot(document.getElementById("root"));I.render(t(x,{children:t(y.StrictMode,{children:t($,{})})}));w();
