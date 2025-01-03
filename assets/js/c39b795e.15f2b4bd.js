"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[7338],{75056:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>i,default:()=>c,frontMatter:()=>d,metadata:()=>l,toc:()=>a});var n=s(74848),r=s(28453);const d={title:"Helpers",slug:"/components-helpers"},i="Helper components in Langflow",l={id:"Components/components-helpers",title:"Helpers",description:"Helper components provide utility functions to help manage data, tasks, and other components in your flow.",source:"@site/docs/Components/components-helpers.md",sourceDirName:"Components",slug:"/components-helpers",permalink:"/components-helpers",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Helpers",slug:"/components-helpers"},sidebar:"docs",previous:{title:"Embeddings",permalink:"/components-embedding-models"},next:{title:"Inputs and outputs",permalink:"/components-io"}},h={},a=[{value:"Use a helper component in a flow",id:"use-a-helper-component-in-a-flow",level:2},{value:"Create List",id:"create-list",level:2},{value:"Inputs",id:"inputs",level:3},{value:"Current date",id:"current-date",level:2},{value:"Inputs",id:"inputs-1",level:3},{value:"Outputs",id:"outputs",level:3},{value:"ID Generator",id:"id-generator",level:2},{value:"Outputs",id:"outputs-1",level:3},{value:"Message history",id:"message-history",level:2},{value:"Inputs",id:"inputs-2",level:3},{value:"Outputs",id:"outputs-2",level:3},{value:"Store Message",id:"store-message",level:2},{value:"Inputs",id:"inputs-3",level:3},{value:"Outputs",id:"outputs-3",level:3},{value:"Structured output",id:"structured-output",level:2},{value:"Input",id:"input",level:3},{value:"Output",id:"output",level:3}];function o(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"helper-components-in-langflow",children:"Helper components in Langflow"})}),"\n",(0,n.jsx)(t.p,{children:"Helper components provide utility functions to help manage data, tasks, and other components in your flow."}),"\n",(0,n.jsx)(t.h2,{id:"use-a-helper-component-in-a-flow",children:"Use a helper component in a flow"}),"\n",(0,n.jsxs)(t.p,{children:["Chat memory in Langflow is stored either in local Langflow tables with ",(0,n.jsx)(t.code,{children:"LCBufferMemory"}),", or connected to an external database."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"Store Message"})," helper component stores chat memories as ",(0,n.jsx)(t.a,{href:"/guides-data-message",children:"Data"})," objects, and the ",(0,n.jsx)(t.strong,{children:"Message History"})," helper component retrieves chat messages as data objects or strings."]}),"\n",(0,n.jsxs)(t.p,{children:["This example flow stores and retrieves chat history from an ",(0,n.jsx)(t.a,{href:"/components-memories#astradbchatmemory-component",children:"AstraDBChatMemory"})," component with ",(0,n.jsx)(t.strong,{children:"Store Message"})," and ",(0,n.jsx)(t.strong,{children:"Chat Memory"})," components."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Sample Flow storing Chat Memory in AstraDB",src:s(72654).A+"",width:"3178",height:"1228"})}),"\n",(0,n.jsx)(t.h2,{id:"create-list",children:"Create List"}),"\n",(0,n.jsx)(t.p,{children:"This component dynamically creates a record with a specified number of fields."}),"\n",(0,n.jsx)(t.h3,{id:"inputs",children:"Inputs"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Display Name"}),(0,n.jsx)(t.th,{children:"Info"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"n_fields"}),(0,n.jsx)(t.td,{children:"Number of Fields"}),(0,n.jsx)(t.td,{children:"Number of fields to be added to the record."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"text_key"}),(0,n.jsx)(t.td,{children:"Text Key"}),(0,n.jsx)(t.td,{children:"Key used as text."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"current-date",children:"Current date"}),"\n",(0,n.jsx)(t.p,{children:"The Current Date component returns the current date and time in a selected timezone. This component provides a flexible way to obtain timezone-specific date and time information within a Langflow pipeline."}),"\n",(0,n.jsx)(t.h3,{id:"inputs-1",children:"Inputs"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Display Name"}),(0,n.jsx)(t.th,{children:"Info"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"timezone"}),(0,n.jsx)(t.td,{children:"Timezone"}),(0,n.jsx)(t.td,{children:"Select the timezone for the current date and time."})]})})]}),"\n",(0,n.jsx)(t.h3,{id:"outputs",children:"Outputs"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Display Name"}),(0,n.jsx)(t.th,{children:"Info"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"current_date"}),(0,n.jsx)(t.td,{children:"Current Date"}),(0,n.jsx)(t.td,{children:"The resulting current date and time in the selected timezone."})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"id-generator",children:"ID Generator"}),"\n",(0,n.jsx)(t.p,{children:"This component generates a unique ID."}),"\n",(0,n.jsx)(t.h3,{id:"outputs-1",children:"Outputs"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Display Name"}),(0,n.jsx)(t.th,{children:"Info"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"value"}),(0,n.jsx)(t.td,{children:"Value"}),(0,n.jsx)(t.td,{children:"Unique ID generated."})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"message-history",children:"Message history"}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"Prior to Langflow 1.1, this component was known as the Chat Memory component."})}),"\n",(0,n.jsx)(t.p,{children:"This component retrieves and manages chat messages from Langflow tables or an external memory."}),"\n",(0,n.jsx)(t.h3,{id:"inputs-2",children:"Inputs"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Display Name"}),(0,n.jsx)(t.th,{children:"Info"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"memory"}),(0,n.jsx)(t.td,{children:"External Memory"}),(0,n.jsx)(t.td,{children:"Retrieve messages from an external memory. If empty, it will use the Langflow tables."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sender"}),(0,n.jsx)(t.td,{children:"Sender Type"}),(0,n.jsx)(t.td,{children:"Filter by sender type."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sender_name"}),(0,n.jsx)(t.td,{children:"Sender Name"}),(0,n.jsx)(t.td,{children:"Filter by sender name."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"n_messages"}),(0,n.jsx)(t.td,{children:"Number of Messages"}),(0,n.jsx)(t.td,{children:"Number of messages to retrieve."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"session_id"}),(0,n.jsx)(t.td,{children:"Session ID"}),(0,n.jsx)(t.td,{children:"The session ID of the chat. If empty, the current session ID parameter will be used."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"order"}),(0,n.jsx)(t.td,{children:"Order"}),(0,n.jsx)(t.td,{children:"Order of the messages."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"template"}),(0,n.jsx)(t.td,{children:"Template"}),(0,n.jsxs)(t.td,{children:["The template to use for formatting the data. It can contain the keys ",(0,n.jsx)(t.code,{children:"{text}"}),", ",(0,n.jsx)(t.code,{children:"{sender}"})," or any other key in the message data."]})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"outputs-2",children:"Outputs"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Display Name"}),(0,n.jsx)(t.th,{children:"Info"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"messages"}),(0,n.jsx)(t.td,{children:"Messages (Data)"}),(0,n.jsx)(t.td,{children:"Retrieved messages as Data objects."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"messages_text"}),(0,n.jsx)(t.td,{children:"Messages (Text)"}),(0,n.jsx)(t.td,{children:"Retrieved messages formatted as text."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"lc_memory"}),(0,n.jsx)(t.td,{children:"Memory"}),(0,n.jsxs)(t.td,{children:["A constructed Langchain ",(0,n.jsx)(t.a,{href:"https://api.python.langchain.com/en/latest/memory/langchain.memory.buffer.ConversationBufferMemory.html",children:"ConversationBufferMemory"})," object"]})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"store-message",children:"Store Message"}),"\n",(0,n.jsx)(t.p,{children:"This component stores chat messages or text into Langflow tables or an external memory."}),"\n",(0,n.jsx)(t.p,{children:"It provides flexibility in managing message storage and retrieval within a chat system."}),"\n",(0,n.jsx)(t.h3,{id:"inputs-3",children:"Inputs"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Display Name"}),(0,n.jsx)(t.th,{children:"Info"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"message"}),(0,n.jsx)(t.td,{children:"Message"}),(0,n.jsx)(t.td,{children:"The chat message to be stored. (Required)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"memory"}),(0,n.jsx)(t.td,{children:"External Memory"}),(0,n.jsx)(t.td,{children:"The external memory to store the message. If empty, it will use the Langflow tables."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sender"}),(0,n.jsx)(t.td,{children:"Sender"}),(0,n.jsx)(t.td,{children:"The sender of the message. Can be Machine or User. If empty, the current sender parameter will be used."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sender_name"}),(0,n.jsx)(t.td,{children:"Sender Name"}),(0,n.jsx)(t.td,{children:"The name of the sender. Can be AI or User. If empty, the current sender parameter will be used."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"session_id"}),(0,n.jsx)(t.td,{children:"Session ID"}),(0,n.jsx)(t.td,{children:"The session ID of the chat. If empty, the current session ID parameter will be used."})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"outputs-3",children:"Outputs"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Display Name"}),(0,n.jsx)(t.th,{children:"Info"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"stored_messages"}),(0,n.jsx)(t.td,{children:"Stored Messages"}),(0,n.jsx)(t.td,{children:"The list of stored messages after the current message has been added."})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"structured-output",children:"Structured output"}),"\n",(0,n.jsx)(t.p,{children:"This component transforms LLM responses into structured data formats."}),"\n",(0,n.jsx)(t.h3,{id:"input",children:"Input"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Display Name"}),(0,n.jsx)(t.th,{children:"Info"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"llm"}),(0,n.jsx)(t.td,{children:"Language Model"}),(0,n.jsx)(t.td,{children:"The language model to use to generate the structured output."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"input_value"}),(0,n.jsx)(t.td,{children:"Input message"}),(0,n.jsx)(t.td,{children:"The input message for the language model to process."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"schema_name"}),(0,n.jsx)(t.td,{children:"Schema Name"}),(0,n.jsx)(t.td,{children:"Provide a name for the output data schema."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"output_schema"}),(0,n.jsx)(t.td,{children:"Output Schema"}),(0,n.jsx)(t.td,{children:"Define the structure and data types for the model's output."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"multiple"}),(0,n.jsx)(t.td,{children:"Generate Multiple"}),(0,n.jsx)(t.td,{children:"Set to True if the model should generate a list of outputs instead of a single output."})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"output",children:"Output"}),"\n",(0,n.jsx)(t.p,{children:"| structured_output | Structured Output | The resulting structured output based on the defined schema. |"})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},72654:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/astra_db_chat_memory_rounded-9746ca2bb69d3b07ac0a071f4b9471b3.png"},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>l});var n=s(96540);const r={},d=n.createContext(r);function i(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);