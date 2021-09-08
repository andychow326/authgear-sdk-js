"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[6971],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=p(r),d=a,m=f["".concat(u,".").concat(d)]||f[d]||l[d]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3874:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return f}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],c={title:"Introduction",slug:"/"},u=void 0,p={unversionedId:"index",id:"index",isDocsHomePage:!1,title:"Introduction",description:"Each platform has its own SDK.",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/authgear-sdk-js/docs/",editUrl:"https://github.com/authgear/authgear-sdk-js/edit/master/website/docs/index.md",version:"current",frontMatter:{title:"Introduction",slug:"/"},sidebar:"root",next:{title:"Introduction",permalink:"/authgear-sdk-js/docs/web"}},s=[{value:"Web SDK",id:"web-sdk",children:[]},{value:"React Native SDK",id:"react-native-sdk",children:[]}],l={toc:s};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Each platform has its own SDK."),(0,o.kt)("h2",{id:"web-sdk"},"Web SDK"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@authgear/web"},"@authgear/web")," is the SDK you want to use if your application is running on browsers.\nRead the ",(0,o.kt)("a",{parentName:"p",href:"web/"},"Introduction")," to get started."),(0,o.kt)("h2",{id:"react-native-sdk"},"React Native SDK"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@authgear/react-native"},"@authgear/react-native")," is the SDK you want to use if your application is written in React Native.\nRead the ",(0,o.kt)("a",{parentName:"p",href:"react-native/"},"Introduction")," to get started."))}f.isMDXComponent=!0}}]);