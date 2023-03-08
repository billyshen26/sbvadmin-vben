import{B as d}from"./TableImg.38c272e8.js";import{k as F}from"./componentMap.5caad297.js";import{u as B}from"./useTable.432e1898.js";import{P as C}from"./index.36d19aa9.js";import{getBasicColumns as f}from"./tableData.64baad69.js";import{d as b}from"./table.f8030760.js";import{au as E,a as g,aw as i,o as m,j as a,z as e,n as _,i as T,t as w,l as A}from"./index.06197a05.js";import"./index.c8045c20.js";import"./Checkbox.1ce71871.js";import"./index.33f2d271.js";import"./index.b952814e.js";import"./eagerComputed.1e3d7237.js";import"./BasicForm.31adc009.js";/* empty css              *//* empty css              */import"./FormItem.vue_vue_type_script_lang.0e7d13ec.js";import"./index.331f4624.js";import"./index.9d548e17.js";import"./_baseIteratee.33514218.js";import"./get.77d0a2d9.js";import"./DeleteOutlined.0c059030.js";import"./index.2ba1bcf0.js";import"./useRefs.0486652e.js";import"./Form.512cbab8.js";import"./Col.f228daeb.js";import"./useFlexGapSupport.6ab3be12.js";import"./useSize.8a56df5e.js";import"./index.35d466b8.js";import"./uniqBy.cb625a5f.js";import"./index.8c595bf9.js";import"./useWindowSizeFn.0475e23c.js";import"./FullscreenOutlined.37c0aead.js";import"./index.fc2189e9.js";import"./useForm.c6a3abab.js";import"./RadioButtonGroup.7c6e0b74.js";import"./useFormItem.9a1b3011.js";import"./index.44109d36.js";import"./index.7cab04ca.js";import"./index.a263daea.js";import"./index.bf04fc2a.js";import"./uuid.2b29000c.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.19958bb6.js";import"./index.f17c6d02.js";import"./isNumber.6cc9e99f.js";import"./fromPairs.84aabb58.js";import"./scrollTo.37a15609.js";import"./index.2157deef.js";import"./index.c411709a.js";import"./transButton.3c6c09fc.js";import"./index.119acab0.js";import"./index.a38b09b9.js";import"./download.5e2aa8fb.js";import"./base64Conver.08b9f4ec.js";import"./index.10851f07.js";import"./index.fd9b44e9.js";import"./index.6ac04f0a.js";import"./index.41ee0a07.js";import"./useContentViewHeight.af54539e.js";import"./ArrowLeftOutlined.850a38c7.js";import"./index.9952bbab.js";import"./select.5ec2d569.js";const D=g({components:{BasicTable:d,TableAction:F,PageWrapper:C},setup(){const[o]=B({api:b,title:"\u53EF\u5C55\u5F00\u8868\u683C\u6F14\u793A",titleHelpMessage:["\u5DF2\u542F\u7528expandRowByClick","\u5DF2\u542F\u7528stopButtonPropagation"],columns:f(),rowKey:"id",canResize:!1,expandRowByClick:!0,actionColumn:{width:160,title:"Action",dataIndex:"action",fixed:"right"}});function r(n){}function p(n){}return{registerTable:o,handleDelete:r,handleOpen:p}}});function k(o,r,p,n,h,x){const l=i("TableAction"),s=i("BasicTable"),c=i("PageWrapper");return m(),a(c,{title:"\u53EF\u5C55\u5F00\u8868\u683C",content:"TableAction\u7EC4\u4EF6\u53EF\u914D\u7F6EstopButtonPropagation\u6765\u963B\u6B62\u64CD\u4F5C\u6309\u94AE\u7684\u70B9\u51FB\u4E8B\u4EF6\u5192\u6CE1\uFF0C\u4EE5\u4FBF\u914D\u5408Table\u7EC4\u4EF6\u7684expandRowByClick"},{default:e(()=>[_(s,{onRegister:o.registerTable},{expandedRowRender:e(({record:t})=>[T("span",null,"No: "+w(t.no),1)]),bodyCell:e(({column:t,record:u})=>[t.key==="action"?(m(),a(l,{key:0,stopButtonPropagation:"",actions:[{label:"\u5220\u9664",icon:"ic:outline-delete-outline",onClick:o.handleDelete.bind(null,u)}],dropDownActions:[{label:"\u542F\u7528",popConfirm:{title:"\u662F\u5426\u542F\u7528\uFF1F",confirm:o.handleOpen.bind(null,u)}}]},null,8,["actions","dropDownActions"])):A("",!0)]),_:1},8,["onRegister"])]),_:1})}var Oo=E(D,[["render",k]]);export{Oo as default};
