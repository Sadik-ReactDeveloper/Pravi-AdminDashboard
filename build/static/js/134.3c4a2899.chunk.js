(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[134],{2437:function(e,a,t){"use strict";t.r(a);var n=t(46),i=t(10),l=t(11),r=t(13),s=t(12),o=t(1),c=t.n(o),d=t(820),u=t(821),m=t(822),p=t(843),f=t(838),g=t(197),v=t(825),h=t(818),b=t(599),E=t(596),w=t(182),S=t(835),y=(t(45),t(103)),N=t(839),z=t(321),O=t(274),k=t(22),P=(t(836),t(834),t(833)),j=function(e){Object(r.a)(t,e);var a=Object(s.a)(t);function t(){var e,l;Object(i.a)(this,t);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];return(l=a.call.apply(a,[this].concat(s))).state={rowData:[],userDataList:[],user:"",mainRole:"",paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:150,filter:!0},{headerName:"Name",field:"subscriptions",filter:!0,width:200,cellRendererFramework:function(e){return c.a.createElement("div",null,c.a.createElement("span",null,e.data.subscriptions))}},{headerName:"Product Name",field:"product",filter:!0,width:190,cellRendererFramework:function(e){return c.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},c.a.createElement("span",null,e.data.product))}},{headerName:"How Many Day",field:"validity",filter:!0,width:200,cellRendererFramework:function(e){return c.a.createElement("div",null,c.a.createElement("span",null,e.data.validity))}},{headerName:"How Many Orders Placed",field:"orders",filter:!0,width:200,cellRendererFramework:function(e){return c.a.createElement("div",null,c.a.createElement("span",null,e.data.orders))}},{headerName:"How Many Remaining",field:"remaining",filter:!0,width:200,cellRendererFramework:function(e){return c.a.createElement("div",null,c.a.createElement("span",null,e.data.remaining))}},{headerName:"Status",field:"status",filter:!0,width:150,cellRendererFramework:function(e){return"Block"===e.value?c.a.createElement("div",{className:"badge badge-pill badge-success"},e.data.status):"Unblock"===e.value?c.a.createElement("div",{className:"badge badge-pill badge-warning"},e.data.status):null}},(e={headerName:"Actions",field:"sortorder"},Object(n.a)(e,"field","transactions"),Object(n.a)(e,"width",150),Object(n.a)(e,"cellRendererFramework",(function(e){return c.a.createElement("div",{className:"actions cursor-pointer"},c.a.createElement(z.a,{className:"mr-50",size:"25px",color:"green",onClick:function(){return k.a.push("/app/freshlist/subscriber/viewSubscriber/".concat(e.data._id))}}))})),e)]},l.onGridReady=function(e){l.gridApi=e.api,l.gridColumnApi=e.columnApi,l.setState({currenPageSize:l.gridApi.paginationGetCurrentPage()+1,getPageSize:l.gridApi.paginationGetPageSize(),totalPages:l.gridApi.paginationGetTotalPages()})},l.updateSearchQuery=function(e){l.gridApi.setQuickFilter(e)},l.filterSize=function(e){l.gridApi&&(l.gridApi.paginationSetPageSize(Number(e)),l.setState({currenPageSize:e,getPageSize:e}))},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e,a,t,n,i=this,l=JSON.parse(localStorage.getItem("userData"));console.log("role",l.Userinfo.role),this.setState({mainRole:null===l||void 0===l||null===(e=l.Userinfo)||void 0===e?void 0:e.role});var r=null===l||void 0===l||null===(a=l.role)||void 0===a?void 0:a.find((function(e){return"Budget List"===(null===e||void 0===e?void 0:e.pageName)}));console.log(r),this.setState({Viewpermisson:null===r||void 0===r?void 0:r.permission.includes("View")}),this.setState({Createpermisson:null===r||void 0===r?void 0:r.permission.includes("Create")}),this.setState({Editpermisson:null===r||void 0===r?void 0:r.permission.includes("Edit")}),this.setState({Deletepermisson:null===r||void 0===r?void 0:r.permission.includes("Delete")}),console.log(null===r||void 0===r?void 0:r.permission.includes("View")),console.log(null===r||void 0===r?void 0:r.permission.includes("Create")),console.log(null===r||void 0===r?void 0:r.permission.includes("Edit")),console.log(null===r||void 0===r?void 0:r.permission.includes("Delete"));var s=new FormData;s.append("user_id",null===l||void 0===l||null===(t=l.Userinfo)||void 0===t?void 0:t.id),s.append("role",null===l||void 0===l||null===(n=l.Userinfo)||void 0===n?void 0:n.role),P.a.post("/getuserlist",s).then((function(e){var a,t,n=null===e||void 0===e||null===(a=e.data)||void 0===a||null===(t=a.data)||void 0===t?void 0:t.users;console.log(n),i.setState({userDataList:n})}))}},{key:"render",value:function(){var e,a=this,t=this.state,n=t.rowData,i=t.columnDefs,l=t.defaultColDef;return console.log(n),c.a.createElement(d.a,{className:"app-user-list"},c.a.createElement(u.a,{sm:"12"},c.a.createElement(m.a,null,c.a.createElement(d.a,{className:"m-2"},c.a.createElement(u.a,null,c.a.createElement("h1",{sm:"4",className:""},"Budget List")),"Super Admin"===this.state.mainRole&&c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,null,c.a.createElement("label",{className:"selectClient"},"Assign A Budget"),c.a.createElement("input",{className:"form-control",type:"number"})),c.a.createElement(u.a,null,c.a.createElement(p.a,null,c.a.createElement(f.a,null,"Select A User"),c.a.createElement("select",{required:!0,onChange:function(e){return a.setState({user:e.target.value})},className:"form-control",name:"Select",id:"Select"},c.a.createElement("option",{value:""},"Select A User"),this.state.userDataList&&(null===(e=this.state.userDataList)||void 0===e?void 0:e.map((function(e,a){return c.a.createElement("option",{key:a,value:null===e||void 0===e?void 0:e.id},null===e||void 0===e?void 0:e.username)})))))),c.a.createElement(u.a,null,c.a.createElement(g.a,{color:"primary",className:"mt-1"},"Submit")))),c.a.createElement(v.a,null,null===this.state.rowData?null:c.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},c.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},c.a.createElement("div",{className:"mb-1"},c.a.createElement(h.a,{className:"p-1 ag-dropdown"},c.a.createElement(b.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,c.a.createElement(O.a,{className:"ml-50",size:15})),c.a.createElement(E.a,{right:!0},c.a.createElement(w.a,{tag:"div",onClick:function(){return a.filterSize(20)}},"20"),c.a.createElement(w.a,{tag:"div",onClick:function(){return a.filterSize(50)}},"50"),c.a.createElement(w.a,{tag:"div",onClick:function(){return a.filterSize(100)}},"100"),c.a.createElement(w.a,{tag:"div",onClick:function(){return a.filterSize(134)}},"134")))),c.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},c.a.createElement("div",{className:"table-input mr-1"},c.a.createElement(S.a,{placeholder:"search...",onChange:function(e){return a.updateSearchQuery(e.target.value)},value:this.state.value})),c.a.createElement("div",{className:"export-btn"},c.a.createElement(g.a.Ripple,{color:"primary",onClick:function(){return a.gridApi.exportDataAsCsv()}},"Export as CSV")))),c.a.createElement(y.a.Consumer,null,(function(e){return c.a.createElement(N.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:l,columnDefs:i,rowData:n,onGridReady:a.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:a.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===e.state.direction})})))))))}}]),t}(c.a.Component);a.default=j},833:function(e,a,t){"use strict";var n=t(45),i=t.n(n).a.create({baseURL:"https://invoice-o.com/Infinity/api/ApiCommonController"});a.a=i},834:function(e,a,t){},835:function(e,a,t){"use strict";var n=t(6),i=t(7),l=t(16),r=t(19),s=t(1),o=t.n(s),c=t(2),d=t.n(c),u=t(5),m=t.n(u),p=t(4),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],g={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:p.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},v=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(l.a)(t)),t.focus=t.focus.bind(Object(l.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.type,r=e.bsSize,s=e.valid,c=e.invalid,d=e.tag,u=e.addon,g=e.plaintext,v=e.innerRef,h=Object(i.a)(e,f),b=["radio","checkbox"].indexOf(l)>-1,E=new RegExp("\\D","g"),w=d||("select"===l||"textarea"===l?l:"input"),S="form-control";g?(S+="-plaintext",w=d||"input"):"file"===l?S+="-file":"range"===l?S+="-range":b&&(S=u?null:"form-check-input"),h.size&&E.test(h.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=h.size,delete h.size);var y=Object(p.mapToCssModules)(m()(a,c&&"is-invalid",s&&"is-valid",!!r&&"form-control-"+r,S),t);return("input"===w||d&&"function"===typeof d)&&(h.type=l),h.children&&!g&&"select"!==l&&"string"===typeof w&&"select"!==w&&(Object(p.warnOnce)('Input with a type of "'+l+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),o.a.createElement(w,Object(n.a)({},h,{ref:v,className:y,"aria-invalid":c}))},a}(o.a.Component);v.propTypes=g,v.defaultProps={type:"text"},a.a=v},838:function(e,a,t){"use strict";var n=t(6),i=t(7),l=t(1),r=t.n(l),s=t(2),o=t.n(s),c=t(5),d=t.n(c),u=t(4),m=["className","cssModule","hidden","widths","tag","check","size","for"],p=o.a.oneOfType([o.a.number,o.a.string]),f=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:p,order:p,offset:p})]),g={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:u.tagPropType,className:o.a.string,cssModule:o.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:o.a.array},v={tag:"label",widths:["xs","sm","md","lg","xl"]},h=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},b=function(e){var a=e.className,t=e.cssModule,l=e.hidden,s=e.widths,o=e.tag,c=e.check,p=e.size,f=e.for,g=Object(i.a)(e,m),v=[];s.forEach((function(a,n){var i=e[a];if(delete g[a],i||""===i){var l,r=!n;if(Object(u.isObject)(i)){var s,o=r?"-":"-"+a+"-";l=h(r,a,i.size),v.push(Object(u.mapToCssModules)(d()(((s={})[l]=i.size||""===i.size,s["order"+o+i.order]=i.order||0===i.order,s["offset"+o+i.offset]=i.offset||0===i.offset,s))),t)}else l=h(r,a,i),v.push(l)}}));var b=Object(u.mapToCssModules)(d()(a,!!l&&"sr-only",!!c&&"form-check-label",!!p&&"col-form-label-"+p,v,!!v.length&&"col-form-label"),t);return r.a.createElement(o,Object(n.a)({htmlFor:f},g,{className:b}))};b.propTypes=g,b.defaultProps=v,a.a=b},843:function(e,a,t){"use strict";var n=t(6),i=t(7),l=t(1),r=t.n(l),s=t(2),o=t.n(s),c=t(5),d=t.n(c),u=t(4),m=["className","cssModule","row","disabled","check","inline","tag"],p={children:o.a.node,row:o.a.bool,check:o.a.bool,inline:o.a.bool,disabled:o.a.bool,tag:u.tagPropType,className:o.a.string,cssModule:o.a.object},f=function(e){var a=e.className,t=e.cssModule,l=e.row,s=e.disabled,o=e.check,c=e.inline,p=e.tag,f=Object(i.a)(e,m),g=Object(u.mapToCssModules)(d()(a,!!l&&"row",o?"form-check":"form-group",!(!o||!c)&&"form-check-inline",!(!o||!s)&&"disabled"),t);return"fieldset"===p&&(f.disabled=s),r.a.createElement(p,Object(n.a)({},f,{className:g}))};f.propTypes=p,f.defaultProps={tag:"div"},a.a=f}}]);
//# sourceMappingURL=134.3c4a2899.chunk.js.map