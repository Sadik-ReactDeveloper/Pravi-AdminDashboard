/*! For license information please see 151.1239f248.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[151],{2282:function(e,t,a){"use strict";a.r(t),a.d(t,"AddProduct",(function(){return S}));var n=a(31),r=a(80),o=a(46),i=a(10),l=a(11),c=a(77),s=a(13),u=a(12),m=a(1),d=a.n(m),f=a(822),h=a(820),p=a(821),g=a(825),v=a(838),y=a(844),b=a(836),E=a(834),w=a(197),x=a(812),O=(a(22),a(832)),j=a(841),N=a.n(j);function P(){P=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n=Object.defineProperty||function(e,t,a){e[t]=a.value},r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",l=r.toStringTag||"@@toStringTag";function c(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(T){c=function(e,t,a){return e[t]=a}}function s(e,t,a,r){var o=t&&t.prototype instanceof d?t:d,i=Object.create(o.prototype),l=new N(r||[]);return n(i,"_invoke",{value:w(e,a,l)}),i}function u(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(T){return{type:"throw",arg:T}}}e.wrap=s;var m={};function d(){}function f(){}function h(){}var p={};c(p,o,(function(){return this}));var g=Object.getPrototypeOf,v=g&&g(g(S([])));v&&v!==t&&a.call(v,o)&&(p=v);var y=h.prototype=d.prototype=Object.create(p);function b(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var r;n(this,"_invoke",{value:function(n,o){function i(){return new t((function(r,i){!function n(r,o,i,l){var c=u(e[r],e,o);if("throw"!==c.type){var s=c.arg,m=s.value;return m&&"object"==typeof m&&a.call(m,"__await")?t.resolve(m.__await).then((function(e){n("next",e,i,l)}),(function(e){n("throw",e,i,l)})):t.resolve(m).then((function(e){s.value=e,i(s)}),(function(e){return n("throw",e,i,l)}))}l(c.arg)}(n,o,r,i)}))}return r=r?r.then(i,i):i()}})}function w(e,t,a){var n="suspendedStart";return function(r,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw o;return k()}for(a.method=r,a.arg=o;;){var i=a.delegate;if(i){var l=x(i,a);if(l){if(l===m)continue;return l}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var c=u(e,t,a);if("normal"===c.type){if(n=a.done?"completed":"suspendedYield",c.arg===m)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(n="completed",a.method="throw",a.arg=c.arg)}}}function x(e,t){var a=t.method,n=e.iterator[a];if(void 0===n)return t.delegate=null,"throw"===a&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==a&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+a+"' method")),m;var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,m;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function S(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:k}}function k(){return{value:void 0,done:!0}}return f.prototype=h,n(y,"constructor",{value:h,configurable:!0}),n(h,"constructor",{value:f,configurable:!0}),f.displayName=c(h,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,c(e,l,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},b(E.prototype),c(E.prototype,i,(function(){return this})),e.AsyncIterator=E,e.async=function(t,a,n,r,o){void 0===o&&(o=Promise);var i=new E(s(t,a,n,r),o);return e.isGeneratorFunction(a)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(y),c(y,l,"Generator"),c(y,o,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),a=[];for(var n in t)a.push(n);return a.reverse(),function e(){for(;a.length;){var n=a.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=S,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return i.type="throw",i.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var l=a.call(o,"catchLoc"),c=a.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),j(a),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;j(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:S(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),m}},e}var S=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).onChangeHandler3=function(e){var t=Array.from(e.target.files);console.log(t),n.setState({selectedFile3:t})},n.changeHandler1=function(e){n.setState({status:e.target.value})},n.changeHandler=function(e){n.setState(Object(o.a)({},e.target.name,e.target.value))},n.submitHandler=function(e){e.preventDefault();var t=new FormData;console.log(n.state.formValues),t.append("title",n.state.P_Title),t.append("veriety",JSON.stringify(n.state.formValues)),t.append("category_id",n.state.category_name),t.append("stock",n.state.stock),t.append("price",n.state.Price),t.append("discountprice",n.state.DiscountPrice),t.append("description",n.state.description),t.append("shipping_fee",n.state.shipmentfee),t.append("tax_rate",n.state.taxrate),t.append("tags",n.state.Tags),t.append("status","Active");for(var a=0;a<(null===(r=n.state.selectedFile3)||void 0===r?void 0:r.length);a++){var r;t.append("images[]",n.state.selectedFile3[a])}O.a.post("/addproduct",t,{headers:{"Content-Type":"multipart/form-data; "}}).then((function(e){console.log(e),e.data.success&&N()("Success!","You Data iS been Submitted","success")})).catch((function(e){console.log(e)}))},n.state={category_name:"",P_Title:"",Price:"",stock:"",Regularprice:"",formValues:[{PName:"",price:""}],DiscountPrice:"",Addmore:!1,rowData:[],description:"",variety:"",shipmentfee:"",Tags:"",taxrate:"",status:"",selectedFile3:[],selectedName3:""},n.handleSubmit=n.handleSubmit.bind(Object(c.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(r.a)(P().mark((function e(){var t=this;return P().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/getcategory").then((function(e){var a,n=null===(a=e.data.data)||void 0===a?void 0:a.category;console.log(n),t.setState({rowData:n})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e,t){var a=this.state.formValues;a[e][t.target.name]=t.target.value,this.setState({formValues:a})}},{key:"addFormFields",value:function(){this.setState({formValues:[].concat(Object(n.a)(this.state.formValues),[{PName:"",price:""}])}),this.handleSubmit()}},{key:"removeFormFields",value:function(e){var t=this.state.formValues;t.splice(e,1),this.setState({formValues:t})}},{key:"handleSubmit",value:function(){console.log(this.state.formValues)}},{key:"render",value:function(){var e,t=this;return d.a.createElement("div",null,d.a.createElement(f.a,null,d.a.createElement("h1",{className:"p-2 "},"Product Upload"),d.a.createElement(h.a,{className:"m-2"},d.a.createElement(p.a,null,d.a.createElement("h2",null,"Basic Information"))),d.a.createElement(g.a,null,d.a.createElement(v.a,{className:"m-1",onSubmit:this.submitHandler},d.a.createElement(h.a,{className:"mb-2"},d.a.createElement(p.a,{lg:"6",md:"6"},d.a.createElement(y.a,null,d.a.createElement(b.a,null," Choose Category"),d.a.createElement("select",{onChange:function(e){return t.setState({category_name:e.target.value})},className:"form-control",name:"Select",id:"Select"},d.a.createElement("option",{value:"volvo"},"--Select Category--"),this.state.rowData&&(null===(e=this.state.rowData)||void 0===e?void 0:e.map((function(e,t){return d.a.createElement("option",{key:t,value:null===e||void 0===e?void 0:e.id},null===e||void 0===e?void 0:e.category_name)})))))),d.a.createElement(p.a,{lg:"6",md:"6"},d.a.createElement(y.a,null,d.a.createElement(b.a,null,"Title"),d.a.createElement(E.a,{type:"text",placeholder:"Title",name:"P_Title",bsSize:"lg",value:this.state.P_Title,onChange:this.changeHandler}))),d.a.createElement(p.a,{lg:"12",md:"12"},d.a.createElement(y.a,null,d.a.createElement(b.a,null,"Description"),d.a.createElement("textarea",{type:"text",rows:5,className:"form-control",placeholder:"Description ...",name:"description",bsSize:"lg",value:this.state.description,onChange:this.changeHandler}))),d.a.createElement(p.a,{lg:"6",md:"6"},d.a.createElement(y.a,null,d.a.createElement(b.a,null," PRICE (\u20b9)"),d.a.createElement(E.a,{type:"number",placeholder:"Amount In Number",name:"Price",bsSize:"lg",value:this.state.Price,onChange:this.changeHandler}))),d.a.createElement(p.a,{lg:"6",md:"6"},d.a.createElement(h.a,null,d.a.createElement(p.a,{lg:"2",sm:"2",md:"2"},d.a.createElement("div",null,d.a.createElement("h5",{className:"mt-2"}," OR"))),d.a.createElement(p.a,null,d.a.createElement(y.a,null,d.a.createElement(w.a,{style:{width:"100%"},color:"primary",className:"button add mt-2",type:"button",onClick:function(){return t.setState({Addmore:!0})}},"Add")))))," "),this.state.Addmore?d.a.createElement(d.a.Fragment,null,d.a.createElement(h.a,null,d.a.createElement(p.a,{lg:"12"},this.state.formValues.map((function(e,a){return d.a.createElement("div",{className:"",key:a},d.a.createElement(h.a,{className:"py-1"},d.a.createElement(p.a,{lg:"4",sm:"4"},d.a.createElement("label",null,"Product Name"),d.a.createElement("input",{className:"form-control",type:"text",name:"PName",value:e.PName||"",onChange:function(e){return t.handleChange(a,e)}})),d.a.createElement(p.a,{lg:"4",sm:"4"},d.a.createElement("label",null,"Price"),d.a.createElement("input",{className:"form-control",type:"number",name:"price",value:e.price||"",onChange:function(e){return t.handleChange(a,e)}})),d.a.createElement(p.a,null,a?d.a.createElement(w.a,{color:"primary",type:"button",className:"button remove mt-2",onClick:function(){return t.removeFormFields(a)}},"Remove"):null,d.a.createElement(w.a,{color:"primary",className:"button add mt-2  mx-3",type:"button",onClick:function(){return t.addFormFields()}},"Add"))))}))))):null,d.a.createElement(h.a,null,d.a.createElement(p.a,{lg:"6",md:"6"},d.a.createElement(y.a,null,d.a.createElement(b.a,null," Stock "),d.a.createElement(E.a,{type:"number",placeholder:"Amount In Number",name:"stock",bsSize:"lg",value:this.state.stock,onChange:this.changeHandler}))),d.a.createElement(p.a,{lg:"6",md:"6"},d.a.createElement(y.a,null,d.a.createElement(b.a,null,"Discount Price"),d.a.createElement(E.a,{type:"number",placeholder:"Discount Price",name:"DiscountPrice",bsSize:"lg",value:this.state.DiscountPrice,onChange:this.changeHandler}))),d.a.createElement(p.a,{lg:"6",md:"6"},d.a.createElement(y.a,null,d.a.createElement(b.a,null,"SHIPING FEE(\u20b9)"),d.a.createElement(E.a,{type:"number",placeholder:"Number...",name:"shipmentfee",bsSize:"lg",value:this.state.shipmentfee,onChange:this.changeHandler}))),d.a.createElement(p.a,{lg:"6",md:"6"},d.a.createElement(y.a,null,d.a.createElement(b.a,null,"TAX RATE (%)"),d.a.createElement(E.a,{type:"number",placeholder:"Tax in Percentage",name:"taxrate",bsSize:"lg",value:this.state.taxrate,onChange:this.changeHandler}))),d.a.createElement(p.a,{lg:"6",md:"6"},d.a.createElement(y.a,null,d.a.createElement(b.a,null,"TAGS"),d.a.createElement(E.a,{type:"text",placeholder:"Type here...",name:"Tags",bsSize:"lg",value:this.state.Tags,onChange:this.changeHandler})))),d.a.createElement(h.a,null,d.a.createElement(p.a,{lg:"6",sm:"6"},d.a.createElement(y.a,null,d.a.createElement(b.a,null,"Media & Published (Select multiple files)"),d.a.createElement(x.a,{multiple:!0,style:{cursor:"pointer"},accept:"image/png,image/jpeg,image/jpg",name:"image[]",type:"file",onChange:this.onChangeHandler3})))),d.a.createElement(h.a,null,d.a.createElement(w.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add Product"))))))}}]),a}(m.Component);t.default=S},832:function(e,t,a){"use strict";var n=a(45),r=a.n(n).a.create({baseURL:"https://invoice-o.com/Infinity/api/ApiCommonController"});t.a=r},834:function(e,t,a){"use strict";var n=a(6),r=a(7),o=a(16),i=a(19),l=a(1),c=a.n(l),s=a(2),u=a.n(s),m=a(5),d=a.n(m),f=a(4),h=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],p={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:f.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(o.a)(a)),a.focus=a.focus.bind(Object(o.a)(a)),a}Object(i.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,o=e.type,i=e.bsSize,l=e.valid,s=e.invalid,u=e.tag,m=e.addon,p=e.plaintext,g=e.innerRef,v=Object(r.a)(e,h),y=["radio","checkbox"].indexOf(o)>-1,b=new RegExp("\\D","g"),E=u||("select"===o||"textarea"===o?o:"input"),w="form-control";p?(w+="-plaintext",E=u||"input"):"file"===o?w+="-file":"range"===o?w+="-range":y&&(w=m?null:"form-check-input"),v.size&&b.test(v.size)&&(Object(f.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),i=v.size,delete v.size);var x=Object(f.mapToCssModules)(d()(t,s&&"is-invalid",l&&"is-valid",!!i&&"form-control-"+i,w),a);return("input"===E||u&&"function"===typeof u)&&(v.type=o),v.children&&!p&&"select"!==o&&"string"===typeof E&&"select"!==E&&(Object(f.warnOnce)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete v.children),c.a.createElement(E,Object(n.a)({},v,{ref:g,className:x,"aria-invalid":s}))},t}(c.a.Component);g.propTypes=p,g.defaultProps={type:"text"},t.a=g},836:function(e,t,a){"use strict";var n=a(6),r=a(7),o=a(1),i=a.n(o),l=a(2),c=a.n(l),s=a(5),u=a.n(s),m=a(4),d=["className","cssModule","hidden","widths","tag","check","size","for"],f=c.a.oneOfType([c.a.number,c.a.string]),h=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:f,order:f,offset:f})]),p={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:m.tagPropType,className:c.a.string,cssModule:c.a.object,xs:h,sm:h,md:h,lg:h,xl:h,widths:c.a.array},g={tag:"label",widths:["xs","sm","md","lg","xl"]},v=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},y=function(e){var t=e.className,a=e.cssModule,o=e.hidden,l=e.widths,c=e.tag,s=e.check,f=e.size,h=e.for,p=Object(r.a)(e,d),g=[];l.forEach((function(t,n){var r=e[t];if(delete p[t],r||""===r){var o,i=!n;if(Object(m.isObject)(r)){var l,c=i?"-":"-"+t+"-";o=v(i,t,r.size),g.push(Object(m.mapToCssModules)(u()(((l={})[o]=r.size||""===r.size,l["order"+c+r.order]=r.order||0===r.order,l["offset"+c+r.offset]=r.offset||0===r.offset,l))),a)}else o=v(i,t,r),g.push(o)}}));var y=Object(m.mapToCssModules)(u()(t,!!o&&"sr-only",!!s&&"form-check-label",!!f&&"col-form-label-"+f,g,!!g.length&&"col-form-label"),a);return i.a.createElement(c,Object(n.a)({htmlFor:h},p,{className:y}))};y.propTypes=p,y.defaultProps=g,t.a=y},838:function(e,t,a){"use strict";var n=a(6),r=a(7),o=a(16),i=a(19),l=a(1),c=a.n(l),s=a(2),u=a.n(s),m=a(5),d=a.n(m),f=a(4),h=["className","cssModule","inline","tag","innerRef"],p={children:u.a.node,inline:u.a.bool,tag:f.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(o.a)(a)),a.submit=a.submit.bind(Object(o.a)(a)),a}Object(i.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,o=e.inline,i=e.tag,l=e.innerRef,s=Object(r.a)(e,h),u=Object(f.mapToCssModules)(d()(t,!!o&&"form-inline"),a);return c.a.createElement(i,Object(n.a)({},s,{ref:l,className:u}))},t}(l.Component);g.propTypes=p,g.defaultProps={tag:"form"},t.a=g},844:function(e,t,a){"use strict";var n=a(6),r=a(7),o=a(1),i=a.n(o),l=a(2),c=a.n(l),s=a(5),u=a.n(s),m=a(4),d=["className","cssModule","row","disabled","check","inline","tag"],f={children:c.a.node,row:c.a.bool,check:c.a.bool,inline:c.a.bool,disabled:c.a.bool,tag:m.tagPropType,className:c.a.string,cssModule:c.a.object},h=function(e){var t=e.className,a=e.cssModule,o=e.row,l=e.disabled,c=e.check,s=e.inline,f=e.tag,h=Object(r.a)(e,d),p=Object(m.mapToCssModules)(u()(t,!!o&&"row",c?"form-check":"form-group",!(!c||!s)&&"form-check-inline",!(!c||!l)&&"disabled"),a);return"fieldset"===f&&(h.disabled=l),i.a.createElement(f,Object(n.a)({},h,{className:p}))};h.propTypes=f,h.defaultProps={tag:"div"},t.a=h}}]);
//# sourceMappingURL=151.1239f248.chunk.js.map