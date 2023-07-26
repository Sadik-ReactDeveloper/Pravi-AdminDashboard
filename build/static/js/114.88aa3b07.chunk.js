(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[114],{1131:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var i=[{title:"Dashboard",TabName:[{title:"Dashboard",permission:["View"]}]},{title:"Accounts",TabName:[{title:"Create Account",permission:["View","Create","Edit","Delete"]},{title:"User List",permission:["View","Create","Edit","Delete"]},{title:"Client Account",permission:["View","Create","Edit","Delete"]},{title:"Accountant Account",permission:["View","Create","Edit","Delete"]},{title:"Create Role",permission:["View","Create","Edit","Delete"]},{title:"Role List",permission:["View","Create","Edit","Delete"]}]},{title:"Product",TabName:[{title:"Product List",permission:["View","Create","Edit","Delete"]},{title:"Add Product",permission:["View","Create","Edit","Delete"]},{title:"Type",permission:["View","Create","Edit","Delete"]},{title:"Assign To Client",permission:["View","Create","Edit","Delete"]},{title:"Rate Master",permission:["View","Create","Edit","Delete"]},{title:"Inventory",permission:["View","Create","Edit","Delete"]}]},{title:"Brand",TabName:[{title:"Brand List",permission:["View","Create","Edit","Delete"]}]},{title:"Transaction",TabName:[{title:"Place Order",permission:["View","Create","Edit","Delete"]},{title:"Order Raise List",permission:["View","Create","Edit","Delete"]},{title:"Order Received List",permission:["View","Create","Edit","Delete"]},{title:"Completed Order List",permission:["View","Create","Edit","Delete"]}]},{title:"BILLINGS",TabName:[{title:"Purchase Order",permission:["View","Create","Edit","Delete"]},{title:"Bills",permission:["View","Create","Edit","Delete"]},{title:"invoice Generator",permission:["View","Create","Edit","Delete"]},{title:"invoice Re-Generator",permission:["View","Create","Edit","Delete"]},{title:"invoices",permission:["View","Create","Edit","Delete"]},{title:"Payment Status",permission:["View","Create","Edit","Delete"]},{title:"Payment completed",permission:["View","Create","Edit","Delete"]}]},{title:"Budget",TabName:[{title:"Budget List",permission:["View","Create","Edit","Delete"]},{title:"Budget Assignment",permission:["View","Create","Edit","Delete"]}]},{title:"Reports",TabName:[{title:"Date Wise",permission:["View","Create","Edit","Delete"]},{title:"Client Wise",permission:["View","Create","Edit","Delete"]},{title:"Branch Wise",permission:["View","Create","Edit","Delete"]},{title:"Product Wise",permission:["View","Create","Edit","Delete"]}]},{title:"Unique Code",TabName:[{title:"Unique Code",permission:["View","Create","Edit","Delete"]}]},{title:"Logs",TabName:[{title:"Logs",permission:["View","Create","Edit","Delete"]}]}]},2407:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return y}));var i=a(839),n=a(39),r=a(1),s=a.n(r),l=a(1131),o=(a(45),a(819)),c=a(820),m=a(821),u=a(838),d=a(836),p=a(834),f=a(197),b=a(832),g=a(842),v=a.n(g);function E(){var e=Object(r.useState)(""),t=Object(n.a)(e,2),a=t[0],g=t[1],E=Object(r.useState)(""),h=Object(n.a)(E,2),y=h[0],C=h[1],w=Object(r.useState)([]),O=Object(n.a)(w,2),j=O[0],N=O[1],V=Object(r.useState)(""),D=Object(n.a)(V,2),x=D[0],R=D[1],T=Object(r.useState)(!1),S=Object(n.a)(T,2),k=S[0],P=S[1],z=function(e,t,a,i,n){if(t){j.map((function(e,t){if((null===e||void 0===e?void 0:e.pagename)===i){if(j[t].permission.includes(a));else j[t].permission.push(a)}else{var n=j.find((function(e,t){return e.pagename===i}));if(!1===((null===n||void 0===n?void 0:n.pagename)===i)){var r=j.concat({pagename:i,permission:[a]});N(r)}}}));if(j.length<1){var r=j.concat({pagename:i,permission:[a]});N(r)}}else null===j||void 0===j||j.map((function(e,t){var n=null===e||void 0===e?void 0:e.pagename;i===n&&(null===e||void 0===e||e.permission.splice(null===e||void 0===e?void 0:e.permission.indexOf(a),1)),0===(null===e||void 0===e?void 0:e.permission.length)&&j.splice(t,1)}))};Object(r.useEffect)((function(){console.log(j)}),[j]);return s.a.createElement(s.a.Fragment,null,s.a.createElement(o.a,{className:""},s.a.createElement(c.a,{xl:12},s.a.createElement(m.a,null,s.a.createElement("div",{className:"container"}),s.a.createElement(u.a,{onSubmit:function(e){e.preventDefault();var t=new FormData;t.set("user_id",1),t.set("role_name",y),t.set("description",a),t.set("selectedarray",JSON.stringify(j)),b.a.post("/addroles",t).then((function(e){console.log(e),v()("Success","Role Created"),N(""),g(""),C("");var t,a=document.getElementsByName("check"),n=Object(i.a)(a);try{for(n.s();!(t=n.n()).done;){t.value.checked=!1}}catch(r){n.e(r)}finally{n.f()}})).catch((function(e){console.log(e)}))}},s.a.createElement("div",{className:"container mt-5"},s.a.createElement(o.a,{className:"mb-3 container"},s.a.createElement(c.a,null,s.a.createElement(d.a,null,"Enter Role *"),s.a.createElement(p.a,{required:!0,value:y,onChange:function(e){return C(e.target.value)},type:"text",placeholder:"Enter Role",className:"form-control"})),s.a.createElement(c.a,null,s.a.createElement(d.a,null,"Enter Role Description * "),s.a.createElement(p.a,{required:!0,value:a,onChange:function(e){return g(e.target.value)},type:"text",placeholder:"Enter Role Desc.."})))),s.a.createElement("section",{className:"mt-5 container"},s.a.createElement(o.a,{className:"gy-0 container"},l.a&&(null===l.a||void 0===l.a?void 0:l.a.map((function(e,t){var a;return s.a.createElement(c.a,{key:t,style:{borderRadius:"12px",height:"".concat(k&&x===t?"340px":"40px")},className:"customcol gy-0 mb-2 ",lg:"12",md:"12",sm:"12"},s.a.createElement(o.a,{style:{lineHeight:"44px",borderRadius:"6px",background:"#f7f7f8"},className:"roleheading"},s.a.createElement(c.a,{className:"gy-2",lg:"4",sm:"4",md:"4"},s.a.createElement("div",{className:"align-item-center"},s.a.createElement("input",{className:"mt-1",name:"check",onClick:function(a){!function(e,t){P(e),R(t)}(a.target.checked,t),z(a.target.value,a.target.checked,"parentPermit",null===e||void 0===e?void 0:e.title)},style:{height:"19px",width:"26px"},type:"checkbox"}),s.a.createElement("span",{className:"mx-3 gy-0"}," ",null===e||void 0===e?void 0:e.title,"    "))),s.a.createElement(c.a,{className:"gy-2"},s.a.createElement("div",{className:"d-flex justify-content-center"},s.a.createElement("span",{className:"mx-3"}," View"))),s.a.createElement(c.a,{className:"gy-2"},s.a.createElement("div",{className:"d-flex justify-content-center"},s.a.createElement("span",{className:"mx-3"}," Create"))),s.a.createElement(c.a,{className:"gy-2"},s.a.createElement("div",{className:"d-flex justify-content-center"},s.a.createElement("span",{className:"mx-3"}," Edit"))),s.a.createElement(c.a,{className:"gy-2"},s.a.createElement("div",{className:"d-flex justify-content-center"},s.a.createElement("span",{className:"mx-3"}," Delete")))),k&&x===t?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"gy-2 mt-2"},null===e||void 0===e||null===(a=e.TabName)||void 0===a?void 0:a.map((function(e,t){var a;return s.a.createElement(s.a.Fragment,null,s.a.createElement(o.a,{key:t,className:""},s.a.createElement(c.a,{lg:"4",sm:"4",md:"4"},s.a.createElement("h6",{className:"mt-1"}," ",null===e||void 0===e?void 0:e.title)),null===e||void 0===e||null===(a=e.permission)||void 0===a?void 0:a.map((function(t,a){return s.a.createElement(c.a,{key:a,lg:"2",md:"2",sm:"2"},s.a.createElement("div",{className:"d-flex justify-content-center"},s.a.createElement("input",{name:"check",onClick:function(a){z(a.target.value,a.target.checked,t,e.title)},style:{height:"19px",width:"26px"},type:"checkbox"})))}))))}))))):null)})))),s.a.createElement(o.a,null,s.a.createElement(c.a,null,s.a.createElement("div",{className:"d-flex justify-content-center mb-2"},s.a.createElement(f.a,{type:"submit",style:{cursor:"pointer"},color:"primary"},"Submit"))))))))))}var h=[{pagename:"Dashboard",permission:["parentPermit","View"]},{pagename:"Accounts",permission:["parentPermit"]},{pagename:"Create Account",permission:["View","Create","Edit"]},{pagename:"User List",permission:["View","Edit"]},{pagename:"Client Account",permission:["View","Create","Delete"]},{pagename:"Accountant Account",permission:["View","Create"]},{pagename:"Create Role",permission:["View","Create"]},{pagename:"Role List",permission:["View"]},{pagename:"Product",permission:["parentPermit"]},{pagename:"Product List",permission:["View","Create"]},{pagename:"Add Product",permission:["View","Create"]},{pagename:"Type",permission:["View","Create"]},{pagename:"Assign To Client",permission:["View"]},{pagename:"Rate Master",permission:["View"]}];function y(){var e=Object(r.useState)(""),t=Object(n.a)(e,2),a=(t[0],t[1],Object(r.useState)("")),i=Object(n.a)(a,2),l=(i[0],i[1],Object(r.useState)([])),o=Object(n.a)(l,2),c=(o[0],o[1],Object(r.useState)("")),m=Object(n.a)(c,2),u=(m[0],m[1],Object(r.useState)(!0)),d=Object(n.a)(u,2),p=(d[0],d[1],Object(r.useState)([])),f=Object(n.a)(p,2),b=(f[0],f[1]);Object(r.useEffect)((function(){console.log(h);var e=h.map((function(e){return null===e||void 0===e?void 0:e.pagename}));b(e)}),[]);return s.a.createElement(s.a.Fragment,null,s.a.createElement("section",null,s.a.createElement(E,null)))}},832:function(e,t,a){"use strict";var i=a(45),n=a.n(i).a.create({baseURL:"https://invoice-o.com/Infinity/api/ApiCommonController"});t.a=n},834:function(e,t,a){"use strict";var i=a(6),n=a(7),r=a(16),s=a(19),l=a(1),o=a.n(l),c=a(2),m=a.n(c),u=a(5),d=a.n(u),p=a(4),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.focus=a.focus.bind(Object(r.a)(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.type,s=e.bsSize,l=e.valid,c=e.invalid,m=e.tag,u=e.addon,b=e.plaintext,g=e.innerRef,v=Object(n.a)(e,f),E=["radio","checkbox"].indexOf(r)>-1,h=new RegExp("\\D","g"),y=m||("select"===r||"textarea"===r?r:"input"),C="form-control";b?(C+="-plaintext",y=m||"input"):"file"===r?C+="-file":"range"===r?C+="-range":E&&(C=u?null:"form-check-input"),v.size&&h.test(v.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),s=v.size,delete v.size);var w=Object(p.mapToCssModules)(d()(t,c&&"is-invalid",l&&"is-valid",!!s&&"form-control-"+s,C),a);return("input"===y||m&&"function"===typeof m)&&(v.type=r),v.children&&!b&&"select"!==r&&"string"===typeof y&&"select"!==y&&(Object(p.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete v.children),o.a.createElement(y,Object(i.a)({},v,{ref:g,className:w,"aria-invalid":c}))},t}(o.a.Component);g.propTypes=b,g.defaultProps={type:"text"},t.a=g},836:function(e,t,a){"use strict";var i=a(6),n=a(7),r=a(1),s=a.n(r),l=a(2),o=a.n(l),c=a(5),m=a.n(c),u=a(4),d=["className","cssModule","hidden","widths","tag","check","size","for"],p=o.a.oneOfType([o.a.number,o.a.string]),f=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:p,order:p,offset:p})]),b={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:u.tagPropType,className:o.a.string,cssModule:o.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:o.a.array},g={tag:"label",widths:["xs","sm","md","lg","xl"]},v=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},E=function(e){var t=e.className,a=e.cssModule,r=e.hidden,l=e.widths,o=e.tag,c=e.check,p=e.size,f=e.for,b=Object(n.a)(e,d),g=[];l.forEach((function(t,i){var n=e[t];if(delete b[t],n||""===n){var r,s=!i;if(Object(u.isObject)(n)){var l,o=s?"-":"-"+t+"-";r=v(s,t,n.size),g.push(Object(u.mapToCssModules)(m()(((l={})[r]=n.size||""===n.size,l["order"+o+n.order]=n.order||0===n.order,l["offset"+o+n.offset]=n.offset||0===n.offset,l))),a)}else r=v(s,t,n),g.push(r)}}));var E=Object(u.mapToCssModules)(m()(t,!!r&&"sr-only",!!c&&"form-check-label",!!p&&"col-form-label-"+p,g,!!g.length&&"col-form-label"),a);return s.a.createElement(o,Object(i.a)({htmlFor:f},b,{className:E}))};E.propTypes=b,E.defaultProps=g,t.a=E},838:function(e,t,a){"use strict";var i=a(6),n=a(7),r=a(16),s=a(19),l=a(1),o=a.n(l),c=a(2),m=a.n(c),u=a(5),d=a.n(u),p=a(4),f=["className","cssModule","inline","tag","innerRef"],b={children:m.a.node,inline:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.submit=a.submit.bind(Object(r.a)(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.inline,s=e.tag,l=e.innerRef,c=Object(n.a)(e,f),m=Object(p.mapToCssModules)(d()(t,!!r&&"form-inline"),a);return o.a.createElement(s,Object(i.a)({},c,{ref:l,className:m}))},t}(l.Component);g.propTypes=b,g.defaultProps={tag:"form"},t.a=g},839:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var i=a(105);function n(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(i.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,r,s=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return s=e.done,e},e:function(e){l=!0,r=e},f:function(){try{s||null==n.return||n.return()}finally{if(l)throw r}}}}}}]);
//# sourceMappingURL=114.88aa3b07.chunk.js.map