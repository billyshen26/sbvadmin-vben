var F=(t,s,e)=>new Promise((i,m)=>{var d=u=>{try{o(e.next(u))}catch(a){m(a)}},p=u=>{try{o(e.throw(u))}catch(a){m(a)}},o=u=>u.done?i(u.value):Promise.resolve(u.value).then(d,p);o((e=e.apply(t,s)).next())});import{P as _}from"./index.dd012294.js";import{aw as C,a as f,s as E,ay as c,o as D,j as A,z as r,n,B as l,i as y}from"./index.8367fcd2.js";import{t as g}from"./account.4600f3ad.js";import{C as B}from"./index.255f9574.js";import"./index.a71bb6ac.js";/* empty css              */import"./index.12c32bb6.js";import"./index.b31f5d76.js";import"./useSize.ad21d4c8.js";import"./eagerComputed.fe172d72.js";import"./useWindowSizeFn.511786bd.js";import"./useContentViewHeight.a15fa53a.js";import"./ArrowLeftOutlined.02e7126f.js";import"./index.8c066700.js";import"./transButton.0249f64b.js";import"./index.89758ac6.js";import"./index.7d2663f6.js";import"./Col.25e299f8.js";import"./useFlexGapSupport.ce47a6e0.js";import"./useRefs.1dbb1e9d.js";import"./PlusOutlined.166a72b3.js";const k=f({name:"TestSessionTimeout",components:{ACardGrid:B.Grid,ACard:B,PageWrapper:_},setup(){const t=E();function s(){return F(this,null,function*(){t.setToken(void 0),t.setSessionTimeout(!0)})}function e(){return F(this,null,function*(){try{yield g()}catch(i){i.message}})}return{test1:s,test2:e}}}),x=y("span",null,null,-1);function h(t,s,e,i,m,d){const p=c("a-button"),o=c("a-card-grid"),u=c("a-card"),a=c("PageWrapper");return D(),A(a,{title:"\u767B\u5F55\u8FC7\u671F\u793A\u4F8B",content:"\u7528\u6237\u767B\u5F55\u8FC7\u671F\u793A\u4F8B\uFF0C\u4E0D\u518D\u8DF3\u8F6C\u767B\u5F55\u9875\uFF0C\u76F4\u63A5\u751F\u6210\u9875\u9762\u8986\u76D6\u5F53\u524D\u9875\u9762\uFF0C\u65B9\u4FBF\u4FDD\u6301\u8FC7\u671F\u524D\u7684\u7528\u6237\u72B6\u6001\uFF01"},{default:r(()=>[n(u,{title:"\u8BF7\u70B9\u51FB\u4E0B\u9762\u7684\u6309\u94AE\u8BBF\u95EE\u6D4B\u8BD5\u63A5\u53E3",extra:"\u6240\u8BBF\u95EE\u7684\u63A5\u53E3\u4F1A\u8FD4\u56DEToken\u8FC7\u671F\u54CD\u5E94"},{default:r(()=>[n(o,{style:{width:"50%","text-align":"center"}},{default:r(()=>[n(p,{type:"primary",onClick:t.test1},{default:r(()=>[l("HttpStatus == 401")]),_:1},8,["onClick"])]),_:1}),n(o,{style:{width:"50%","text-align":"center"}},{default:r(()=>[x,n(p,{class:"ml-4",type:"primary",onClick:t.test2},{default:r(()=>[l("Response.code == 401")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})}var O=C(k,[["render",h]]);export{O as default};
