import{B as C}from"./BasicForm.b41b64a3.js";import{u as B}from"./useForm.0698052b.js";import{aw as E,a as g,cD as F,I as n,ay as e,o as h,j as b,z as p,n as i,bS as v,E as A}from"./index.c0967b1a.js";import{P}from"./index.07b17f36.js";/* empty css              *//* empty css              */import"./index.db9cfd51.js";import"./index.cacd335f.js";import"./Checkbox.071e1073.js";import"./index.f04eb2c4.js";import"./index.6afcb42b.js";import"./index.b7d4c5f0.js";import"./index.c398725f.js";import"./index.f52e97ef.js";import"./get.43c86fcf.js";import"./index.4f3da454.js";import"./eagerComputed.82cb1f50.js";import"./index.eaff5ec4.js";import"./_baseIteratee.94417579.js";import"./DeleteOutlined.c52efb7f.js";import"./index.d29e3af4.js";import"./useRefs.6884758e.js";import"./Form.941e23fa.js";import"./Col.ee81b9da.js";import"./useFlexGapSupport.36ce2f8a.js";import"./useSize.94ed9e7a.js";import"./transButton.e4fed809.js";import"./index.84148ec9.js";import"./index.a99ae2d4.js";import"./useWindowSizeFn.61e77864.js";import"./FullscreenOutlined.77023218.js";import"./index.eb07f5f3.js";import"./index.894a09a9.js";import"./uuid.2b29000c.js";import"./download.0d2286f5.js";import"./base64Conver.08b9f4ec.js";import"./index.3d3729a4.js";import"./index.c007c973.js";import"./uniqBy.f5d22a59.js";import"./index.383ffe08.js";import"./index.18bdeb69.js";import"./useContentViewHeight.e8201770.js";import"./ArrowLeftOutlined.2810427c.js";import"./index.d05a63f9.js";const u=[{field:"field1",component:"Input",label:"render\u65B9\u5F0F",colProps:{span:8},rules:[{required:!0}],render:({model:o,field:t})=>v(n,{placeholder:"\u8BF7\u8F93\u5165",value:o[t],onChange:r=>{o[t]=r.target.value}})},{field:"field2",component:"Input",label:"render\u7EC4\u4EF6slot",colProps:{span:8},rules:[{required:!0}],renderComponentContent:()=>({suffix:()=>"suffix"})},{field:"field3",component:"Input",label:"\u81EA\u5B9A\u4E49Slot",slot:"f3",colProps:{span:8},rules:[{required:!0}]}],S=g({components:{BasicForm:C,CollapseContainer:F,PageWrapper:P,[n.name]:n},setup(){const{createMessage:o}=A(),[t,{setProps:r}]=B({labelWidth:120,schemas:u,actionColOptions:{span:24}});return{register:t,schemas:u,handleSubmit:a=>{o.success("click search,values:"+JSON.stringify(a))},setProps:r}}});function I(o,t,r,a,x,W){const l=e("a-input"),c=e("BasicForm"),d=e("CollapseContainer"),f=e("PageWrapper");return h(),b(f,{title:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u793A\u4F8B"},{default:p(()=>[i(d,{title:"\u81EA\u5B9A\u4E49\u8868\u5355"},{default:p(()=>[i(c,{onRegister:o.register,onSubmit:o.handleSubmit},{f3:p(({model:s,field:m})=>[i(l,{value:s[m],"onUpdate:value":_=>s[m]=_,placeholder:"\u81EA\u5B9A\u4E49slot"},null,8,["value","onUpdate:value"])]),_:1},8,["onRegister","onSubmit"])]),_:1})]),_:1})}var ho=E(S,[["render",I]]);export{ho as default};
