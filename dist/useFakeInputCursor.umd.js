(function(t,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(t=typeof globalThis<"u"?globalThis:t||self,e(t.useFakeInputCursor={},t.Vue))})(this,function(t,e){"use strict";const d={position:"absolute",top:"50%",width:"2px",backgroundColor:"black",opacity:"0",transform:"translateY(-50%)",height:"10px"},p={name:"blink",duration:"1s",timingFunction:"step-end",iterationCount:"infinite"};function l({cursorStyle:o,cursorAnimation:n}={}){o={...d,...o},n={...p,...n};const u=e.ref(!1),s=e.ref(0);return{el:()=>e.h("div",{style:{visibility:u.value?"visible":"hidden",left:`${s.value}px`,animationName:n.name,animationDuration:n.duration,animationTimingFunction:n.timingFunction,animationIterationCount:n.iterationCount,...o}},[e.h("style",null,`
          @keyframes blink {
            0% { opacity: 1; }
            50% { opacity: 0; }
            100% { opacity: 1; }
          }
        `)]),showInputCursor:()=>{u.value=!0},hideInputCursor:()=>{u.value=!1},updateInputCursor:(a,r)=>{if(a){if(r.length===0){s.value=0;return}const i=document.createElement("span");i.style.font=getComputedStyle(a).font,i.innerText=r,document.body.appendChild(i),s.value=i.offsetWidth,document.body.removeChild(i)}}}}t.useFakeInputCursor=l,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})});
