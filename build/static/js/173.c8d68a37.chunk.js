/*! For license information please see 173.c8d68a37.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[173],{2426:function(e,t,n){"use strict";n.r(t),n.d(t,"EditType",(function(){return S}));var a=n(31),r=n(80),o=n(46),i=n(10),s=n(11),c=n(73),l=n(13),u=n(12),f=n(1),p=n.n(f),d=n(822),h=n(820),m=n(821),v=n(197),g=n(825),y=n(840),b=n(843),w=n(838),E=n(835),O=(n(22),n(833)),x=n(62),j=n(842),N=n.n(j);function T(){T=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",s=r.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(L){c=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var o=t&&t.prototype instanceof p?t:p,i=Object.create(o.prototype),s=new N(r||[]);return a(i,"_invoke",{value:E(e,n,s)}),i}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(L){return{type:"throw",arg:L}}}e.wrap=l;var f={};function p(){}function d(){}function h(){}var m={};c(m,o,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(S([])));g&&g!==t&&n.call(g,o)&&(m=g);var y=h.prototype=p.prototype=Object.create(m);function b(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var r;a(this,"_invoke",{value:function(a,o){function i(){return new t((function(r,i){!function a(r,o,i,s){var c=u(e[r],e,o);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){a("next",e,i,s)}),(function(e){a("throw",e,i,s)})):t.resolve(f).then((function(e){l.value=e,i(l)}),(function(e){return a("throw",e,i,s)}))}s(c.arg)}(a,o,r,i)}))}return r=r?r.then(i,i):i()}})}function E(e,t,n){var a="suspendedStart";return function(r,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw o;return k()}for(n.method=r,n.arg=o;;){var i=n.delegate;if(i){var s=O(i,n);if(s){if(s===f)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var c=u(e,t,n);if("normal"===c.type){if(a=n.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(a="completed",n.method="throw",n.arg=c.arg)}}}function O(e,t){var n=t.method,a=e.iterator[n];if(void 0===a)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,O(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var r=u(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,f;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function S(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,r=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:k}}function k(){return{value:void 0,done:!0}}return d.prototype=h,a(y,"constructor",{value:h,configurable:!0}),a(h,"constructor",{value:d,configurable:!0}),d.displayName=c(h,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,c(e,s,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},b(w.prototype),c(w.prototype,i,(function(){return this})),e.AsyncIterator=w,e.async=function(t,n,a,r,o){void 0===o&&(o=Promise);var i=new w(l(t,n,a,r),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(y),c(y,s,"Generator"),c(y,o,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var a in t)n.push(a);return n.reverse(),function e(){for(;n.length;){var a=n.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},e.values=S,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return i.type="throw",i.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var s=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),j(n),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;j(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:S(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},e}var S=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).onChangeHandler3=function(e){a.setState({selectedFile3:e.target.files}),a.setState({selectedName3:e.target.files[0].name}),console.log(e.target.files)},a.changeHandler1=function(e){a.setState({status:e.target.value})},a.changeHandler=function(e){a.setState(Object(o.a)({},e.target.name,e.target.value))},a.submitHandler=function(e){var t,n;e.preventDefault();var r=JSON.parse(localStorage.getItem("userData"));console.log(null===r||void 0===r||null===(t=r.Userinfo)||void 0===t?void 0:t.id);var o=new FormData,i=a.props.match.params.id;o.append("user_id",null===r||void 0===r||null===(n=r.Userinfo)||void 0===n?void 0:n.id),o.append("product_type_id",i),o.append("product_type",a.state.TypeName),o.append("description",a.state.Description),o.append("status",a.state.status),O.a.post("/editproducttypesubmit",o).then((function(e){var t;console.log(e),(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.success)&&(a.setState({TypeName:""}),a.setState({Description:""}),N()("Success!","You Data has been Submitted","success"))})).catch((function(e){console.log(e)}))},a.state={TypeName:"",Brand:"",Brandlist:"",Description:"",Price:"",stock:"",Regularprice:"",formValues:[{PName:"",price:""}],DiscountPrice:"",Addmore:!1,rowData:[],description:"",variety:"",shipmentfee:"",Tags:"",taxrate:"",status:"",selectedFile3:null,selectedName3:""},a.handleSubmit=a.handleSubmit.bind(Object(c.a)(a)),a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=Object(r.a)(T().mark((function e(){var t,n,a=this;return T().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,(n=new FormData).append("product_type_id",t),e.next=5,O.a.post("/editproducttypelistview",n).then((function(e){var t,n=null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.data[0];console.log(n),a.setState({TypeName:null===n||void 0===n?void 0:n.product_type}),a.setState({Description:null===n||void 0===n?void 0:n.description}),a.setState({status:null===n||void 0===n?void 0:n.status})}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e,t){var n=this.state.formValues;n[e][t.target.name]=t.target.value,this.setState({formValues:n})}},{key:"addFormFields",value:function(){this.setState({formValues:[].concat(Object(a.a)(this.state.formValues),[{PName:"",price:""}])}),this.handleSubmit()}},{key:"removeFormFields",value:function(e){var t=this.state.formValues;t.splice(e,1),this.setState({formValues:t})}},{key:"handleSubmit",value:function(){console.log(this.state.formValues)}},{key:"render",value:function(){return p.a.createElement("div",null,p.a.createElement(d.a,null,p.a.createElement("h1",{className:"p-2 "},"Edit Type here"),p.a.createElement(h.a,{className:"m-2"},p.a.createElement(m.a,null,p.a.createElement("h2",null,"Exiting Information")),p.a.createElement(m.a,null,p.a.createElement(x.b,{render:function(e){var t=e.history;return p.a.createElement(v.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/freshlist/house/Typelist")}},"Back")}}))),p.a.createElement(g.a,null,p.a.createElement(y.a,{className:"m-1",onSubmit:this.submitHandler},p.a.createElement(h.a,{className:"mb-2"},p.a.createElement(m.a,{lg:"6",md:"6"},p.a.createElement(b.a,null,p.a.createElement(w.a,null," Existing Type"),p.a.createElement(E.a,{type:"text",placeholder:"Title",name:"TypeName",bsSize:"lg",value:this.state.TypeName,onChange:this.changeHandler}))),p.a.createElement(m.a,{lg:"6",md:"6"},p.a.createElement(b.a,null,p.a.createElement(w.a,null,"Description"),p.a.createElement(E.a,{type:"text",placeholder:"Title",name:"Description",bsSize:"lg",value:this.state.Description,onChange:this.changeHandler}))),p.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},p.a.createElement(w.a,{className:"mb-1 py-2"},p.a.createElement("h4",null,"Status")),p.a.createElement("div",{className:"form-label-group",onChange:this.changeHandler},p.a.createElement("input",{defaultChecked:!0,style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),p.a.createElement("span",{style:{marginRight:"20px"}},"Active"),p.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Deactive"}),p.a.createElement("span",{style:{marginRight:"3px"}},"Deactive")))),p.a.createElement(h.a,null,p.a.createElement(m.a,null,p.a.createElement(v.a.Ripple,{color:"primary",type:"submit",className:"mx-3 mb-1"},"Add Type")))))))}}]),n}(f.Component);t.default=S},833:function(e,t,n){"use strict";var a=n(45),r=n.n(a).a.create({baseURL:"https://invoice-o.com/Infinity/api/ApiCommonController"});t.a=r},835:function(e,t,n){"use strict";var a=n(6),r=n(7),o=n(16),i=n(19),s=n(1),c=n.n(s),l=n(2),u=n.n(l),f=n(5),p=n.n(f),d=n(4),h=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],m={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:d.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},v=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(o.a)(n)),n.focus=n.focus.bind(Object(o.a)(n)),n}Object(i.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.focus=function(){this.ref&&this.ref.focus()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,o=e.type,i=e.bsSize,s=e.valid,l=e.invalid,u=e.tag,f=e.addon,m=e.plaintext,v=e.innerRef,g=Object(r.a)(e,h),y=["radio","checkbox"].indexOf(o)>-1,b=new RegExp("\\D","g"),w=u||("select"===o||"textarea"===o?o:"input"),E="form-control";m?(E+="-plaintext",w=u||"input"):"file"===o?E+="-file":"range"===o?E+="-range":y&&(E=f?null:"form-check-input"),g.size&&b.test(g.size)&&(Object(d.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),i=g.size,delete g.size);var O=Object(d.mapToCssModules)(p()(t,l&&"is-invalid",s&&"is-valid",!!i&&"form-control-"+i,E),n);return("input"===w||u&&"function"===typeof u)&&(g.type=o),g.children&&!m&&"select"!==o&&"string"===typeof w&&"select"!==w&&(Object(d.warnOnce)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),c.a.createElement(w,Object(a.a)({},g,{ref:v,className:O,"aria-invalid":l}))},t}(c.a.Component);v.propTypes=m,v.defaultProps={type:"text"},t.a=v},838:function(e,t,n){"use strict";var a=n(6),r=n(7),o=n(1),i=n.n(o),s=n(2),c=n.n(s),l=n(5),u=n.n(l),f=n(4),p=["className","cssModule","hidden","widths","tag","check","size","for"],d=c.a.oneOfType([c.a.number,c.a.string]),h=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:d,order:d,offset:d})]),m={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:f.tagPropType,className:c.a.string,cssModule:c.a.object,xs:h,sm:h,md:h,lg:h,xl:h,widths:c.a.array},v={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},y=function(e){var t=e.className,n=e.cssModule,o=e.hidden,s=e.widths,c=e.tag,l=e.check,d=e.size,h=e.for,m=Object(r.a)(e,p),v=[];s.forEach((function(t,a){var r=e[t];if(delete m[t],r||""===r){var o,i=!a;if(Object(f.isObject)(r)){var s,c=i?"-":"-"+t+"-";o=g(i,t,r.size),v.push(Object(f.mapToCssModules)(u()(((s={})[o]=r.size||""===r.size,s["order"+c+r.order]=r.order||0===r.order,s["offset"+c+r.offset]=r.offset||0===r.offset,s))),n)}else o=g(i,t,r),v.push(o)}}));var y=Object(f.mapToCssModules)(u()(t,!!o&&"sr-only",!!l&&"form-check-label",!!d&&"col-form-label-"+d,v,!!v.length&&"col-form-label"),n);return i.a.createElement(c,Object(a.a)({htmlFor:h},m,{className:y}))};y.propTypes=m,y.defaultProps=v,t.a=y},840:function(e,t,n){"use strict";var a=n(6),r=n(7),o=n(16),i=n(19),s=n(1),c=n.n(s),l=n(2),u=n.n(l),f=n(5),p=n.n(f),d=n(4),h=["className","cssModule","inline","tag","innerRef"],m={children:u.a.node,inline:u.a.bool,tag:d.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},v=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(o.a)(n)),n.submit=n.submit.bind(Object(o.a)(n)),n}Object(i.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.submit=function(){this.ref&&this.ref.submit()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,o=e.inline,i=e.tag,s=e.innerRef,l=Object(r.a)(e,h),u=Object(d.mapToCssModules)(p()(t,!!o&&"form-inline"),n);return c.a.createElement(i,Object(a.a)({},l,{ref:s,className:u}))},t}(s.Component);v.propTypes=m,v.defaultProps={tag:"form"},t.a=v},843:function(e,t,n){"use strict";var a=n(6),r=n(7),o=n(1),i=n.n(o),s=n(2),c=n.n(s),l=n(5),u=n.n(l),f=n(4),p=["className","cssModule","row","disabled","check","inline","tag"],d={children:c.a.node,row:c.a.bool,check:c.a.bool,inline:c.a.bool,disabled:c.a.bool,tag:f.tagPropType,className:c.a.string,cssModule:c.a.object},h=function(e){var t=e.className,n=e.cssModule,o=e.row,s=e.disabled,c=e.check,l=e.inline,d=e.tag,h=Object(r.a)(e,p),m=Object(f.mapToCssModules)(u()(t,!!o&&"row",c?"form-check":"form-group",!(!c||!l)&&"form-check-inline",!(!c||!s)&&"disabled"),n);return"fieldset"===d&&(h.disabled=s),i.a.createElement(d,Object(a.a)({},h,{className:m}))};h.propTypes=d,h.defaultProps={tag:"div"},t.a=h}}]);
//# sourceMappingURL=173.c8d68a37.chunk.js.map