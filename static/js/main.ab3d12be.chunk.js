(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(4),s=c.n(a),l=c(2),i={getEmployees:function(){return fetch("https://randomuser.me/api/?results=10")}},o=c(0);function d(e){var t=e.fluid,c=e.children;return Object(o.jsx)("div",{className:"container".concat(t?"-fluid":""),children:c})}function j(e){var t=e.fluid,c=e.children,n=e.ascending;return Object(o.jsx)("div",{className:"row".concat(t?"-fluid":""),children:r.a.Children.toArray(c).sort((function(e,t){var c,r,a=1;do{a++,c=e.key.charAt(a),r=t.key.charAt(a)}while("string"===typeof c&&"string"===typeof r&&c===r);return n?r.localeCompare(c):c.localeCompare(r)}))})}function b(e){var t=e.children;return Object(o.jsx)("div",{className:"col-lg-4 col-md-6",children:t})}var u=function(e){var t=e.ascending,c=e.sortHandler,n=e.searchHandler;return Object(o.jsxs)("nav",{className:"navbar navbar-dark bg-dark",children:[Object(o.jsx)("div",{className:"navbar-brand",children:"Employee Directory"}),Object(o.jsxs)("form",{className:"form-inline",children:[Object(o.jsxs)("button",{className:"btn btn-outline-success mr-5 px-5 font-weight-bold",type:"button",onClick:c,children:["Sort By Name ",t?Object(o.jsx)("span",{children:"\u25b2"}):Object(o.jsx)("span",{children:"\u25bc"})]}),Object(o.jsx)("input",{className:"form-control",type:"search",placeholder:"Search","aria-label":"Search",onChange:n})]})]})};c(10);var m=function(e){var t=e.employee;return Object(o.jsxs)("div",{className:"card width-18 border-primary",children:[Object(o.jsx)("div",{className:"centered",children:Object(o.jsx)("img",{src:t.picture.large,className:"card-img-top width-90per mt-2",alt:"..."})}),Object(o.jsxs)("div",{className:"card-body bg-grey mx-2 mb-2 mt-1",children:[Object(o.jsxs)("h5",{className:"card-title font-weight-bold",children:[t.name.last,", ",t.name.first]}),Object(o.jsxs)("div",{className:"card-title subTitleStyle",children:["Email: ",Object(o.jsx)("span",{className:"textStyle",children:t.email})]}),Object(o.jsxs)("div",{className:"card-title subTitleStyle",children:["Phone: ",Object(o.jsx)("span",{className:"textStyle",children:t.cell})]}),Object(o.jsxs)("div",{className:"card-title subTitleStyle",children:["Location: ",Object(o.jsxs)("span",{className:"textStyle",children:[t.location.city,", ",t.location.country]})]})]})]})};var h=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)([]),s=Object(l.a)(a,2),h=s[0],O=s[1],f=Object(n.useState)(!1),p=Object(l.a)(f,2),x=p[0],v=p[1];return Object(n.useEffect)((function(){i.getEmployees().then((function(e){return e.json()})).then((function(e){r(e.results),O(e.results)}))}),[]),Object(o.jsxs)("div",{children:[Object(o.jsx)(u,{ascending:x,sortHandler:function(e){e.preventDefault(),v(!x)},searchHandler:function(e){var t=e.target.value.toLowerCase(),n=c.filter((function(e){var c=e.name.last;return(c=c.substring(0,t.length)).toLowerCase()===t?e:null}));O(n)}}),Object(o.jsx)(d,{children:Object(o.jsx)(j,{ascending:x,children:h.map((function(e){return Object(o.jsx)(b,{children:Object(o.jsx)(m,{employee:e})},e.name.last)}))})})]})};c(11);s.a.render(Object(o.jsx)(h,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.ab3d12be.chunk.js.map