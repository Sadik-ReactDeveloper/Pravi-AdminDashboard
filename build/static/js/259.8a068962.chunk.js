(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[259],{2438:function(e,t,a){"use strict";a.r(t);var n=a(46),i=a(10),r=a(11),l=a(13),s=a(12),o=a(1),c=a.n(o),u=a(197),d=a(820),m=a(821),p=a(822),g=a(835),f=a(825),h=a(818),v=a(599),b=a(596),E=a(182),S=(a(45),a(103)),w=a(839),z=a(321),N=a(274),y=a(22),R=(a(836),a(834),[{id:1,userName:"Abc",currentbudget:5e3,remainingBudget:2e3,requiestedTopup:1500},{id:2,userName:"bcvd",currentbudget:7e3,remainingBudget:3e3,requiestedTopup:1800}]),D=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){var e,r;Object(i.a)(this,a);for(var l=arguments.length,s=new Array(l),o=0;o<l;o++)s[o]=arguments[o];return(r=t.call.apply(t,[this].concat(s))).state={rowData:[],RoleDefine:"",IsTopup:!1,paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:150,filter:!0},{headerName:"TopUp",field:"username",filter:!0,width:"200",cellRendererFramework:function(e){return c.a.createElement("div",null,"Super Admin"===r.state.RoleDefine&&c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,{className:"btn ",color:"primary",size:"sm"},"Top Up")))}},{headerName:"UserName",field:"username",filter:!0,width:200,cellRendererFramework:function(e){return c.a.createElement("div",null,c.a.createElement("span",null,e.data.userName))}},{headerName:"Currentbudget",field:"product",filter:!0,width:190,cellRendererFramework:function(e){return c.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},c.a.createElement("span",null,e.data.currentbudget))}},{headerName:"remainingBudget",field:"validity",filter:!0,width:200,cellRendererFramework:function(e){return c.a.createElement("div",null,c.a.createElement("span",null,e.data.remainingBudget))}},{headerName:"requiestedTopup",field:"requiestedTopup",filter:!0,width:200,cellRendererFramework:function(e){return c.a.createElement("div",null,c.a.createElement("span",null,e.data.requiestedTopup))}},{headerName:"Status",field:"status",filter:!0,width:150,cellRendererFramework:function(e){return"Block"===e.value?c.a.createElement("div",{className:"badge badge-pill badge-success"},e.data.status):"Unblock"===e.value?c.a.createElement("div",{className:"badge badge-pill badge-warning"},e.data.status):null}},(e={headerName:"Actions",field:"sortorder"},Object(n.a)(e,"field","transactions"),Object(n.a)(e,"width",150),Object(n.a)(e,"cellRendererFramework",(function(e){return c.a.createElement("div",{className:"actions cursor-pointer"},c.a.createElement(z.a,{className:"mr-50",size:"25px",color:"green",onClick:function(){return y.a.push("/app/freshlist/subscriber/viewSubscriber/".concat(e.data._id))}}))})),e)]},r.handleTopup=function(){r.setState({IsTopup:!0})},r.handSubmit=function(){alert("Data Submited"),r.setState({IsTopup:!1})},r.onGridReady=function(e){r.gridApi=e.api,r.gridColumnApi=e.columnApi,r.setState({currenPageSize:r.gridApi.paginationGetCurrentPage()+1,getPageSize:r.gridApi.paginationGetPageSize(),totalPages:r.gridApi.paginationGetTotalPages()})},r.updateSearchQuery=function(e){r.gridApi.setQuickFilter(e)},r.filterSize=function(e){r.gridApi&&(r.gridApi.paginationSetPageSize(Number(e)),r.setState({currenPageSize:e,getPageSize:e}))},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e,t,a,n=JSON.parse(localStorage.getItem("userData"));this.setState({RoleDefine:n.Userinfo.role});var i=null===n||void 0===n||null===(e=n.role)||void 0===e?void 0:e.find((function(e){return"Budget Assignment"===(null===e||void 0===e?void 0:e.pageName)}));this.setState({rowData:R}),console.log(R),console.log(i),this.setState({Viewpermisson:null===i||void 0===i?void 0:i.permission.includes("View")}),this.setState({Createpermisson:null===i||void 0===i?void 0:i.permission.includes("Create")}),this.setState({Editpermisson:null===i||void 0===i?void 0:i.permission.includes("Edit")}),this.setState({Deletepermisson:null===i||void 0===i?void 0:i.permission.includes("Delete")}),console.log(null===i||void 0===i?void 0:i.permission.includes("View")),console.log(null===i||void 0===i?void 0:i.permission.includes("Create")),console.log(null===i||void 0===i?void 0:i.permission.includes("Edit")),console.log(null===i||void 0===i?void 0:i.permission.includes("Delete"));var r=new FormData;r.append("user_id",null===n||void 0===n||null===(t=n.Userinfo)||void 0===t?void 0:t.id),r.append("role",null===n||void 0===n||null===(a=n.Userinfo)||void 0===a?void 0:a.role)}},{key:"render",value:function(){var e=this,t=this.state,a=t.rowData,n=t.columnDefs,i=t.defaultColDef;return c.a.createElement(d.a,{className:"app-user-list"},c.a.createElement(m.a,{sm:"12"}),c.a.createElement(m.a,{sm:"12"},c.a.createElement(p.a,null,c.a.createElement(d.a,{className:"m-2"},c.a.createElement(m.a,null,c.a.createElement("h1",null,"Budget Assignement")),"User"===this.state.RoleDefine?c.a.createElement(c.a.Fragment,null,0==this.state.IsTopup?c.a.createElement(c.a.Fragment,null,c.a.createElement(m.a,null,c.a.createElement(u.a,{color:"primary",className:"float-right",onClick:this.handleTopup},"TopUp Request"))):c.a.createElement(c.a.Fragment,null,c.a.createElement(m.a,null,c.a.createElement(g.a,{className:"form-control",type:"number",placeholder:"Enter Top up"})),c.a.createElement(m.a,null,c.a.createElement(u.a,{className:"float-right",color:"primary",onClick:this.handSubmit},"Submit")))):null),c.a.createElement(f.a,null,null===this.state.rowData?null:c.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},c.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},c.a.createElement("div",{className:"mb-1"},c.a.createElement(h.a,{className:"p-1 ag-dropdown"},c.a.createElement(v.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,c.a.createElement(N.a,{className:"ml-50",size:15})),c.a.createElement(b.a,{right:!0},c.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),c.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),c.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),c.a.createElement(E.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),c.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},c.a.createElement("div",{className:"table-input mr-1"},c.a.createElement(g.a,{placeholder:"search...",onChange:function(t){return e.updateSearchQuery(t.target.value)},value:this.state.value})),c.a.createElement("div",{className:"export-btn"},c.a.createElement(u.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),c.a.createElement(S.a.Consumer,null,(function(t){return c.a.createElement(w.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:i,columnDefs:n,rowData:a,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===t.state.direction})})))))))}}]),a}(c.a.Component);t.default=D},834:function(e,t,a){},835:function(e,t,a){"use strict";var n=a(6),i=a(7),r=a(16),l=a(19),s=a(1),o=a.n(s),c=a(2),u=a.n(c),d=a(5),m=a.n(d),p=a(4),g=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],f={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.focus=a.focus.bind(Object(r.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.type,l=e.bsSize,s=e.valid,c=e.invalid,u=e.tag,d=e.addon,f=e.plaintext,h=e.innerRef,v=Object(i.a)(e,g),b=["radio","checkbox"].indexOf(r)>-1,E=new RegExp("\\D","g"),S=u||("select"===r||"textarea"===r?r:"input"),w="form-control";f?(w+="-plaintext",S=u||"input"):"file"===r?w+="-file":"range"===r?w+="-range":b&&(w=d?null:"form-check-input"),v.size&&E.test(v.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=v.size,delete v.size);var z=Object(p.mapToCssModules)(m()(t,c&&"is-invalid",s&&"is-valid",!!l&&"form-control-"+l,w),a);return("input"===S||u&&"function"===typeof u)&&(v.type=r),v.children&&!f&&"select"!==r&&"string"===typeof S&&"select"!==S&&(Object(p.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete v.children),o.a.createElement(S,Object(n.a)({},v,{ref:h,className:z,"aria-invalid":c}))},t}(o.a.Component);h.propTypes=f,h.defaultProps={type:"text"},t.a=h}}]);
//# sourceMappingURL=259.8a068962.chunk.js.map