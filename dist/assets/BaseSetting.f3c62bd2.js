var d=(o,s,r)=>new Promise((c,i)=>{var l=t=>{try{e(r.next(t))}catch(m){i(m)}},a=t=>{try{e(r.throw(t))}catch(m){i(m)}},e=t=>t.done?c(t.value):Promise.resolve(t.value).then(l,a);e((r=r.apply(o,s)).next())});import{a as C,cD as g,C as h,s as B,N as F,f as A,aw as b,E as w,ay as p,o as I,j as S,z as u,n,i as _,B as y,fh as k,fi as E}from"./index.8367fcd2.js";/* empty css              */import{B as R}from"./BasicForm.825989f9.js";import{u as x}from"./useForm.d86fca6f.js";import{a as N}from"./index.9627a386.js";import{h as U}from"./header.d801b988.js";import{a as V}from"./account.4600f3ad.js";import{b as $}from"./data.08d7c751.js";import{u as M}from"./upload.11b80c78.js";import{R as T,C as j}from"./index.7d2663f6.js";/* empty css              */import"./index.87d79f4b.js";import"./index.fa14314b.js";import"./Checkbox.33bfb574.js";import"./index.4f70b7c8.js";import"./index.c9089777.js";import"./index.042b3875.js";import"./index.ea27ed30.js";import"./index.f110fe82.js";import"./get.48b99bda.js";import"./index.95c4865b.js";import"./eagerComputed.fe172d72.js";import"./index.3d26e154.js";import"./_baseIteratee.c843a1d9.js";import"./DeleteOutlined.29f5d02f.js";import"./index.4fe0e774.js";import"./useRefs.1dbb1e9d.js";import"./Form.387a0e34.js";import"./Col.25e299f8.js";import"./useFlexGapSupport.ce47a6e0.js";import"./useSize.ad21d4c8.js";import"./transButton.0249f64b.js";import"./index.b9fe3c9b.js";import"./index.c527a7cd.js";import"./useWindowSizeFn.511786bd.js";import"./FullscreenOutlined.0d08a206.js";import"./index.2a29556f.js";import"./index.68847fe1.js";import"./uuid.2b29000c.js";import"./download.53275b86.js";import"./base64Conver.08b9f4ec.js";import"./index.45e36bb6.js";import"./uniqBy.32c9ba88.js";import"./index.b31f5d76.js";import"./index.8c066700.js";const z=C({components:{BasicForm:R,CollapseContainer:g,Button:h,ARow:T,ACol:j,CropperAvatar:N},setup(){const{createMessage:o}=w(),s=B(),[r,{setFieldsValue:c}]=x({labelWidth:120,schemas:$,showActionButtonGroup:!1});F(()=>d(this,null,function*(){const a=yield V();c(a)}));const i=A(()=>{const{avatar:a}=s.getUserInfo;return a||U});function l({src:a,data:e}){const t=s.getUserInfo;t.avatar=a,s.setUserInfo(t)}return{avatar:i,register:r,uploadApi:M,updateAvatar:l,handleSubmit:()=>{o.success("\u66F4\u65B0\u6210\u529F\uFF01")}}}}),D=o=>(k("data-v-8891ad62"),o=o(),E(),o),G={class:"change-avatar"},P=D(()=>_("div",{class:"mb-2"},"\u5934\u50CF",-1));function W(o,s,r,c,i,l){const a=p("BasicForm"),e=p("a-col"),t=p("CropperAvatar"),m=p("a-row"),f=p("Button"),v=p("CollapseContainer");return I(),S(v,{title:"\u57FA\u672C\u8BBE\u7F6E",canExpan:!1},{default:u(()=>[n(m,{gutter:24},{default:u(()=>[n(e,{span:14},{default:u(()=>[n(a,{onRegister:o.register},null,8,["onRegister"])]),_:1}),n(e,{span:10},{default:u(()=>[_("div",G,[P,n(t,{uploadApi:o.uploadApi,value:o.avatar,btnText:"\u66F4\u6362\u5934\u50CF",btnProps:{preIcon:"ant-design:cloud-upload-outlined"},onChange:o.updateAvatar,width:"150"},null,8,["uploadApi","value","onChange"])])]),_:1})]),_:1}),n(f,{type:"primary",onClick:o.handleSubmit},{default:u(()=>[y(" \u66F4\u65B0\u57FA\u672C\u4FE1\u606F ")]),_:1},8,["onClick"])]),_:1})}var To=b(z,[["render",W],["__scopeId","data-v-8891ad62"]]);export{To as default};
