(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{178:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return d}));var n=r(2),a=r(9),i=(r(0),r(187)),o={title:"ContainerDelegate",sidebar_label:"ContainerDelegate"},c={id:"react-native/interfaces/containerdelegate",title:"ContainerDelegate",description:"@authgear/react-native \u203a ContainerDelegate",source:"@site/docs/react-native/interfaces/containerdelegate.md",permalink:"/authgear-sdk-js/docs/react-native/interfaces/containerdelegate",editUrl:"https://github.com/authgear/authgear-sdk-js/edit/master/website/docs/react-native/interfaces/containerdelegate.md",sidebar_label:"ContainerDelegate",sidebar:"root",previous:{title:"ConfigureOptions",permalink:"/authgear-sdk-js/docs/react-native/interfaces/configureoptions"},next:{title:"ContainerOptions",permalink:"/authgear-sdk-js/docs/react-native/interfaces/containeroptions"}},s=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Index",id:"index",children:[{value:"Methods",id:"methods",children:[]}]},{value:"Methods",id:"methods-1",children:[{value:'<a id="onrefreshtokenexpired" name="onrefreshtokenexpired"></a>  onRefreshTokenExpired',id:"onrefreshtokenexpired",children:[]}]}],l={rightToc:s};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/authgear-sdk-js/docs/react-native/index"}),"@authgear/react-native")," \u203a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/authgear-sdk-js/docs/react-native/interfaces/containerdelegate"}),"ContainerDelegate")),Object(i.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"ContainerDelegate"))),Object(i.b)("h2",{id:"index"},"Index"),Object(i.b)("h3",{id:"methods"},"Methods"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/authgear-sdk-js/docs/react-native/interfaces/containerdelegate#onrefreshtokenexpired"}),"onRefreshTokenExpired"))),Object(i.b)("h2",{id:"methods-1"},"Methods"),Object(i.b)("h3",{id:"onrefreshtokenexpired"},Object(i.b)("a",{id:"onrefreshtokenexpired",name:"onrefreshtokenexpired"}),"  onRefreshTokenExpired"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"onRefreshTokenExpired"),"(): ",Object(i.b)("em",{parentName:"p"},"Promise\u2039void\u203a")),Object(i.b)("p",null,"Called when the server rejects the refresh token.\nWhen this function is called, the session is not cleared yet."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("em",{parentName:"p"},"Promise\u2039void\u203a")))}d.isMDXComponent=!0},187:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(r),b=n,f=p["".concat(o,".").concat(b)]||p[b]||u[b]||i;return r?a.a.createElement(f,c(c({ref:t},l),{},{components:r})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);