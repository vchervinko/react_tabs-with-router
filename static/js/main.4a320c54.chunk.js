(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{16:function(t,e,c){},18:function(t,e,c){"use strict";c.r(e);var s=c(9),a=c.n(s),n=c(4),i=(c(14),c(15),c(16),c(2)),b=(c(0),c(6)),j=c.n(b),r=c(1),l=function(t){var e=t.to,c=t.title;return Object(r.jsx)(n.c,{to:e,className:function(t){var e=t.isActive;return j()("navbar-item",{"is-active":e})},children:c})},d=function(){return Object(r.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"navbar-brand",children:[Object(r.jsx)(l,{to:"/",title:"Home"}),Object(r.jsx)(l,{to:"tabs",title:"Tabs"})]})})})},o=function(){return Object(r.jsx)("h1",{className:"title",children:"Home page"})},x=function(t){var e=t.tabs,c=t.selectedTabId,s=e.find((function(t){return t.id===c}));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"tabs is-boxed",children:Object(r.jsx)("ul",{children:e.map((function(t){return Object(r.jsx)("li",{"data-cy":"Tab",className:j()({"is-active":(null===s||void 0===s?void 0:s.id)===t.id}),children:Object(r.jsx)(n.b,{to:"/tabs/".concat(t.id),children:t.title})})}))})}),Object(r.jsx)("div",{className:"block","data-cy":"TabContent",children:s?s.content:"Please select a tab"})]})},h=function(t){var e=t.tabs,c=Object(i.h)().tabId,s=void 0===c?"":c;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{className:"title",children:"Tabs page"}),Object(r.jsx)(x,{tabs:e,selectedTabId:s})]})},O=function(){return Object(r.jsx)("h1",{className:"title",children:"Page not found"})},m=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],u=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d,{}),Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)(i.d,{children:[Object(r.jsx)(i.b,{path:"/",element:Object(r.jsx)(o,{})}),Object(r.jsx)(i.b,{path:"home",element:Object(r.jsx)(i.a,{to:"/"})}),Object(r.jsxs)(i.b,{path:"tabs",children:[Object(r.jsx)(i.b,{index:!0,element:Object(r.jsx)(h,{tabs:m})}),Object(r.jsx)(i.b,{path:":tabId",element:Object(r.jsx)(h,{tabs:m})})]}),Object(r.jsx)(i.b,{path:"*",element:Object(r.jsx)(O,{})})]})})})]})};a.a.render(Object(r.jsx)(n.a,{children:Object(r.jsx)(u,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.4a320c54.chunk.js.map