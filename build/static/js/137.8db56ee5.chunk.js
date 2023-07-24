(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[137],{2403:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return h}));var n=a(839),i=a(39),r=a(0),s=a.n(r),l=[{title:"Dashboard",TabName:[{title:"Dashboard",permission:["View"]}]},{title:"Accounts",TabName:[{title:"Create Account",permission:["View","Create","Edit","Delete"]},{title:"Client Account",permission:["View","Create","Edit","Delete"]},{title:"Accountant Account",permission:["View","Create","Edit","Delete"]}]},{title:"Panel Master",TabName:[{title:"Panel Master",permission:["View","Create","Edit","Delete"]},{title:"Client Access",permission:["View","Create","Edit","Delete"]},{title:"Supplier Access",permission:["View","Create","Edit","Delete"]},{title:"Account Access",permission:["View","Create","Edit","Delete"]}]},{title:"Product",TabName:[{title:"Product Dashboard",permission:["View","Create","Edit","Delete"]},{title:"Product list",permission:["View","Create","Edit","Delete"]},{title:"Product type",permission:["View","Create","Edit","Delete"]},{title:"Add Product ",permission:["View","Create","Edit","Delete"]},{title:"Assign to client ",permission:["View","Create","Edit","Delete"]},{title:"Rate Master",permission:["View","Create","Edit","Delete"]},{title:"Inventory",permission:["View","Create","Edit","Delete"]},{title:"service master",permission:["View","Create","Edit","Delete"]}]},{title:"Tranaction",TabName:[{title:"Transaction Dashboard",permission:["View","Create","Edit","Delete"]},{title:"Place Order",permission:["View","Create","Edit","Delete"]},{title:"Edit Order",permission:["View","Create","Edit","Delete"]},{title:"Order Raise List ",permission:["View","Create","Edit","Delete"]},{title:"Order Received List",permission:["View","Create","Edit","Delete"]},{title:"Completed Order List ",permission:["View","Create","Edit","Delete"]}]},{title:"Billing Dashboard",TabName:[{title:"Billing Dashboard",permission:["View","Create","Edit","Delete"]},{title:"Purchase Order",permission:["View","Create","Edit","Delete"]},{title:"Edit Order",permission:["View","Create","Edit","Delete"]},{title:"Bills ",permission:["View","Create","Edit","Delete"]},{title:"Invoice Generation",permission:["View","Create","Edit","Delete"]},{title:"Invoices ",permission:["View","Create","Edit","Delete"]},{title:"Payment Status ",permission:["View","Create","Edit","Delete"]},{title:"Payment completed ",permission:["View","Create","Edit","Delete"]}]},{title:"Budget",TabName:[{title:"Budget List",permission:["View","Create","Edit","Delete"]},{title:"Budget Assignment",permission:["View","Create","Edit","Delete"]}]}],o=(a(45),a(819)),c=a(820),m=a(821),d=a(195),u=a(838),p=a(837),f=a(834),b=a(832),E=a(843),v=a.n(E);function g(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),a=t[0],E=t[1],g=Object(r.useState)(""),h=Object(i.a)(g,2),y=h[0],N=h[1],O=Object(r.useState)([]),j=Object(i.a)(O,2),w=j[0],C=j[1];Object(r.useEffect)((function(){console.log(w)}),[w]);return s.a.createElement(s.a.Fragment,null,s.a.createElement(o.a,{className:""},s.a.createElement(c.a,{xl:12},s.a.createElement(m.a,null,s.a.createElement("div",{className:"container"}),s.a.createElement("div",{className:"container py-2"},s.a.createElement("div",{className:"d-flex justify-content-end"},s.a.createElement("a",{onClick:function(){return navigate("/m/role")},style:{color:"blue",cursor:"pointer"}},s.a.createElement(d.a,{color:"primary"},"Back")))),s.a.createElement(u.a,{onSubmit:function(e){e.preventDefault();var t=new FormData;t.set("user_id",1),t.set("role_name",y),t.set("description",a),t.set("selectedarray",JSON.stringify(w)),b.a.post("/addroles",t).then((function(e){console.log(e),v()("Success","Role Created"),C(""),E(""),N("");var t,a=document.getElementsByName("check"),i=Object(n.a)(a);try{for(i.s();!(t=i.n()).done;){t.value.checked=!1}}catch(r){i.e(r)}finally{i.f()}})).catch((function(e){console.log(e)}))}},s.a.createElement("div",{className:"container mt-5"},s.a.createElement(o.a,{className:"mb-3 container"},s.a.createElement(c.a,null,s.a.createElement(p.a,null,"Enter Role *"),s.a.createElement(f.a,{required:!0,value:y,onChange:function(e){return N(e.target.value)},type:"text",placeholder:"Enter Role",className:"form-control"})),s.a.createElement(c.a,null,s.a.createElement(p.a,null,"Enter Role Description * "),s.a.createElement(f.a,{required:!0,value:a,onChange:function(e){return E(e.target.value)},type:"text",placeholder:"Enter Role Desc.."})))),s.a.createElement("section",{className:"mt-5 container"},s.a.createElement(o.a,{className:"gy-0 container"},l&&(null===l||void 0===l?void 0:l.map((function(e,t){var a;return s.a.createElement(c.a,{key:t,style:{borderRadius:"12px",height:"340px"},className:"customcol gy-0 mb-2 ",lg:"12",md:"12",sm:"12"},s.a.createElement(o.a,{style:{lineHeight:"44px",borderRadius:"6px",background:"#f7f7f8"},className:"roleheading"},s.a.createElement(c.a,{className:"gy-2",lg:"4",sm:"4",md:"4"},s.a.createElement("div",{className:"align-item-center"},s.a.createElement("span",{className:"mx-3 gy-0"}," ",null===e||void 0===e?void 0:e.title))),s.a.createElement(c.a,{className:"gy-2"},s.a.createElement("div",{className:"d-flex justify-content-center"},s.a.createElement("span",{className:"mx-3"}," View"))),s.a.createElement(c.a,{className:"gy-2"},s.a.createElement("div",{className:"d-flex justify-content-center"},s.a.createElement("span",{className:"mx-3"}," Create"))),s.a.createElement(c.a,{className:"gy-2"},s.a.createElement("div",{className:"d-flex justify-content-center"},s.a.createElement("span",{className:"mx-3"}," Edit"))),s.a.createElement(c.a,{className:"gy-2"},s.a.createElement("div",{className:"d-flex justify-content-center"},s.a.createElement("span",{className:"mx-3"}," Delete")))),s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"gy-2 mt-2"},null===e||void 0===e||null===(a=e.TabName)||void 0===a?void 0:a.map((function(e,t){var a;return s.a.createElement(s.a.Fragment,null,s.a.createElement(o.a,{key:t,className:""},s.a.createElement(c.a,{lg:"4",sm:"4",md:"4"},s.a.createElement("h6",{className:"mt-1"}," ",null===e||void 0===e?void 0:e.title)),null===e||void 0===e||null===(a=e.permission)||void 0===a?void 0:a.map((function(t,a){return s.a.createElement(c.a,{key:a,lg:"2",md:"2",sm:"2"},s.a.createElement("div",{className:"d-flex justify-content-center"},s.a.createElement("input",{name:"check",onClick:function(a){!function(e,t,a,n,i){if(t){w.map((function(e,t){if((null===e||void 0===e?void 0:e.pagename)===n){if(w[t].permission.includes(a));else w[t].permission.push(a)}else{var i=w.find((function(e,t){return e.pagename===n}));if(!1===((null===i||void 0===i?void 0:i.pagename)===n)){var r=w.concat({pagename:n,permission:[a]});C(r)}}}));if(w.length<1){var r=w.concat({pagename:n,permission:[a]});C(r)}}else null===w||void 0===w||w.map((function(e,t){var i=null===e||void 0===e?void 0:e.pagename;n===i&&(null===e||void 0===e||e.permission.splice(null===e||void 0===e?void 0:e.permission.indexOf(a),1)),0===(null===e||void 0===e?void 0:e.permission.length)&&w.splice(t,1)}))}(a.target.value,a.target.checked,t,e.title)},style:{height:"19px",width:"26px"},type:"checkbox"})))}))))})))))})))),s.a.createElement(o.a,null,s.a.createElement(c.a,null,s.a.createElement("div",{className:"d-flex justify-content-center mb-2"},s.a.createElement(d.a,{type:"submit",color:"primary"},"Submit"))))))))))}function h(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),a=(t[0],t[1],Object(r.useState)("")),n=Object(i.a)(a,2),l=(n[0],n[1],Object(r.useState)([])),o=Object(i.a)(l,2);o[0],o[1];Object(r.useEffect)((function(){}),[]);return s.a.createElement(s.a.Fragment,null,s.a.createElement("section",null,s.a.createElement(g,null)))}},832:function(e,t,a){"use strict";var n=a(45),i=a.n(n).a.create({baseURL:"https://invoice-o.com/Infinity/api/ApiCommonController"});t.a=i},834:function(e,t,a){"use strict";var n=a(6),i=a(7),r=a(16),s=a(18),l=a(0),o=a.n(l),c=a(1),m=a.n(c),d=a(5),u=a.n(d),p=a(4),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},E=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.focus=a.focus.bind(Object(r.a)(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.type,s=e.bsSize,l=e.valid,c=e.invalid,m=e.tag,d=e.addon,b=e.plaintext,E=e.innerRef,v=Object(i.a)(e,f),g=["radio","checkbox"].indexOf(r)>-1,h=new RegExp("\\D","g"),y=m||("select"===r||"textarea"===r?r:"input"),N="form-control";b?(N+="-plaintext",y=m||"input"):"file"===r?N+="-file":"range"===r?N+="-range":g&&(N=d?null:"form-check-input"),v.size&&h.test(v.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),s=v.size,delete v.size);var O=Object(p.mapToCssModules)(u()(t,c&&"is-invalid",l&&"is-valid",!!s&&"form-control-"+s,N),a);return("input"===y||m&&"function"===typeof m)&&(v.type=r),v.children&&!b&&"select"!==r&&"string"===typeof y&&"select"!==y&&(Object(p.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete v.children),o.a.createElement(y,Object(n.a)({},v,{ref:E,className:O,"aria-invalid":c}))},t}(o.a.Component);E.propTypes=b,E.defaultProps={type:"text"},t.a=E},837:function(e,t,a){"use strict";var n=a(6),i=a(7),r=a(0),s=a.n(r),l=a(1),o=a.n(l),c=a(5),m=a.n(c),d=a(4),u=["className","cssModule","hidden","widths","tag","check","size","for"],p=o.a.oneOfType([o.a.number,o.a.string]),f=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:p,order:p,offset:p})]),b={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:d.tagPropType,className:o.a.string,cssModule:o.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:o.a.array},E={tag:"label",widths:["xs","sm","md","lg","xl"]},v=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},g=function(e){var t=e.className,a=e.cssModule,r=e.hidden,l=e.widths,o=e.tag,c=e.check,p=e.size,f=e.for,b=Object(i.a)(e,u),E=[];l.forEach((function(t,n){var i=e[t];if(delete b[t],i||""===i){var r,s=!n;if(Object(d.isObject)(i)){var l,o=s?"-":"-"+t+"-";r=v(s,t,i.size),E.push(Object(d.mapToCssModules)(m()(((l={})[r]=i.size||""===i.size,l["order"+o+i.order]=i.order||0===i.order,l["offset"+o+i.offset]=i.offset||0===i.offset,l))),a)}else r=v(s,t,i),E.push(r)}}));var g=Object(d.mapToCssModules)(m()(t,!!r&&"sr-only",!!c&&"form-check-label",!!p&&"col-form-label-"+p,E,!!E.length&&"col-form-label"),a);return s.a.createElement(o,Object(n.a)({htmlFor:f},b,{className:g}))};g.propTypes=b,g.defaultProps=E,t.a=g},838:function(e,t,a){"use strict";var n=a(6),i=a(7),r=a(16),s=a(18),l=a(0),o=a.n(l),c=a(1),m=a.n(c),d=a(5),u=a.n(d),p=a(4),f=["className","cssModule","inline","tag","innerRef"],b={children:m.a.node,inline:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},E=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.submit=a.submit.bind(Object(r.a)(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.inline,s=e.tag,l=e.innerRef,c=Object(i.a)(e,f),m=Object(p.mapToCssModules)(u()(t,!!r&&"form-inline"),a);return o.a.createElement(s,Object(n.a)({},c,{ref:l,className:m}))},t}(l.Component);E.propTypes=b,E.defaultProps={tag:"form"},t.a=E},839:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(104);function i(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,r,s=!0,l=!1;return{s:function(){i=e[Symbol.iterator]()},n:function(){var e=i.next();return s=e.done,e},e:function(e){l=!0,r=e},f:function(){try{s||null==i.return||i.return()}finally{if(l)throw r}}}}}}]);
//# sourceMappingURL=137.8db56ee5.chunk.js.map