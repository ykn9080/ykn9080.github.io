(self.webpackChunkyoungkinam_s_homepage_madeof_gatsby=self.webpackChunkyoungkinam_s_homepage_madeof_gatsby||[]).push([[351],{1046:function(e,t,n){"use strict";n.d(t,{w_:function(){return l}});var a=n(7294),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},c=a.createContext&&a.createContext(r),i=function(){return i=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},i.apply(this,arguments)},o=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};function s(e){return e&&e.map((function(e,t){return a.createElement(e.tag,i({key:t},e.attr),s(e.child))}))}function l(e){return function(t){return a.createElement(u,i({attr:i({},e.attr)},t),s(e.child))}}function u(e){var t=function(t){var n,r=e.attr,c=e.size,s=e.title,l=o(e,["attr","size","title"]),u=c||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),a.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,l,{className:n,style:i(i({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),s&&a.createElement("title",null,s),e.children)};return void 0!==c?a.createElement(c.Consumer,null,(function(e){return t(e)})):t(r)}},1223:function(e,t,n){var a=n(5112),r=n(30),c=n(3070),i=a("unscopables"),o=Array.prototype;null==o[i]&&c.f(o,i,{configurable:!0,value:r(null)}),e.exports=function(e){o[i][e]=!0}},7475:function(e,t,n){var a=n(7854),r=n(3157),c=n(4411),i=n(111),o=n(5112)("species"),s=a.Array;e.exports=function(e){var t;return r(e)&&(t=e.constructor,(c(t)&&(t===s||r(t.prototype))||i(t)&&null===(t=t[o]))&&(t=void 0)),void 0===t?s:t}},5417:function(e,t,n){var a=n(7475);e.exports=function(e,t){return new(a(e))(0===t?0:t)}},6790:function(e,t,n){"use strict";var a=n(7854),r=n(3157),c=n(6244),i=n(9974),o=a.TypeError,s=function(e,t,n,a,l,u,f,m){for(var p,d,g=l,v=0,h=!!f&&i(f,m);v<a;){if(v in n){if(p=h?h(n[v],v,t):n[v],u>0&&r(p))d=c(p),g=s(e,t,p,d,g,u-1)-1;else{if(g>=9007199254740991)throw o("Exceed the acceptable array length");e[g]=p}g++}v++}return g};e.exports=s},490:function(e,t,n){var a=n(5005);e.exports=a("document","documentElement")},3157:function(e,t,n){var a=n(4326);e.exports=Array.isArray||function(e){return"Array"==a(e)}},4411:function(e,t,n){var a=n(1702),r=n(7293),c=n(614),i=n(648),o=n(5005),s=n(2788),l=function(){},u=[],f=o("Reflect","construct"),m=/^\s*(?:class|function)\b/,p=a(m.exec),d=!m.exec(l),g=function(e){if(!c(e))return!1;try{return f(l,u,e),!0}catch(t){return!1}};e.exports=!f||r((function(){var e;return g(g.call)||!g(Object)||!g((function(){e=!0}))||e}))?function(e){if(!c(e))return!1;switch(i(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return d||!!p(m,s(e))}:g},30:function(e,t,n){var a,r=n(9670),c=n(6048),i=n(748),o=n(3501),s=n(490),l=n(317),u=n(6200),f=u("IE_PROTO"),m=function(){},p=function(e){return"<script>"+e+"</"+"script>"},d=function(e){e.write(p("")),e.close();var t=e.parentWindow.Object;return e=null,t},g=function(){try{a=new ActiveXObject("htmlfile")}catch(r){}var e,t;g="undefined"!=typeof document?document.domain&&a?d(a):((t=l("iframe")).style.display="none",s.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(p("document.F=Object")),e.close(),e.F):d(a);for(var n=i.length;n--;)delete g.prototype[i[n]];return g()};o[f]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(m.prototype=r(e),n=new m,m.prototype=null,n[f]=e):n=g(),void 0===t?n:c(n,t)}},6048:function(e,t,n){var a=n(9781),r=n(3070),c=n(9670),i=n(5656),o=n(1956);e.exports=a?Object.defineProperties:function(e,t){c(e);for(var n,a=i(t),s=o(t),l=s.length,u=0;l>u;)r.f(e,n=s[u++],a[n]);return e}},1956:function(e,t,n){var a=n(6324),r=n(748);e.exports=Object.keys||function(e){return a(e,r)}},4944:function(e,t,n){"use strict";var a=n(2109),r=n(6790),c=n(7908),i=n(6244),o=n(9303),s=n(5417);a({target:"Array",proto:!0},{flat:function(){var e=arguments.length?arguments[0]:void 0,t=c(this),n=i(t),a=s(t,0);return a.length=r(a,t,t,n,0,void 0===e?1:o(e)),a}})},3792:function(e,t,n){n(1223)("flat")},8741:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var a=n(7294),r=n(5444),c=n(8747),i=n.n(c),o=n(3750),s=n(3201),l=n(5078),u=n(5302),f=n(5146),m=n(6125),p=function(){var e=(0,l.If)(),t=e[0],c=e[1],p=(0,a.useState)(!1),d=p[0],g=p[1],v=(0,a.useState)(!1),h=v[0],b=v[1],k=(0,a.useState)(),y=k[0],w=k[1],E=(0,a.useState)("moon"),x=E[0],N=E[1],C=function(){document.body.classList.toggle("dark-theme"),c("default"===t?"dark":"default"),N("moon"===x?"sun":"moon")};(0,a.useEffect)((function(){var e=document.body.classList.contains("dark-theme");c("default"===t?"dark":"default"),e&&(N("sun"),c("dark"));var n=(0,f.ej)("mylanguage");n||(n=navigator.language.substr(0,2)),w(n),i()(document).click((function(e){i()(e.target).closest(".flags").length?b(!0):b(!1)}))}),[]);var O=function(e){console.log(e),(0,f.d8)("mylanguage",e),w(e),b(!1)},S=a.createElement(m.S,{width:25,src:"../images/isoflag/kr.png",alt:"Korean",__imageData:n(9347)}),_=a.createElement(m.S,{width:25,src:"../images/isoflag/us.png",alt:"English",__imageData:n(1182)}),j=a.createElement(m.S,{className:"flagimg",width:25,src:"../images/isoflag/kr.png",alt:"Korean",__imageData:n(9347)}),A=a.createElement(m.S,{className:"flagimg",width:25,src:"../images/isoflag/us.png",alt:"English",__imageData:n(1182)});return a.createElement(a.Fragment,null,a.createElement("nav",null,a.createElement("div",{className:"nav-center"},a.createElement("div",{className:"nav-header"},a.createElement(u.UE,{to:"/"},a.createElement("span",{style:{fontFamily:"Yeseva One",color:"white",fontSize:30}},"Young")),a.createElement("button",{className:"nav-btn",onClick:function(){return g(!d)}},a.createElement(o.X_s,null))),a.createElement("div",{style:{position:"relative"},className:d?"nav-links show-links":"nav-links"},a.createElement(u.UE,{to:"/",className:"nav-link",activeClassName:"active-link",onClick:function(){return g(!1)}},"home"),a.createElement(u.UE,{to:"/works",className:"nav-link",activeClassName:"active-link",onClick:function(){return g(!1)}},"works"),a.createElement(u.UE,{to:"/interests",className:"nav-link",activeClassName:"active-link",onClick:function(){return g(!1)}},"interests"),a.createElement(u.UE,{to:"/about",className:"nav-link",activeClassName:"active-link",onClick:function(){return g(!1)}},"about"),a.createElement("div",{style:{marginTop:5},className:"nav-link theme-link shrink"},"moon"===x?a.createElement(s.TLr,{onClick:C}):a.createElement(s.Mei,{onClick:C})),a.createElement("div",{className:"nav-link theme-link shrink"},a.createElement("div",{className:"flags",onClick:function(){b(!h)}},"en"===y?_:S))))),h&&a.createElement("div",{id:"dvLang"},a.createElement(r.Link,{to:"/en"+window.location.pathname.replace("/en",""),hrefLang:"en",onClick:function(){return O("en")}},A,a.createElement("span",null,"English")),a.createElement(r.Link,{to:""+window.location.pathname.replace("/en",""),hrefLang:"ko",onClick:function(){return O("ko")}},j,a.createElement("span",null,"한국어"))))},d=function(){return a.createElement("footer",{className:"page-footer"},a.createElement("p",null,"© ",(new Date).getFullYear()," ",a.createElement("span",null,"SimplyRecipes"),". Built with"," ",a.createElement("a",{href:"https://www.gatsbyjs.com/"},"Gatsby")))},g=n(5824),v=n(7669),h=function(e){var t=e.children;return a.createElement("div",{style:{position:"relative"}},a.createElement(g.f,{theme:v.Z},a.createElement(p,null),t,a.createElement(d,null)))}},2248:function(e,t,n){"use strict";var a=n(7294),r=n(5414);t.Z=function(e){var t=e.title,n=e.description;return a.createElement(r.q,{htmlAttributes:{lang:"en"},title:t+"}",meta:[{name:"description",content:n}]},a.createElement("meta",{"http-equiv":"Content-Security-Policy",content:"upgrade-insecure-requests"}))}},1182:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/ykn9080.github.io/static/501d519cf168896c91ee3fc7b5081945/27cc7/us.png","srcSet":"/ykn9080.github.io/static/501d519cf168896c91ee3fc7b5081945/120b9/us.png 6w,\\n/ykn9080.github.io/static/501d519cf168896c91ee3fc7b5081945/ef52a/us.png 13w,\\n/ykn9080.github.io/static/501d519cf168896c91ee3fc7b5081945/27cc7/us.png 25w","sizes":"(min-width: 25px) 25px, 100vw"},"sources":[{"srcSet":"/ykn9080.github.io/static/501d519cf168896c91ee3fc7b5081945/0c9a1/us.webp 6w,\\n/ykn9080.github.io/static/501d519cf168896c91ee3fc7b5081945/17955/us.webp 13w,\\n/ykn9080.github.io/static/501d519cf168896c91ee3fc7b5081945/0e9e3/us.webp 25w","type":"image/webp","sizes":"(min-width: 25px) 25px, 100vw"}]},"width":25,"height":19}')},9347:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/ykn9080.github.io/static/2263b72f99956d8d057af083f52709a5/27cc7/kr.png","srcSet":"/ykn9080.github.io/static/2263b72f99956d8d057af083f52709a5/120b9/kr.png 6w,\\n/ykn9080.github.io/static/2263b72f99956d8d057af083f52709a5/ef52a/kr.png 13w,\\n/ykn9080.github.io/static/2263b72f99956d8d057af083f52709a5/27cc7/kr.png 25w","sizes":"(min-width: 25px) 25px, 100vw"},"sources":[{"srcSet":"/ykn9080.github.io/static/2263b72f99956d8d057af083f52709a5/0c9a1/kr.webp 6w,\\n/ykn9080.github.io/static/2263b72f99956d8d057af083f52709a5/17955/kr.webp 13w,\\n/ykn9080.github.io/static/2263b72f99956d8d057af083f52709a5/0e9e3/kr.webp 25w","type":"image/webp","sizes":"(min-width: 25px) 25px, 100vw"}]},"width":25,"height":19}')}}]);
//# sourceMappingURL=commons-7dd47a78986114d8606c.js.map