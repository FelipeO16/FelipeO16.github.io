import{a as n,b as c,h as r,e as l}from"./entry.264d09fc.js";const f=(o,t)=>r("pre",null,JSON.stringify({message:"You should use slots with <ContentList>",slot:o,data:t},null,2)),y=n({name:"ContentList",props:{path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0}},render(o){const t=c(),{path:p,query:a}=o,d={...a||{},path:p||(a==null?void 0:a.path)||"/"};return r(l,d,{default:t!=null&&t.default?({data:e,refresh:u,isPartial:m})=>t.default({list:e,refresh:u,isPartial:m,...this.$attrs}):e=>f("default",e.data),empty:e=>t!=null&&t.empty?t.empty(e):f("default",e==null?void 0:e.data),"not-found":e=>{var u;return t!=null&&t["not-found"]?(u=t==null?void 0:t["not-found"])==null?void 0:u.call(t,e):f("not-found",e==null?void 0:e.data)}})}});export{y as default};