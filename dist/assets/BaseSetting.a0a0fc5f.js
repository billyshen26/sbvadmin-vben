var v=(t,p,u)=>new Promise((d,l)=>{var _=e=>{try{n(u.next(e))}catch(o){l(o)}},m=e=>{try{n(u.throw(e))}catch(o){l(o)}},n=e=>e.done?d(e.value):Promise.resolve(e.value).then(_,m);n((u=u.apply(t,p)).next())});import{aw as b,a as w,cD as I,C as D,s as E,N as S,fA as k,f as B,ay as i,o as C,j as F,z as a,n as r,B as f,h as U,F as T,aB as R,t as N,i as V,E as $}from"./index.39420817.js";import{T as x}from"./index.29322fd8.js";/* empty css              */import{D as M}from"./index.0a622c85.js";import{B as j}from"./BasicForm.f773a9d5.js";import{u as z}from"./useForm.81f1eb83.js";import{a as G}from"./index.382b7944.js";import{h as L}from"./header.d801b988.js";import{b as P}from"./data.de8c5b00.js";import{u as W}from"./upload.32f9b333.js";import{e as A}from"./System.9b787e67.js";import{R as Z,C as q}from"./index.6e4e2f56.js";/* empty css              */import"./index.43018d80.js";import"./Checkbox.9b91fd75.js";import"./index.c8ca870e.js";import"./index.e9445caf.js";import"./index.027ad524.js";import"./index.1cd53406.js";import"./get.6f2f303d.js";import"./index.95ad0c82.js";import"./eagerComputed.c0af1bd8.js";import"./index.2614229b.js";import"./_baseIteratee.9e62eaba.js";import"./DeleteOutlined.78b435b9.js";import"./index.9dce64cb.js";import"./useRefs.6545062d.js";import"./Form.862a9351.js";import"./Col.3c54ccb5.js";import"./useFlexGapSupport.c94761c2.js";import"./useSize.3ed981b2.js";import"./transButton.81c83757.js";import"./index.4fb8a072.js";import"./index.0c4b9f44.js";import"./useWindowSizeFn.cced40b7.js";import"./FullscreenOutlined.d19f1549.js";import"./index.8e6cee0c.js";import"./index.f19e1acd.js";import"./uuid.2b29000c.js";import"./download.e073872e.js";import"./base64Conver.08b9f4ec.js";import"./index.72697157.js";import"./uniqBy.0ba20925.js";import"./index.cc5703b6.js";import"./index.b612e84d.js";const H=w({components:{Tag:x,BasicForm:j,CollapseContainer:I,Button:D,ARow:Z,ACol:q,CropperAvatar:G,Divider:M},setup(){const{createMessage:t}=$(),p=E(),[u,{setFieldsValue:d,validate:l}]=z({labelWidth:120,schemas:P,showActionButtonGroup:!1});S(()=>v(this,null,function*(){const o=yield k();d(o)}));const _=B(()=>{const{avatar:o}=p.getUserInfo;return o||L}),m=B(()=>{const{roles:o}=p.getUserInfo;return o||[]});function n({source:o,data:s}){const c=p.getUserInfo;c.avatar=o,p.setUserInfo(c);const g={id:c.userId,avatar:s.result};A(g).then(()=>{t.success("\u4FEE\u6539\u6210\u529F!")}).catch(()=>{t.error("3")}).finally(()=>{})}function e(){return v(this,null,function*(){const o=yield l();A(o).then(s=>{t.success(s)}).catch(()=>{t.error("3")}).finally(()=>{})})}return{avatar:_,roles:m,register:u,uploadApi:W,updateAvatar:n,handleSubmit:e}}}),J={class:"change-avatar"};function K(t,p,u,d,l,_){const m=i("BasicForm"),n=i("a-col"),e=i("Divider"),o=i("Tag"),s=i("a-row"),c=i("CropperAvatar"),g=i("Button"),y=i("CollapseContainer");return C(),F(y,{title:"\u57FA\u672C\u8BBE\u7F6E",canExpan:!1},{default:a(()=>[r(s,{gutter:24},{default:a(()=>[r(n,{span:14},{default:a(()=>[r(m,{onRegister:t.register},null,8,["onRegister"])]),_:1}),r(n,{span:10},{default:a(()=>[r(e,null,{default:a(()=>[f("\u8D26\u53F7\u89D2\u8272")]),_:1}),r(s,{gutter:24},{default:a(()=>[(C(!0),U(T,null,R(t.roles,h=>(C(),F(o,{key:h.value,color:"green"},{default:a(()=>[f(N(h.nameZh),1)]),_:2},1024))),128))]),_:1}),r(e,null,{default:a(()=>[f("\u5934\u50CF")]),_:1}),r(s,{gutter:24},{default:a(()=>[V("div",J,[r(c,{uploadApi:t.uploadApi,value:t.avatar,btnText:"\u66F4\u6362\u5934\u50CF",btnProps:{preIcon:"ant-design:cloud-upload-outlined"},onChange:t.updateAvatar,width:"150"},null,8,["uploadApi","value","onChange"])])]),_:1})]),_:1})]),_:1}),r(g,{type:"primary",onClick:t.handleSubmit},{default:a(()=>[f(" \u66F4\u65B0\u57FA\u672C\u4FE1\u606F ")]),_:1},8,["onClick"])]),_:1})}var Po=b(H,[["render",K],["__scopeId","data-v-941958e6"]]);export{Po as default};
