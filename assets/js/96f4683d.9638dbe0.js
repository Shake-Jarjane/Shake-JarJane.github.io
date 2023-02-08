"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6302],{4137:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,k=p["".concat(s,".").concat(m)]||p[m]||c[m]||l;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},425:function(e,t,n){n.d(t,{Z:function(){return i}});n(7294);var a=n(6010),r="tabItem_Ymn6",l=n(5944);function i(e){var t=e.children,n=e.hidden,i=e.className;return(0,l.tZ)("div",{role:"tabpanel",className:(0,a.Z)(r,i),hidden:n,children:t})}},4259:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7294),r=n(6010),l=n(1048),i=n(3609),o=n(1943),s=n(2957),u="tabList__CuJ",d="tabItem_LNqP",c=n(5944);function p(e){var t,n,l=e.lazy,p=e.block,m=e.defaultValue,k=e.values,g=e.groupId,b=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=k?k:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,i.l)(v,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:h[0].props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,o.U)(),x=w.tabGroupChoices,N=w.setTabGroupChoices,T=(0,a.useState)(y),Z=T[0],I=T[1],B=[],_=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var O=x[g];null!=O&&O!==Z&&v.some((function(e){return e.value===O}))&&I(O)}var D=function(e){var t=e.currentTarget,n=B.indexOf(t),a=v[n].value;a!==Z&&(_(t),I(a),null!=g&&N(g,String(a)))},C=function(e){var t,n=null;switch(e.key){case"Enter":D(e);break;case"ArrowRight":var a,r=B.indexOf(e.currentTarget)+1;n=null!=(a=B[r])?a:B[0];break;case"ArrowLeft":var l,i=B.indexOf(e.currentTarget)-1;n=null!=(l=B[i])?l:B[B.length-1]}null==(t=n)||t.focus()};return(0,c.BX)("div",{className:(0,r.Z)("tabs-container",u),children:[(0,c.tZ)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":p},b),children:v.map((function(e){var t=e.value,n=e.label,a=e.attributes;return(0,c.tZ)("li",Object.assign({role:"tab",tabIndex:Z===t?0:-1,"aria-selected":Z===t,ref:function(e){return B.push(e)},onKeyDown:C,onClick:D},a,{className:(0,r.Z)("tabs__item",d,null==a?void 0:a.className,{"tabs__item--active":Z===t}),children:null!=n?n:t}),t)}))}),l?(0,a.cloneElement)(h.filter((function(e){return e.props.value===Z}))[0],{className:"margin-top--md"}):(0,c.tZ)("div",{className:"margin-top--md",children:h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==Z})}))})]})}function m(e){var t=(0,l.Z)();return(0,c.tZ)(p,Object.assign({},e),String(t))}},6662:function(e,t,n){n.d(t,{Z:function(){return s}});n(7294);var a=n(5697),r=n.n(a),l="videoFrame_DuF0",i=n(5944);function o(e){var t=e.src;e.bsrc;return(0,i.tZ)(i.HY,{children:(0,i.tZ)("iframe",{src:t,loading:"lazy",scrolling:"no",border:0,frameBorder:"no",framespacing:0,allowFullScreen:!0,className:l})})}o.propTypes={src:r().string.isRequired,bsrc:r().string};var s=o},5687:function(e,t,n){n.d(t,{Z:function(){return m}});n(7294);var a="browserWindow_my1Q",r="browserWindowHeader_jXSR",l="buttons_uHc7",i="browserWindowAddressBar_Pd8y",o="dot_giz1",s="browserWindowMenuIcon_Vhuh",u="bar_rrRL",d="browserWindowBody_Idgs",c="cursor_SkBH",p=n(5944);var m=function(e){var t=e.children,n=e.url,m=void 0===n?"http://localhost:3000":n;return(0,p.BX)("div",{className:a,children:[(0,p.BX)("div",{className:r,children:[(0,p.BX)("div",{className:l,children:[(0,p.tZ)("span",{className:o,style:{background:"#f25f58"}}),(0,p.tZ)("span",{className:o,style:{background:"#fbbe3c"}}),(0,p.tZ)("span",{className:o,style:{background:"#58cb42"}})]}),(0,p.tZ)("div",{className:i,children:(0,p.tZ)("a",{href:m,target:"_blank",children:m})}),(0,p.tZ)("div",{className:s,children:(0,p.BX)("div",{children:[(0,p.tZ)("span",{className:u}),(0,p.tZ)("span",{className:u}),(0,p.tZ)("span",{className:u})]})})]}),(0,p.BX)("div",{className:d,children:[t,(0,p.tZ)("span",{className:c})]})]})}},3223:function(e,t,n){n.d(t,{Z:function(){return l}});n(7294);var a="displayFlex_asPq",r=n(5944),l=function(e){return(0,r.tZ)("figure",{children:(0,r.tZ)("div",{className:a,children:e.children})})}},9196:function(e,t,n){n.d(t,{Z:function(){return l}});n(7294);var a="highlight_L1Iz",r=n(5944);var l=function(e){var t=e.children;return(0,r.tZ)("span",{className:a,children:t})}},6208:function(e,t,n){n.d(t,{Z:function(){return h}});var a,r=n(7294),l="linkWrapper_UtM8",i="textArea_m5TB",o="textBold_CHby",s="linkSVG_jmig",u=n(6010),d=n(3699),c=["title","titleId"];function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},p.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var k=function(e){var t=e.title,n=e.titleId,l=m(e,c);return r.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",width:12,height:16,viewBox:"0 0 12 16","aria-labelledby":n},l),t?r.createElement("title",{id:n},t):null,a||(a=r.createElement("path",{fillRule:"evenodd",d:"M11 10h1v3c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h3v1H1v10h10v-3zM6 2l2.25 2.25L5 7.5 6.5 9l3.25-3.25L12 8V2H6z"})))},g=n(9962),b=n(5944);function h(e){var t=e.bold,n=void 0!==t&&t,a=e.children,r=e.link,c=e.openWindow,p=void 0!==c&&c,m=e.type,h=void 0===m?"doc":m,v=e.wrapperClassName,f=e.wrapperStyle,y=(0,g.Z)().siteConfig;return(0,b.tZ)("span",{style:f,className:(0,u.Z)(l,v),children:(0,b.tZ)(d.Z,{to:p?y.url+r:r,children:(0,b.BX)("span",{className:(0,u.Z)(i,n&&o),children:[a,(p||"external"===h)&&(0,b.tZ)(k,{width:"20",height:"20",className:s})]})})})}},602:function(e,t,n){n.d(t,{Z:function(){return s}});n(7294);var a="card_r0q7",r="card__content_tH5k",l="card__title_wxl9",i="card__date_Gwr4",o=n(5944);var s=function(e){var t=e.children,n=e.book,s=e.date;return(0,o.BX)("div",{className:a,children:[(0,o.BX)("p",{className:r,children:[t," "]}),(0,o.BX)("h3",{className:l,children:["\u6458\u81ea \u2014\u2014 ",n]}),(0,o.tZ)("div",{className:i,children:s})]})}},6139:function(e,t,n){n.d(t,{Z:function(){return i}});n(7294);var a="shortcut_ZR2Q",r=n(6010),l=n(5944);function i(e){var t=e.children,n=e.wrapperClassName,i=e.wrapperStyle;return(0,l.tZ)("span",{className:(0,r.Z)(a,n),style:i,children:t})}},172:function(e,t,n){n.r(t),n.d(t,{Highlight:function(){return S},assets:function(){return D},contentTitle:function(){return _},default:function(){return W},frontMatter:function(){return B},metadata:function(){return O},toc:function(){return C}});var a=n(3117),r=n(102),l=(n(7294),n(4137)),i=n(9196),o=n(4259),s=n(425),u=n(5687),d=n(6010),c="browserWindow_n4ow",p="browserWindowHeader_Rps0",m="buttons_sM68",k="browserWindowAddressBar_dAEO",g="dot_Ke0C",b="browserWindowMenuIcon_riuu",h="bar_rBx6",v="browserWindowBody_iYdh",f=n(5944);function y(e){var t=e.children,n=e.minHeight,a=e.url,r=void 0===a?"http://localhost:3000":a;return(0,f.BX)("div",{className:c,style:{minHeight:n},children:[(0,f.BX)("div",{className:p,children:[(0,f.BX)("div",{className:m,children:[(0,f.tZ)("span",{className:g,style:{background:"#f25f58"}}),(0,f.tZ)("span",{className:g,style:{background:"#fbbe3c"}}),(0,f.tZ)("span",{className:g,style:{background:"#58cb42"}})]}),(0,f.tZ)("div",{className:(0,d.Z)(k,"text--truncate"),children:(0,f.tZ)("a",{href:r,target:"_blank",children:r})}),(0,f.tZ)("div",{className:b,children:(0,f.BX)("div",{children:[(0,f.tZ)("span",{className:h}),(0,f.tZ)("span",{className:h}),(0,f.tZ)("span",{className:h})]})})]}),(0,f.tZ)("div",{className:v,children:t})]})}var w=n(6662),x=n(3223),N=n(6208),T=n(6139),Z=n(602),I=["components"],B={id:"Docusaurus-\u6587\u6863\u7f16\u8f91\u6307\u5357",slug:"/Docusaurus-\u6587\u6863\u7f16\u8f91\u6307\u5357",title:"\u6587\u6863\u7f16\u8f91\u6307\u5357",date:"2023/02/01",authors:"Shake",last_update:{date:"2023/02/01"}},_=void 0,O={unversionedId:"Site/Docusaurus/Docusaurus-\u6587\u6863\u7f16\u8f91\u6307\u5357",id:"Site/Docusaurus/Docusaurus-\u6587\u6863\u7f16\u8f91\u6307\u5357",title:"\u6587\u6863\u7f16\u8f91\u6307\u5357",description:"\u8fd9\u91cc\u603b\u7ed3\u4e86\u4e00\u4e9b\u6211\u89c9\u5f97\u81ea\u5df1\u6bd4\u8f83\u5e38\u7528\u7684 Docusaurus \u5199\u4f5c\u6837\u5f0f\uff0c\u53c2\u8003\u81ea\u5b98\u65b9\u6587\u6863\u4ee5\u53ca\u6e90\u7801\u3002",source:"@site/docs/Site/Docusaurus/\u6587\u6863\u7f16\u8f91\u6307\u5357.md",sourceDirName:"Site/Docusaurus",slug:"/Docusaurus-\u6587\u6863\u7f16\u8f91\u6307\u5357",permalink:"/docs/Docusaurus-\u6587\u6863\u7f16\u8f91\u6307\u5357",draft:!1,tags:[],version:"current",lastUpdatedAt:1675209600,formattedLastUpdatedAt:"2023\u5e742\u67081\u65e5",frontMatter:{id:"Docusaurus-\u6587\u6863\u7f16\u8f91\u6307\u5357",slug:"/Docusaurus-\u6587\u6863\u7f16\u8f91\u6307\u5357",title:"\u6587\u6863\u7f16\u8f91\u6307\u5357",date:"2023/02/01",authors:"Shake",last_update:{date:"2023/02/01"}},sidebar:"Blog_Building",previous:{title:"\u56fe\u5e8a\u914d\u7f6e",permalink:"/docs/Docusaurus-\u56fe\u5e8a\u914d\u7f6e"},next:{title:"Hexo \u7684\u7b80\u5355\u642d\u5efa",permalink:"/docs/Hexo-guides"}},D={},C=[{value:"MDX \u4e0e React",id:"mdx-\u4e0e-react",level:2},{value:"\u9ad8\u4eae\u5757",id:"\u9ad8\u4eae\u5757",level:2},{value:"\u5bfc\u51fa\u7ec4\u4ef6",id:"\u5bfc\u51fa\u7ec4\u4ef6",level:3},{value:"\u5bfc\u5165\u7ec4\u4ef6",id:"\u5bfc\u5165\u7ec4\u4ef6",level:3},{value:"\u9009\u9879\u5361",id:"\u9009\u9879\u5361",level:2},{value:"\u6298\u53e0\u5757",id:"\u6298\u53e0\u5757",level:2},{value:"\u544a\u793a\u5757",id:"\u544a\u793a\u5757",level:2},{value:"\u4ee3\u7801\u5757",id:"\u4ee3\u7801\u5757",level:2},{value:"\u5916\u94fe\u6807\u8bc6",id:"\u5916\u94fe\u6807\u8bc6",level:2},{value:"\u5185\u5d4c bilibili \u89c6\u9891",id:"\u5185\u5d4c-bilibili-\u89c6\u9891",level:2},{value:"\u8bbe\u7f6e\u535a\u5ba2\u5185\u90e8\u7684\u8df3\u8f6c\u94fe\u63a5",id:"\u8bbe\u7f6e\u535a\u5ba2\u5185\u90e8\u7684\u8df3\u8f6c\u94fe\u63a5",level:2},{value:"\u8df3\u8f6c\u5230\u5f53\u524d\u6587\u6863",id:"\u8df3\u8f6c\u5230\u5f53\u524d\u6587\u6863",level:3},{value:"\u8df3\u8f6c\u5230\u53e6\u4e00\u4e2a\u6587\u6863",id:"\u8df3\u8f6c\u5230\u53e6\u4e00\u4e2a\u6587\u6863",level:3},{value:"\u8df3\u8f6c\u5230\u76ee\u6807\u6587\u4ef6",id:"\u8df3\u8f6c\u5230\u76ee\u6807\u6587\u4ef6",level:3},{value:"\u5feb\u6377\u952e\u6837\u5f0f",id:"\u5feb\u6377\u952e\u6837\u5f0f",level:2},{value:"\u56fe\u7247 flex \u5e03\u5c40",id:"\u56fe\u7247-flex-\u5e03\u5c40",level:2},{value:"\u6d4f\u89c8\u7a97\u53e3",id:"\u6d4f\u89c8\u7a97\u53e3",level:2},{value:"\u6d4f\u89c8\u5668\u7a97\u53e3",id:"\u6d4f\u89c8\u5668\u7a97\u53e3",level:3},{value:"\u9605\u8bfb\u5361\u7247\u7a97\u53e3",id:"\u9605\u8bfb\u5361\u7247\u7a97\u53e3",level:3},{value:"\u9644\u5f55",id:"\u9644\u5f55",level:2}],S=function(e){var t=e.children,n=e.color;return(0,l.kt)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},E={toc:C,Highlight:S};function W(e){var t=e.components,d=(0,r.Z)(e,I);return(0,l.kt)("wrapper",(0,a.Z)({},E,d,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8fd9\u91cc\u603b\u7ed3\u4e86\u4e00\u4e9b\u6211\u89c9\u5f97\u81ea\u5df1\u6bd4\u8f83\u5e38\u7528\u7684 Docusaurus \u5199\u4f5c\u6837\u5f0f\uff0c\u53c2\u8003\u81ea",(0,l.kt)("a",{parentName:"strong",href:"https://docusaurus.io/zh-CN/docs/markdown-features"},"\u5b98\u65b9\u6587\u6863"),"\u4ee5\u53ca",(0,l.kt)("a",{parentName:"strong",href:"https://github.com/facebook/docusaurus"},"\u6e90\u7801"),"\u3002")),(0,l.kt)("h2",{id:"mdx-\u4e0e-react"},"MDX \u4e0e React"),(0,l.kt)("p",null,"Docusaurus \u539f\u751f\u652f\u6301 MDX v1\uff0c\u53ef\u4ee5\u76f4\u63a5\u5728 Markdown \u6587\u6863\u4e2d\u7f16\u5199 JSX\uff0c\u5e76\u6e32\u67d3\u4e3a React \u7ec4\u4ef6\uff0c\u4e0d\u8fc7\u6211\u6bd4\u8f83\u559c\u6b22\u4ee5",(0,l.kt)(i.Z,{mdxType:"HighLight"},"\u5bfc\u5165\u7ec4\u4ef6"),"\u7684\u65b9\u5f0f\u8fdb\u884c\u5f15\u7528\u3002\u5173\u4e8e ",(0,l.kt)("strong",{parentName:"p"},"MDX")," \u7684\u66f4\u591a\u5185\u5bb9\u53ef\u4ee5\u53bb\u9605\u8bfb",(0,l.kt)("a",{parentName:"p",href:"https://mdxjs.com/"},"\u5b98\u65b9\u6587\u6863")),(0,l.kt)("h2",{id:"\u9ad8\u4eae\u5757"},"\u9ad8\u4eae\u5757"),(0,l.kt)(y,{mdxType:"BrowserWindow2"},"\ud83d\udc49",(0,l.kt)(i.Z,{mdxType:"HighLight"},"\u8fd9\u662f HighLight \u7684\u6548\u679c")),(0,l.kt)("h3",{id:"\u5bfc\u51fa\u7ec4\u4ef6"},"\u5bfc\u51fa\u7ec4\u4ef6"),(0,l.kt)("p",null,"\u53ef\u4ee5\u9009\u62e9\u76f4\u63a5\u5728 md/mdx \u6587\u4ef6\u91cc\u81ea\u5b9a\u4e49\u7ec4\u4ef6\uff0c\u53ea\u9700\u5bfc\u51fa\u5b83\u5373\u53ef\uff0c\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"p"},"export")," \u5f00\u5934\u7684\u6bb5\u843d\u5373\u53ef\u88ab\u89e3\u6790\u4e3a\u7ec4\u4ef6\uff0c\u800c\u4e0d\u662f\u6587\u672c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"export const Highlight = ({children, color}) => (\n  <span\n    style={{\n      backgroundColor: color,\n      borderRadius: '2px',\n      color: '#fff',\n      padding: '0.2rem',\n    }}>\n    {children}\n  </span>\n);\n\n<Highlight color=\"#25c2a0\">Docusaurus \u7eff</Highlight> \u548c <Highlight color=\"#1877F2\">Facebook \u84dd</Highlight>\n")),(0,l.kt)("p",null,"\u6548\u679c\u5982\u4e0b\uff1a",(0,l.kt)("br",null)),(0,l.kt)(y,{mdxType:"BrowserWindow2"},(0,l.kt)(S,{color:"#25c2a0",mdxType:"Highlight"},"Docusaurus \u7eff")," \u548c ",(0,l.kt)(S,{color:"#1877F2",mdxType:"Highlight"},"Facebook \u84dd")),(0,l.kt)("h3",{id:"\u5bfc\u5165\u7ec4\u4ef6"},"\u5bfc\u5165\u7ec4\u4ef6"),(0,l.kt)("p",null,"\u6211\u559c\u6b22\u7b80\u4fbf\u4e00\u70b9\u7684\u65b9\u5f0f\uff0c\u5e76\u4e14\u4e0d\u9700\u8981\u7075\u6d3b\u5207\u6362\u9ad8\u4eae\u989c\u8272\uff0c\u6240\u4ee5\u5c06\u5b83\u5c01\u88c5\u4e3a\u7ec4\u4ef6\uff0c\u7528\u5bfc\u5165\u7684\u65b9\u5f0f\u8fdb\u884c\u4f7f\u7528"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import HighLight from "@site/src/components/HighLight"\n\n<HighLight>\u8fd9\u662f HighLight \u7684\u6548\u679c</HighLight>\n')),(0,l.kt)("p",null,"\u6548\u679c\u5982\u4e0b\uff1a",(0,l.kt)("br",null)),(0,l.kt)(y,{mdxType:"BrowserWindow2"},"\ud83d\udc49",(0,l.kt)(i.Z,{mdxType:"HighLight"},"\u8fd9\u662f HighLight \u7684\u6548\u679c")),(0,l.kt)("h2",{id:"\u9009\u9879\u5361"},"\u9009\u9879\u5361"),(0,l.kt)(y,{mdxType:"BrowserWindow2"},(0,l.kt)(o.Z,{defaultValue:"apple",values:[{label:"Apple",value:"apple"},{label:"Orange",value:"orange"},{label:"Banana",value:"banana"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"apple",mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),(0,l.kt)(s.Z,{value:"orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a",(0,l.kt)("br",null)),(0,l.kt)(s.Z,{value:"banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c",(0,l.kt)("br",null)))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import Tabs from '@theme/Tabs';\nimport TabItem from '@theme/TabItem';\n\n<Tabs\ndefaultValue=\"apple\"\nvalues={[\n    {label: 'Apple', value: 'apple'},\n    {label: 'Orange', value: 'orange'},\n    {label: 'Banana', value: 'banana'},\n]}>\n<TabItem value=\"apple\">This is an apple \ud83c\udf4e</TabItem>\n<TabItem value=\"orange\">This is an orange \ud83c\udf4a<br/></TabItem>\n<TabItem value=\"banana\">This is a banana \ud83c\udf4c<br/></TabItem>\n</Tabs>\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8fd8\u53ef\u4ee5\u8bbe\u7f6e\u540c\u6b65\u9009\u9879\uff0c\u51cf\u5c11\u91cd\u590d\u6027\u64cd\u4f5c")),(0,l.kt)(y,{mdxType:"BrowserWindow2"},(0,l.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"win",label:"Windows",mdxType:"TabItem"},"Use Ctrl + C to copy."),(0,l.kt)(s.Z,{value:"mac",label:"macOS",mdxType:"TabItem"},"Use Command + C to copy.")),(0,l.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"win",label:"Windows",mdxType:"TabItem"},"Use Ctrl + V to paste."),(0,l.kt)(s.Z,{value:"mac",label:"macOS",mdxType:"TabItem"},"Use Command + V to paste."))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{1,6}","{1,6}":!0},'<Tabs groupId="operating-systems">\n  <TabItem value="win" label="Windows">Use Ctrl + C to copy.</TabItem>\n  <TabItem value="mac" label="macOS">Use Command + C to copy.</TabItem>\n</Tabs>\n\n<Tabs groupId="operating-systems">\n  <TabItem value="win" label="Windows">Use Ctrl + V to paste.</TabItem>\n  <TabItem value="mac" label="macOS">Use Command + V to paste.</TabItem>\n</Tabs>\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6839\u636e ",(0,l.kt)("inlineCode",{parentName:"strong"},"groupId")," \u6765\u8fdb\u884c\u5173\u8054\uff0c\u4e0d\u540c\u7684 ",(0,l.kt)("inlineCode",{parentName:"strong"},"groupId")," \u4f1a\u6709\u4e0d\u540c\u7684\u6548\u679c")),(0,l.kt)(y,{mdxType:"BrowserWindow2"},(0,l.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"win",label:"Windows",mdxType:"TabItem"},"I am Windows."),(0,l.kt)(s.Z,{value:"mac",label:"macOS",mdxType:"TabItem"},"I am macOS."),(0,l.kt)(s.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},"I am Linux.")),(0,l.kt)(o.Z,{groupId:"test",mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"win",label:"Windows",mdxType:"TabItem"},"I am Windows."),(0,l.kt)(s.Z,{value:"mac",label:"macOS",mdxType:"TabItem"},"I am macOS."),(0,l.kt)(s.Z,{value:"unix",label:"Unix",mdxType:"TabItem"},"Unix is unix."))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{1,7}","{1,7}":!0},'<Tabs groupId="operating-systems">\n  <TabItem value="win" label="Windows">I am Windows.</TabItem>\n  <TabItem value="mac" label="macOS">I am macOS.</TabItem>\n  <TabItem value="linux" label="Linux">I am Linux.</TabItem>\n</Tabs>\n\n<Tabs groupId="test">\n  <TabItem value="win" label="Windows">I am Windows.</TabItem>\n  <TabItem value="mac" label="macOS">I am macOS.</TabItem>\n  <TabItem value="unix" label="Unix">Unix is unix.</TabItem>\n</Tabs>\n')),(0,l.kt)("h2",{id:"\u6298\u53e0\u5757"},"\u6298\u53e0\u5757"),(0,l.kt)(y,{mdxType:"BrowserWindow2"},(0,l.kt)("details",null,(0,l.kt)("summary",null,"Toggle me!"),(0,l.kt)("div",null,(0,l.kt)("div",null,"This is the detailed content"),(0,l.kt)("br",null),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Nested toggle! Some surprise inside..."),(0,l.kt)("div",null,"\ud83d\ude32\ud83d\ude32\ud83d\ude32\ud83d\ude32\ud83d\ude32"),(0,l.kt)("br",null),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Testing..."),(0,l.kt)("div",null,"\ud83e\udd28")))))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<details>\n    <summary>Toggle me!</summary>\n        <div>\n            <div>This is the detailed content</div>\n            <br/>\n                <details>\n                    <summary>Nested toggle! Some surprise inside...</summary>\n                    <div>\ud83d\ude32\ud83d\ude32\ud83d\ude32\ud83d\ude32\ud83d\ude32</div>\n                    <br/>\n                        <details>\n                            <summary>Testing...</summary>\n                                <div>\ud83e\udd28</div>\n                        </details>\n                </details>\n        </div>\n</details>\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u9009\u9879\u5757\u91cc\u4e5f\u53ef\u4ee5\u5d4c\u5165\u6298\u53e0\u5757\uff08\u5176\u4ed6\u7ec4\u4ef6\u4e5f\u53ef\u4ee5\u7c7b\u4f3c\u5730\u8fdb\u884c\u5d4c\u5957\uff09")),(0,l.kt)(y,{mdxType:"BrowserWindow2"},(0,l.kt)(o.Z,{defaultValue:"one",values:[{label:"One",value:"one"},{label:"Two",value:"two"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"one",mdxType:"TabItem"}," One!",(0,l.kt)("details",null,(0,l.kt)("summary",null,"Toggle me!"),(0,l.kt)("div",null,(0,l.kt)("div",null,"This is the detailed content"),(0,l.kt)("br",null),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Nested toggle! Some surprise inside..."),(0,l.kt)("div",null,"\ud83d\ude32\ud83d\ude32\ud83d\ude32\ud83d\ude32\ud83d\ude32"),(0,l.kt)("br",null))))),(0,l.kt)(s.Z,{value:"two",mdxType:"TabItem"},"Two!",(0,l.kt)("br",null)))),(0,l.kt)("h2",{id:"\u544a\u793a\u5757"},"\u544a\u793a\u5757"),(0,l.kt)(y,{mdxType:"BrowserWindow2"},(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},"note"))),(0,l.kt)("admonition",{title:"\ud83d\udc4b",type:"note"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},"note")," \u81ea\u5b9a\u4e49\u6807\u9898")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},"tip"))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},"info"))),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},"caution"))),(0,l.kt)("admonition",{type:"danger"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},"danger")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-md"},":::note\n**note**\n:::\n\n:::note \ud83d\udc4b\n**note** \u81ea\u5b9a\u4e49\u6807\u9898\n:::\n\n:::tip\n**tip**\n:::\n\n:::info\n**info**\n:::\n\n:::caution\n**caution**\n:::\n\n:::danger\n**danger**\n:::\n\n")),(0,l.kt)("h2",{id:"\u4ee3\u7801\u5757"},"\u4ee3\u7801\u5757"),(0,l.kt)("p",null,"\u6bd4\u5982\u4e0b\u9762\u4e00\u6bb5\u4ee3\u7801",(0,l.kt)("br",null),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"ts")," \u8868\u793a\u7528 ts \u8bed\u8a00\u6e32\u67d3\u4ee3\u7801\u5757",(0,l.kt)("br",null),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"{1,4,6-8}")," \u8868\u793a\u7b2c 1 \u884c\u3001\u7b2c 4 \u884c\u3001\u7b2c 6-8 \u884c\u4ee3\u7801\u9ad8\u4eae\uff0c\u5206\u5f00\u7684\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},",")," \u9694\u5f00\uff0c\u8fde\u7eed\u7684\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"-")," \u8fde\u63a5",(0,l.kt)("br",null),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"title")," \u8868\u793a\u4ee3\u7801\u5757\u7684\u6807\u9898"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-md"},'```ts {1,4,6-8} title="src/clientModules/routeModules.ts"\nyour code...\n```\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts",metastring:'{1,4,6-8} title="src/clientModules/routeModules.ts"',"{1,4,6-8}":!0,title:'"src/clientModules/routeModules.ts"'},"import mitt from 'mitt';\nimport ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';\n\nconst emitter = mitt();\n\nif (ExecutionEnvironment.canUseDOM) {\n  window.emitter = emitter;\n}\n\nexport function onRouteDidUpdate() {\n  if (ExecutionEnvironment.canUseDOM) {\n    setTimeout(() => {\n      window.emitter.emit('onRouteDidUpdate');\n    });\n  }\n  // https://github.com/facebook/docusaurus/issues/8278\n}\n")),(0,l.kt)("p",null,"\u4e0b\u9762\u7684\u4ee3\u7801\u5757\u7528\u4e8e\u8868\u793a\u4ee3\u7801\u7684\u4fee\u6539"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-md"},"````diff\n+       code_1\n-       code_2\n````\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-diff"},"module.exports = {\n+  themeConfig: {\n-    algolia: {\n      appId: 'YOUR_APP_ID',          // Application ID\n      apiKey: 'YOUR_SEARCH_API_KEY', // Search-Only API Key\n      indexName: 'YOUR_INDEX_NAME'   // Index name\n    }\n  }\n};\n")),(0,l.kt)("h2",{id:"\u5916\u94fe\u6807\u8bc6"},"\u5916\u94fe\u6807\u8bc6"),(0,l.kt)(y,{mdxType:"BrowserWindow2"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(N.Z,{type:"external",link:"https://www.cordcloud.biz/",mdxType:"HyperLink"},"CordCloud \xa0")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)(N.Z,{type:"external",link:"https://cyoooo.co/",mdxType:"HyperLink"},"KuLi \xa0"),"\uff08Testing\uff09"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import HyperLink from "@site/src/components/HyperLink";\n\n- <HyperLink type="external" link="https://www.cordcloud.biz/">\n    CordCloud &nbsp;\n  </HyperLink>\n\n- <HyperLink type="external" link="https://cyoooo.co/">\n    KuLi &nbsp;\n  </HyperLink>\n  \uff08Testing\uff09\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4e0d\u8fc7\u6211\u89c9\u5f97\u6709\u70b9\u9ebb\u70e6\uff0c\u8fd8\u4e0d\u5982\u7528\u666e\u901a\u7684\u5916\u94fe\u8bed\u6cd5\uff0c\u8fd9\u4e2a\u6807\u8bc6\u8981\u4e0d\u8981\u65e0\u6240\u8c13")),(0,l.kt)("h2",{id:"\u5185\u5d4c-bilibili-\u89c6\u9891"},"\u5185\u5d4c bilibili \u89c6\u9891"),(0,l.kt)(w.Z,{src:"//player.bilibili.com/player.html?aid=379284479&bvid=BV17f4y1M7mq&cid=445379085&page=1",width:"100%",height:"360",frameborder:"no",scrolling:"no",allowfullscreen:"allowfullscreen",bsrc:"https://www.bilibili.com/video/BV17f4y1M7mq/",mdxType:"BVideo"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import BVideo from "@site/src/components/BVideo";\n\n<BVideo src="//player.bilibili.com/player.html?aid=379284479&bvid=BV17f4y1M7mq&cid=445379085&page=1" width="100%" height="360" frameborder="no" scrolling="no" allowfullscreen="allowfullscreen" bsrc="https://www.bilibili.com/video/BV17f4y1M7mq/"/>\n')),(0,l.kt)("p",null,"\u4f46\u662f\u5f15\u7528\u7684\u89c6\u9891\u6e05\u6670\u5ea6\u53ea\u6709 360P"),(0,l.kt)("h2",{id:"\u8bbe\u7f6e\u535a\u5ba2\u5185\u90e8\u7684\u8df3\u8f6c\u94fe\u63a5"},"\u8bbe\u7f6e\u535a\u5ba2\u5185\u90e8\u7684\u8df3\u8f6c\u94fe\u63a5"),(0,l.kt)("h3",{id:"\u8df3\u8f6c\u5230\u5f53\u524d\u6587\u6863"},"\u8df3\u8f6c\u5230\u5f53\u524d\u6587\u6863"),(0,l.kt)("p",null,"\u8df3\u8f6c\u5230",(0,l.kt)("a",{parentName:"p",href:"#%E9%AB%98%E4%BA%AE%E5%9D%97"},"\u9ad8\u4eae\u5757")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-md"},"\u8df3\u8f6c\u5230[\u9ad8\u4eae\u5757](#\u9ad8\u4eae\u5757)\n")),(0,l.kt)("h3",{id:"\u8df3\u8f6c\u5230\u53e6\u4e00\u4e2a\u6587\u6863"},"\u8df3\u8f6c\u5230\u53e6\u4e00\u4e2a\u6587\u6863"),(0,l.kt)("p",null,"\u8df3\u8f6c\u5230",(0,l.kt)("a",{parentName:"p",href:"/docs/Docusaurus-%E9%83%A8%E7%BD%B2"},"\u90e8\u7f72")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-md"},"\u8df3\u8f6c\u5230[\u90e8\u7f72](/docs/Site/Docusaurus/\u90e8\u7f72.md)\n")),(0,l.kt)("p",null,"\u8df3\u8f6c\u5230",(0,l.kt)("a",{parentName:"p",href:"/docs/Docusaurus-%E9%83%A8%E7%BD%B2/#%E8%BF%9B%E9%98%B6%E9%83%A8%E7%BD%B2"},"\u90e8\u7f72-\u8fdb\u9636\u90e8\u7f72")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-md"},"\u8df3\u8f6c\u5230[\u90e8\u7f72-\u8fdb\u9636\u90e8\u7f72](/docs/Site/Docusaurus/\u90e8\u7f72.md/#\u8fdb\u9636\u90e8\u7f72)\n")),(0,l.kt)("h3",{id:"\u8df3\u8f6c\u5230\u76ee\u6807\u6587\u4ef6"},"\u8df3\u8f6c\u5230\u76ee\u6807\u6587\u4ef6"),(0,l.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u5728 Markdown \u6587\u4ef6\u4e2d\u76f4\u63a5\u94fe\u63a5\u9759\u6001\u8d44\u6e90\uff08\u6bd4\u5982 docx \u6587\u4ef6\u3001\u56fe\u7247\u7b49\uff09\u6765\u83b7\u53d6\u76ee\u6807\u6587\u4ef6\uff0c\u4f8b\u5982\uff1a"),(0,l.kt)("p",null,(0,l.kt)("a",{target:"_blank",href:n(657).Z},"\u5728 Markdown \u91cc\u4e0b\u8f7d\u8fd9\u4e2a docx")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-md"},"[\u5728 Markdown \u91cc\u4e0b\u8f7d\u8fd9\u4e2a docx](@site/static/doc/example.docx)\n")),(0,l.kt)("h2",{id:"\u5feb\u6377\u952e\u6837\u5f0f"},"\u5feb\u6377\u952e\u6837\u5f0f"),(0,l.kt)(T.Z,{mdxType:"Shortcut"},"ctrl")," + ",(0,l.kt)(T.Z,{mdxType:"Shortcut"},"C"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import Shortcut from "@site/src/components/Shortcut/index";\n\n<Shortcut>ctrl</Shortcut> + <Shortcut>C</Shortcut>\n')),(0,l.kt)("h2",{id:"\u56fe\u7247-flex-\u5e03\u5c40"},"\u56fe\u7247 flex \u5e03\u5c40"),(0,l.kt)(x.Z,{mdxType:"DisplayFlex"},(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://shake-picture.oss-cn-guangzhou.aliyuncs.com/Docusaurus/docs/Blog_Building/Docusaurus/20230125010816.png",alt:"1"})),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://shake-picture.oss-cn-guangzhou.aliyuncs.com/Docusaurus/docs/Blog_Building/Docusaurus/20230125010903.png",alt:"2"}))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import DisplayFlex from '@site/src/components/DisplayFlex'\n\n<DisplayFlex>\n\n![1](https://shake-picture.oss-cn-guangzhou.aliyuncs.com/Docusaurus/docs/Blog_Building/Docusaurus/20230125010816.png)\n\n![2](https://shake-picture.oss-cn-guangzhou.aliyuncs.com/Docusaurus/docs/Blog_Building/Docusaurus/20230125010903.png)\n\n</DisplayFlex>\n")),(0,l.kt)("h2",{id:"\u6d4f\u89c8\u7a97\u53e3"},"\u6d4f\u89c8\u7a97\u53e3"),(0,l.kt)("h3",{id:"\u6d4f\u89c8\u5668\u7a97\u53e3"},"\u6d4f\u89c8\u5668\u7a97\u53e3"),(0,l.kt)(y,{mdxType:"BrowserWindow2"},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8fd9\u662f\u5b98\u65b9\u6837\u5f0f\u7684\u6d4f\u89c8\u5668\u7a97\u53e3"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import BrowserWindow2 from '@site/src/components/BrowserWindow2';\n\n// <BrowserWindow2 url=\"www.example.com\">\n<BrowserWindow2>\n**\u8fd9\u662f\u5b98\u65b9\u6837\u5f0f\u7684\u6d4f\u89c8\u5668\u7a97\u53e3**\n</BrowserWindow2>\n")),(0,l.kt)(u.Z,{url:"http://www.shaking.site",mdxType:"BrowserWindow"},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8fd9\u662f\u6211\u6839\u636e\u5f00\u6e90\u6837\u5f0f\u4fee\u6539\u7684\u6d4f\u89c8\u5668\u7a97\u53e3"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import BrowserWindow from '@site/src/components/BrowserWindow';\n\n<BrowserWindow url=\"http://www.shaking.site\">\n**\u8fd9\u662f\u6211\u6839\u636e\u5f00\u6e90\u6837\u5f0f\u4fee\u6539\u7684\u6d4f\u89c8\u5668\u7a97\u53e3**\n</BrowserWindow>\n")),(0,l.kt)("h3",{id:"\u9605\u8bfb\u5361\u7247\u7a97\u53e3"},"\u9605\u8bfb\u5361\u7247\u7a97\u53e3"),(0,l.kt)(Z.Z,{book:"xxxx",date:"2023-xx-xx",mdxType:"ReadingCard"},"\u8fd9\u662f\u6839\u636e\u5f00\u6e90\u6837\u5f0f\u8bbe\u8ba1\u7684\u9605\u8bfb\u5361\u7247\u7a97\u53e3",(0,l.kt)("br",null),"\uff08\u7528\u6765\u5199\u6458\u6284\u5565\u7684\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import ReadingCard from \'@site/src/components/ReadingCard\'\n\n<ReadingCard book="xxxx" date="2023-xx-xx">\n\u8fd9\u662f\u6839\u636e\u5f00\u6e90\u6837\u5f0f\u8bbe\u8ba1\u7684\u9605\u8bfb\u5361\u7247\u7a97\u53e3<br/>\n</ReadingCard>\n')),(0,l.kt)("h2",{id:"\u9644\u5f55"},"\u9644\u5f55"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://blog.csdn.net/longtype/article/details/103243822/"},"Markdown\u8bed\u6cd5\u9519\u8bef-\u82f1\u6587"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://blog.csdn.net/longtype/article/details/103243862?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522167584609816782425116188%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fblog.%2522%257D&request_id=167584609816782425116188&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~blog~first_rank_ecpm_v1~rank_v31_ecpm-3-103243862-null-null.blog_rank_default&utm_term=markdown&spm=1018.2226.3001.4450"},"Markdown\u8bed\u6cd5\u9519\u8bef-\u4e2d\u6587")))))}W.isMDXComponent=!0},657:function(e,t,n){t.Z=n.p+"assets/files/example-e1821c366558728f70e054fbf9db7b64.docx"}}]);