(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[150],{2280:function(e,a,t){"use strict";t.r(a),t.d(a,"AddProduct",(function(){return N}));var n=t(46),l=t(10),s=t(11),r=t(13),c=t(12),i=t(1),o=t.n(i),d=t(821),m=t(819),u=t(820),p=t(824),f=t(838),g=t(844),h=t(836),b=t(834),E=t(811),y=t(197),v=(t(22),t(832)),O=t(842),j=t.n(O),N=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(e){var s;return Object(l.a)(this,t),(s=a.call(this,e)).onChangeHandler1=function(e){s.setState({selectedFile1:e.target.files[0]}),s.setState({selectedName1:e.target.files[0].name}),console.log(e.target.files[0])},s.onChangeHandler2=function(e){s.setState({selectedFile2:e.target.files[0]}),s.setState({selectedName2:e.target.files[0].name}),console.log(e.target.files[0])},s.onChangeHandler3=function(e){s.setState({selectedFile3:e.target.files[0]}),s.setState({selectedName3:e.target.files[0].name}),console.log(e.target.files[0])},s.onChangeHandler4=function(e){s.setState({selectedFile4:e.target.files[0]}),s.setState({selectedName4:e.target.files[0].name}),console.log(e.target.files[0])},s.changeHandler1=function(e){s.setState({status:e.target.value})},s.changeHandler=function(e){s.setState(Object(n.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault();var a=new FormData;a.append("title",s.state.category_name),a.append("veriety",s.state.variety),a.append("price",s.state.Price),a.append("description",s.state.description),a.append("shipping_fee",s.state.shipmentfee),a.append("tax_rate",s.state.taxrate),a.append("tags",s.state.Tags),a.append("image",s.state.selectedFile1),v.a.post("/addproduct",a).then((function(e){console.log(e),e.data.success&&j()("Success!","You Data iS been Submitted","success")})).catch((function(e){console.log(e)}))},s.state={category_name:"",Price:"",description:"",variety:"",shipmentfee:"",Tags:"",taxrate:"",status:"",selectedFile1:null,selectedName1:"",selectedFile2:null,selectedName2:"",selectedFile3:null,selectedName3:"",selectedFile4:null,selectedName4:""},s}return Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(d.a,null,o.a.createElement("h1",{className:"p-2 "},"Product Upload"),o.a.createElement(m.a,{className:"m-2"},o.a.createElement(u.a,null,o.a.createElement("h2",null,"Basic Information"))),o.a.createElement(p.a,null,o.a.createElement(f.a,{className:"m-1",onSubmit:this.submitHandler},o.a.createElement(m.a,{className:"mb-2"},o.a.createElement(u.a,{lg:"6",md:"6"},o.a.createElement(g.a,null,o.a.createElement(h.a,null,"Title"),o.a.createElement(b.a,{type:"text",placeholder:"Title",name:"category_name",bsSize:"lg",value:this.state.category_name,onChange:this.changeHandler}))),o.a.createElement(u.a,{lg:"6",md:"6"},o.a.createElement(g.a,null,o.a.createElement(h.a,null,"Description"),o.a.createElement(b.a,{type:"text",placeholder:"Description ...",name:"description",bsSize:"lg",value:this.state.description,onChange:this.changeHandler}))),o.a.createElement(u.a,{lg:"6",md:"6"},o.a.createElement(g.a,null,o.a.createElement(h.a,null," PRICE (\u20b9)"),o.a.createElement(b.a,{type:"number",placeholder:"Amount In Number",name:"Price",bsSize:"lg",value:this.state.Price,onChange:this.changeHandler}))),o.a.createElement(u.a,{lg:"6",md:"6"},o.a.createElement(g.a,null,o.a.createElement(h.a,null,"Variety"),o.a.createElement(b.a,{type:"text",placeholder:"Variety...",name:"variety",bsSize:"lg",value:this.state.variety,onChange:this.changeHandler}))),o.a.createElement(u.a,{lg:"6",md:"6"},o.a.createElement(g.a,null,o.a.createElement(h.a,null,"SHIPING FEE(\u20b9)"),o.a.createElement(b.a,{type:"number",placeholder:"Number...",name:"shipmentfee",bsSize:"lg",value:this.state.shipmentfee,onChange:this.changeHandler}))),o.a.createElement(u.a,{lg:"6",md:"6"},o.a.createElement(g.a,null,o.a.createElement(h.a,null,"TAX RATE (%)"),o.a.createElement(b.a,{type:"number",placeholder:"Tax in Percentage",name:"taxrate",bsSize:"lg",value:this.state.taxrate,onChange:this.changeHandler}))),o.a.createElement(u.a,{lg:"6",md:"6"},o.a.createElement(g.a,null,o.a.createElement(h.a,null,"TAGS"),o.a.createElement(b.a,{type:"text",placeholder:"Type here...",name:"Tags",bsSize:"lg",value:this.state.Tags,onChange:this.changeHandler})))),o.a.createElement(m.a,null,o.a.createElement(m.a,{className:"my-2 mx-2"},o.a.createElement("h2",null,"Media & Published")),o.a.createElement(m.a,null,o.a.createElement(u.a,{lg:"3",md:"3"},o.a.createElement(g.a,null,o.a.createElement(E.a,{type:"file",onChange:this.onChangeHandler3}))),o.a.createElement(u.a,{lg:"3",md:"3"},o.a.createElement(g.a,null,o.a.createElement(E.a,{type:"file",onChange:this.onChangeHandler3}))),o.a.createElement(u.a,{lg:"3",md:"3"},o.a.createElement(g.a,null,o.a.createElement(E.a,{type:"file",onChange:this.onChangeHandler3}))),o.a.createElement(u.a,{lg:"3",md:"3"},o.a.createElement(g.a,null,o.a.createElement(E.a,{type:"file",onChange:this.onChangeHandler3}))))),o.a.createElement(m.a,null,o.a.createElement(y.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add Product"))))))}}]),t}(i.Component);a.default=N},832:function(e,a,t){"use strict";var n=t(45),l=t.n(n).a.create({baseURL:"https://invoice-o.com/Infinity/api/ApiCommonController"});a.a=l},834:function(e,a,t){"use strict";var n=t(6),l=t(7),s=t(16),r=t(19),c=t(1),i=t.n(c),o=t(2),d=t.n(o),m=t(5),u=t.n(m),p=t(4),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],g={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:p.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.focus=t.focus.bind(Object(s.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.type,r=e.bsSize,c=e.valid,o=e.invalid,d=e.tag,m=e.addon,g=e.plaintext,h=e.innerRef,b=Object(l.a)(e,f),E=["radio","checkbox"].indexOf(s)>-1,y=new RegExp("\\D","g"),v=d||("select"===s||"textarea"===s?s:"input"),O="form-control";g?(O+="-plaintext",v=d||"input"):"file"===s?O+="-file":"range"===s?O+="-range":E&&(O=m?null:"form-check-input"),b.size&&y.test(b.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=b.size,delete b.size);var j=Object(p.mapToCssModules)(u()(a,o&&"is-invalid",c&&"is-valid",!!r&&"form-control-"+r,O),t);return("input"===v||d&&"function"===typeof d)&&(b.type=s),b.children&&!g&&"select"!==s&&"string"===typeof v&&"select"!==v&&(Object(p.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),i.a.createElement(v,Object(n.a)({},b,{ref:h,className:j,"aria-invalid":o}))},a}(i.a.Component);h.propTypes=g,h.defaultProps={type:"text"},a.a=h},836:function(e,a,t){"use strict";var n=t(6),l=t(7),s=t(1),r=t.n(s),c=t(2),i=t.n(c),o=t(5),d=t.n(o),m=t(4),u=["className","cssModule","hidden","widths","tag","check","size","for"],p=i.a.oneOfType([i.a.number,i.a.string]),f=i.a.oneOfType([i.a.bool,i.a.string,i.a.number,i.a.shape({size:p,order:p,offset:p})]),g={children:i.a.node,hidden:i.a.bool,check:i.a.bool,size:i.a.string,for:i.a.string,tag:m.tagPropType,className:i.a.string,cssModule:i.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:i.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},b=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},E=function(e){var a=e.className,t=e.cssModule,s=e.hidden,c=e.widths,i=e.tag,o=e.check,p=e.size,f=e.for,g=Object(l.a)(e,u),h=[];c.forEach((function(a,n){var l=e[a];if(delete g[a],l||""===l){var s,r=!n;if(Object(m.isObject)(l)){var c,i=r?"-":"-"+a+"-";s=b(r,a,l.size),h.push(Object(m.mapToCssModules)(d()(((c={})[s]=l.size||""===l.size,c["order"+i+l.order]=l.order||0===l.order,c["offset"+i+l.offset]=l.offset||0===l.offset,c))),t)}else s=b(r,a,l),h.push(s)}}));var E=Object(m.mapToCssModules)(d()(a,!!s&&"sr-only",!!o&&"form-check-label",!!p&&"col-form-label-"+p,h,!!h.length&&"col-form-label"),t);return r.a.createElement(i,Object(n.a)({htmlFor:f},g,{className:E}))};E.propTypes=g,E.defaultProps=h,a.a=E},838:function(e,a,t){"use strict";var n=t(6),l=t(7),s=t(16),r=t(19),c=t(1),i=t.n(c),o=t(2),d=t.n(o),m=t(5),u=t.n(m),p=t(4),f=["className","cssModule","inline","tag","innerRef"],g={children:d.a.node,inline:d.a.bool,tag:p.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),className:d.a.string,cssModule:d.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.submit=t.submit.bind(Object(s.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.inline,r=e.tag,c=e.innerRef,o=Object(l.a)(e,f),d=Object(p.mapToCssModules)(u()(a,!!s&&"form-inline"),t);return i.a.createElement(r,Object(n.a)({},o,{ref:c,className:d}))},a}(c.Component);h.propTypes=g,h.defaultProps={tag:"form"},a.a=h},844:function(e,a,t){"use strict";var n=t(6),l=t(7),s=t(1),r=t.n(s),c=t(2),i=t.n(c),o=t(5),d=t.n(o),m=t(4),u=["className","cssModule","row","disabled","check","inline","tag"],p={children:i.a.node,row:i.a.bool,check:i.a.bool,inline:i.a.bool,disabled:i.a.bool,tag:m.tagPropType,className:i.a.string,cssModule:i.a.object},f=function(e){var a=e.className,t=e.cssModule,s=e.row,c=e.disabled,i=e.check,o=e.inline,p=e.tag,f=Object(l.a)(e,u),g=Object(m.mapToCssModules)(d()(a,!!s&&"row",i?"form-check":"form-group",!(!i||!o)&&"form-check-inline",!(!i||!c)&&"disabled"),t);return"fieldset"===p&&(f.disabled=c),r.a.createElement(p,Object(n.a)({},f,{className:g}))};f.propTypes=p,f.defaultProps={tag:"div"},a.a=f}}]);
//# sourceMappingURL=150.dbf363bf.chunk.js.map