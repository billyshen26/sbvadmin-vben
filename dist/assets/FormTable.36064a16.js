import{B as g}from"./TableImg.19ee37bd.js";import"./BasicForm.ca811bd0.js";import{u as h}from"./useTable.ab640bca.js";import{getBasicColumns as _,getFormConfig as F}from"./tableData.0902c609.js";import{aw as k,a as y,v as B,ay as i,o as m,j as C,z as t,n as s,h as c,i as b,t as E,F as T,B as p}from"./index.8348383d.js";import{A}from"./index.a8cd0d1d.js";import{d as S}from"./table.d20faf0e.js";import"./index.d4611a99.js";import"./Checkbox.3b9bcf10.js";import"./index.8fd13be1.js";import"./index.5e762c0e.js";import"./eagerComputed.41f78358.js";import"./useForm.54c02e23.js";import"./index.c65a760a.js";import"./index.27ac051b.js";import"./index.4d85e874.js";import"./useSize.f58860b0.js";import"./useWindowSizeFn.09154002.js";import"./useContentViewHeight.46129ed8.js";import"./ArrowLeftOutlined.7e120511.js";import"./index.fdccaf3e.js";import"./transButton.70dc4593.js";import"./index.ed32aead.js";import"./index.b030cceb.js";import"./index.eb0a09dd.js";import"./uuid.2b29000c.js";import"./index.4d067013.js";import"./_baseIteratee.be77d8b0.js";import"./get.c1d4d86d.js";import"./DeleteOutlined.eb48a978.js";import"./index.3c78b5de.js";import"./useRefs.ccf13ce6.js";import"./Form.7f65eda1.js";import"./Col.d4375fa3.js";import"./useFlexGapSupport.285b1993.js";import"./index.471877fd.js";import"./FullscreenOutlined.bcbd11a6.js";import"./index.686586ad.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.d04b357c.js";import"./index.dc2026c7.js";import"./fromPairs.84aabb58.js";import"./scrollTo.7076958f.js";import"./index.d165c63a.js";/* empty css              *//* empty css              */import"./index.bc080e89.js";import"./index.0a7e3859.js";import"./download.cbeee918.js";import"./base64Conver.08b9f4ec.js";import"./index.714d82f8.js";import"./index.94e6cf54.js";import"./uniqBy.69274abc.js";const w=y({components:{BasicTable:g,AAlert:A},setup(){const o=B([]),[e,{getForm:n}]=h({title:"\u5F00\u542F\u641C\u7D22\u533A\u57DF",api:S,columns:_(),useSearchForm:!0,formConfig:F(),showTableSetting:!0,tableSetting:{fullScreen:!0},showIndexColumn:!1,rowKey:"id"});function a(){n().getFieldsValue()}function u(r){o.value=r}return{registerTable:e,getFormValues:a,checkedKeys:o,onSelectChange:u}}}),D=p(" custom-slot "),K=p("\u6E05\u7A7A"),V={key:1},v=p("\u83B7\u53D6\u8868\u5355\u6570\u636E");function $(o,e,n,a,u,r){const l=i("a-button"),d=i("a-alert"),f=i("BasicTable");return m(),C(f,{onRegister:o.registerTable,rowSelection:{type:"checkbox",selectedRowKeys:o.checkedKeys,onChange:o.onSelectChange}},{"form-custom":t(()=>[D]),headerTop:t(()=>[s(d,{type:"info","show-icon":""},{message:t(()=>[o.checkedKeys.length>0?(m(),c(T,{key:0},[b("span",null,"\u5DF2\u9009\u4E2D"+E(o.checkedKeys.length)+"\u6761\u8BB0\u5F55(\u53EF\u8DE8\u9875)",1),s(l,{type:"link",onClick:e[0]||(e[0]=N=>o.checkedKeys=[]),size:"small"},{default:t(()=>[K]),_:1})],64)):(m(),c("span",V,"\u672A\u9009\u4E2D\u4EFB\u4F55\u9879\u76EE"))]),_:1})]),toolbar:t(()=>[s(l,{type:"primary",onClick:o.getFormValues},{default:t(()=>[v]),_:1},8,["onClick"])]),_:1},8,["onRegister","rowSelection"])}var zo=k(w,[["render",$]]);export{zo as default};
