(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[160],{1140:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var i=[{title:"Dashboard",TabName:[{title:"Dashboard",permission:["View"]}]},{title:"Accounts",TabName:[{title:"Create Account",permission:["View","Create","Edit","Delete"]},{title:"User List",permission:["View","Create","Edit","Delete"]},{title:"Create Role",permission:["View","Create","Edit","Delete"]},{title:"Role List",permission:["View","Create","Edit","Delete"]}]},{title:"Product",TabName:[{title:"Product List",permission:["View","Create","Edit","Delete"]},{title:"Add Product",permission:["View","Create","Edit","Delete"]},{title:"Type",permission:["View","Create","Edit","Delete"]},{title:"Assign To Client",permission:["View","Create","Edit","Delete"]},{title:"Assigned List",permission:["View","Create","Edit","Delete"]},{title:"Rate Master",permission:["View","Create","Edit","Delete"]},{title:"Inventory",permission:["View","Create","Edit","Delete"]}]},{title:"Brand",TabName:[{title:"Brand List",permission:["View","Create","Edit","Delete"]},{title:"Category List",permission:["View","Create","Edit","Delete"]}]},{title:"Transaction",TabName:[{title:"Place Order",permission:["View","Create","Edit","Delete"]},{title:"Order Raise List",permission:["View","Create","Edit","Delete"]},{title:"Order Received List",permission:["View","Create","Edit","Delete"]},{title:"Completed Order List",permission:["View","Create","Edit","Delete"]}]},{title:"BILLINGS",TabName:[{title:"Purchase Order",permission:["View","Create","Edit","Delete"]},{title:"Bills",permission:["View","Create","Edit","Delete"]},{title:"invoice Generator",permission:["View","Create","Edit","Delete"]},{title:"invoice Re-Generator",permission:["View","Create","Edit","Delete"]},{title:"Payment Status",permission:["View","Create","Edit","Delete"]},{title:"Payment completed",permission:["View","Create","Edit","Delete"]}]},{title:"Budget",TabName:[{title:"Budget List",permission:["View","Create","Edit","Delete"]},{title:"Budget Assignment",permission:["View","Create","Edit","Delete"]}]},{title:"Reports",TabName:[{title:"Date Wise",permission:["View","Create","Edit","Delete"]},{title:"Client Wise",permission:["View","Create","Edit","Delete"]},{title:"Branch Wise",permission:["View","Create","Edit","Delete"]},{title:"Product Wise",permission:["View","Create","Edit","Delete"]}]},{title:"Unique Code",TabName:[{title:"Unique Code",permission:["View","Create","Edit","Delete"]}]},{title:"Logs",TabName:[{title:"Logs",permission:["View","Create","Edit","Delete"]}]}]},2569:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return h}));var i=a(1),n=a.n(i),r=a(842),l=a(40),s=a(821),o=a(822),c=a(823),m=a(838),d=a(837),u=a(835),p=a(198),f=a(1140),b=(a(39),a(189)),v=a(841),g=a.n(v);function E(){var e=Object(i.useState)(""),t=Object(l.a)(e,2),a=t[0],v=t[1],E=Object(i.useState)(""),h=Object(l.a)(E,2),y=h[0],N=h[1],C=Object(i.useState)([]),w=Object(l.a)(C,2),O=w[0],j=w[1],x=Object(i.useState)(""),D=Object(l.a)(x,2),V=D[0],R=D[1],T=Object(i.useState)(!1),k=Object(l.a)(T,2),S=k[0],z=k[1],P=function(e,t,a,i,n){if(t){O.map((function(e,t){if((null===e||void 0===e?void 0:e.pagename)===i){if(O[t].permission.includes(a));else O[t].permission.push(a)}else{var n=O.find((function(e,t){return e.pagename===i}));if(!1===((null===n||void 0===n?void 0:n.pagename)===i)){var r=O.concat({pagename:i,permission:[a]});j(r)}}}));if(O.length<1){var r=O.concat({pagename:i,permission:[a]});j(r)}}else null===O||void 0===O||O.map((function(e,t){var n=null===e||void 0===e?void 0:e.pagename;i===n&&(null===e||void 0===e||e.permission.splice(null===e||void 0===e?void 0:e.permission.indexOf(a),1)),0===(null===e||void 0===e?void 0:e.permission.length)&&O.splice(t,1)}))};Object(i.useEffect)((function(){console.log(O)}),[O]);return n.a.createElement(n.a.Fragment,null,n.a.createElement(s.a,{className:""},n.a.createElement(o.a,{xl:12},n.a.createElement(c.a,null,n.a.createElement("div",{className:"container"}),n.a.createElement(m.a,{onSubmit:function(e){var t;e.preventDefault();var i=JSON.parse(localStorage.getItem("userData")),n=new FormData;n.append("user_id",null===i||void 0===i||null===(t=i.Userinfo)||void 0===t?void 0:t.id),n.set("role_name",y),n.set("description",a),n.set("selectedarray",JSON.stringify(O)),b.a.post("/addroles",n).then((function(e){console.log(e),g()("Success","Role Created"),j(""),v(""),N("");var t,a=document.getElementsByName("check"),i=Object(r.a)(a);try{for(i.s();!(t=i.n()).done;){t.value.checked=!1}}catch(n){i.e(n)}finally{i.f()}})).catch((function(e){console.log(e)}))}},n.a.createElement("div",{className:"container mt-5"},n.a.createElement(s.a,{className:"mb-3 container"},n.a.createElement(o.a,null,n.a.createElement(d.a,null,"Enter Role *"),n.a.createElement(u.a,{required:!0,value:y,onChange:function(e){return N(e.target.value)},type:"text",placeholder:"Enter Role",className:"form-control"})),n.a.createElement(o.a,null,n.a.createElement(d.a,null,"Enter Role Description * "),n.a.createElement(u.a,{required:!0,value:a,onChange:function(e){return v(e.target.value)},type:"text",placeholder:"Enter Role Desc.."})))),n.a.createElement("section",{className:"mt-5 container"},n.a.createElement(s.a,{className:"gy-0 container"},f.a&&(null===f.a||void 0===f.a?void 0:f.a.map((function(e,t){var a;return n.a.createElement(o.a,{key:t,style:{borderRadius:"12px",height:"".concat(S&&V===t?"340px":"40px")},className:"customcol gy-0 mb-2 ",lg:"12",md:"12",sm:"12"},n.a.createElement(s.a,{style:{lineHeight:"44px",borderRadius:"6px",background:"#f7f7f8"},className:"roleheading"},n.a.createElement(o.a,{className:"gy-2",lg:"4",sm:"4",md:"4"},n.a.createElement("div",{className:"align-item-center"},n.a.createElement("input",{className:"mt-1",name:"check",id:"head_".concat(null===e||void 0===e?void 0:e.title),onClick:function(a){!function(e,t){z(e),R(t)}(a.target.checked,t),P(a.target.value,a.target.checked,"parentPermit",null===e||void 0===e?void 0:e.title)},style:{height:"19px",width:"26px"},type:"checkbox"}),n.a.createElement("span",{className:"mx-3 gy-0"},null===e||void 0===e?void 0:e.title))),n.a.createElement(o.a,{className:"gy-2"},n.a.createElement("div",{className:"d-flex justify-content-center"},n.a.createElement("span",{className:"mx-3"}," View"))),n.a.createElement(o.a,{className:"gy-2"},n.a.createElement("div",{className:"d-flex justify-content-center"},n.a.createElement("span",{className:"mx-3"}," Create"))),n.a.createElement(o.a,{className:"gy-2"},n.a.createElement("div",{className:"d-flex justify-content-center"},n.a.createElement("span",{className:"mx-3"}," Edit"))),n.a.createElement(o.a,{className:"gy-2"},n.a.createElement("div",{className:"d-flex justify-content-center"},n.a.createElement("span",{className:"mx-3"}," Delete")))),S&&V===t?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"gy-2 mt-2"},null===e||void 0===e||null===(a=e.TabName)||void 0===a?void 0:a.map((function(e,t){var a;return n.a.createElement(n.a.Fragment,null,n.a.createElement(s.a,{key:t,className:""},n.a.createElement(o.a,{lg:"4",sm:"4",md:"4"},n.a.createElement("h6",{className:"mt-1"}," ",null===e||void 0===e?void 0:e.title)),null===e||void 0===e||null===(a=e.permission)||void 0===a?void 0:a.map((function(t,a){return n.a.createElement(o.a,{key:a,lg:"2",md:"2",sm:"2"},n.a.createElement("div",{className:"d-flex justify-content-center"},n.a.createElement("input",{name:"check",id:"item_".concat(t),onClick:function(a){P(a.target.value,a.target.checked,t,e.title)},style:{height:"19px",width:"26px"},type:"checkbox"})))}))))}))))):null)})))),n.a.createElement(s.a,null,n.a.createElement(o.a,null,n.a.createElement("div",{className:"d-flex justify-content-center mb-2"},n.a.createElement(p.a,{type:"submit",style:{cursor:"pointer"},color:"primary"},"Submit"))))))))))}function h(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("section",null,n.a.createElement(E,null)))}},835:function(e,t,a){"use strict";var i=a(6),n=a(7),r=a(16),l=a(18),s=a(1),o=a.n(s),c=a(2),m=a.n(c),d=a(5),u=a.n(d),p=a(4),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},v=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.focus=a.focus.bind(Object(r.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.type,l=e.bsSize,s=e.valid,c=e.invalid,m=e.tag,d=e.addon,b=e.plaintext,v=e.innerRef,g=Object(n.a)(e,f),E=["radio","checkbox"].indexOf(r)>-1,h=new RegExp("\\D","g"),y=m||("select"===r||"textarea"===r?r:"input"),N="form-control";b?(N+="-plaintext",y=m||"input"):"file"===r?N+="-file":"range"===r?N+="-range":E&&(N=d?null:"form-check-input"),g.size&&h.test(g.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=g.size,delete g.size);var C=Object(p.mapToCssModules)(u()(t,c&&"is-invalid",s&&"is-valid",!!l&&"form-control-"+l,N),a);return("input"===y||m&&"function"===typeof m)&&(g.type=r),g.children&&!b&&"select"!==r&&"string"===typeof y&&"select"!==y&&(Object(p.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),o.a.createElement(y,Object(i.a)({},g,{ref:v,className:C,"aria-invalid":c}))},t}(o.a.Component);v.propTypes=b,v.defaultProps={type:"text"},t.a=v},837:function(e,t,a){"use strict";var i=a(6),n=a(7),r=a(1),l=a.n(r),s=a(2),o=a.n(s),c=a(5),m=a.n(c),d=a(4),u=["className","cssModule","hidden","widths","tag","check","size","for"],p=o.a.oneOfType([o.a.number,o.a.string]),f=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:p,order:p,offset:p})]),b={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:d.tagPropType,className:o.a.string,cssModule:o.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:o.a.array},v={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},E=function(e){var t=e.className,a=e.cssModule,r=e.hidden,s=e.widths,o=e.tag,c=e.check,p=e.size,f=e.for,b=Object(n.a)(e,u),v=[];s.forEach((function(t,i){var n=e[t];if(delete b[t],n||""===n){var r,l=!i;if(Object(d.isObject)(n)){var s,o=l?"-":"-"+t+"-";r=g(l,t,n.size),v.push(Object(d.mapToCssModules)(m()(((s={})[r]=n.size||""===n.size,s["order"+o+n.order]=n.order||0===n.order,s["offset"+o+n.offset]=n.offset||0===n.offset,s))),a)}else r=g(l,t,n),v.push(r)}}));var E=Object(d.mapToCssModules)(m()(t,!!r&&"sr-only",!!c&&"form-check-label",!!p&&"col-form-label-"+p,v,!!v.length&&"col-form-label"),a);return l.a.createElement(o,Object(i.a)({htmlFor:f},b,{className:E}))};E.propTypes=b,E.defaultProps=v,t.a=E},838:function(e,t,a){"use strict";var i=a(6),n=a(7),r=a(16),l=a(18),s=a(1),o=a.n(s),c=a(2),m=a.n(c),d=a(5),u=a.n(d),p=a(4),f=["className","cssModule","inline","tag","innerRef"],b={children:m.a.node,inline:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},v=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.submit=a.submit.bind(Object(r.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.inline,l=e.tag,s=e.innerRef,c=Object(n.a)(e,f),m=Object(p.mapToCssModules)(u()(t,!!r&&"form-inline"),a);return o.a.createElement(l,Object(i.a)({},c,{ref:s,className:m}))},t}(s.Component);v.propTypes=b,v.defaultProps={tag:"form"},t.a=v},842:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var i=a(105);function n(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(i.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,r,l=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return l=e.done,e},e:function(e){s=!0,r=e},f:function(){try{l||null==n.return||n.return()}finally{if(s)throw r}}}}}}]);
//# sourceMappingURL=160.de140726.chunk.js.map