import{B as d}from"./TableImg.35839d06.js";import"./BasicForm.f773a9d5.js";import{E as f}from"./index.369f8ab3.js";import{c as _,d as n,j as E}from"./data.1ecdac47.js";import{b as B}from"./index.0c4b9f44.js";import{P as C}from"./index.1343485c.js";import{aw as F,a as x,ay as t,o as b,j as g,z as r,n as p,B as M}from"./index.39420817.js";import"./index.43018d80.js";import"./Checkbox.9b91fd75.js";import"./index.c8ca870e.js";import"./index.95ad0c82.js";import"./eagerComputed.c0af1bd8.js";import"./useForm.81f1eb83.js";import"./index.e9445caf.js";import"./index.027ad524.js";import"./index.29322fd8.js";import"./uuid.2b29000c.js";import"./index.2614229b.js";import"./_baseIteratee.9e62eaba.js";import"./get.6f2f303d.js";import"./DeleteOutlined.78b435b9.js";import"./index.9dce64cb.js";import"./useRefs.6545062d.js";import"./Form.862a9351.js";import"./Col.3c54ccb5.js";import"./useFlexGapSupport.c94761c2.js";import"./useSize.3ed981b2.js";import"./useWindowSizeFn.cced40b7.js";import"./index.0a622c85.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.1f1c16b0.js";import"./FullscreenOutlined.d19f1549.js";import"./index.f19e1acd.js";import"./fromPairs.84aabb58.js";import"./scrollTo.aa427db0.js";import"./index.cdb43b03.js";/* empty css              *//* empty css              */import"./index.1cd53406.js";import"./transButton.81c83757.js";import"./index.4fb8a072.js";import"./index.8e6cee0c.js";import"./download.e073872e.js";import"./base64Conver.08b9f4ec.js";import"./index.72697157.js";import"./index.6e4e2f56.js";import"./uniqBy.0ba20925.js";import"./index.7da62c8d.js";import"./index.cc5703b6.js";import"./useContentViewHeight.4b3f2ebd.js";import"./ArrowLeftOutlined.e2975301.js";import"./index.b612e84d.js";const A=x({components:{BasicTable:d,ExpExcelModal:f,PageWrapper:C},setup(){function o({filename:i,bookType:a}){E({data:n,filename:i,write2excelOpts:{bookType:a}})}const[e,{openModal:m}]=B();return{defaultHeader:o,columns:_,data:n,register:e,openModal:m}}});function S(o,e,m,i,a,T){const s=t("a-button"),u=t("BasicTable"),c=t("ExpExcelModal"),l=t("PageWrapper");return b(),g(l,{title:"\u5BFC\u51FA\u793A\u4F8B",content:"\u53EF\u4EE5\u9009\u62E9\u5BFC\u51FA\u683C\u5F0F"},{default:r(()=>[p(u,{title:"\u57FA\u7840\u8868\u683C",columns:o.columns,dataSource:o.data},{toolbar:r(()=>[p(s,{onClick:o.openModal},{default:r(()=>[M(" \u5BFC\u51FA ")]),_:1},8,["onClick"])]),_:1},8,["columns","dataSource"]),p(c,{onRegister:o.register,onSuccess:o.defaultHeader},null,8,["onRegister","onSuccess"])]),_:1})}var To=F(A,[["render",S]]);export{To as default};
