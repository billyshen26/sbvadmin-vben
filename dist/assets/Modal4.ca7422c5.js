import{B as l,a as c}from"./index.0c4b9f44.js";import{B as d}from"./BasicForm.f773a9d5.js";import{u}from"./useForm.81f1eb83.js";import{a as f,v as B,aw as g,al as h,ay as p,o as _,j as b,z as C,i as v,n as R,az as V}from"./index.39420817.js";import"./useWindowSizeFn.cced40b7.js";import"./FullscreenOutlined.d19f1549.js";/* empty css              *//* empty css              */import"./index.0a622c85.js";import"./index.43018d80.js";import"./Checkbox.9b91fd75.js";import"./index.c8ca870e.js";import"./index.29322fd8.js";import"./index.e9445caf.js";import"./index.027ad524.js";import"./index.1cd53406.js";import"./get.6f2f303d.js";import"./index.95ad0c82.js";import"./eagerComputed.c0af1bd8.js";import"./index.2614229b.js";import"./_baseIteratee.9e62eaba.js";import"./DeleteOutlined.78b435b9.js";import"./index.9dce64cb.js";import"./useRefs.6545062d.js";import"./Form.862a9351.js";import"./Col.3c54ccb5.js";import"./useFlexGapSupport.c94761c2.js";import"./useSize.3ed981b2.js";import"./transButton.81c83757.js";import"./index.4fb8a072.js";import"./index.8e6cee0c.js";import"./index.f19e1acd.js";import"./uuid.2b29000c.js";import"./download.e073872e.js";import"./base64Conver.08b9f4ec.js";import"./index.72697157.js";import"./index.6e4e2f56.js";import"./uniqBy.0ba20925.js";const n=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:24},defaultValue:"111"},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:24}}],F=f({components:{BasicModal:l,BasicForm:d},props:{userData:{type:Object}},setup(e){const t=B({}),[i,{}]=u({labelWidth:120,schemas:n,showActionButtonGroup:!1,actionColOptions:{span:24}}),[s]=c(o=>{o&&r(o)});function r(o){t.value={field2:o.data,field1:o.info}}function a(o){o&&e.userData&&h(()=>r(e.userData))}return{register:s,schemas:n,registerForm:i,model:t,handleVisibleChange:a}}}),M={class:"pt-3px pr-3px"};function D(e,t,i,s,r,a){const o=p("BasicForm"),m=p("BasicModal");return _(),b(m,V(e.$attrs,{onRegister:e.register,title:"Modal Title",onVisibleChange:e.handleVisibleChange}),{default:C(()=>[v("div",M,[R(o,{onRegister:e.registerForm,model:e.model},null,8,["onRegister","model"])])]),_:1},16,["onRegister","onVisibleChange"])}var co=g(F,[["render",D]]);export{co as default};
