import{B as g}from"./TableImg.0663be41.js";import"./BasicForm.7af4f538.js";import{u as h}from"./useTable.e64d1798.js";import{getBasicColumns as _,getFormConfig as F}from"./tableData.0902c609.js";import{aw as k,a as y,v as B,ay as i,o as m,j as C,z as t,n as s,h as c,i as b,t as E,F as T,B as p}from"./index.d4ca10f3.js";import{A}from"./index.7ade57da.js";import{d as S}from"./table.3bdba232.js";import"./index.c405ddfd.js";import"./Checkbox.ff2ab09a.js";import"./index.b71a1864.js";import"./index.5e28fba0.js";import"./eagerComputed.8687c6d5.js";import"./useForm.8451e5bc.js";import"./index.0e68f490.js";import"./index.db0acaad.js";import"./index.9b2082cf.js";import"./useSize.f993449f.js";import"./useWindowSizeFn.968ca37b.js";import"./useContentViewHeight.aaa3fe23.js";import"./ArrowLeftOutlined.c09fdbbc.js";import"./index.a5e40f1b.js";import"./transButton.fb5b3684.js";import"./index.f19423c7.js";import"./index.3184a444.js";import"./index.948f7f8f.js";import"./uuid.2b29000c.js";import"./index.0e4b3cce.js";import"./_baseIteratee.d5115617.js";import"./get.2f5eda52.js";import"./DeleteOutlined.745a92dd.js";import"./index.a503b2f9.js";import"./useRefs.71557a5e.js";import"./Form.e9f359a1.js";import"./Col.58986f6e.js";import"./useFlexGapSupport.302f345c.js";import"./index.403054ae.js";import"./FullscreenOutlined.94b2d73b.js";import"./index.a4787f4c.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.8700d71a.js";import"./index.5eb882e7.js";import"./fromPairs.84aabb58.js";import"./scrollTo.4c13efab.js";import"./index.e75b75de.js";/* empty css              *//* empty css              */import"./index.9d12d436.js";import"./index.e8bd22bd.js";import"./download.3e2ee18b.js";import"./base64Conver.08b9f4ec.js";import"./index.37214357.js";import"./index.b3155526.js";import"./uniqBy.c92a86f2.js";const w=y({components:{BasicTable:g,AAlert:A},setup(){const o=B([]),[e,{getForm:n}]=h({title:"\u5F00\u542F\u641C\u7D22\u533A\u57DF",api:S,columns:_(),useSearchForm:!0,formConfig:F(),showTableSetting:!0,tableSetting:{fullScreen:!0},showIndexColumn:!1,rowKey:"id"});function a(){n().getFieldsValue()}function u(r){o.value=r}return{registerTable:e,getFormValues:a,checkedKeys:o,onSelectChange:u}}}),D=p(" custom-slot "),K=p("\u6E05\u7A7A"),V={key:1},v=p("\u83B7\u53D6\u8868\u5355\u6570\u636E");function $(o,e,n,a,u,r){const l=i("a-button"),d=i("a-alert"),f=i("BasicTable");return m(),C(f,{onRegister:o.registerTable,rowSelection:{type:"checkbox",selectedRowKeys:o.checkedKeys,onChange:o.onSelectChange}},{"form-custom":t(()=>[D]),headerTop:t(()=>[s(d,{type:"info","show-icon":""},{message:t(()=>[o.checkedKeys.length>0?(m(),c(T,{key:0},[b("span",null,"\u5DF2\u9009\u4E2D"+E(o.checkedKeys.length)+"\u6761\u8BB0\u5F55(\u53EF\u8DE8\u9875)",1),s(l,{type:"link",onClick:e[0]||(e[0]=N=>o.checkedKeys=[]),size:"small"},{default:t(()=>[K]),_:1})],64)):(m(),c("span",V,"\u672A\u9009\u4E2D\u4EFB\u4F55\u9879\u76EE"))]),_:1})]),toolbar:t(()=>[s(l,{type:"primary",onClick:o.getFormValues},{default:t(()=>[v]),_:1},8,["onClick"])]),_:1},8,["onRegister","rowSelection"])}var zo=k(w,[["render",$]]);export{zo as default};
