(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[258],{2441:function(e,a,t){"use strict";t.r(a);var n=t(46),i=t(10),r=t(11),l=t(13),o=t(12),s=t(1),c=t.n(s),d=t(820),u=t(821),m=t(822),p=t(825),f=t(818),g=t(599),v=t(596),h=t(182),b=t(835),E=t(197),w=(t(45),t(103)),S=t(839),z=t(321),y=t(274),N=t(22),P=(t(836),t(834),function(e){Object(l.a)(t,e);var a=Object(o.a)(t);function t(){var e,r;Object(i.a)(this,t);for(var l=arguments.length,o=new Array(l),s=0;s<l;s++)o[s]=arguments[s];return(r=a.call.apply(a,[this].concat(o))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:150,filter:!0},{headerName:"Name",field:"subscriptions",filter:!0,width:200,cellRendererFramework:function(e){return c.a.createElement("div",null,c.a.createElement("span",null,e.data.subscriptions))}},{headerName:"Product Name",field:"product",filter:!0,width:190,cellRendererFramework:function(e){return c.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},c.a.createElement("span",null,e.data.product))}},{headerName:"How Many Day",field:"validity",filter:!0,width:200,cellRendererFramework:function(e){return c.a.createElement("div",null,c.a.createElement("span",null,e.data.validity))}},{headerName:"How Many Orders Placed",field:"orders",filter:!0,width:200,cellRendererFramework:function(e){return c.a.createElement("div",null,c.a.createElement("span",null,e.data.orders))}},{headerName:"How Many Remaining",field:"remaining",filter:!0,width:200,cellRendererFramework:function(e){return c.a.createElement("div",null,c.a.createElement("span",null,e.data.remaining))}},{headerName:"Status",field:"status",filter:!0,width:150,cellRendererFramework:function(e){return"Block"===e.value?c.a.createElement("div",{className:"badge badge-pill badge-success"},e.data.status):"Unblock"===e.value?c.a.createElement("div",{className:"badge badge-pill badge-warning"},e.data.status):null}},(e={headerName:"Actions",field:"sortorder"},Object(n.a)(e,"field","transactions"),Object(n.a)(e,"width",150),Object(n.a)(e,"cellRendererFramework",(function(e){return c.a.createElement("div",{className:"actions cursor-pointer"},c.a.createElement(z.a,{className:"mr-50",size:"25px",color:"green",onClick:function(){return N.a.push("/app/freshlist/subscriber/viewSubscriber/".concat(e.data._id))}}))})),e)]},r.onGridReady=function(e){r.gridApi=e.api,r.gridColumnApi=e.columnApi,r.setState({currenPageSize:r.gridApi.paginationGetCurrentPage()+1,getPageSize:r.gridApi.paginationGetPageSize(),totalPages:r.gridApi.paginationGetTotalPages()})},r.updateSearchQuery=function(e){r.gridApi.setQuickFilter(e)},r.filterSize=function(e){r.gridApi&&(r.gridApi.paginationSetPageSize(Number(e)),r.setState({currenPageSize:e,getPageSize:e}))},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e,a,t,n=JSON.parse(localStorage.getItem("userData"));console.log(n.role);var i=null===n||void 0===n||null===(e=n.role)||void 0===e?void 0:e.find((function(e){return"Branch Wise"===(null===e||void 0===e?void 0:e.pageName)}));console.log(i),this.setState({Viewpermisson:null===i||void 0===i?void 0:i.permission.includes("View")}),this.setState({Createpermisson:null===i||void 0===i?void 0:i.permission.includes("Create")}),this.setState({Editpermisson:null===i||void 0===i?void 0:i.permission.includes("Edit")}),this.setState({Deletepermisson:null===i||void 0===i?void 0:i.permission.includes("Delete")}),console.log(null===i||void 0===i?void 0:i.permission.includes("View")),console.log(null===i||void 0===i?void 0:i.permission.includes("Create")),console.log(null===i||void 0===i?void 0:i.permission.includes("Edit")),console.log(null===i||void 0===i?void 0:i.permission.includes("Delete"));var r=new FormData;r.append("user_id",null===n||void 0===n||null===(a=n.Userinfo)||void 0===a?void 0:a.id),r.append("role",null===n||void 0===n||null===(t=n.Userinfo)||void 0===t?void 0:t.role)}},{key:"render",value:function(){var e=this,a=this.state,t=a.rowData,n=a.columnDefs,i=a.defaultColDef;return console.log(t),c.a.createElement(d.a,{className:"app-user-list"},c.a.createElement(u.a,{sm:"12"}),c.a.createElement(u.a,{sm:"12"},c.a.createElement(m.a,null,c.a.createElement(d.a,{className:"m-2"},c.a.createElement(u.a,null,c.a.createElement("h1",{sm:"6",className:"float-left"},"Branch Wise Report")),c.a.createElement(u.a,null,c.a.createElement("label",{for:"cars"},"Select Branch :"),c.a.createElement("select",{className:"form-control",name:"cars",id:"cars"},c.a.createElement("option",{value:"volvo"},"Volvo"),c.a.createElement("option",{value:"saab"},"Saab"),c.a.createElement("option",{value:"mercedes"},"Mercedes"),c.a.createElement("option",{value:"audi"},"Audi")))),c.a.createElement(p.a,null,null===this.state.rowData?null:c.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},c.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},c.a.createElement("div",{className:"mb-1"},c.a.createElement(f.a,{className:"p-1 ag-dropdown"},c.a.createElement(g.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,c.a.createElement(y.a,{className:"ml-50",size:15})),c.a.createElement(v.a,{right:!0},c.a.createElement(h.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),c.a.createElement(h.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),c.a.createElement(h.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),c.a.createElement(h.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),c.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},c.a.createElement("div",{className:"table-input mr-1"},c.a.createElement(b.a,{placeholder:"search...",onChange:function(a){return e.updateSearchQuery(a.target.value)},value:this.state.value})),c.a.createElement("div",{className:"export-btn"},c.a.createElement(E.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),c.a.createElement(w.a.Consumer,null,(function(a){return c.a.createElement(S.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:i,columnDefs:n,rowData:t,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===a.state.direction})})))))))}}]),t}(c.a.Component));a.default=P},834:function(e,a,t){},835:function(e,a,t){"use strict";var n=t(6),i=t(7),r=t(16),l=t(19),o=t(1),s=t.n(o),c=t(2),d=t.n(c),u=t(5),m=t.n(u),p=t(4),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],g={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:p.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},v=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,l=e.bsSize,o=e.valid,c=e.invalid,d=e.tag,u=e.addon,g=e.plaintext,v=e.innerRef,h=Object(i.a)(e,f),b=["radio","checkbox"].indexOf(r)>-1,E=new RegExp("\\D","g"),w=d||("select"===r||"textarea"===r?r:"input"),S="form-control";g?(S+="-plaintext",w=d||"input"):"file"===r?S+="-file":"range"===r?S+="-range":b&&(S=u?null:"form-check-input"),h.size&&E.test(h.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=h.size,delete h.size);var z=Object(p.mapToCssModules)(m()(a,c&&"is-invalid",o&&"is-valid",!!l&&"form-control-"+l,S),t);return("input"===w||d&&"function"===typeof d)&&(h.type=r),h.children&&!g&&"select"!==r&&"string"===typeof w&&"select"!==w&&(Object(p.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),s.a.createElement(w,Object(n.a)({},h,{ref:v,className:z,"aria-invalid":c}))},a}(s.a.Component);v.propTypes=g,v.defaultProps={type:"text"},a.a=v}}]);
//# sourceMappingURL=258.8aa8bb65.chunk.js.map