import{j as t}from"./jsx-runtime-DtgEGaVE.js";var n=(e=>(e.TASK_INBOX="TASK_INBOX",e.TASK_PINNED="TASK_PINNED",e.TASK_ARCHIVED="TASK_ARCHIVED",e))(n||{});function T({task:e,onArchiveTask:g,onPinTask:y}){return t.jsxs("div",{className:`list-item ${e.state}`,children:[t.jsxs("label",{htmlFor:"checked","aria-label":`archiveTask-${e.id}`,className:"checkbox",children:[t.jsx("input",{type:"checkbox",disabled:!0,name:"checked",id:`archiveTask-${e.id}`,checked:e.state==="TASK_ARCHIVED"}),t.jsx("span",{className:"checkbox-custom",onClick:()=>g(e)})]}),t.jsx("label",{htmlFor:"title","aria-label":e.title,children:t.jsx("input",{type:"text",value:e.title,readOnly:!0,name:"title"})}),e.state!=="TASK_ARCHIVED"&&t.jsx("button",{className:"pin-button",onClick:()=>y(e),id:`pinTask-${e.id}`,"aria-label":`pinTask-${e.id}`,children:t.jsx("span",{className:"icon-star"})},`pinTask-${e.id}`)]})}T.__docgenInfo={description:"",methods:[],displayName:"Task",props:{task:{required:!0,tsType:{name:"signature",type:"object",raw:`{
    id: number;
    title: string;
    state: TaskState;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"state",value:{name:"TaskState",required:!0}}]}},description:""},onArchiveTask:{required:!0,tsType:{name:"signature",type:"function",raw:"(task: TaskType) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
    id: number;
    title: string;
    state: TaskState;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"state",value:{name:"TaskState",required:!0}}]}},name:"task"}],return:{name:"void"}}},description:""},onPinTask:{required:!0,tsType:{name:"signature",type:"function",raw:"(task: TaskType) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
    id: number;
    title: string;
    state: TaskState;
}`,signature:{properties:[{key:"id",value:{name:"number",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"state",value:{name:"TaskState",required:!0}}]}},name:"task"}],return:{name:"void"}}},description:""}}};const S={component:T,title:"Task",tags:["autodocs"]},a={args:{task:{id:1,title:"Test task",state:n.TASK_INBOX}}},r={args:{task:{...a.args.task,state:n.TASK_PINNED}}},s={args:{task:{...a.args.task,state:n.TASK_ARCHIVED}}};var i,u,o;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    task: {
      id: 1,
      title: 'Test task',
      state: TaskState.TASK_INBOX
    }
  }
}`,...(o=(u=a.parameters)==null?void 0:u.docs)==null?void 0:o.source}}};var c,d,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: TaskState.TASK_PINNED
    }
  }
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var m,p,k;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: TaskState.TASK_ARCHIVED
    }
  }
}`,...(k=(p=s.parameters)==null?void 0:p.docs)==null?void 0:k.source}}};const b=["Default","Pinned","Archived"],A=Object.freeze(Object.defineProperty({__proto__:null,Archived:s,Default:a,Pinned:r,__namedExportsOrder:b,default:S},Symbol.toStringTag,{value:"Module"}));export{a as D,n as T,T as a,A as b};
