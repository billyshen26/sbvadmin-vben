import{B as k}from"./TableImg.f2f8aa2e.js";import"./BasicForm.b41b64a3.js";import{u as B}from"./useTable.46c68991.js";import{getBasicColumns as C,getFormConfig as b}from"./tableData.849d9def.js";import{aw as F,a as A,v,ay as r,o as i,j as g,z as t,n as m,h as d,i as E,t as S,F as T,l as w,B as a}from"./index.c0967b1a.js";import{A as V}from"./index.eb07f5f3.js";import{A as D}from"./index.18bdeb69.js";import{g as K}from"./system.eafabc7e.js";import"./index.cacd335f.js";import"./Checkbox.071e1073.js";import"./index.f04eb2c4.js";import"./index.4f3da454.js";import"./eagerComputed.82cb1f50.js";import"./useForm.0698052b.js";import"./index.07b17f36.js";import"./index.383ffe08.js";import"./useWindowSizeFn.61e77864.js";import"./useContentViewHeight.e8201770.js";import"./ArrowLeftOutlined.2810427c.js";import"./index.d05a63f9.js";import"./useSize.94ed9e7a.js";import"./transButton.e4fed809.js";import"./index.b7d4c5f0.js";import"./index.c398725f.js";import"./index.6afcb42b.js";import"./uuid.2b29000c.js";import"./index.eaff5ec4.js";import"./_baseIteratee.94417579.js";import"./get.43c86fcf.js";import"./DeleteOutlined.c52efb7f.js";import"./index.d29e3af4.js";import"./useRefs.6884758e.js";import"./Form.941e23fa.js";import"./Col.ee81b9da.js";import"./useFlexGapSupport.36ce2f8a.js";import"./index.a99ae2d4.js";import"./FullscreenOutlined.77023218.js";import"./index.db9cfd51.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.35dca96f.js";import"./index.894a09a9.js";import"./fromPairs.84aabb58.js";import"./scrollTo.540e9da9.js";import"./index.3bd2b3ed.js";/* empty css              *//* empty css              */import"./index.f52e97ef.js";import"./index.84148ec9.js";import"./download.0d2286f5.js";import"./base64Conver.08b9f4ec.js";import"./index.3d3729a4.js";import"./index.c007c973.js";import"./uniqBy.f5d22a59.js";const $=A({components:{BasicTable:k,AAlert:V,Avatar:D},setup(){const o=v([]),[e,{getForm:n}]=B({title:"\u7528\u6237\u7BA1\u7406",api:K,columns:C(),useSearchForm:!0,formConfig:b(),showTableSetting:!0,tableSetting:{fullScreen:!0},showIndexColumn:!1,rowKey:"id"});function p(){n().getFieldsValue()}function u(s){o.value=s}return{registerTable:e,getFormValues:p,checkedKeys:o,onSelectChange:u}}}),N=a(" custom-slot "),z=a("\u6E05\u7A7A"),L={key:1},R=a("\u83B7\u53D6\u8868\u5355\u6570\u636E");function U(o,e,n,p,u,s){const l=r("a-button"),f=r("a-alert"),h=r("Avatar"),_=r("BasicTable");return i(),g(_,{onRegister:o.registerTable,rowSelection:{type:"checkbox",selectedRowKeys:o.checkedKeys,onChange:o.onSelectChange}},{"form-custom":t(()=>[N]),headerTop:t(()=>[m(f,{type:"info","show-icon":""},{message:t(()=>[o.checkedKeys.length>0?(i(),d(T,{key:0},[E("span",null,"\u5DF2\u9009\u4E2D"+S(o.checkedKeys.length)+"\u6761\u8BB0\u5F55(\u53EF\u8DE8\u9875)",1),m(l,{type:"link",onClick:e[0]||(e[0]=c=>o.checkedKeys=[]),size:"small"},{default:t(()=>[z]),_:1})],64)):(i(),d("span",L,"\u672A\u9009\u4E2D\u4EFB\u4F55\u9879\u76EE"))]),_:1})]),bodyCell:t(({column:c,record:y})=>[c.key==="avatar"?(i(),g(h,{key:0,size:60,src:y.avatar},null,8,["src"])):w("",!0)]),toolbar:t(()=>[m(l,{type:"primary",onClick:o.getFormValues},{default:t(()=>[R]),_:1},8,["onClick"])]),_:1},8,["onRegister","rowSelection"])}var jo=F($,[["render",U]]);export{jo as default};
