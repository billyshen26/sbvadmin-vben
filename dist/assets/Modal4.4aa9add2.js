import{B as l,a as c}from"./index.231c4fbf.js";import{B as d}from"./BasicForm.34355df1.js";import{u}from"./useForm.a05eafb2.js";import{a as f,v as B,aw as g,al as h,ay as p,o as _,j as b,z as C,i as v,n as R,az as V}from"./index.ffcae84d.js";import"./useWindowSizeFn.c4dd1e65.js";import"./FullscreenOutlined.c3e6291b.js";/* empty css              *//* empty css              */import"./index.addfed2f.js";import"./index.ae7ad00a.js";import"./Checkbox.2dfe6f5e.js";import"./index.7ecb16ff.js";import"./index.dfb4bd27.js";import"./index.4c24022f.js";import"./index.d6ae4517.js";import"./index.9d180df2.js";import"./get.a1197a67.js";import"./index.ac8c6e58.js";import"./eagerComputed.f58931e3.js";import"./index.256ddfe8.js";import"./_baseIteratee.5809a8cb.js";import"./DeleteOutlined.95dd40c2.js";import"./index.47b7de49.js";import"./useRefs.411934b1.js";import"./Form.f1a415b1.js";import"./Col.a419e857.js";import"./useFlexGapSupport.4e724826.js";import"./useSize.d1b6afd4.js";import"./transButton.d40be8db.js";import"./index.1a9d87dc.js";import"./index.4ff0d8c4.js";import"./index.61c417e0.js";import"./uuid.2b29000c.js";import"./download.a9f3aff6.js";import"./base64Conver.08b9f4ec.js";import"./index.cf98b87a.js";import"./index.56da0cfe.js";import"./uniqBy.55d2f599.js";const n=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:24},defaultValue:"111"},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:24}}],F=f({components:{BasicModal:l,BasicForm:d},props:{userData:{type:Object}},setup(e){const t=B({}),[i,{}]=u({labelWidth:120,schemas:n,showActionButtonGroup:!1,actionColOptions:{span:24}}),[s]=c(o=>{o&&r(o)});function r(o){t.value={field2:o.data,field1:o.info}}function a(o){o&&e.userData&&h(()=>r(e.userData))}return{register:s,schemas:n,registerForm:i,model:t,handleVisibleChange:a}}}),M={class:"pt-3px pr-3px"};function D(e,t,i,s,r,a){const o=p("BasicForm"),m=p("BasicModal");return _(),b(m,V(e.$attrs,{onRegister:e.register,title:"Modal Title",onVisibleChange:e.handleVisibleChange}),{default:C(()=>[v("div",M,[R(o,{onRegister:e.registerForm,model:e.model},null,8,["onRegister","model"])])]),_:1},16,["onRegister","onVisibleChange"])}var co=g(F,[["render",D]]);export{co as default};
