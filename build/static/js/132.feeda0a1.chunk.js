(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[132],{1089:function(e,a,t){"use strict";var n=t(6),s=t(7),r=t(1),l=t.n(r),c=t(2),o=t.n(c),i=t(5),u=t.n(i),m=t(4),p=["className","cssModule","tag","size"],f={tag:m.tagPropType,size:o.a.string,className:o.a.string,cssModule:o.a.object},d=function(e){var a=e.className,t=e.cssModule,r=e.tag,c=e.size,o=Object(s.a)(e,p),i=Object(m.mapToCssModules)(u()(a,"input-group",c?"input-group-"+c:null),t);return l.a.createElement(r,Object(n.a)({},o,{className:i}))};d.propTypes=f,d.defaultProps={tag:"div"},a.a=d},2402:function(e,a,t){"use strict";t.r(a),t.d(a,"AddBatch",(function(){return j}));var n=t(46),s=t(10),r=t(11),l=t(13),c=t(12),o=t(1),i=t.n(o),u=t(822),m=t(820),p=t(821),f=t(197),d=t(825),h=t(840),b=t(838),g=t(835),y=t(1089),v=t(974),E=(t(22),t(833)),O=t(62),j=function(e){Object(l.a)(t,e);var a=Object(c.a)(t);function t(e){var r;return Object(s.a)(this,t),(r=a.call(this,e)).changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault(),console.log(r.state),E.a.post("/admin/addbatch",r.state).then((function(e){console.log(e),r.props.history.push("/app/freshlist/batch/batchList")})).catch((function(e){console.log(e)}))},r.state={batch:"",rack_no:"",shelf_life:"",expiry_date:"",stock:"",notify:""},r}return Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(u.a,null,i.a.createElement(m.a,{className:"m-2"},i.a.createElement(p.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Batch")),i.a.createElement(p.a,null,i.a.createElement(O.b,{render:function(e){var a=e.history;return i.a.createElement(f.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/freshlist/batch/batchList")}},"Back")}}))),i.a.createElement(d.a,null,i.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(m.a,{className:"mb-2"},i.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},i.a.createElement(b.a,null,"Batch"),i.a.createElement(g.a,{type:"number",placeholder:"Batch",name:"batch",value:this.state.batch,onChange:this.changeHandler})),i.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},i.a.createElement(b.a,null,"Rack Number"),i.a.createElement(g.a,{type:"number",placeholder:"Rack Number",name:"rack_no",value:this.state.rack_no,onChange:this.changeHandler})),i.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},i.a.createElement(b.a,null,"Shelf Life"),i.a.createElement(y.a,null,i.a.createElement(v.a,null,"Days"),i.a.createElement(g.a,{type:"number",placeholder:"Shelf Life",name:"shelf_life",value:this.state.shelf_life,onChange:this.changeHandler}))),i.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},i.a.createElement(b.a,null,"Expiry Date"),i.a.createElement(g.a,{type:"text",placeholder:"Expiry Date",name:"expiry_date",value:this.state.expiry_date,onChange:this.changeHandler})),i.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},i.a.createElement(b.a,null,"Stock"),i.a.createElement(g.a,{type:"number",placeholder:"stock",name:"stock",value:this.state.stock,onChange:this.changeHandler})),i.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},i.a.createElement(b.a,null,"Notify"),i.a.createElement(g.a,{type:"number",placeholder:"Notify",name:"notify",value:this.state.notify,onChange:this.changeHandler}))),i.a.createElement(m.a,null,i.a.createElement(f.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add"))))))}}]),t}(o.Component);a.default=j},833:function(e,a,t){"use strict";var n=t(45),s=t.n(n).a.create({baseURL:"https://invoice-o.com/Infinity/api/ApiCommonController"});a.a=s},835:function(e,a,t){"use strict";var n=t(6),s=t(7),r=t(16),l=t(19),c=t(1),o=t.n(c),i=t(2),u=t.n(i),m=t(5),p=t.n(m),f=t(4),d=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],h={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:f.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,l=e.bsSize,c=e.valid,i=e.invalid,u=e.tag,m=e.addon,h=e.plaintext,b=e.innerRef,g=Object(s.a)(e,d),y=["radio","checkbox"].indexOf(r)>-1,v=new RegExp("\\D","g"),E=u||("select"===r||"textarea"===r?r:"input"),O="form-control";h?(O+="-plaintext",E=u||"input"):"file"===r?O+="-file":"range"===r?O+="-range":y&&(O=m?null:"form-check-input"),g.size&&v.test(g.size)&&(Object(f.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=g.size,delete g.size);var j=Object(f.mapToCssModules)(p()(a,i&&"is-invalid",c&&"is-valid",!!l&&"form-control-"+l,O),t);return("input"===E||u&&"function"===typeof u)&&(g.type=r),g.children&&!h&&"select"!==r&&"string"===typeof E&&"select"!==E&&(Object(f.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),o.a.createElement(E,Object(n.a)({},g,{ref:b,className:j,"aria-invalid":i}))},a}(o.a.Component);b.propTypes=h,b.defaultProps={type:"text"},a.a=b},838:function(e,a,t){"use strict";var n=t(6),s=t(7),r=t(1),l=t.n(r),c=t(2),o=t.n(c),i=t(5),u=t.n(i),m=t(4),p=["className","cssModule","hidden","widths","tag","check","size","for"],f=o.a.oneOfType([o.a.number,o.a.string]),d=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:f,order:f,offset:f})]),h={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:m.tagPropType,className:o.a.string,cssModule:o.a.object,xs:d,sm:d,md:d,lg:d,xl:d,widths:o.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},y=function(e){var a=e.className,t=e.cssModule,r=e.hidden,c=e.widths,o=e.tag,i=e.check,f=e.size,d=e.for,h=Object(s.a)(e,p),b=[];c.forEach((function(a,n){var s=e[a];if(delete h[a],s||""===s){var r,l=!n;if(Object(m.isObject)(s)){var c,o=l?"-":"-"+a+"-";r=g(l,a,s.size),b.push(Object(m.mapToCssModules)(u()(((c={})[r]=s.size||""===s.size,c["order"+o+s.order]=s.order||0===s.order,c["offset"+o+s.offset]=s.offset||0===s.offset,c))),t)}else r=g(l,a,s),b.push(r)}}));var y=Object(m.mapToCssModules)(u()(a,!!r&&"sr-only",!!i&&"form-check-label",!!f&&"col-form-label-"+f,b,!!b.length&&"col-form-label"),t);return l.a.createElement(o,Object(n.a)({htmlFor:d},h,{className:y}))};y.propTypes=h,y.defaultProps=b,a.a=y},840:function(e,a,t){"use strict";var n=t(6),s=t(7),r=t(16),l=t(19),c=t(1),o=t.n(c),i=t(2),u=t.n(i),m=t(5),p=t.n(m),f=t(4),d=["className","cssModule","inline","tag","innerRef"],h={children:u.a.node,inline:u.a.bool,tag:f.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,l=e.tag,c=e.innerRef,i=Object(s.a)(e,d),u=Object(f.mapToCssModules)(p()(a,!!r&&"form-inline"),t);return o.a.createElement(l,Object(n.a)({},i,{ref:c,className:u}))},a}(c.Component);b.propTypes=h,b.defaultProps={tag:"form"},a.a=b},974:function(e,a,t){"use strict";var n=t(6),s=t(7),r=t(1),l=t.n(r),c=t(2),o=t.n(c),i=t(5),u=t.n(i),m=t(4),p=["className","cssModule","tag"],f={tag:m.tagPropType,className:o.a.string,cssModule:o.a.object},d=function(e){var a=e.className,t=e.cssModule,r=e.tag,c=Object(s.a)(e,p),o=Object(m.mapToCssModules)(u()(a,"input-group-text"),t);return l.a.createElement(r,Object(n.a)({},c,{className:o}))};d.propTypes=f,d.defaultProps={tag:"span"},a.a=d}}]);
//# sourceMappingURL=132.feeda0a1.chunk.js.map