"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5345],{4137:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),i=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=i(r),m=a,f=p["".concat(o,".").concat(m)]||p[m]||d[m]||l;return r?n.createElement(f,u(u({ref:t},c),{},{components:r})):n.createElement(f,u({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,u=new Array(l);u[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,u[1]=s;for(var i=2;i<l;i++)u[i]=r[i];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9167:function(e,t,r){r.r(t),r.d(t,{assets:function(){return V},contentTitle:function(){return B},default:function(){return F},frontMatter:function(){return P},metadata:function(){return A},toc:function(){return X}});var n=r(3117),a=r(102),l=r(7294),u=r(4137),s=r(6010),o=r(1048),i=r(3609),c=r(1943),d=r(2957),p="tabList__CuJ",m="tabItem_LNqP",f=r(5944);function b(e){var t,r,n=e.lazy,a=e.block,u=e.defaultValue,o=e.values,b=e.groupId,h=e.className,v=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=o?o:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.l)(y,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===u?u:null!=(t=null!=u?u:null==(r=v.find((function(e){return e.props.default})))?void 0:r.props.value)?t:v[0].props.value;if(null!==k&&!y.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,c.U)(),N=w.tabGroupChoices,T=w.setTabGroupChoices,O=(0,l.useState)(k),Z=O[0],x=O[1],j=[],C=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var _=N[b];null!=_&&_!==Z&&y.some((function(e){return e.value===_}))&&x(_)}var E=function(e){var t=e.currentTarget,r=j.indexOf(t),n=y[r].value;n!==Z&&(C(t),x(n),null!=b&&T(b,String(n)))},D=function(e){var t,r=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":var n,a=j.indexOf(e.currentTarget)+1;r=null!=(n=j[a])?n:j[0];break;case"ArrowLeft":var l,u=j.indexOf(e.currentTarget)-1;r=null!=(l=j[u])?l:j[j.length-1]}null==(t=r)||t.focus()};return(0,f.BX)("div",{className:(0,s.Z)("tabs-container",p),children:[(0,f.tZ)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},h),children:y.map((function(e){var t=e.value,r=e.label,n=e.attributes;return(0,f.tZ)("li",Object.assign({role:"tab",tabIndex:Z===t?0:-1,"aria-selected":Z===t,ref:function(e){return j.push(e)},onKeyDown:D,onClick:E},n,{className:(0,s.Z)("tabs__item",m,null==n?void 0:n.className,{"tabs__item--active":Z===t}),children:null!=r?r:t}),t)}))}),n?(0,l.cloneElement)(v.filter((function(e){return e.props.value===Z}))[0],{className:"margin-top--md"}):(0,f.tZ)("div",{className:"margin-top--md",children:v.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==Z})}))})]})}function h(e){var t=(0,o.Z)();return(0,f.tZ)(b,Object.assign({},e),String(t))}var v="tabItem_Ymn6";function y(e){var t=e.children,r=e.hidden,n=e.className;return(0,f.tZ)("div",{role:"tabpanel",className:(0,s.Z)(v,n),hidden:r,children:t})}var g="browserWindow_my1Q",k="browserWindowHeader_jXSR",w="buttons_uHc7",N="browserWindowAddressBar_Pd8y",T="dot_giz1",O="browserWindowMenuIcon_Vhuh",Z="bar_rrRL",x="browserWindowBody_Idgs";var j=function(e){var t=e.children,r=e.minHeight,n=e.url;return(0,f.BX)("div",{className:g,style:{minHeight:r},children:[(0,f.BX)("div",{className:k,children:[(0,f.BX)("div",{className:w,children:[(0,f.tZ)("span",{className:T,style:{background:"#f25f58"}}),(0,f.tZ)("span",{className:T,style:{background:"#fbbe3c"}}),(0,f.tZ)("span",{className:T,style:{background:"#58cb42"}})]}),(0,f.tZ)("div",{className:N,children:n}),(0,f.tZ)("div",{className:O,children:(0,f.BX)("div",{children:[(0,f.tZ)("span",{className:Z}),(0,f.tZ)("span",{className:Z}),(0,f.tZ)("span",{className:Z})]})})]}),(0,f.tZ)("div",{className:x,children:t})]})},C=r(5697),_=r.n(C),E="videoFrame_DuF0";function D(e){var t=e.src;e.bsrc;return(0,f.tZ)(f.HY,{children:(0,f.tZ)("iframe",{src:t,loading:"lazy",scrolling:"no",border:0,frameBorder:"no",framespacing:0,allowFullScreen:!0,className:E})})}D.propTypes={src:_().string.isRequired,bsrc:_().string};var I=D,S=["components"],P={id:"docusaurus111-style",slug:"/docusaurus111-style",title:"\u6837\u5f0f\u4e0e\u9875\u9762",date:"2023/01/12",authors:"Shake",sidebar_position:2,last_update:{date:"2023/04/12"}},B=void 0,A={unversionedId:"Test/docusaurus111/docusaurus111-style",id:"Test/docusaurus111/docusaurus111-style",title:"\u6837\u5f0f\u4e0e\u9875\u9762",description:"",source:"@site/docs/Test/docusaurus111/style.md",sourceDirName:"Test/docusaurus111",slug:"/docusaurus111-style",permalink:"/docs/docusaurus111-style",draft:!1,tags:[],version:"current",lastUpdatedAt:1681228800,formattedLastUpdatedAt:"2023\u5e744\u670811\u65e5",sidebarPosition:2,frontMatter:{id:"docusaurus111-style",slug:"/docusaurus111-style",title:"\u6837\u5f0f\u4e0e\u9875\u9762",date:"2023/01/12",authors:"Shake",sidebar_position:2,last_update:{date:"2023/04/12"}},sidebar:"Test",previous:{title:"Docusaurus \u4e3b\u9898\u9b54\u6539111",permalink:"/docs/category/docusaurus-\u4e3b\u9898\u9b54\u6539111"},next:{title:"\u8bc4\u8bba\u670d\u52a1",permalink:"/docs/docusaurus111-comment"}},V={},X=[{value:"\u6837\u5f0f\u548c\u5e03\u5c40",id:"\u6837\u5f0f\u548c\u5e03\u5c40",level:2},{value:"\u4fee\u6539\u4e3b\u9898\u8272",id:"\u4fee\u6539\u4e3b\u9898\u8272",level:2},{value:"\u4e3b\u9875",id:"homepage",level:2},{value:"\u81ea\u5b9a\u4e49\u9875\u9762",id:"\u81ea\u5b9a\u4e49\u9875\u9762",level:2}],z={toc:X};function F(e){var t=e.components,r=(0,a.Z)(e,S);return(0,u.kt)("wrapper",(0,n.Z)({},z,r,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h2",{id:"\u6837\u5f0f\u548c\u5e03\u5c40"},(0,u.kt)("a",{parentName:"h2",href:"https://docusaurus.io/zh-CN/docs/styling-layout#styling-your-site-with-infima"},"\u6837\u5f0f\u548c\u5e03\u5c40")),(0,u.kt)("p",null,"Docusaurus \u7f51\u7ad9\u662f\u4e00\u4e2a React \u5355\u9875\u5e94\u7528\u3002 \u4f60\u53ef\u4ee5\u50cf\u4e00\u822c\u7684 React \u5e94\u7528\u4e00\u6837\u7ed9\u7f51\u7ad9\u63d0\u4f9b\u6837\u5f0f\uff0c\u60f3 tailwindCSS \u4e0e \u7ec4\u4ef6\u5e93\u90fd\u662f\u652f\u6301\u7684\u3002\u4e0d\u8fc7\u5f15\u5165\u8fd9\u4e9b\u4f1a\u5e26\u6765\u4e00\u5b9a\u7684\u4f53\u79ef\uff0c\u56e0\u6b64\u6211\u5e38\u7528\u7684\u662f\u5168\u5c40\u6837\u5f0f\u4e0e CSS \u6a21\u5757\u3002"),(0,u.kt)("h2",{id:"\u4fee\u6539\u4e3b\u9898\u8272"},"\u4fee\u6539\u4e3b\u9898\u8272"),(0,u.kt)("p",null,"\u53ef\u4ee5\u5728 ",(0,u.kt)("a",{parentName:"p",href:"https://docusaurus.io/zh-CN/docs/styling-layout#styling-your-site-with-infima"},"\u8fd9\u91cc")," \u8bbe\u7f6e\u4e3b\u8272\u8c03\u4e0e\u80cc\u666f\u8272\u6765\u67e5\u770b\u6d45\u8272\u4e0e\u6df1\u8272\u6a21\u5f0f\u4e0b\u7684\u6548\u679c\uff0c\u4f8b\u5982\u6211\u7684\u4e3b\u9898\u8272\u662f ",(0,u.kt)("font",{color:"#12AFFA"},"#12AFFA")),(0,u.kt)("p",null,(0,u.kt)("inlineCode",{parentName:"p"},"@docusaurus/preset-classic")," \u7528 ",(0,u.kt)("a",{parentName:"p",href:"https://infima.dev/"},"Infima")," \u4f5c\u4e3a\u5e95\u5c42\u6837\u5f0f\u6846\u67b6\u3002 Infima \u63d0\u4f9b\u4e86\u7075\u6d3b\u7684\u5e03\u5c40\uff0c\u4ee5\u53ca\u5e38\u89c1\u7684 UI \u7ec4\u4ef6\u6837\u5f0f\uff0c\u9002\u7528\u4e8e\u4ee5\u5185\u5bb9\u4e3a\u4e2d\u5fc3\u7684\u7f51\u7ad9\uff08\u535a\u5ba2\u3001\u6587\u6863\u3001\u9996\u9875\uff09\u3002\u60f3\u8981\u4e86\u89e3\u66f4\u591a\u8be6\u60c5\uff0c\u8bf7\u67e5\u770b ",(0,u.kt)("a",{parentName:"p",href:"https://infima.dev/"},"Infima \u7f51\u7ad9"),"\u3002"),(0,u.kt)("h2",{id:"homepage"},"\u4e3b\u9875"),(0,u.kt)("p",null,"\u56e0\u4e3a\u8bbe\u7f6e\u4e86",(0,u.kt)("a",{parentName:"p",href:"https://docusaurus.io/zh-CN/docs/blog#blog-only-mode"},"\u4ec5\u535a\u5ba2\u6a21\u5f0f"),"\uff0c\u6ca1\u6709\u4e13\u95e8\u7f16\u5199\u7684\u9996\u9875\uff0c\u800c\u662f\u5c06\u535a\u6587\u5217\u8868\u8bbe\u7f6e\u4e3a\u9996\u9875\u3002\u9700\u8981\u5c06 ",(0,u.kt)("inlineCode",{parentName:"p"},"src/pages/index.tsx")," \u6587\u4ef6\u7ed9\u5220\u9664\uff08\u6216\u8005\u6539\u4e2a\u540d\uff09\uff0c\u5426\u5219\u4f1a\u5bfc\u81f4\u9996\u9875\u8def\u5f84\u51b2\u7a81\u3002\u5f53\u7136\u4f60\u4e5f\u53ef\u4ee5\u4e13\u95e8\u641e\u4e00\u4e2a\u4e3b\u9875\uff0c\u5c31\u50cf docusaurus \u90a3\u6837\uff0c\u7136\u540e\u8df3\u8f6c\u81f3\u535a\u6587\u5217\u8868\u9875\u3002"),(0,u.kt)("p",null,"\u6240\u4ee5\u535a\u5ba2\u9875\u9762\uff0c\u4e5f\u5c31\u662f\u9996\u9875\u3002\u4f46\u4ec5\u4ec5\u53ea\u6709\u535a\u5ba2\u662f\u8fdc\u8fdc\u4e0d\u591f\u7684\uff0c\u6240\u4ee5\u4fbf\u6dfb\u52a0\u4e86 Hero \u7ec4\u4ef6\uff0c\u4e5f\u5c31\u662f\u9996\u6b21\u8bbf\u95ee\u535a\u5ba2\u7684\u6837\u5b50\u3002"),(0,u.kt)("p",null,"\u4e3b\u9875\u53f3\u4fa7 SVG \u80cc\u666f\u6587\u4ef6\u5730\u5740: ",(0,u.kt)("inlineCode",{parentName:"p"},"src/components/Hero/img/hero_main.svg"),", \u63d2\u753b\u6765\u6e90\u4e8e ",(0,u.kt)("a",{parentName:"p",href:"https://undraw.co/illustrations"},"unDraw"),"\uff0c\u5728\u8fd9\u4e2a\u7f51\u7ad9\u53ef\u4ee5\u627e\u5230\u8fd9\u7c7b\u63d2\u753b\u98ce\u683c\u7684\u80cc\u666f\u3002\u6216\u8005\u4f60\u53ef\u4ee5\u627e\u4e13\u95e8\u8bbe\u8ba1\u63d2\u753b\u7684\u4eba\u4e3a\u4f60\u8bbe\u8ba1\u3002"),(0,u.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u9875\u9762"},"\u81ea\u5b9a\u4e49\u9875\u9762"),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"/friends"},"\u53cb\u94fe"),"\u3001",(0,u.kt)("a",{parentName:"p",href:"/website"},"\u5bfc\u822a"),"\u3001",(0,u.kt)("a",{parentName:"p",href:"/project"},"\u9879\u76ee"),"\u4ee5\u53ca",(0,u.kt)("a",{parentName:"p",href:"/about"},"\u5173\u4e8e\u6211"),"\u9875\u9762\u90fd\u5728 ",(0,u.kt)("inlineCode",{parentName:"p"},"src/pages")," \u76ee\u5f55\u4e0b\u5b9a\u4e49\uff0c\u6839\u636e\u6587\u4ef6\u540d\u6620\u5c04\u5bf9\u5e94\u8def\u7531\u3002\u9875\u9762\u7684\u521b\u5efa\u53ef\u4ee5\u67e5\u770b ",(0,u.kt)("a",{parentName:"p",href:"https://docusaurus.io/zh-CN/docs/creating-pages"},"\u521b\u5efa\u9875\u9762 | Docusaurus")),(0,u.kt)(h,{defaultValue:"apple",values:[{label:"Apple",value:"apple"},{label:"Orange",value:"orange"},{label:"Banana",value:"banana"}],mdxType:"Tabs"},(0,u.kt)(y,{value:"apple",mdxType:"TabItem"},"This is an apple \ud83c\udf4e",(0,u.kt)("details",null,(0,u.kt)("summary",null,"Toggle me!"),(0,u.kt)("div",null,(0,u.kt)("div",null,"This is the detailed content"),(0,u.kt)("br",null),(0,u.kt)("details",null,(0,u.kt)("summary",null,"Nested toggle! Some surprise inside..."),(0,u.kt)("div",null,"\ud83d\ude32\ud83d\ude32\ud83d\ude32\ud83d\ude32\ud83d\ude32"))))),(0,u.kt)(y,{value:"orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a",(0,u.kt)("br",null),"\u963f\u5df4\u963f\u5df4\u963f\u5df4\u7238\u7238\u7231\u7238\u7238"),(0,u.kt)(y,{value:"banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c",(0,u.kt)("br",null),(0,u.kt)("br",null),(0,u.kt)("br",null),"ye~~")),(0,u.kt)(j,{minHeight:240,url:"http://localhost:3000",mdxType:"BrowserWindow"},(0,u.kt)("h1",{id:"\u8fd9\u662f\u4e00\u4e2a\u6d4f\u89c8\u5668\u7a97\u53e3"},"\u8fd9\u662f\u4e00\u4e2a\u6d4f\u89c8\u5668\u7a97\u53e3")),(0,u.kt)(I,{src:"//player.bilibili.com/player.html?aid=379284479&bvid=BV17f4y1M7mq&cid=445379085&page=1",width:"100%",height:"360",frameborder:"no",scrolling:"no",allowfullscreen:"allowfullscreen",bsrc:"https://www.bilibili.com/video/BV17f4y1M7mq/",mdxType:"BVideo"}),(0,u.kt)("p",null,"\u8df3\u5230 ",(0,u.kt)("a",{parentName:"p",href:"#homepage"},"\u4e3b\u9875")))}F.isMDXComponent=!0}}]);