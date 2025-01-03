"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[1563],{60568:(t,e,n)=>{n.r(e),n.d(e,{CH:()=>l,assets:()=>s,chCodeConfig:()=>h,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>d,toc:()=>g});var o=n(74848),a=n(28453),r=n(24754);const i={title:"LangWatch",slug:"/integrations-langwatch"},c="LangWatch {#938674091aac4d9d9aa4aa6eb5c215b4}",d={id:"Integrations/integrations-langwatch",title:"LangWatch",description:"938674091aac4d9d9aa4aa6eb5c215b4}",source:"@site/docs/Integrations/integrations-langwatch.md",sourceDirName:"Integrations",slug:"/integrations-langwatch",permalink:"/integrations-langwatch",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"LangWatch",slug:"/integrations-langwatch"},sidebar:"docs",previous:{title:"LangSmith",permalink:"/integrations-langsmith"},next:{title:"Integrate Google OAuth with Langflow",permalink:"/integrations-setup-google-oauth-langflow"}},s={},l={annotations:r.hk,Code:r.Cy},h={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:!0,showCopyButton:!0,themeName:"github-dark"},g=[{value:"Step-by-step Configuration",id:"6f1d56ff6063417491d100d522dfcf1a",level:2}];function u(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",...(0,a.R)(),...t.components};return l||p("CH",!1),l.Code||p("CH.Code",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="github-dark"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #c9d1d9;--ch-t-background: #0d1117;--ch-t-lighter-inlineBackground: #0d1117e6;--ch-t-editor-background: #0d1117;--ch-t-editor-foreground: #c9d1d9;--ch-t-editor-lineHighlightBackground: #6e76811a;--ch-t-editor-rangeHighlightBackground: #ffffff0b;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #264F78;--ch-t-focusBorder: #1f6feb;--ch-t-tab-activeBackground: #0d1117;--ch-t-tab-activeForeground: #c9d1d9;--ch-t-tab-inactiveBackground: #010409;--ch-t-tab-inactiveForeground: #8b949e;--ch-t-tab-border: #30363d;--ch-t-tab-activeBorder: #0d1117;--ch-t-editorGroup-border: #30363d;--ch-t-editorGroupHeader-tabsBackground: #010409;--ch-t-editorLineNumber-foreground: #6e7681;--ch-t-input-background: #0d1117;--ch-t-input-foreground: #c9d1d9;--ch-t-input-border: #30363d;--ch-t-icon-foreground: #8b949e;--ch-t-sideBar-background: #010409;--ch-t-sideBar-foreground: #c9d1d9;--ch-t-sideBar-border: #30363d;--ch-t-list-activeSelectionBackground: #6e768166;--ch-t-list-activeSelectionForeground: #c9d1d9;--ch-t-list-hoverBackground: #6e76811a;--ch-t-list-hoverForeground: #c9d1d9; }'}}),"\n",(0,o.jsx)(e.header,{children:(0,o.jsx)(e.h1,{id:"938674091aac4d9d9aa4aa6eb5c215b4",children:"LangWatch"})}),"\n",(0,o.jsx)(e.p,{children:"LangWatch is an all-in-one LLMOps platform for monitoring, observability, analytics, evaluations and alerting for getting user insights and improve your LLM workflows."}),"\n",(0,o.jsx)(e.p,{children:"To integrate with Langflow, just add your LangWatch API as a Langflow environment variable and you are good to go!"}),"\n",(0,o.jsx)(e.h2,{id:"6f1d56ff6063417491d100d522dfcf1a",children:"Step-by-step Configuration"}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:["Obtain your LangWatch API key from ",(0,o.jsx)(e.a,{href:"https://app.langwatch.ai/",children:"https://app.langwatch.ai/"})]}),"\n",(0,o.jsx)(e.li,{children:"Add the following key to Langflow .env file:"}),"\n"]}),"\n",(0,o.jsx)(l.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"LANGWATCH_API_KEY",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"your-api-key"',props:{style:{color:"#A5D6FF"}}}]}],lang:"shell"},annotations:[]}]}),"\n",(0,o.jsx)(e.p,{children:"or export it in your terminal:"}),"\n",(0,o.jsx)(l.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"export",props:{style:{color:"#FF7B72"}}},{content:" LANGWATCH_API_KEY",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:'"your-api-key"',props:{style:{color:"#A5D6FF"}}}]}],lang:"shell"},annotations:[]}]}),"\n",(0,o.jsxs)(e.ol,{start:"3",children:["\n",(0,o.jsxs)(e.li,{children:["Restart Langflow using ",(0,o.jsx)(e.code,{children:"langflow run --env-file .env"})]}),"\n",(0,o.jsx)(e.li,{children:"Run a project in Langflow."}),"\n",(0,o.jsx)(e.li,{children:"View the LangWatch dashboard for monitoring and observability."}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{src:n(97423).A+"",width:"1987",height:"1032"})})]})}function f(t={}){const{wrapper:e}={...(0,a.R)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(u,{...t})}):u(t)}function p(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}},97423:(t,e,n)=>{n.d(e,{A:()=>o});const o=n.p+"assets/images/langwatch-dashboard-5f33bb25bb4d9022e08a4dab2592ca86.png"}}]);