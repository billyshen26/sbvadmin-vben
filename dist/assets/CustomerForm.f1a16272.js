import{B as C}from"./BasicForm.f773a9d5.js";import{u as B}from"./useForm.81f1eb83.js";import{aw as E,a as g,cD as F,I as n,ay as e,o as h,j as b,z as p,n as i,bS as v,E as A}from"./index.39420817.js";import{P}from"./index.1343485c.js";/* empty css              *//* empty css              */import"./index.0a622c85.js";import"./index.43018d80.js";import"./Checkbox.9b91fd75.js";import"./index.c8ca870e.js";import"./index.29322fd8.js";import"./index.e9445caf.js";import"./index.027ad524.js";import"./index.1cd53406.js";import"./get.6f2f303d.js";import"./index.95ad0c82.js";import"./eagerComputed.c0af1bd8.js";import"./index.2614229b.js";import"./_baseIteratee.9e62eaba.js";import"./DeleteOutlined.78b435b9.js";import"./index.9dce64cb.js";import"./useRefs.6545062d.js";import"./Form.862a9351.js";import"./Col.3c54ccb5.js";import"./useFlexGapSupport.c94761c2.js";import"./useSize.3ed981b2.js";import"./transButton.81c83757.js";import"./index.4fb8a072.js";import"./index.0c4b9f44.js";import"./useWindowSizeFn.cced40b7.js";import"./FullscreenOutlined.d19f1549.js";import"./index.8e6cee0c.js";import"./index.f19e1acd.js";import"./uuid.2b29000c.js";import"./download.e073872e.js";import"./base64Conver.08b9f4ec.js";import"./index.72697157.js";import"./index.6e4e2f56.js";import"./uniqBy.0ba20925.js";import"./index.7da62c8d.js";import"./index.cc5703b6.js";import"./useContentViewHeight.4b3f2ebd.js";import"./ArrowLeftOutlined.e2975301.js";import"./index.b612e84d.js";const u=[{field:"field1",component:"Input",label:"render\u65B9\u5F0F",colProps:{span:8},rules:[{required:!0}],render:({model:o,field:t})=>v(n,{placeholder:"\u8BF7\u8F93\u5165",value:o[t],onChange:r=>{o[t]=r.target.value}})},{field:"field2",component:"Input",label:"render\u7EC4\u4EF6slot",colProps:{span:8},rules:[{required:!0}],renderComponentContent:()=>({suffix:()=>"suffix"})},{field:"field3",component:"Input",label:"\u81EA\u5B9A\u4E49Slot",slot:"f3",colProps:{span:8},rules:[{required:!0}]}],S=g({components:{BasicForm:C,CollapseContainer:F,PageWrapper:P,[n.name]:n},setup(){const{createMessage:o}=A(),[t,{setProps:r}]=B({labelWidth:120,schemas:u,actionColOptions:{span:24}});return{register:t,schemas:u,handleSubmit:a=>{o.success("click search,values:"+JSON.stringify(a))},setProps:r}}});function I(o,t,r,a,x,W){const l=e("a-input"),c=e("BasicForm"),d=e("CollapseContainer"),f=e("PageWrapper");return h(),b(f,{title:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u793A\u4F8B"},{default:p(()=>[i(d,{title:"\u81EA\u5B9A\u4E49\u8868\u5355"},{default:p(()=>[i(c,{onRegister:o.register,onSubmit:o.handleSubmit},{f3:p(({model:s,field:m})=>[i(l,{value:s[m],"onUpdate:value":_=>s[m]=_,placeholder:"\u81EA\u5B9A\u4E49slot"},null,8,["value","onUpdate:value"])]),_:1},8,["onRegister","onSubmit"])]),_:1})]),_:1})}var ho=E(S,[["render",I]]);export{ho as default};
