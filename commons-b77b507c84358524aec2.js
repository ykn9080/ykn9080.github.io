(self.webpackChunkyoungkinam_s_homepage_madeof_gatsby=self.webpackChunkyoungkinam_s_homepage_madeof_gatsby||[]).push([[351],{1046:function(e,t,n){"use strict";n.d(t,{w_:function(){return s}});var a=n(7294),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},c=a.createContext&&a.createContext(r),i=function(){return i=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},i.apply(this,arguments)},l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};function o(e){return e&&e.map((function(e,t){return a.createElement(e.tag,i({key:t},e.attr),o(e.child))}))}function s(e){return function(t){return a.createElement(u,i({attr:i({},e.attr)},t),o(e.child))}}function u(e){var t=function(t){var n,r=e.attr,c=e.size,o=e.title,s=l(e,["attr","size","title"]),u=c||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),a.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,s,{className:n,style:i(i({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),o&&a.createElement("title",null,o),e.children)};return void 0!==c?a.createElement(c.Consumer,null,(function(e){return t(e)})):t(r)}},1223:function(e,t,n){var a=n(5112),r=n(30),c=n(3070),i=a("unscopables"),l=Array.prototype;null==l[i]&&c.f(l,i,{configurable:!0,value:r(null)}),e.exports=function(e){l[i][e]=!0}},7475:function(e,t,n){var a=n(7854),r=n(3157),c=n(4411),i=n(111),l=n(5112)("species"),o=a.Array;e.exports=function(e){var t;return r(e)&&(t=e.constructor,(c(t)&&(t===o||r(t.prototype))||i(t)&&null===(t=t[l]))&&(t=void 0)),void 0===t?o:t}},5417:function(e,t,n){var a=n(7475);e.exports=function(e,t){return new(a(e))(0===t?0:t)}},6790:function(e,t,n){"use strict";var a=n(7854),r=n(3157),c=n(6244),i=n(9974),l=a.TypeError,o=function(e,t,n,a,s,u,f,m){for(var d,p,v=s,g=0,E=!!f&&i(f,m);g<a;){if(g in n){if(d=E?E(n[g],g,t):n[g],u>0&&r(d))p=c(d),v=o(e,t,d,p,v,u-1)-1;else{if(v>=9007199254740991)throw l("Exceed the acceptable array length");e[v]=d}v++}g++}return v};e.exports=o},490:function(e,t,n){var a=n(5005);e.exports=a("document","documentElement")},3157:function(e,t,n){var a=n(4326);e.exports=Array.isArray||function(e){return"Array"==a(e)}},4411:function(e,t,n){var a=n(1702),r=n(7293),c=n(614),i=n(648),l=n(5005),o=n(2788),s=function(){},u=[],f=l("Reflect","construct"),m=/^\s*(?:class|function)\b/,d=a(m.exec),p=!m.exec(s),v=function(e){if(!c(e))return!1;try{return f(s,u,e),!0}catch(t){return!1}};e.exports=!f||r((function(){var e;return v(v.call)||!v(Object)||!v((function(){e=!0}))||e}))?function(e){if(!c(e))return!1;switch(i(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return p||!!d(m,o(e))}:v},30:function(e,t,n){var a,r=n(9670),c=n(6048),i=n(748),l=n(3501),o=n(490),s=n(317),u=n(6200),f=u("IE_PROTO"),m=function(){},d=function(e){return"<script>"+e+"</"+"script>"},p=function(e){e.write(d("")),e.close();var t=e.parentWindow.Object;return e=null,t},v=function(){try{a=new ActiveXObject("htmlfile")}catch(r){}var e,t;v="undefined"!=typeof document?document.domain&&a?p(a):((t=s("iframe")).style.display="none",o.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(d("document.F=Object")),e.close(),e.F):p(a);for(var n=i.length;n--;)delete v.prototype[i[n]];return v()};l[f]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(m.prototype=r(e),n=new m,m.prototype=null,n[f]=e):n=v(),void 0===t?n:c(n,t)}},6048:function(e,t,n){var a=n(9781),r=n(3070),c=n(9670),i=n(5656),l=n(1956);e.exports=a?Object.defineProperties:function(e,t){c(e);for(var n,a=i(t),o=l(t),s=o.length,u=0;s>u;)r.f(e,n=o[u++],a[n]);return e}},1956:function(e,t,n){var a=n(6324),r=n(748);e.exports=Object.keys||function(e){return a(e,r)}},4944:function(e,t,n){"use strict";var a=n(2109),r=n(6790),c=n(7908),i=n(6244),l=n(9303),o=n(5417);a({target:"Array",proto:!0},{flat:function(){var e=arguments.length?arguments[0]:void 0,t=c(this),n=i(t),a=o(t,0);return a.length=r(a,t,t,n,0,void 0===e?1:l(e)),a}})},3792:function(e,t,n){n(1223)("flat")},8741:function(e,t,n){"use strict";n.d(t,{Z:function(){return k}});var a=n(7294),r=n(5444),c=n(8747),i=n.n(c),l=n(3750),o=n(3201),s=n(5078),u=n(5302),f=n(5146),m=n(6125),d=function(){var e=(0,s.If)(),t=e[0],c=e[1],d=(0,a.useState)(!1),p=d[0],v=d[1],g=(0,a.useState)(!1),E=g[0],k=g[1],h=(0,a.useState)(),b=h[0],w=h[1],y=(0,a.useState)("moon"),C=y[0],N=y[1],x=function(){document.body.classList.toggle("dark-theme"),c("default"===t?"dark":"default"),N("moon"===C?"sun":"moon")};(0,a.useEffect)((function(){var e=document.body.classList.contains("dark-theme");c("default"===t?"dark":"default"),e&&(N("sun"),c("dark"));var n=(0,f.ej)("mylanguage");n||(n=navigator.language.substr(0,2)),w(n),i()(document).click((function(e){i()(e.target).closest(".flags").length?k(!0):k(!1)}))}),[]);var O=function(e){console.log(e),(0,f.d8)("mylanguage",e),w(e),k(!1)},S=a.createElement(m.S,{width:25,src:"../images/isoflag/kr.png",alt:"Korean",__imageData:n(9347)}),_=a.createElement(m.S,{width:25,src:"../images/isoflag/us.png",alt:"English",__imageData:n(1182)}),j=a.createElement(m.S,{className:"flagimg",width:25,src:"../images/isoflag/kr.png",alt:"Korean",__imageData:n(9347)}),z=a.createElement(m.S,{className:"flagimg",width:25,src:"../images/isoflag/us.png",alt:"English",__imageData:n(1182)});return a.createElement(a.Fragment,null,a.createElement("nav",null,a.createElement("div",{className:"nav-center"},a.createElement("div",{className:"nav-header"},a.createElement(u.UE,{to:"/"},a.createElement("span",{style:{fontFamily:"Yeseva One",color:"white",fontSize:30}},"Young")),a.createElement("button",{className:"nav-btn",onClick:function(){return v(!p)}},a.createElement(l.X_s,null))),a.createElement("div",{style:{position:"relative"},className:p?"nav-links show-links":"nav-links"},a.createElement(u.UE,{to:"/",className:"nav-link",activeClassName:"active-link",onClick:function(){return v(!1)}},"home"),a.createElement(u.UE,{to:"/works",className:"nav-link",activeClassName:"active-link",onClick:function(){return v(!1)}},"works"),a.createElement(u.UE,{to:"/interests",className:"nav-link",activeClassName:"active-link",onClick:function(){return v(!1)}},"interests"),a.createElement(u.UE,{to:"/about",className:"nav-link",activeClassName:"active-link",onClick:function(){return v(!1)}},"about"),a.createElement("div",{style:{marginTop:5},className:"nav-link theme-link shrink"},"moon"===C?a.createElement(o.TLr,{onClick:x}):a.createElement(o.Mei,{onClick:x})),a.createElement("div",{className:"nav-link theme-link shrink"},a.createElement("div",{className:"flags",onClick:function(){k(!E)}},"en"===b?_:S))))),E&&a.createElement("div",{id:"dvLang"},a.createElement(r.Link,{to:"/en"+window.location.pathname.replace("/en",""),hrefLang:"en",onClick:function(){return O("en")}},z,a.createElement("span",null,"English")),a.createElement(r.Link,{to:""+window.location.pathname.replace("/en",""),hrefLang:"ko",onClick:function(){return O("ko")}},j,a.createElement("span",null,"한국어"))))},p=n(9785),v=function(){var e=(0,p.Z)(),t=(0,a.useState)(!1),n=(t[0],t[1]);return a.createElement("footer",{class:"footer-distributed"},a.createElement("div",{class:"footer-left"},a.createElement(u.UE,{to:"/"},a.createElement("span",{style:{fontFamily:"Yeseva One",color:"white",fontSize:30}},"Young")),a.createElement("p",{class:"footer-links"},a.createElement(u.UE,{to:"/",className:"nav-link",activeClassName:"active-link",onClick:function(){return n(!1)}},"home"),a.createElement(u.UE,{to:"/works",className:"nav-link",activeClassName:"active-link",onClick:function(){return n(!1)}},"works"),a.createElement(u.UE,{to:"/interests",className:"nav-link",activeClassName:"active-link",onClick:function(){return n(!1)}},"interests"),a.createElement(u.UE,{to:"/about",className:"nav-link",activeClassName:"active-link",onClick:function(){return n(!1)}},"about"))),a.createElement("div",{class:"footer-center"},a.createElement("div",null,a.createElement("i",{class:"fa fa-map-marker"}),a.createElement("p",null,e.formatMessage({id:"address"}))),a.createElement("div",null,a.createElement("i",{class:"fa fa-phone"}),a.createElement("p",null," ",e.formatMessage({id:"phone"}))),a.createElement("div",null,a.createElement("i",{class:"fa fa-envelope"}),a.createElement("p",null,a.createElement("a",{href:"mailto:ykn9080@empal.com"},"ykn9080@empal.com")))),a.createElement("div",{class:"footer-right"},a.createElement("p",{class:"footer-company-about"},a.createElement("span",null," ",e.formatMessage({id:"about-me"})),e.formatMessage({id:"about-me-content"})),a.createElement("div",{class:"footer-icons"},a.createElement("a",{href:"#"},a.createElement("i",{class:"fa fa-facebook"})),a.createElement("a",{href:"#"},a.createElement("i",{class:"fa fa-twitter"})),a.createElement("a",{href:"#"},a.createElement("i",{class:"fa fa-linkedin"})),a.createElement("a",{href:"#"},a.createElement("i",{class:"fa fa-github"})))))},g=n(5824),E=n(7669),k=function(e){var t=e.children;return a.createElement("div",{style:{position:"relative"}},a.createElement(g.f,{theme:E.Z},a.createElement(d,null),t,a.createElement(v,null)))}},2248:function(e,t,n){"use strict";var a=n(7294),r=n(5414),c=n(5444);t.Z=function(e){var t=e.title,n=e.description,i=(0,c.useStaticQuery)("2468095761").site,l=n||i.siteMetadata.description;return a.createElement(r.q,{htmlAttributes:{lang:"en"},title:t+" | "+i.siteMetadata.title,meta:[{name:"description",content:l}]},a.createElement("meta",{"http-equiv":"Content-Security-Policy",content:"upgrade-insecure-requests"}))}},1182:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/501d519cf168896c91ee3fc7b5081945/27cc7/us.png","srcSet":"/static/501d519cf168896c91ee3fc7b5081945/120b9/us.png 6w,\\n/static/501d519cf168896c91ee3fc7b5081945/ef52a/us.png 13w,\\n/static/501d519cf168896c91ee3fc7b5081945/27cc7/us.png 25w","sizes":"(min-width: 25px) 25px, 100vw"},"sources":[{"srcSet":"/static/501d519cf168896c91ee3fc7b5081945/0c9a1/us.webp 6w,\\n/static/501d519cf168896c91ee3fc7b5081945/17955/us.webp 13w,\\n/static/501d519cf168896c91ee3fc7b5081945/0e9e3/us.webp 25w","type":"image/webp","sizes":"(min-width: 25px) 25px, 100vw"}]},"width":25,"height":19}')},9347:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/2263b72f99956d8d057af083f52709a5/27cc7/kr.png","srcSet":"/static/2263b72f99956d8d057af083f52709a5/120b9/kr.png 6w,\\n/static/2263b72f99956d8d057af083f52709a5/ef52a/kr.png 13w,\\n/static/2263b72f99956d8d057af083f52709a5/27cc7/kr.png 25w","sizes":"(min-width: 25px) 25px, 100vw"},"sources":[{"srcSet":"/static/2263b72f99956d8d057af083f52709a5/0c9a1/kr.webp 6w,\\n/static/2263b72f99956d8d057af083f52709a5/17955/kr.webp 13w,\\n/static/2263b72f99956d8d057af083f52709a5/0e9e3/kr.webp 25w","type":"image/webp","sizes":"(min-width: 25px) 25px, 100vw"}]},"width":25,"height":19}')}}]);
//# sourceMappingURL=commons-b77b507c84358524aec2.js.map