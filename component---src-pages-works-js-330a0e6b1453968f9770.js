"use strict";(self.webpackChunkyoungkinam_s_homepage_madeof_gatsby=self.webpackChunkyoungkinam_s_homepage_madeof_gatsby||[]).push([[137],{4577:function(e,t,a){var n=a(7294),l=a(5302);t.Z=function(e){var t,a=e.location,r=(null==a||null===(t=a.pathname)||void 0===t?void 0:t.split("/"))||[],m=r.length-1;""===r[m]&&r.splice(m,1);var o="",c="";return n.createElement("ul",{className:"breadcrumbs"},r.map((function(e,t){if(!(["ko","en","gatsbymyhome"].indexOf(e)>-1))return""===e?(o="Home",c="/"):(o=""+e,c=""+c+e+"/"),t===r.length-1?n.createElement("li",null,o):n.createElement("li",null,n.createElement(l.UE,{to:c,key:e},o))})))}},3518:function(e,t,a){a.r(t);var n=a(7294),l=a(8741),r=a(2248),m=a(4577),o=a(1496),c=a(5146),i=a(5302),u=a(9785);t.default=function(e){var t=e.data,a=e.location,s=(0,u.Z)(),f=t.allMdx.nodes,d=f.map((function(e){return{title:e.frontmatter.title,slug:e.frontmatter.slug}}));return n.createElement(l.Z,null,n.createElement(r.Z,{title:"Work List"}),n.createElement(m.Z,{location:a}),n.createElement("main",null,n.createElement("header",null,n.createElement("h1",null,s.formatMessage({id:"work-head"})),n.createElement("p",null," ",s.formatMessage({id:"work-sub"}))),n.createElement("section",{className:"bodycontent"},f.map((function(e){return n.createElement("div",{className:"ImgContainer ImgLarge"},n.createElement(i.UE,{to:"/works/"+e.frontmatter.slug,key:e.title,state:{list:d}},n.createElement("h2",null,e.frontmatter.title),n.createElement("div",{className:"Img2div"},n.createElement(o.Z,{className:"Img1",fluid:e.frontmatter.thumb.childImageSharp.fluid})),n.createElement("p",{title:e.frontmatter.excerpt},(0,c.fP)(e.frontmatter.excerpt,80,""," ..."))))})))))}}}]);
//# sourceMappingURL=component---src-pages-works-js-330a0e6b1453968f9770.js.map