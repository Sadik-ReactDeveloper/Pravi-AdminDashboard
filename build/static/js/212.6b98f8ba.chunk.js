(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[212],{2439:function(e,t,a){"use strict";a.r(t);var n=a(46),r=a(10),i=a(11),l=a(13),o=a(12),s=a(1),c=a.n(s),d=a(813),u=a(820),m=a(821),p=a(822),f=a(197),h=a(825),g=a(818),v=a(599),E=a(596),w=a(182),b=a(835),S=(a(45),a(103)),y=a(839),_=a(321),D=a(274),N=a(22),z=(a(836),a(834),a(833)),R=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e,i;Object(r.a)(this,a);for(var l=arguments.length,o=new Array(l),s=0;s<l;s++)o[s]=arguments[s];return(i=t.call.apply(t,[this].concat(o))).state={rowData:[],paginationPageSize:20,currenPageSize:"",CurrentDate:"",SelectedDate:"",defaultColDef:{sortable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:150,filter:!0},{headerName:"po_no",field:"po_no",filter:!0,width:200,cellRendererFramework:function(e){return c.a.createElement("div",null,c.a.createElement("span",null,e.data.po_no))}},{headerName:"order_status",field:"order_status",filter:!0,width:200,cellRendererFramework:function(e){return c.a.createElement("div",null,c.a.createElement(d.a,{color:"success"},e.data.order_status))}},{headerName:"username",field:"username",filter:!0,width:200,cellRendererFramework:function(e){return c.a.createElement("div",null,c.a.createElement("span",null,e.data.username))}},{headerName:"user_mobile_no",field:"product",filter:!0,width:190,cellRendererFramework:function(e){return c.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},c.a.createElement("span",null,e.data.user_mobile_no))}},{headerName:"user_email",field:"user_email",filter:!0,width:200,cellRendererFramework:function(e){return c.a.createElement("div",null,c.a.createElement("span",null,e.data.user_email))}},{headerName:"phone_no",field:"phone_no",filter:!0,width:200,cellRendererFramework:function(e){return c.a.createElement("div",null,c.a.createElement("span",null,e.data.phone_no))}},{headerName:"created_by",field:"created_by",filter:!0,width:200,cellRendererFramework:function(e){return c.a.createElement("div",null,c.a.createElement("span",null,e.data.created_by))}},{headerName:"state_title",field:"state_title",filter:!0,width:200,cellRendererFramework:function(e){return c.a.createElement("div",null,c.a.createElement("span",null,e.data.state_title))}},{headerName:"supplier_name",field:"supplier_name",filter:!0,width:200,cellRendererFramework:function(e){return c.a.createElement("div",null,c.a.createElement("span",null,e.data.supplier_name))}},{headerName:"total",field:"total",filter:!0,width:200,cellRendererFramework:function(e){return c.a.createElement("div",null,c.a.createElement("span",null,e.data.total))}},{headerName:"supplier_city_name",field:"supplier_city_name",filter:!0,width:200,cellRendererFramework:function(e){return c.a.createElement("div",null,c.a.createElement("span",null,e.data.supplier_city_name))}},{headerName:"company_name",field:"company_name",filter:!0,width:200,cellRendererFramework:function(e){return c.a.createElement("div",null,c.a.createElement("span",null,e.data.company_name))}},{headerName:"company_type",field:"company_type",filter:!0,width:200,cellRendererFramework:function(e){return c.a.createElement("div",null,c.a.createElement("span",null,e.data.company_type))}},{headerName:"created_date",field:"created_date",filter:!0,width:200,cellRendererFramework:function(e){return c.a.createElement("div",null,c.a.createElement("span",null,e.data.created_date))}},(e={headerName:"Actions",field:"sortorder"},Object(n.a)(e,"field","transactions"),Object(n.a)(e,"width",150),Object(n.a)(e,"cellRendererFramework",(function(e){return c.a.createElement("div",{className:"actions cursor-pointer"},c.a.createElement(_.a,{className:"mr-50",size:"25px",color:"green",onClick:function(){return N.a.push("/app/freshlist/subscriber/viewSubscriber/".concat(e.data._id))}}))})),e)]},i.onGridReady=function(e){i.gridApi=e.api,i.gridColumnApi=e.columnApi,i.setState({currenPageSize:i.gridApi.paginationGetCurrentPage()+1,getPageSize:i.gridApi.paginationGetPageSize(),totalPages:i.gridApi.paginationGetTotalPages()})},i.updateSearchQuery=function(e){i.gridApi.setQuickFilter(e)},i.filterSize=function(e){i.gridApi&&(i.gridApi.paginationSetPageSize(Number(e)),i.setState({currenPageSize:e,getPageSize:e}))},i.HandleDateWiseReport=function(e){var t;e.preventDefault();var a=JSON.parse(localStorage.getItem("userData"));console.log("object",i.state.SelectedDate);var n=new FormData;n.append("user_id",null===a||void 0===a||null===(t=a.Userinfo)||void 0===t?void 0:t.id),n.append("role","User"),z.a.post("/getUserlistforBudget",n).then((function(e){var t,a;null===e||void 0===e||null===(t=e.data)||void 0===t||null===(a=t.data)||void 0===a||a.users})).catch((function(e){}))},i}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e,t,a,n=this,r=(new Date).toISOString();console.log(r.split("T")[0]),this.setState({CurrentDate:r.split("T")[0]});var i=JSON.parse(localStorage.getItem("userData")),l=null===i||void 0===i||null===(e=i.role)||void 0===e?void 0:e.find((function(e){return"Date Wise"===(null===e||void 0===e?void 0:e.pageName)}));console.log(l),this.setState({Viewpermisson:null===l||void 0===l?void 0:l.permission.includes("View")}),this.setState({Createpermisson:null===l||void 0===l?void 0:l.permission.includes("Create")}),this.setState({Editpermisson:null===l||void 0===l?void 0:l.permission.includes("Edit")}),this.setState({Deletepermisson:null===l||void 0===l?void 0:l.permission.includes("Delete")});var o=new FormData;o.append("user_id",null===i||void 0===i||null===(t=i.Userinfo)||void 0===t?void 0:t.id),o.append("role",null===i||void 0===i||null===(a=i.Userinfo)||void 0===a?void 0:a.role),z.a.post("/reportApi",o).then((function(e){var t,a;console.log(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.data);var r=null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.data;n.setState({rowData:r})})).catch((function(e){}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.rowData,n=t.columnDefs,r=t.defaultColDef;return console.log(a),c.a.createElement(u.a,{className:"app-user-list"},c.a.createElement(m.a,{sm:"12"}),c.a.createElement(m.a,{sm:"12"},c.a.createElement(p.a,null,c.a.createElement(u.a,{className:"m-2"},c.a.createElement(m.a,{sm:"",lg:"",md:""},c.a.createElement("h1",{className:"float-left"},"Date Wise Report")),c.a.createElement(m.a,{lg:"3",sm:"3",md:"3"},c.a.createElement("label",{for:"start"},"Start Date:"),c.a.createElement("input",{onChange:function(t){e.setState({SelectedDate:t.target.value})},className:"form-control",type:"date",id:"start",name:"trip-start",pattern:"\\d{4}-\\d{2}-\\d{2}",min:"2019-01-01",max:this.state.CurrentDate&&this.state.CurrentDate})),c.a.createElement(m.a,{lg:"3",sm:"3",md:"3"},c.a.createElement("label",{for:"start"},"End Date:"),c.a.createElement("input",{onChange:function(t){e.setState({SelectedDate:t.target.value})},className:"form-control",type:"date",id:"start",name:"trip-start",pattern:"\\d{4}-\\d{2}-\\d{2}",min:"2019-01-01",max:this.state.CurrentDate&&this.state.CurrentDate})),c.a.createElement(m.a,null,c.a.createElement(f.a,{className:"mt-2",onClick:function(t){return e.HandleDateWiseReport(t)},color:"primary"},"Submit"))),c.a.createElement(h.a,null,null===this.state.rowData?null:c.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},c.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},c.a.createElement("div",{className:"mb-1"},c.a.createElement(g.a,{className:"p-1 ag-dropdown"},c.a.createElement(v.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,c.a.createElement(D.a,{className:"ml-50",size:15})),c.a.createElement(E.a,{right:!0},c.a.createElement(w.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),c.a.createElement(w.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),c.a.createElement(w.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),c.a.createElement(w.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),c.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},c.a.createElement("div",{className:"table-input mr-1"},c.a.createElement(b.a,{placeholder:"search...",onChange:function(t){return e.updateSearchQuery(t.target.value)},value:this.state.value})),c.a.createElement("div",{className:"export-btn"},c.a.createElement(f.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),c.a.createElement(S.a.Consumer,null,(function(t){return c.a.createElement(y.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:r,columnDefs:n,rowData:a,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===t.state.direction})})))))))}}]),a}(c.a.Component);t.default=R},833:function(e,t,a){"use strict";var n=a(45),r=a.n(n).a.create({baseURL:"https://invoice-o.com/Infinity/api/ApiCommonController"});t.a=r},834:function(e,t,a){},835:function(e,t,a){"use strict";var n=a(6),r=a(7),i=a(16),l=a(18),o=a(1),s=a.n(o),c=a(2),d=a.n(c),u=a(5),m=a.n(u),p=a(4),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],h={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:p.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(i.a)(a)),a.focus=a.focus.bind(Object(i.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,i=e.type,l=e.bsSize,o=e.valid,c=e.invalid,d=e.tag,u=e.addon,h=e.plaintext,g=e.innerRef,v=Object(r.a)(e,f),E=["radio","checkbox"].indexOf(i)>-1,w=new RegExp("\\D","g"),b=d||("select"===i||"textarea"===i?i:"input"),S="form-control";h?(S+="-plaintext",b=d||"input"):"file"===i?S+="-file":"range"===i?S+="-range":E&&(S=u?null:"form-check-input"),v.size&&w.test(v.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=v.size,delete v.size);var y=Object(p.mapToCssModules)(m()(t,c&&"is-invalid",o&&"is-valid",!!l&&"form-control-"+l,S),a);return("input"===b||d&&"function"===typeof d)&&(v.type=i),v.children&&!h&&"select"!==i&&"string"===typeof b&&"select"!==b&&(Object(p.warnOnce)('Input with a type of "'+i+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete v.children),s.a.createElement(b,Object(n.a)({},v,{ref:g,className:y,"aria-invalid":c}))},t}(s.a.Component);g.propTypes=h,g.defaultProps={type:"text"},t.a=g}}]);
//# sourceMappingURL=212.6b98f8ba.chunk.js.map