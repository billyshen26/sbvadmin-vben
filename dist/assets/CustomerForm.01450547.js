import{B as C}from"./BasicForm.825989f9.js";import{u as B}from"./useForm.d86fca6f.js";import{aw as E,a as g,cD as F,I as n,ay as e,o as h,j as b,z as p,n as i,bS as v,E as A}from"./index.8367fcd2.js";import{P}from"./index.dd012294.js";/* empty css              *//* empty css              */import"./index.87d79f4b.js";import"./index.fa14314b.js";import"./Checkbox.33bfb574.js";import"./index.4f70b7c8.js";import"./index.c9089777.js";import"./index.042b3875.js";import"./index.ea27ed30.js";import"./index.f110fe82.js";import"./get.48b99bda.js";import"./index.95c4865b.js";import"./eagerComputed.fe172d72.js";import"./index.3d26e154.js";import"./_baseIteratee.c843a1d9.js";import"./DeleteOutlined.29f5d02f.js";import"./index.4fe0e774.js";import"./useRefs.1dbb1e9d.js";import"./Form.387a0e34.js";import"./Col.25e299f8.js";import"./useFlexGapSupport.ce47a6e0.js";import"./useSize.ad21d4c8.js";import"./transButton.0249f64b.js";import"./index.b9fe3c9b.js";import"./index.c527a7cd.js";import"./useWindowSizeFn.511786bd.js";import"./FullscreenOutlined.0d08a206.js";import"./index.2a29556f.js";import"./index.68847fe1.js";import"./uuid.2b29000c.js";import"./download.53275b86.js";import"./base64Conver.08b9f4ec.js";import"./index.45e36bb6.js";import"./index.7d2663f6.js";import"./uniqBy.32c9ba88.js";import"./index.12c32bb6.js";import"./index.b31f5d76.js";import"./useContentViewHeight.a15fa53a.js";import"./ArrowLeftOutlined.02e7126f.js";import"./index.8c066700.js";const u=[{field:"field1",component:"Input",label:"render\u65B9\u5F0F",colProps:{span:8},rules:[{required:!0}],render:({model:o,field:t})=>v(n,{placeholder:"\u8BF7\u8F93\u5165",value:o[t],onChange:r=>{o[t]=r.target.value}})},{field:"field2",component:"Input",label:"render\u7EC4\u4EF6slot",colProps:{span:8},rules:[{required:!0}],renderComponentContent:()=>({suffix:()=>"suffix"})},{field:"field3",component:"Input",label:"\u81EA\u5B9A\u4E49Slot",slot:"f3",colProps:{span:8},rules:[{required:!0}]}],S=g({components:{BasicForm:C,CollapseContainer:F,PageWrapper:P,[n.name]:n},setup(){const{createMessage:o}=A(),[t,{setProps:r}]=B({labelWidth:120,schemas:u,actionColOptions:{span:24}});return{register:t,schemas:u,handleSubmit:a=>{o.success("click search,values:"+JSON.stringify(a))},setProps:r}}});function I(o,t,r,a,x,W){const l=e("a-input"),c=e("BasicForm"),d=e("CollapseContainer"),f=e("PageWrapper");return h(),b(f,{title:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u793A\u4F8B"},{default:p(()=>[i(d,{title:"\u81EA\u5B9A\u4E49\u8868\u5355"},{default:p(()=>[i(c,{onRegister:o.register,onSubmit:o.handleSubmit},{f3:p(({model:s,field:m})=>[i(l,{value:s[m],"onUpdate:value":_=>s[m]=_,placeholder:"\u81EA\u5B9A\u4E49slot"},null,8,["value","onUpdate:value"])]),_:1},8,["onRegister","onSubmit"])]),_:1})]),_:1})}var ho=E(S,[["render",I]]);export{ho as default};
