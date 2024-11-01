(function(e,t){typeof exports=="object"&&typeof module<"u"?t(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],t):(e=typeof globalThis<"u"?globalThis:e||self,t(e.useFakeInputCursor={},e.Vue))})(this,function(e,t){"use strict";const s={position:"absolute",bottom:"0",width:"2px",backgroundColor:"black",opacity:"0",transform:"translateY(50%)",height:"1.5em"},a={name:"blink",duration:"1s",timingFunction:"step-end",iterationCount:"infinite"};function p({cursorStyle:i,cursorAnimation:n}={}){i={...s,...i},n={...a,...n};const o=t.ref(!1),u=t.ref("");return{el:()=>t.h("div",{style:{position:"absolute",top:0,left:0,width:"100%"}},[t.h("span",{style:{opacity:0}},u.value),t.h("span",{style:{visibility:o.value?"visible":"hidden",animationName:n.name,animationDuration:n.duration,animationTimingFunction:n.timingFunction,animationIterationCount:n.iterationCount,...i}}),t.h("style",null,`
          @keyframes blink {
            0% { opacity: 1; }
            50% { opacity: 0; }
            100% { opacity: 1; }
          }
        `)]),showInputCursor:()=>{o.value=!0},hideInputCursor:()=>{o.value=!1},updateInputCursor:r=>{u.value=r}}}e.useFakeInputCursor=p,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});
