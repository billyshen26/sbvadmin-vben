import{B as l}from"./TableImg.35839d06.js";import{l as s}from"./BasicForm.f773a9d5.js";import{u as d}from"./useTable.514e52df.js";import{d as c}from"./table.81fd68d1.js";import{aw as F,a as b,ay as n,o as m,h as f,n as h,z as B,j as A,l as C}from"./index.39420817.js";import"./index.43018d80.js";import"./Checkbox.9b91fd75.js";import"./index.c8ca870e.js";import"./index.95ad0c82.js";import"./eagerComputed.c0af1bd8.js";import"./useForm.81f1eb83.js";import"./index.1343485c.js";import"./index.7da62c8d.js";import"./index.cc5703b6.js";import"./useSize.3ed981b2.js";import"./useWindowSizeFn.cced40b7.js";import"./useContentViewHeight.4b3f2ebd.js";import"./ArrowLeftOutlined.e2975301.js";import"./index.b612e84d.js";import"./transButton.81c83757.js";import"./index.e9445caf.js";import"./index.027ad524.js";import"./index.29322fd8.js";import"./uuid.2b29000c.js";import"./index.2614229b.js";import"./_baseIteratee.9e62eaba.js";import"./get.6f2f303d.js";import"./DeleteOutlined.78b435b9.js";import"./index.9dce64cb.js";import"./useRefs.6545062d.js";import"./Form.862a9351.js";import"./Col.3c54ccb5.js";import"./useFlexGapSupport.c94761c2.js";import"./index.0c4b9f44.js";import"./FullscreenOutlined.d19f1549.js";import"./index.0a622c85.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.1f1c16b0.js";import"./index.f19e1acd.js";import"./fromPairs.84aabb58.js";import"./scrollTo.aa427db0.js";import"./index.cdb43b03.js";/* empty css              *//* empty css              */import"./index.1cd53406.js";import"./index.4fb8a072.js";import"./index.8e6cee0c.js";import"./download.e073872e.js";import"./base64Conver.08b9f4ec.js";import"./index.72697157.js";import"./index.6e4e2f56.js";import"./uniqBy.0ba20925.js";const T=[{title:"ID",dataIndex:"id",fixed:"left",width:280},{title:"\u59D3\u540D",dataIndex:"name",width:260},{title:"\u5730\u5740",dataIndex:"address"},{title:"\u7F16\u53F7",dataIndex:"no",width:300},{title:"\u5F00\u59CB\u65F6\u95F4",width:200,dataIndex:"beginTime"},{title:"\u7ED3\u675F\u65F6\u95F4",dataIndex:"endTime",width:200}],_=b({components:{BasicTable:l,TableAction:s},setup(){const[t]=d({title:"TableAction\u7EC4\u4EF6\u53CA\u56FA\u5B9A\u5217\u793A\u4F8B",api:c,columns:T,rowSelection:{type:"radio"},bordered:!0,actionColumn:{width:160,title:"Action",dataIndex:"action"}});function i(o){}function e(o){}return{registerTable:t,handleDelete:i,handleOpen:e}}}),w={class:"p-4"};function x(t,i,e,o,D,I){const p=n("TableAction"),a=n("BasicTable");return m(),f("div",w,[h(a,{onRegister:t.registerTable},{bodyCell:B(({column:u,record:r})=>[u.key==="action"?(m(),A(p,{key:0,actions:[{label:"\u5220\u9664",icon:"ic:outline-delete-outline",onClick:t.handleDelete.bind(null,r)}],dropDownActions:[{label:"\u542F\u7528",popConfirm:{title:"\u662F\u5426\u542F\u7528\uFF1F",confirm:t.handleOpen.bind(null,r)}}]},null,8,["actions","dropDownActions"])):C("",!0)]),_:1},8,["onRegister"])])}var Dt=F(_,[["render",x]]);export{Dt as default};
