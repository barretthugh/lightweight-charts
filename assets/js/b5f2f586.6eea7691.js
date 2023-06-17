"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9134],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},k="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),k=s(n),c=a,d=k["".concat(p,".").concat(c)]||k[c]||m[c]||l;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[k]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},925:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={id:"WatermarkOptions",title:"Interface: WatermarkOptions",sidebar_label:"WatermarkOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},i=void 0,o={unversionedId:"api/interfaces/WatermarkOptions",id:"version-3.8/api/interfaces/WatermarkOptions",title:"Interface: WatermarkOptions",description:"Watermark options.",source:"@site/versioned_docs/version-3.8/api/interfaces/WatermarkOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/WatermarkOptions",permalink:"/lightweight-charts/docs/3.8/api/interfaces/WatermarkOptions",draft:!1,editUrl:null,tags:[],version:"3.8",sidebarPosition:0,frontMatter:{id:"WatermarkOptions",title:"Interface: WatermarkOptions",sidebar_label:"WatermarkOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},p={},s=[{value:"Properties",id:"properties",level:2},{value:"color",id:"color",level:3},{value:"visible",id:"visible",level:3},{value:"text",id:"text",level:3},{value:"fontSize",id:"fontsize",level:3},{value:"fontFamily",id:"fontfamily",level:3},{value:"fontStyle",id:"fontstyle",level:3},{value:"horzAlign",id:"horzalign",level:3},{value:"vertAlign",id:"vertalign",level:3}],u={toc:s},k="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(k,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Watermark options."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"color"},"color"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"color"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Watermark color."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"'rgba(0, 0, 0, 0)'")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"visible"},"visible"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"visible"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"Display the watermark."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"false")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"text"},"text"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"text"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Text of the watermark. Word wrapping is not supported."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"''")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"fontsize"},"fontSize"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"fontSize"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"Font size in pixels."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"48")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"fontfamily"},"fontFamily"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"fontFamily"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Font family."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"'Trebuchet MS', Roboto, Ubuntu, sans-serif")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"fontstyle"},"fontStyle"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"fontStyle"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Font style."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"''")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"horzalign"},"horzAlign"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"horzAlign"),": ",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/#horzalign"},(0,a.kt)("inlineCode",{parentName:"a"},"HorzAlign"))),(0,a.kt)("p",null,"Horizontal alignment inside the chart area."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"'center'")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"vertalign"},"vertAlign"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"vertAlign"),": ",(0,a.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/#vertalign"},(0,a.kt)("inlineCode",{parentName:"a"},"VertAlign"))),(0,a.kt)("p",null,"Vertical alignment inside the chart area."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"'center'")))}m.isMDXComponent=!0}}]);