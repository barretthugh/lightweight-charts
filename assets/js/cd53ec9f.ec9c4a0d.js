"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8555],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(r),k=i,h=u["".concat(s,".").concat(k)]||u[k]||d[k]||a;return r?n.createElement(h,l(l({ref:t},c),{},{components:r})):n.createElement(h,l({ref:t},c))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},9763:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const a={id:"CrosshairLineOptions",title:"Interface: CrosshairLineOptions",sidebar_label:"CrosshairLineOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},l=void 0,o={unversionedId:"api/interfaces/CrosshairLineOptions",id:"version-4.0/api/interfaces/CrosshairLineOptions",title:"Interface: CrosshairLineOptions",description:"Structure describing a crosshair line (vertical or horizontal)",source:"@site/versioned_docs/version-4.0/api/interfaces/CrosshairLineOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/CrosshairLineOptions",permalink:"/lightweight-charts/docs/api/interfaces/CrosshairLineOptions",draft:!1,editUrl:null,tags:[],version:"4.0",sidebarPosition:0,frontMatter:{id:"CrosshairLineOptions",title:"Interface: CrosshairLineOptions",sidebar_label:"CrosshairLineOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},s={},p=[{value:"Properties",id:"properties",level:2},{value:"color",id:"color",level:3},{value:"width",id:"width",level:3},{value:"style",id:"style",level:3},{value:"visible",id:"visible",level:3},{value:"labelVisible",id:"labelvisible",level:3},{value:"labelBackgroundColor",id:"labelbackgroundcolor",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Structure describing a crosshair line (vertical or horizontal)"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"color"},"color"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"color"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Crosshair line color."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"'#758696'")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"width"},"width"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"width"),": ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/#linewidth"},(0,i.kt)("inlineCode",{parentName:"a"},"LineWidth"))),(0,i.kt)("p",null,"Crosshair line width."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"1")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"style"},"style"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"style"),": ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/enums/LineStyle"},(0,i.kt)("inlineCode",{parentName:"a"},"LineStyle"))),(0,i.kt)("p",null,"Crosshair line style."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/api/enums/LineStyle#largedashed"},"LargeDashed")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"visible"},"visible"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"visible"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Display the crosshair line."),(0,i.kt)("p",null,"Note that disabling crosshair lines does not disable crosshair marker on Line and Area series.\nIt can be disabled by using ",(0,i.kt)("inlineCode",{parentName:"p"},"crosshairMarkerVisible")," option of a relevant series."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"See"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/LineStyleOptions#crosshairmarkervisible"},"crosshairMarkerVisible")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/AreaStyleOptions#crosshairmarkervisible"},"crosshairMarkerVisible")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/BaselineStyleOptions#crosshairmarkervisible"},"crosshairMarkerVisible"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"true")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"labelvisible"},"labelVisible"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"labelVisible"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Display the crosshair label on the relevant scale."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"true")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"labelbackgroundcolor"},"labelBackgroundColor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"labelBackgroundColor"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Crosshair label background color."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"'#4c525e'")))}d.isMDXComponent=!0}}]);