import{d as r,h as s,c as l,o as i,n as p,r as d,j as n,G as b,ae as h,a,w as m,k as _}from"./chunks/framework.DN7zo1cr.js";const f=r({__name:"JiaHaoButton",props:{active:{type:Boolean},circle:{type:Boolean},square:{type:Boolean},wide:{type:Boolean,default:!1},loading:{type:Boolean},outline:{type:Boolean,default:!1},glass:{type:Boolean},color:{},size:{}},setup(o){const e=o,t=s(()=>e.color?{neutral:"btn-neutral",primary:"btn-primary",secondary:"btn-secondary",accent:"btn-accent",error:"btn-error",warning:"btn-warning",success:"btn-success",info:"btn-info",ghost:"btn-ghost",link:"btn-link"}[e.color]:""),c=s(()=>({"btn-active":e.active,"btn-circle":e.circle,"btn-square":e.square,"btn-wide":e.wide,"btn-outline":e.outline,glass:e.glass}));return(u,g)=>(i(),l("button",{class:p(["btn",[t.value,c.value]])},[d(u.$slots,"default")],2))}}),y=JSON.parse('{"title":"Button Component","description":"","frontmatter":{},"headers":[],"relativePath":"components/button.md","filePath":"components/button.md"}'),k={name:"components/button.md"},C=r({...k,setup(o){return(e,t)=>(i(),l("div",null,[t[1]||(t[1]=n("h1",{id:"button-component",tabindex:"-1"},[a("Button Component "),n("a",{class:"header-anchor",href:"#button-component","aria-label":'Permalink to "Button Component"'},"​")],-1)),t[2]||(t[2]=n("h2",{id:"button-with-brand-colors",tabindex:"-1"},[a("Button with Brand Colors "),n("a",{class:"header-anchor",href:"#button-with-brand-colors","aria-label":'Permalink to "Button with Brand Colors"'},"​")],-1)),b(_(f),{color:"primary"},{default:m(()=>t[0]||(t[0]=[a("Click Me")])),_:1}),t[3]||(t[3]=h("",1))]))}});export{y as __pageData,C as default};
