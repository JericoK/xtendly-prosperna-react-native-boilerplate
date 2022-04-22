"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[833],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,v=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(v,i(i({ref:t},c),{},{components:n})):r.createElement(v,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8737:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],s={slug:"/Components",title:"Component Patterns \ud83e\udde9"},l=void 0,p={unversionedId:"Guides/3_3_Components",id:"Guides/3_3_Components",title:"Component Patterns \ud83e\udde9",description:"Learn To Create Reusable Presentational Components In React Native & More",source:"@site/docs/3_Guides/3_3_Components.md",sourceDirName:"3_Guides",slug:"/Components",permalink:"/xtendly-prosperna-react-native-boilerplate/docs/Components",editUrl:"https://github.com/thecodingmachine/react-native-boilerplate/edit/master/website-documentation/docs/docs/3_Guides/3_3_Components.md",tags:[],version:"current",frontMatter:{slug:"/Components",title:"Component Patterns \ud83e\udde9"},sidebar:"tutorialSidebar",previous:{title:"Navigation \ud83d\udcf1",permalink:"/xtendly-prosperna-react-native-boilerplate/docs/Navigation"},next:{title:"State Management \ud83d\uddc3\ufe0f",permalink:"/xtendly-prosperna-react-native-boilerplate/docs/StateManagement"}},c=[{value:"Components In React-Native \ud83e\udde9",id:"components-in-react-native-",children:[],level:2}],u={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Learn To Create Reusable Presentational Components In React Native & More"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Developing Android & iOS apps has never been easier when it comes to delivering the right product to the end-user. React-Native has changed this problem totally since it was introduced, and knowing about design patterns in React-Native is an essential skill that developers should know. In the React-Native ecosystem, the way we design our apps has always been easier since due to the large community support you can easily pick some of the work done by other outstanding developers. I will discuss some of the design patterns in React-Native that will help you write more maintainable code with examples."),(0,o.kt)("h2",{id:"components-in-react-native-"},"Components In React-Native \ud83e\udde9"),(0,o.kt)("p",null,"A component is all that React uses most of the time the apps and writing your components in the right way is really important as you start to make real-world and bigger apps that require actual maintenance over time. These practices are still used by professional developers to make awesome React-Native apps and also I will discuss why it is so important to learn design patterns in React or React-Native in our case"),(0,o.kt)("p",null,"When it comes to Components it is very crucial to make them reusable as your app grows with the time you will find it really hard to make new components every time to use somewhere else and end-up up following the well-known programmer principle-Don't Repeat Yourself (DRY). Presentational components are meant to do that."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you are interested you can ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/javascript-in-plain-english/design-patterns-in-react-native-component-patterns-785d585ac3f"},"Read more about it here.")))))}m.isMDXComponent=!0}}]);