(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[108],{1139:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var i=[{title:"Dashboard",TabName:[{title:"Dashboard",permission:["View"]}]},{title:"Accounts",TabName:[{title:"Create Account",permission:["View","Create","Edit","Delete"]},{title:"User List",permission:["View","Create","Edit","Delete"]},{title:"Create Role",permission:["View","Create","Edit","Delete"]},{title:"Role List",permission:["View","Create","Edit","Delete"]}]},{title:"Product",TabName:[{title:"Product List",permission:["View","Create","Edit","Delete"]},{title:"Add Product",permission:["View","Create","Edit","Delete"]},{title:"Type",permission:["View","Create","Edit","Delete"]},{title:"Assign To Client",permission:["View","Create","Edit","Delete"]},{title:"Assigned List",permission:["View","Create","Edit","Delete"]},{title:"Rate Master",permission:["View","Create","Edit","Delete"]},{title:"Inventory",permission:["View","Create","Edit","Delete"]}]},{title:"Brand",TabName:[{title:"Brand List",permission:["View","Create","Edit","Delete"]},{title:"Category List",permission:["View","Create","Edit","Delete"]}]},{title:"Transaction",TabName:[{title:"Place Order",permission:["View","Create","Edit","Delete"]},{title:"Order Raise List",permission:["View","Create","Edit","Delete"]},{title:"Order Received List",permission:["View","Create","Edit","Delete"]},{title:"Completed Order List",permission:["View","Create","Edit","Delete"]}]},{title:"BILLINGS",TabName:[{title:"Purchase Order",permission:["View","Create","Edit","Delete"]},{title:"Bills",permission:["View","Create","Edit","Delete"]},{title:"invoice Generator",permission:["View","Create","Edit","Delete"]},{title:"invoice Re-Generator",permission:["View","Create","Edit","Delete"]},{title:"invoices",permission:["View","Create","Edit","Delete"]},{title:"Payment Status",permission:["View","Create","Edit","Delete"]},{title:"Payment completed",permission:["View","Create","Edit","Delete"]}]},{title:"Budget",TabName:[{title:"Budget List",permission:["View","Create","Edit","Delete"]},{title:"Budget Assignment",permission:["View","Create","Edit","Delete"]}]},{title:"Reports",TabName:[{title:"Date Wise",permission:["View","Create","Edit","Delete"]},{title:"Client Wise",permission:["View","Create","Edit","Delete"]},{title:"Branch Wise",permission:["View","Create","Edit","Delete"]},{title:"Product Wise",permission:["View","Create","Edit","Delete"]}]},{title:"Unique Code",TabName:[{title:"Unique Code",permission:["View","Create","Edit","Delete"]}]},{title:"Logs",TabName:[{title:"Logs",permission:["View","Create","Edit","Delete"]}]}]},1366:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var i=[{pagename:"Dashboard",permission:["parentPermit","View"]},{pagename:"Accounts",permission:["parentPermit"]},{pagename:"Create Account",permission:["View","Create","Edit"]},{pagename:"User List",permission:["View","Edit"]},{pagename:"Client Account",permission:["View","Create","Delete"]},{pagename:"Accountant Account",permission:["View","Create"]},{pagename:"Create Role",permission:["View","Create"]},{pagename:"Role List",permission:["View"]},{pagename:"Product",permission:["parentPermit"]},{pagename:"Product List",permission:["View","Create"]},{pagename:"Add Product",permission:["View","Create"]},{pagename:"Type",permission:["View","Create"]},{pagename:"Assign To Client",permission:["View"]},{pagename:"Rate Master",permission:["View"]}]},2409:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return C}));var i=a(842),n=a(3),r=a(31),l=a(39),s=a(1),o=a.n(s),c=a(820),m=a(821),d=a(822),u=a(197),p=a(840),f=a(838),v=a(835),g=a(1139),b=(a(45),a(833)),E=a(841),h=a.n(E),y=a(1366),w=a(62);function C(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),a=t[0],E=t[1],C=Object(s.useState)(""),N=Object(l.a)(C,2),O=N[0],j=N[1],V=Object(s.useState)([]),x=Object(l.a)(V,2),D=x[0],R=x[1],T=Object(s.useState)(""),k=Object(l.a)(T,2),P=(k[0],k[1]),S=Object(s.useState)(!1),L=Object(l.a)(S,2),z=(L[0],L[1]),A=Object(s.useState)({}),M=Object(l.a)(A,2),B=(M[0],M[1]),U=Object(s.useState)(Object(r.a)(y.a)),F=Object(l.a)(U,2),I=F[0],_=F[1],q=Object(w.h)(),J=Object(w.g)();Object(s.useEffect)((function(){var e=new FormData;e.append("role_name",q.id),b.a.post("/editroleview",e).then((function(e){var t,a,i,n,r,l,s,o,c,m,d;R(null===e||void 0===e||null===(t=e.data)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.permissioninfo),console.log("origional permission",null===e||void 0===e||null===(i=e.data)||void 0===i||null===(n=i.data)||void 0===n?void 0:n.permissioninfo),j(null===e||void 0===e||null===(r=e.data)||void 0===r||null===(l=r.data)||void 0===l||null===(s=l.roleinfo)||void 0===s?void 0:s.role_name),E(null===e||void 0===e||null===(o=e.data)||void 0===o||null===(c=o.data)||void 0===c||null===(m=c.roleinfo)||void 0===m?void 0:m.description),B(null===e||void 0===e||null===(d=e.data)||void 0===d?void 0:d.data)})).catch((function(e){console.log(e)}))}),[]);var W=function(e,t,a,i,l){var s=Object(r.a)(D),o=s.findIndex((function(e){return e.pagename===i}));t?-1!==o?s[o].permission.includes(a)||s[o].permission.push(a):s.push({pagename:i,permission:[a]}):-1!==o&&(s[o].permission=s[o].permission.filter((function(e){return e!==a})),0===s[o].permission.length&&s.splice(o,1)),R(s);var c=I.map((function(e){return e.pagename===i?Object(n.a)(Object(n.a)({},e),{},{permission:s.filter((function(e){return e.pagename===i})).flatMap((function(e){return e.permission}))}):e}));_(c)};return o.a.createElement(o.a.Fragment,null,D&&D.length?o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{className:""},o.a.createElement(m.a,{xl:12},o.a.createElement(d.a,null,o.a.createElement(c.a,null,o.a.createElement(m.a,{className:"m-1"},o.a.createElement("h3",{className:"py-2"},"Update Role")),o.a.createElement(m.a,{className:"m-1"},o.a.createElement(u.a,{className:" btn btn-danger float-right ",onClick:function(){return J.push("/app/Trupee/account/RoleList")}},"Back"))),o.a.createElement("div",{className:"container"}),o.a.createElement(p.a,{onSubmit:function(e){var t,n;e.preventDefault();var r=JSON.parse(localStorage.getItem("userData"));console.log(null===r||void 0===r||null===(t=r.Userinfo)||void 0===t?void 0:t.id);var l=new FormData;l.set("user_id",null===r||void 0===r||null===(n=r.Userinfo)||void 0===n?void 0:n.id),l.set("role_name",O),l.set("description",a),l.set("selectedarray",JSON.stringify(D)),b.a.post("/editrolesubmit",l).then((function(e){console.log(e),h()("Success","Role Updated"),R(""),E(""),j("");var t,a=document.getElementsByName("check"),n=Object(i.a)(a);try{for(n.s();!(t=n.n()).done;){t.value.checked=!1}}catch(r){n.e(r)}finally{n.f()}})).catch((function(e){console.log(e)}))}},o.a.createElement("div",{className:"container mt-2"},o.a.createElement(c.a,{className:"mb-3 container"},o.a.createElement(m.a,null,o.a.createElement(f.a,null,"Existing Role *"),o.a.createElement(v.a,{required:!0,value:O,onChange:function(e){return j(e.target.value)},type:"text",placeholder:"Enter Role",className:"form-control"})),o.a.createElement(m.a,null,o.a.createElement(f.a,null,"Existing Role Description * "),o.a.createElement(v.a,{required:!0,value:a,onChange:function(e){return E(e.target.value)},type:"text",placeholder:"Enter Role Desc.."})))),o.a.createElement("section",{className:"mt-5 container"},o.a.createElement(c.a,{className:"gy-0 container"},g.a&&(null===g.a||void 0===g.a?void 0:g.a.map((function(e,t){var a;return o.a.createElement(m.a,{key:t,style:{borderRadius:"12px",height:"".concat((null===D||void 0===D?void 0:D.some((function(t){return(null===t||void 0===t?void 0:t.pagename)===(null===e||void 0===e?void 0:e.title)&&(null===t||void 0===t?void 0:t.permission.includes("parentPermit"))})))?"340px":"40px")},className:"customcol gy-0 mb-2 ",lg:"12",md:"12",sm:"12"},o.a.createElement(c.a,{style:{lineHeight:"44px",borderRadius:"6px",background:"#f7f7f8"},className:"roleheading"},o.a.createElement(m.a,{className:"gy-2",lg:"4",sm:"4",md:"4"},o.a.createElement("div",{className:"align-item-center"},o.a.createElement("input",{checked:null===D||void 0===D?void 0:D.some((function(t){var a;return(null===t||void 0===t?void 0:t.pagename)===(null===e||void 0===e?void 0:e.title)&&(null===t||void 0===t||null===(a=t.permission)||void 0===a?void 0:a.includes("parentPermit"))})),className:"mt-1",name:"check",id:"head_".concat(null===e||void 0===e?void 0:e.title),onClick:function(a){!function(e,t){z(e),P(t)}(a.target.checked,t),W(a.target.value,a.target.checked,"parentPermit",null===e||void 0===e?void 0:e.title)},style:{height:"19px",width:"26px"},type:"checkbox"}),o.a.createElement("span",{className:"mx-3 gy-0"},null===e||void 0===e?void 0:e.title))),o.a.createElement(m.a,{className:"gy-2"},o.a.createElement("div",{className:"d-flex justify-content-center"},o.a.createElement("span",{className:"mx-3"}," View"))),o.a.createElement(m.a,{className:"gy-2"},o.a.createElement("div",{className:"d-flex justify-content-center"},o.a.createElement("span",{className:"mx-3"}," Create"))),o.a.createElement(m.a,{className:"gy-2"},o.a.createElement("div",{className:"d-flex justify-content-center"},o.a.createElement("span",{className:"mx-3"}," Edit"))),o.a.createElement(m.a,{className:"gy-2"},o.a.createElement("div",{className:"d-flex justify-content-center"},o.a.createElement("span",{className:"mx-3"}," Delete")))),(null===D||void 0===D?void 0:D.some((function(t){return t.pagename===(null===e||void 0===e?void 0:e.title)&&t.permission.includes("parentPermit")})))?o.a.createElement(o.a.Fragment,null,o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"gy-2 mt-2"},null===e||void 0===e||null===(a=e.TabName)||void 0===a?void 0:a.map((function(e,t){var a;return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{key:t,className:""},o.a.createElement(m.a,{lg:"4",sm:"4",md:"4"},o.a.createElement("h6",{className:"mt-1"}," ",null===e||void 0===e?void 0:e.title)),null===e||void 0===e||null===(a=e.permission)||void 0===a?void 0:a.map((function(t,a){var i=null===D||void 0===D?void 0:D.some((function(a){return a.pagename===e.title&&a.permission.includes(t)}));return o.a.createElement(m.a,{key:a,lg:"2",md:"2",sm:"2"},o.a.createElement("div",{className:"d-flex justify-content-center"},o.a.createElement("input",{checked:i,name:"check",id:"item_".concat(t),onClick:function(a){W(a.target.value,a.target.checked,t,e.title)},style:{height:"19px",width:"26px"},type:"checkbox"})))}))))})))))):null)})))),o.a.createElement(c.a,null,o.a.createElement(m.a,null,o.a.createElement("div",{className:"d-flex justify-content-center mb-2"},o.a.createElement(u.a,{type:"submit",style:{cursor:"pointer"},color:"primary"},"Update Permission")))))))))):o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,null,o.a.createElement(m.a,null,o.a.createElement("div",{className:"d-flex justify-content-center align-item-center mt-5"},o.a.createElement("h2",null,"Loading..."))))))}},833:function(e,t,a){"use strict";var i=a(45),n=a.n(i).a.create({baseURL:"https://invoice-o.com/Infinity/api/ApiCommonController"});t.a=n},835:function(e,t,a){"use strict";var i=a(6),n=a(7),r=a(16),l=a(19),s=a(1),o=a.n(s),c=a(2),m=a.n(c),d=a(5),u=a.n(d),p=a(4),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],v={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.focus=a.focus.bind(Object(r.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.type,l=e.bsSize,s=e.valid,c=e.invalid,m=e.tag,d=e.addon,v=e.plaintext,g=e.innerRef,b=Object(n.a)(e,f),E=["radio","checkbox"].indexOf(r)>-1,h=new RegExp("\\D","g"),y=m||("select"===r||"textarea"===r?r:"input"),w="form-control";v?(w+="-plaintext",y=m||"input"):"file"===r?w+="-file":"range"===r?w+="-range":E&&(w=d?null:"form-check-input"),b.size&&h.test(b.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=b.size,delete b.size);var C=Object(p.mapToCssModules)(u()(t,c&&"is-invalid",s&&"is-valid",!!l&&"form-control-"+l,w),a);return("input"===y||m&&"function"===typeof m)&&(b.type=r),b.children&&!v&&"select"!==r&&"string"===typeof y&&"select"!==y&&(Object(p.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),o.a.createElement(y,Object(i.a)({},b,{ref:g,className:C,"aria-invalid":c}))},t}(o.a.Component);g.propTypes=v,g.defaultProps={type:"text"},t.a=g},838:function(e,t,a){"use strict";var i=a(6),n=a(7),r=a(1),l=a.n(r),s=a(2),o=a.n(s),c=a(5),m=a.n(c),d=a(4),u=["className","cssModule","hidden","widths","tag","check","size","for"],p=o.a.oneOfType([o.a.number,o.a.string]),f=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:p,order:p,offset:p})]),v={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:d.tagPropType,className:o.a.string,cssModule:o.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:o.a.array},g={tag:"label",widths:["xs","sm","md","lg","xl"]},b=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},E=function(e){var t=e.className,a=e.cssModule,r=e.hidden,s=e.widths,o=e.tag,c=e.check,p=e.size,f=e.for,v=Object(n.a)(e,u),g=[];s.forEach((function(t,i){var n=e[t];if(delete v[t],n||""===n){var r,l=!i;if(Object(d.isObject)(n)){var s,o=l?"-":"-"+t+"-";r=b(l,t,n.size),g.push(Object(d.mapToCssModules)(m()(((s={})[r]=n.size||""===n.size,s["order"+o+n.order]=n.order||0===n.order,s["offset"+o+n.offset]=n.offset||0===n.offset,s))),a)}else r=b(l,t,n),g.push(r)}}));var E=Object(d.mapToCssModules)(m()(t,!!r&&"sr-only",!!c&&"form-check-label",!!p&&"col-form-label-"+p,g,!!g.length&&"col-form-label"),a);return l.a.createElement(o,Object(i.a)({htmlFor:f},v,{className:E}))};E.propTypes=v,E.defaultProps=g,t.a=E},840:function(e,t,a){"use strict";var i=a(6),n=a(7),r=a(16),l=a(19),s=a(1),o=a.n(s),c=a(2),m=a.n(c),d=a(5),u=a.n(d),p=a(4),f=["className","cssModule","inline","tag","innerRef"],v={children:m.a.node,inline:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.submit=a.submit.bind(Object(r.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.inline,l=e.tag,s=e.innerRef,c=Object(n.a)(e,f),m=Object(p.mapToCssModules)(u()(t,!!r&&"form-inline"),a);return o.a.createElement(l,Object(i.a)({},c,{ref:s,className:m}))},t}(s.Component);g.propTypes=v,g.defaultProps={tag:"form"},t.a=g},842:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var i=a(105);function n(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(i.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,r,l=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return l=e.done,e},e:function(e){s=!0,r=e},f:function(){try{l||null==n.return||n.return()}finally{if(s)throw r}}}}}}]);
//# sourceMappingURL=108.dfd7c840.chunk.js.map