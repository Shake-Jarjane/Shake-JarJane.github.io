"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7207],{4137:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),i=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=i(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=i(t),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return t?a.createElement(h,l(l({ref:n},c),{},{components:t})):a.createElement(h,l({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=d;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,l[1]=u;for(var i=2;i<o;i++)l[i]=t[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},425:function(e,n,t){t.d(n,{Z:function(){return l}});t(7294);var a=t(6010),r="tabItem_Ymn6",o=t(5944);function l(e){var n=e.children,t=e.hidden,l=e.className;return(0,o.tZ)("div",{role:"tabpanel",className:(0,a.Z)(r,l),hidden:t,children:n})}},4259:function(e,n,t){t.d(n,{Z:function(){return m}});var a=t(7294),r=t(6010),o=t(1048),l=t(3609),u=t(1943),s=t(2957),i="tabList__CuJ",c="tabItem_LNqP",p=t(5944);function d(e){var n,t,o=e.lazy,d=e.block,m=e.defaultValue,h=e.values,g=e.groupId,f=e.className,k=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:k.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),y=(0,l.l)(v,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===m?m:null!=(n=null!=m?m:null==(t=k.find((function(e){return e.props.default})))?void 0:t.props.value)?n:k[0].props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,u.U)(),_=N.tabGroupChoices,A=N.setTabGroupChoices,D=(0,a.useState)(b),w=D[0],I=D[1],O=[],P=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var j=_[g];null!=j&&j!==w&&v.some((function(e){return e.value===j}))&&I(j)}var E=function(e){var n=e.currentTarget,t=O.indexOf(n),a=v[t].value;a!==w&&(P(n),I(a),null!=g&&A(g,String(a)))},T=function(e){var n,t=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":var a,r=O.indexOf(e.currentTarget)+1;t=null!=(a=O[r])?a:O[0];break;case"ArrowLeft":var o,l=O.indexOf(e.currentTarget)-1;t=null!=(o=O[l])?o:O[O.length-1]}null==(n=t)||n.focus()};return(0,p.BX)("div",{className:(0,r.Z)("tabs-container",i),children:[(0,p.tZ)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":d},f),children:v.map((function(e){var n=e.value,t=e.label,a=e.attributes;return(0,p.tZ)("li",Object.assign({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,ref:function(e){return O.push(e)},onKeyDown:T,onClick:E},a,{className:(0,r.Z)("tabs__item",c,null==a?void 0:a.className,{"tabs__item--active":w===n}),children:null!=t?t:n}),n)}))}),o?(0,a.cloneElement)(k.filter((function(e){return e.props.value===w}))[0],{className:"margin-top--md"}):(0,p.tZ)("div",{className:"margin-top--md",children:k.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==w})}))})]})}function m(e){var n=(0,o.Z)();return(0,p.tZ)(d,Object.assign({},e),String(n))}},1762:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var a=t(3117),r=t(102),o=(t(7294),t(4137)),l=t(4259),u=t(425),s=["components"],i={id:"Docusaurus-\u641c\u7d22\u914d\u7f6e",slug:"/Docusaurus-\u641c\u7d22\u914d\u7f6e",title:"\u641c\u7d22\u914d\u7f6e",date:"2023/01/20",authors:"Shake",last_update:{date:"2023/02/07"}},c=void 0,p={unversionedId:"Site/Docusaurus/Docusaurus-\u641c\u7d22\u914d\u7f6e",id:"Site/Docusaurus/Docusaurus-\u641c\u7d22\u914d\u7f6e",title:"\u641c\u7d22\u914d\u7f6e",description:"\u641c\u7d22\u529f\u80fd\u662f\u57fa\u4e8e algolia \u6765\u8fdb\u884c\u914d\u7f6e\uff0c\u914d\u7f6e\u65b9\u5f0f\u6709\u4e24\u79cd:",source:"@site/docs/Site/Docusaurus/\u641c\u7d22\u914d\u7f6e.md",sourceDirName:"Site/Docusaurus",slug:"/Docusaurus-\u641c\u7d22\u914d\u7f6e",permalink:"/docs/Docusaurus-\u641c\u7d22\u914d\u7f6e",draft:!1,tags:[],version:"current",lastUpdatedAt:1675728e3,formattedLastUpdatedAt:"2023\u5e742\u67087\u65e5",frontMatter:{id:"Docusaurus-\u641c\u7d22\u914d\u7f6e",slug:"/Docusaurus-\u641c\u7d22\u914d\u7f6e",title:"\u641c\u7d22\u914d\u7f6e",date:"2023/01/20",authors:"Shake",last_update:{date:"2023/02/07"}},sidebar:"Blog_Building",previous:{title:"\u81ea\u5b9a\u4e49\u7ec4\u4ef6\uff08\u642c\u8fd0\uff09",permalink:"/docs/Docusaurus-\u81ea\u5b9a\u4e49\u7ec4\u4ef6"},next:{title:"\u8bc4\u8bba\u7cfb\u7edf",permalink:"/docs/Docusaurus-\u8bc4\u8bba\u7cfb\u7edf"}},d={},m=[{value:"\u4e3b\u52a8\u722c\u53d6",id:"\u4e3b\u52a8\u722c\u53d6",level:2},{value:"\u914d\u7f6e\u89e6\u53d1\u65b9\u5f0f",id:"\u914d\u7f6e\u89e6\u53d1\u65b9\u5f0f",level:3},{value:"\u914d\u7f6e docsearch.json",id:"\u914d\u7f6e-docsearchjson",level:3},{value:"\u914d\u7f6e docusaurus.config.js",id:"\u914d\u7f6e-docusaurusconfigjs",level:3},{value:"\u53c2\u8003\u4e0e\u81f4\u8c22",id:"\u53c2\u8003\u4e0e\u81f4\u8c22",level:2}],h={toc:m};function g(e){var n=e.components,t=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u641c\u7d22\u529f\u80fd\u662f\u57fa\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"algolia")," \u6765\u8fdb\u884c\u914d\u7f6e\uff0c\u914d\u7f6e\u65b9\u5f0f\u6709\u4e24\u79cd: ",(0,o.kt)("br",null),"\n1.\u8ba9 ",(0,o.kt)("inlineCode",{parentName:"p"},"Docsearch")," \u6bcf\u5468\u722c\u4e00\u6b21\u4f60\u7684\u7f51\u7ad9\uff0c\u524d\u63d0\u6761\u4ef6\u662f\u4f60\u7684\u9879\u76ee\u5fc5\u987b\u662f\u5f00\u6e90\u7684\uff0c\u5426\u5219\u8981\u8fdb\u884c\u6536\u8d39\uff0c\u597d\u5904\u662f\u6ca1\u6709\u989d\u5916\u7684\u914d\u7f6e\uff0c\u53ea\u4e0d\u8fc7\u7533\u8bf7\u6bd4\u8f83\u7e41\u7410\uff0c\u8fd9\u65b9\u5f0f\u4e5f\u662f\u6211\u91c7\u53d6\u7684\u3002"),(0,o.kt)("p",null,"2.\u81ea\u5df1\u8fd0\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"Docsearch")," \u722c\u866b\uff0c\u6839\u636e\u81ea\u5df1\u5fc3\u60c5\u968f\u65f6\u722c\u53d6\uff0c\u4f46\u662f\u9700\u8981\u81ea\u884c\u6ce8\u518c\u8d26\u53f7\u548c\u642d\u5efa\u722c\u866b\u73af\u5883\uff08docker\uff09"),(0,o.kt)("p",null,"\u4e0b\u9762\u53ea\u4ecb\u7ecd\u6211\u6240\u91c7\u7528\u7684\u914d\u7f6e\u65b9\u5f0f\uff0c\u539f\u672c\u91c7\u7528\u7684\u662f\u7b2c\u4e00\u79cd\u65b9\u6848\uff0c\u540e\u6765\u56e0\u7533\u8bf7\u65f6\u95f4\u6709\u70b9\u4e45\u8fb9\u9009\u62e9\u4e86",(0,o.kt)("strong",{parentName:"p"},"\u7b2c\u4e8c\u79cd\u65b9\u6848")),(0,o.kt)("h2",{id:"\u4e3b\u52a8\u722c\u53d6"},"\u4e3b\u52a8\u722c\u53d6"),(0,o.kt)("p",null,"\u8fdb\u5165 Algolia DocSearch \u7684",(0,o.kt)("a",{parentName:"p",href:"https://docsearch.algolia.com/apply/"},"\u7533\u8bf7\u5730\u5740"),"\uff0c\u586b\u5199\u76f8\u5173\u4fe1\u606f\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u7f51\u7ad9\u8981\u53ef\u4ee5\u516c\u5f00\u8bbf\u95ee\u7684"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://shake-picture.oss-cn-guangzhou.aliyuncs.com/Docusaurus/docs/Blog_Building/Docusaurus/20230125015250.png",alt:"20230125015250"})),(0,o.kt)("p",null,"\u7533\u8bf7\u7684\u8fc7\u7a0b\u53ef\u80fd\u6bd4\u8f83\u9ebb\u70e6\u548c\u8017\u65f6\uff0c\u4f46\u4ed6\u662f\u514d\u8d39\u7684\uff0c\u800c\u4e14\u4e00\u52b3\u6c38\u9038\uff08\u5982\u679c\u4f60\u4e0d\u60f3\u6298\u817e\u81ea\u5df1\u8fd0\u884c\u722c\u866b\u4e14\u63a5\u53d7 7 \u5929\u66f4\u65b0\u4e00\u6b21\u722c\u866b\u7684\u8bdd\uff09",(0,o.kt)("br",null)),(0,o.kt)("p",null,"\u7136\u800c\u7533\u8bf7\u7ed3\u679c\u90ae\u4ef6\uff0c\u6700\u7ec8\u662f\u7b49\u4e86\u4e09\u56db\u5929\u624d\u6536\u5230"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://shake-picture.oss-cn-guangzhou.aliyuncs.com/Docusaurus/docs/Blog_Building/Docusaurus/20230125015304.png",alt:"20230125015304"})),(0,o.kt)("p",null,"\u672c\u7740\u5fc3\u6025\uff0c\u6211\u53c8\u7533\u8bf7\u4e86\u4e00\u4e24\u6b21 ",(0,o.kt)("strong",{parentName:"p"},"\uff08\u4e0d\u5efa\u8bae\u8fd9\u4e48\u505a\uff0c\u56e0\u4e3a\u5ba1\u662f\u4eba\u5de5\u4e2a\u5ba1\u6838\u7684\uff0c\u5b98\u65b9\u7684\u8bf4\u6cd5\u662f\u53ef\u80fd\u4f1a\u5ef6\u957f\u5ba1\u6838\u5468\u671f\uff0c\u6700\u957f\u7684\u53ef\u80fd\u4f1a\u5230\u4e24\u5468\uff01\uff09")," ",(0,o.kt)("br",null),"\n\u4e8e\u662f\u6211\u53c8\u5bfb\u627e\u5230\u4e86\u66f4\u597d\u4e5f\u66f4\u9002\u5408\u6211\u7684\u65b9\u6848\uff0c\u5982\u4e0b\uff1a"),(0,o.kt)("p",null,"\u4e3b\u8981\u53c2\u8003\u6559\u7a0b\u7684\u535a\u4e3b\u5f55\u5236\u4e86\u4e2a",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=cykGdsbe6f0"},"\u89c6\u9891\u6559\u7a0b"),"\uff0c\u53ef\u4ee5\u7ed3\u5408\u6587\u6863\u4e00\u8d77\u53c2\u8003\uff0c\u4e0d\u8fc7\u4f60\u5f97\u9700\u8981\u53bb\u5916\u9762\u7684\u4e16\u754c\u770b\u770b\u3002"),(0,o.kt)("p",null,"\u4ee5\u4e0b\u6b65\u9aa4\u7684\u524d\u63d0\u662f\u5df2\u7ecf\u521b\u5efa\u4e86 ",(0,o.kt)("a",{parentName:"p",href:"https://www.algolia.com/"},"algolia")," \u8d26\u53f7\uff0c\u4ed3\u5e93\u4e2d\u4e5f\u521b\u5efa\u4e86 Action\uff0c\u7136\u540e\u4e0b\u9762\u4e09\u4e2a algolia \u7684 Key \u503c\u662f\u5f85\u4f1a\u9700\u8981\u7528\u5230\u7684"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://shake-picture.oss-cn-guangzhou.aliyuncs.com/Docusaurus/docs/Blog_Building/Docusaurus/20230125015640.png",alt:"20230125015640"})),(0,o.kt)("p",null,"\u7136\u540e\u4e0b\u9762\u4e3b\u8981\u8bf4\u5176\u4e2d\u4e24\u949f\u89e6\u53d1\u6761\u4ef6\uff0c\u533a\u522b\u5728\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"yml")," \u6587\u4ef6\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"on")," \u5b57\u6bb5\u5185\u5bb9\u4e0d\u4e00\u6837\uff0c\u5176\u4ed6\u4e00\u81f4\uff0c\u6839\u636e\u81ea\u5df1\u7684\u9700\u6c42\u9009\u62e9"),(0,o.kt)("h3",{id:"\u914d\u7f6e\u89e6\u53d1\u65b9\u5f0f"},"\u914d\u7f6e\u89e6\u53d1\u65b9\u5f0f"),(0,o.kt)(l.Z,{defaultValue:"submit",values:[{label:"\u63d0\u4ea4\u4ee3\u7801\u89e6\u53d1",value:"submit"},{label:"\u90e8\u7f72\u89e6\u53d1",value:"deployment"},{label:"\u5b9a\u65f6\u89e6\u53d1",value:"timer"}],mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"submit",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"on:\n  push:\n    branches:\n      - main\n")),(0,o.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u63d0\u4ea4\u4ee3\u7801\u89e6\u53d1\u76f8\u5f53\u4e8e\u8fd8\u6ca1\u90e8\u7f72\u66f4\u65b0\u7684\u5185\u5bb9\u5c31\u5f00\u59cb\u8fd0\u884c\u722c\u866b\u4e86\uff0c\u5c31\u662f\u8bf4\u722c\u53d6\u7684\u662f\u4e0a\u4e00\u6b21\u90e8\u7f72\u6210\u529f\u7684\u5185\u5bb9"))),(0,o.kt)(u.Z,{value:"deployment",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"on:\n  deployment\n")),(0,o.kt)("admonition",{title:"\u6ce8\u610f",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u7684\u90e8\u7f72\u65b9\u5f0f\u548c\u6211\u7684\u4e00\u6837\uff08\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"/docs/Docusaurus-%E9%83%A8%E7%BD%B2"},(0,o.kt)("strong",{parentName:"a"},"\u8fd9\u7bc7\u6587\u7ae0")),"\uff09\uff0c\u5e76\u4e14\u89e6\u53d1 docsearch \u7684\u65b9\u5f0f\u9009\u62e9\u90e8\u7f72\u89e6\u53d1\u7684\u8bdd\uff0c\u53ea\u9700\u5c06\u4ee5\u4e0b\u4ee3\u7801\u590d\u5236\u5e76\u6dfb\u52a0\u5230 deploy.yml \u5e95\u4e0b\u5373\u53ef,\u6ce8\u610f\u548c\u7d27\u63a5\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"-name")," \u5b57\u6bb5\u5bf9\u9f50\uff0c\u7136\u540e\u8df3\u5230",(0,o.kt)("a",{parentName:"p",href:"#%E9%85%8D%E7%BD%AE-docsearchjson"},"\u4e0b\u4e00\u6b65"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="deploy.yml"',title:'"deploy.yml"'},'      - name: Get the content of docsearch.json as config\n        id: algolia_config\n        run: echo "::set-output name=config::$(cat docsearch.json | jq -r tostring)"\n\n      - name: Run algolia/docsearch-scraper image\n        env:\n          ALGOLIA_APP_ID: ${{ secrets.ALGOLIA_APP_ID }}\n          ALGOLIA_API_KEY: ${{ secrets.ALGOLIA_API_KEY }}\n          CONFIG: ${{ steps.algolia_config.outputs.config }}\n        run: |\n          docker run \\\n            --env APPLICATION_ID=${ALGOLIA_APP_ID} \\\n            --env API_KEY=${ALGOLIA_API_KEY} \\\n            --env "CONFIG=${CONFIG}" \\\n            algolia/docsearch-scraper\n'))),(0,o.kt)(u.Z,{value:"timer",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"on:\n  schedule:\n    # \u7ea6\u6bcf\u5929\u65e9\u4e0a8\u70b9\u89e6\u53d1\uff08UTC\u65f6\u95f40\u70b9\uff09\n    - cron: '0 0 * * *'\n")))),(0,o.kt)("p",null,"\u5728\u6839\u76ee\u5f55\u4e0b ",(0,o.kt)("inlineCode",{parentName:"p"},".github/workflows/")," \u4e0b\u521b\u5efa ",(0,o.kt)("inlineCode",{parentName:"p"},"docsearch.yml")," \u6587\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml",metastring:'{6-7} title="docsearch.yml"',"{6-7}":!0,title:'"docsearch.yml"'},'# This workflow will do a clean installation of node dependencies, cache/restore them, build the source code and run tests across different versions of node\n# For more information see: https://help.github.com/actions/language-and-framework-guides/using-nodejs-with-github-actions\n\nname: docsearch\n\non:\n#  The way you choose\n\njobs:\n  algolia:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v2\n\n      - name: Get the content of docsearch.json as config\n        id: algolia_config\n        run: echo "::set-output name=config::$(cat docsearch.json | jq -r tostring)"\n\n      - name: Run algolia/docsearch-scraper image\n        env:\n          ALGOLIA_APP_ID: ${{ secrets.ALGOLIA_APP_ID }}\n          ALGOLIA_API_KEY: ${{ secrets.ALGOLIA_API_KEY }}\n          CONFIG: ${{ steps.algolia_config.outputs.config }}\n        run: |\n          docker run \\\n            --env APPLICATION_ID=${ALGOLIA_APP_ID} \\\n            --env API_KEY=${ALGOLIA_API_KEY} \\\n            --env "CONFIG=${CONFIG}" \\\n            algolia/docsearch-scraper\n')),(0,o.kt)("p",null,"\u7136\u540e\u5728\u9879\u76ee\u4ed3\u5e93\uff08\u6211\u7684\u662f\u6e90\u7801\u4ed3\u5e93\uff09\u4e2d\u65b0\u5efa\u4e24\u4e2a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Action secrets"))," \uff0c\u8f93\u5165 algolia \u7684\u76f8\u5173 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"Key"))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://shake-picture.oss-cn-guangzhou.aliyuncs.com/Docusaurus/docs/Blog_Building/Docusaurus/20230125020800.png",alt:"20230125020800"})),(0,o.kt)("h3",{id:"\u914d\u7f6e-docsearchjson"},"\u914d\u7f6e docsearch.json"),(0,o.kt)("p",null,"\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u521b\u5efa ",(0,o.kt)("inlineCode",{parentName:"p"},"docsearch.json")," \u6587\u4ef6\uff0c\u5e76\u5c06\u4ee3\u7801\u9ad8\u4eae\u7684\u90e8\u5206\u66ff\u6362\u6210\u81ea\u5df1\u7684\u4fe1\u606f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'{2-4} title="docsearch.json"',"{2-4}":!0,title:'"docsearch.json"'},'{\n  "index_name": "Shake",\n  "start_urls": ["https://www.shaking.site/"],\n  "sitemap_urls": ["https://www.shaking.site/sitemap.xml"],\n  "selectors": {\n    "lvl0": {\n      "selector": "(//ul[contains(@class,\'menu__list\')]//a[contains(@class, \'menu__link menu__link--sublist menu__link--active\')]/text() | //nav[contains(@class, \'navbar\')]//a[contains(@class, \'navbar__link--active\')]/text())[last()]",\n      "type": "xpath",\n      "global": true,\n      "default_value": "Documentation"\n    },\n    "lvl1": "header h1, article h1",\n    "lvl2": "article h2",\n    "lvl3": "article h3",\n    "lvl4": "article h4",\n    "lvl5": "article h5, article td:first-child",\n    "lvl6": "article h6",\n    "text": "article p, article li, article td:last-child"\n  },\n  "custom_settings": {\n    "attributesForFaceting": [\n      "type",\n      "lang",\n      "language",\n      "version",\n      "docusaurus_tag"\n    ],\n    "attributesToRetrieve": [\n      "hierarchy",\n      "content",\n      "anchor",\n      "url",\n      "url_without_anchor",\n      "type"\n    ],\n    "attributesToHighlight": ["hierarchy", "content"],\n    "attributesToSnippet": ["content:10"],\n    "camelCaseAttributes": ["hierarchy", "content"],\n    "searchableAttributes": [\n      "unordered(hierarchy.lvl0)",\n      "unordered(hierarchy.lvl1)",\n      "unordered(hierarchy.lvl2)",\n      "unordered(hierarchy.lvl3)",\n      "unordered(hierarchy.lvl4)",\n      "unordered(hierarchy.lvl5)",\n      "unordered(hierarchy.lvl6)",\n      "content"\n    ],\n    "distinct": true,\n    "attributeForDistinct": "url",\n    "customRanking": [\n      "desc(weight.pageRank)",\n      "desc(weight.level)",\n      "asc(weight.position)"\n    ],\n    "ranking": [\n      "words",\n      "filters",\n      "typo",\n      "attribute",\n      "proximity",\n      "exact",\n      "custom"\n    ],\n    "highlightPreTag": "<span class=\'algolia-docsearch-suggestion--highlight\'>",\n    "highlightPostTag": "</span>",\n    "minWordSizefor1Typo": 3,\n    "minWordSizefor2Typos": 7,\n    "allowTyposOnNumericTokens": false,\n    "minProximity": 1,\n    "ignorePlurals": true,\n    "advancedSyntax": true,\n    "attributeCriteriaComputedByMinProximity": true,\n    "removeWordsIfNoResults": "allOptional",\n    "separatorsToIndex": "_",\n    "synonyms": [\n      ["js", "javascript"],\n      ["ts", "typescript"]\n    ]\n  }\n}\n')),(0,o.kt)("h3",{id:"\u914d\u7f6e-docusaurusconfigjs"},"\u914d\u7f6e docusaurus.config.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  themeConfig: {\n    algolia: {\n      appId: 'YOUR_APP_ID',          // Application ID\n      apiKey: 'YOUR_SEARCH_API_KEY', // Search-Only API Key\n      indexName: 'YOUR_INDEX_NAME'   // Index name\n    }\n  }\n};\n")),(0,o.kt)("p",null,"\u5b8c\u6210\u4ee5\u4e0a\u6240\u6709\u6b65\u9aa4\u4e4b\u540e\u5373\u53ef\u5728\u81ea\u5df1\u7684\u9879\u76ee\u91cc\u8fdb\u884c\u641c\u7d22\u6d4b\u8bd5\uff0c\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Brows")," \u91cc\u6709\u6570\u636e\u8bf4\u660e\u5df2\u7ecf\u6b63\u5e38\u722c\u53d6\u4e86"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://shake-picture.oss-cn-guangzhou.aliyuncs.com/Docusaurus/docs/Blog_Building/Docusaurus/20230125021458.png",alt:"20230125021458"})),(0,o.kt)("br",null),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679c\u6709\u5176\u4ed6\u7684\u95ee\u9898\u53ef\u4ee5\u53bb\u901b\u901b\u5e95\u4e0b\u7684\u53c2\u8003\u94fe\u63a5\uff0c\u8bf4\u4e0d\u5b9a\u4f1a\u6709\u5bf9\u5e94\u7684\u89e3\u51b3\u65b9\u6848\u3002")),(0,o.kt)("h2",{id:"\u53c2\u8003\u4e0e\u81f4\u8c22"},"\u53c2\u8003\u4e0e\u81f4\u8c22"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://docusaurus.io/zh-CN/docs/search"},"\u641c\u7d22 | Docusaurus"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://www.alanwang.site/posts/%E5%8D%9A%E5%AE%A2%E6%90%AD%E5%BB%BA%E7%B3%BB%E5%88%97/Docusaurus-%E6%90%9C%E7%B4%A2"},"Docusaurus DocSearch \u642d\u5efa"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://blog.csdn.net/jiudenggushijingguo/article/details/125909267"},"docsearchplugin"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://ouch1978.github.io/docs/docusaurus/configuration/automatically-run-docsearch-scraper-from-github-action"},"\u900f\u904e GitHub Action \u81ea\u52d5\u57f7\u884c DocSearch \u7684\u722c\u87f2"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://weiyun0912.github.io/Wei-Docusaurus/docs/Docusaurus/Algolia/"},"\u5728 Docusaurus \u4e2d\u4f7f\u7528 Algolia \u5be6\u4f5c\u641c\u5c0b\u529f\u80fd")))))}g.isMDXComponent=!0}}]);