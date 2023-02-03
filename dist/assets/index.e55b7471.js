var d=(o,l,r)=>new Promise((m,a)=>{var c=t=>{try{e(r.next(t))}catch(n){a(n)}},u=t=>{try{e(r.throw(t))}catch(n){a(n)}},e=t=>t.done?m(t.value):Promise.resolve(t.value).then(c,u);e((r=r.apply(o,l)).next())});import{B as P}from"./BasicForm.825989f9.js";import{u as b}from"./useForm.d86fca6f.js";import A from"./PersonTable.112cf56f.js";import{P as F}from"./index.dd012294.js";import{aw as g,a as v,v as C,ay as s,o as D,j as h,z as i,n as p,B as q}from"./index.8367fcd2.js";import{C as B}from"./index.255f9574.js";import"./index.a71bb6ac.js";/* empty css              */import"./index.2be18f16.js";/* empty css              */import"./index.87d79f4b.js";import"./index.fa14314b.js";import"./Checkbox.33bfb574.js";import"./index.4f70b7c8.js";import"./index.c9089777.js";import"./index.042b3875.js";import"./index.ea27ed30.js";import"./index.f110fe82.js";import"./get.48b99bda.js";import"./index.95c4865b.js";import"./eagerComputed.fe172d72.js";import"./index.3d26e154.js";import"./_baseIteratee.c843a1d9.js";import"./DeleteOutlined.29f5d02f.js";import"./index.4fe0e774.js";import"./useRefs.1dbb1e9d.js";import"./Form.387a0e34.js";import"./Col.25e299f8.js";import"./useFlexGapSupport.ce47a6e0.js";import"./useSize.ad21d4c8.js";import"./transButton.0249f64b.js";import"./index.b9fe3c9b.js";import"./index.c527a7cd.js";import"./useWindowSizeFn.511786bd.js";import"./FullscreenOutlined.0d08a206.js";import"./index.2a29556f.js";import"./index.68847fe1.js";import"./uuid.2b29000c.js";import"./download.53275b86.js";import"./base64Conver.08b9f4ec.js";import"./index.45e36bb6.js";import"./index.7d2663f6.js";import"./uniqBy.32c9ba88.js";import"./TableImg.75a55085.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.49900db0.js";import"./fromPairs.84aabb58.js";import"./scrollTo.e341ef5b.js";import"./index.8a3c87b4.js";import"./useTable.57c196e3.js";import"./index.12c32bb6.js";import"./index.b31f5d76.js";import"./useContentViewHeight.a15fa53a.js";import"./ArrowLeftOutlined.02e7126f.js";import"./index.8c066700.js";import"./index.89758ac6.js";import"./PlusOutlined.166a72b3.js";import"./Grid.998d6275.js";const f=[{label:"\u4ED8\u6653\u6653",value:"1"},{label:"\u5468\u6BDB\u6BDB",value:"2"}],_=[{label:"\u79C1\u5BC6",value:"1"},{label:"\u516C\u5F00",value:"2"}],k=[{field:"f1",component:"Input",label:"\u4ED3\u5E93\u540D",required:!0},{field:"f2",component:"Input",label:"\u4ED3\u5E93\u57DF\u540D",required:!0,componentProps:{addonBefore:"http://",addonAfter:"com"},colProps:{offset:2}},{field:"f3",component:"Select",label:"\u4ED3\u5E93\u7BA1\u7406\u5458",componentProps:{options:f},required:!0,colProps:{offset:2}},{field:"f4",component:"Select",label:"\u5BA1\u6279\u4EBA",componentProps:{options:f},required:!0},{field:"f5",component:"RangePicker",label:"\u751F\u6548\u65E5\u671F",required:!0,colProps:{offset:2}},{field:"f6",component:"Select",label:"\u4ED3\u5E93\u7C7B\u578B",componentProps:{options:_},required:!0,colProps:{offset:2}}],y=[{field:"t1",component:"Input",label:"\u4EFB\u52A1\u540D",required:!0},{field:"t2",component:"Input",label:"\u4EFB\u52A1\u63CF\u8FF0",required:!0,colProps:{offset:2}},{field:"t3",component:"Select",label:"\u6267\u884C\u4EBA",componentProps:{options:f},required:!0,colProps:{offset:2}},{field:"t4",component:"Select",label:"\u8D23\u4EFB\u4EBA",componentProps:{options:f},required:!0},{field:"t5",component:"TimePicker",label:"\u751F\u6548\u65E5\u671F",required:!0,componentProps:{style:{width:"100%"}},colProps:{offset:2}},{field:"t6",component:"Select",label:"\u4EFB\u52A1\u7C7B\u578B",componentProps:{options:_},required:!0,colProps:{offset:2}}];const T=v({name:"FormHightPage",components:{BasicForm:P,PersonTable:A,PageWrapper:F,[B.name]:B},setup(){const o=C(null),[l,{validate:r}]=b({layout:"vertical",baseColProps:{span:6},schemas:k,showActionButtonGroup:!1}),[m,{validate:a}]=b({layout:"vertical",baseColProps:{span:6},schemas:y,showActionButtonGroup:!1});function c(){return d(this,null,function*(){try{o.value&&o.value.getDataSource();const[u,e]=yield Promise.all([r(),a()])}catch(u){}})}return{register:l,registerTask:m,submitAll:c,tableRef:o}}});function S(o,l,r,m,a,c){const u=s("BasicForm"),e=s("a-card"),t=s("PersonTable"),n=s("a-button"),E=s("PageWrapper");return D(),h(E,{class:"high-form",title:"\u9AD8\u7EA7\u8868\u5355",content:" \u9AD8\u7EA7\u8868\u5355\u5E38\u89C1\u4E8E\u4E00\u6B21\u6027\u8F93\u5165\u548C\u63D0\u4EA4\u5927\u6279\u91CF\u6570\u636E\u7684\u573A\u666F\u3002"},{rightFooter:i(()=>[p(n,{type:"primary",onClick:o.submitAll},{default:i(()=>[q(" \u63D0\u4EA4 ")]),_:1},8,["onClick"])]),default:i(()=>[p(e,{title:"\u4ED3\u5E93\u7BA1\u7406",bordered:!1},{default:i(()=>[p(u,{onRegister:o.register},null,8,["onRegister"])]),_:1}),p(e,{title:"\u4EFB\u52A1\u7BA1\u7406",bordered:!1,class:"!mt-5"},{default:i(()=>[p(u,{onRegister:o.registerTask},null,8,["onRegister"])]),_:1}),p(e,{title:"\u6210\u5458\u7BA1\u7406",bordered:!1},{default:i(()=>[p(t,{ref:"tableRef"},null,512)]),_:1})]),_:1})}var Wo=g(T,[["render",S],["__scopeId","data-v-6b59bc47"]]);export{Wo as default};
