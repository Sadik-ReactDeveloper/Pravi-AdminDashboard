(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[279],{2412:function(e,a,t){"use strict";t.r(a);var n=t(31),l=t(40),r=t(1),c=t.n(r),o=t(823),u=t(821),i=t(822),m=t(826),s=t(838),d=t(844),p=t(837),v=t(813),E=t(835),g=t(198),b=(t(22),t(189)),h=t(943),f=t.n(h),S=t(841),y=t.n(S),O=(t(902),t(990),[]);a.default=function(){var e=Object(r.useState)(null),a=Object(l.a)(e,2),t=(a[0],a[1]),h=Object(r.useState)(null),S=Object(l.a)(h,2),j=(S[0],S[1]),C=Object(r.useState)(null),_=Object(l.a)(C,2),N=(_[0],_[1]),w=Object(r.useState)(null),x=Object(l.a)(w,2),D=(x[0],x[1]),q=Object(r.useState)(""),k=Object(l.a)(q,2),P=k[0],R=k[1],F=Object(r.useState)(""),A=Object(l.a)(F,2),I=A[0],B=A[1],J=Object(r.useState)([]),K=Object(l.a)(J,2),T=K[0],U=K[1],G=Object(r.useState)([]),V=Object(l.a)(G,2),z=V[0],L=V[1],M=Object(r.useState)([]),Y=Object(l.a)(M,2),H=(Y[0],Y[1],Object(r.useState)([])),Q=Object(l.a)(H,2),W=Q[0],X=Q[1],Z=Object(r.useState)(""),$=Object(l.a)(Z,2),ee=$[0],ae=$[1],te=Object(r.useState)(""),ne=Object(l.a)(te,2),le=ne[0],re=ne[1],ce=Object(r.useState)(""),oe=Object(l.a)(ce,2),ue=oe[0],ie=oe[1],me=Object(r.useState)(""),se=Object(l.a)(me,2),de=se[0],pe=se[1],ve=Object(r.useState)(""),Ee=Object(l.a)(ve,2),ge=Ee[0],be=Ee[1],he=Object(r.useState)(""),fe=Object(l.a)(he,2),Se=fe[0],ye=fe[1],Oe=Object(r.useState)(""),je=Object(l.a)(Oe,2),Ce=je[0],_e=je[1],Ne=Object(r.useState)(""),we=Object(l.a)(Ne,2),xe=we[0],De=we[1],qe=Object(r.useState)(""),ke=Object(l.a)(qe,2),Pe=ke[0],Re=ke[1],Fe=Object(r.useState)(""),Ae=Object(l.a)(Fe,2),Ie=Ae[0],Be=Ae[1],Je=Object(r.useState)(""),Ke=Object(l.a)(Je,2),Te=Ke[0],Ue=Ke[1],Ge=Object(r.useState)(""),Ve=Object(l.a)(Ge,2),ze=Ve[0],Le=Ve[1],Me=Object(r.useState)(""),Ye=Object(l.a)(Me,2),He=Ye[0],Qe=Ye[1],We=Object(r.useState)(""),Xe=Object(l.a)(We,2),Ze=Xe[0],$e=Xe[1],ea=Object(r.useState)(!1),aa=Object(l.a)(ea,2),ta=(aa[0],aa[1],Object(r.useState)([])),na=Object(l.a)(ta,2),la=na[0],ra=na[1],ca=Object(r.useState)([]),oa=Object(l.a)(ca,2),ua=oa[0],ia=(oa[1],Object(r.useState)("")),ma=Object(l.a)(ia,2),sa=ma[0],da=ma[1],pa=Object(r.useState)(""),va=Object(l.a)(pa,2),Ea=va[0],ga=va[1],ba=Object(r.useState)(""),ha=Object(l.a)(ba,2),fa=ha[0],Sa=ha[1],ya=Object(r.useState)(""),Oa=Object(l.a)(ya,2),ja=Oa[0],Ca=Oa[1],_a=Object(r.useState)(""),Na=Object(l.a)(_a,2),wa=Na[0],xa=Na[1],Da=Object(r.useState)(""),qa=Object(l.a)(Da,2),ka=qa[0],Pa=qa[1],Ra=Object(r.useState)(""),Fa=Object(l.a)(Ra,2),Aa=(Fa[0],Fa[1],Object(r.useState)("")),Ia=Object(l.a)(Aa,2),Ba=Ia[0],Ja=Ia[1],Ka=Object(r.useState)([]),Ta=Object(l.a)(Ka,2),Ua=Ta[0],Ga=Ta[1],Va=Object(r.useState)(""),za=Object(l.a)(Va,2),La=(za[0],za[1]);Object(r.useEffect)((function(){var e,a,n,l=JSON.parse(localStorage.getItem("userData")),r=null===l||void 0===l||null===(e=l.role)||void 0===e?void 0:e.find((function(e){return"Create Account"===(null===e||void 0===e?void 0:e.pageName)}));t(null===r||void 0===r?void 0:r.permission.includes("View")),N(null===r||void 0===r?void 0:r.permission.includes("Create")),j(null===r||void 0===r?void 0:r.permission.includes("Edit")),D(null===r||void 0===r?void 0:r.permission.includes("Delete"));var c=new FormData;c.append("user_id",null===l||void 0===l||null===(a=l.Userinfo)||void 0===a?void 0:a.id),c.append("role",null===l||void 0===l||null===(n=l.Userinfo)||void 0===n?void 0:n.role),b.a.post("/getrolelistdropdown",c).then((function(e){var a,t,n=Object.values(null===(a=e.data)||void 0===a||null===(t=a.data)||void 0===t?void 0:t.roles);Ga(n)})),b.a.get("/getallstates").then((function(e){var a;U(null===(a=e.data)||void 0===a?void 0:a.states)})).catch((function(e){console.log(e.response.data)}))}),[]);return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement(o.a,null,c.a.createElement(u.a,{className:"m-2"},c.a.createElement(i.a,null,c.a.createElement("h1",{className:"float-left"},"Add here"))),c.a.createElement("div",{className:"container "}),c.a.createElement(m.a,null,c.a.createElement(s.a,{className:"m-1",onSubmit:function(e){var a;e.preventDefault();var t=JSON.parse(localStorage.getItem("userData")),l=Object(n.a)(new Set(O)),r=Object(n.a)(new Set(ua)),c=new FormData;c.append("created_by",null===t||void 0===t||null===(a=t.Userinfo)||void 0===a?void 0:a.id),c.append("password",sa),c.append("full_name",P),c.append("gstin_no",I),c.append("username",Ba),c.append("city",ee),c.append("mobile",de),c.append("email",Ea),c.append("status",fa),c.append("role",ja),c.append("company_name",wa),c.append("company_type",ka),c.append("place_supply",xe),c.append("billing_street",Te),c.append("billing_city",ee),c.append("billing_state",Pe),c.append("billing_country",ge),c.append("billing_pincode",He),c.append("shipping_street",ze),c.append("shipping_city",ue),c.append("shipping_state",Ie),c.append("shipping_country",Se),c.append("shipping_pincode",Ze),c.append("phone_no",Ce),r.length>0?c.append("state_id",la.toString()):c.append("state_id",W),c.append("city_id",l),b.a.post("/createuser",c).then((function(e){var a;(null===(a=e.data)||void 0===a?void 0:a.success)&&(y()("Success!","Submitted SuccessFull!","success"),Ca(""),Sa(""),ga(""),La(""),_e(""),Ja(""),R(""),da(""),ye(""),Be(""),ie(""),Le(""),$e(""))})).catch((function(e){console.log(e)}))}},c.a.createElement(u.a,{className:"mb-2"},c.a.createElement(i.a,{lg:"6",md:"6"},c.a.createElement(d.a,null,c.a.createElement(p.a,null," Select Role*"),c.a.createElement(v.a,{required:!0,id:"AssignRole",type:"select",name:"AssignRole",value:ja,onChange:function(e){return Ca(e.target.value)}},c.a.createElement("option",{value:""},"--Select Role--"),Ua&&(null===Ua||void 0===Ua?void 0:Ua.map((function(e,a){return c.a.createElement("option",{key:a,value:e},e)})))))),c.a.createElement(i.a,{lg:"6",md:"6",sm:"12"},c.a.createElement(d.a,null,c.a.createElement(p.a,null,"Name *"),c.a.createElement(E.a,{required:!0,type:"text",placeholder:"Enter Your Name",name:"fullname",value:P,onChange:function(e){return R(e.target.value)}}))),c.a.createElement(i.a,{lg:"6",md:"6"},c.a.createElement(d.a,null,c.a.createElement(p.a,null,"Display Code *"),c.a.createElement(E.a,{required:!0,type:"text",placeholder:"Enter Your Name",name:"UserName",value:Ba,onChange:function(e){return Ja(e.target.value)}}))),c.a.createElement(i.a,{lg:"6",md:"6"},c.a.createElement(d.a,null,c.a.createElement(p.a,null,"Mobile Number *"),c.a.createElement(E.a,{required:!0,type:"number",maxLength:12,onKeyDown:function(e){return["e","E","+","-"].includes(e.key)&&e.preventDefault()},size:10,min:0,placeholder:"0123456789",name:"Mobile_no",value:de,onChange:function(e){return pe(e.target.value)}}))),c.a.createElement(i.a,{lg:"6",md:"6"},c.a.createElement(d.a,null,c.a.createElement(p.a,null,"Email *"),c.a.createElement(E.a,{required:!0,type:"email",placeholder:"abcd@gmail.com...",name:"email",value:Ea,onChange:function(e){return ga(e.target.value)}}))),c.a.createElement(i.a,{lg:"6",md:"6"},c.a.createElement(d.a,null,c.a.createElement(p.a,null,"Password"),c.a.createElement(E.a,{required:!0,type:"password",placeholder:"Enter password",name:"password",value:sa,onChange:function(e){return da(e.target.value)}}))),c.a.createElement(i.a,{lg:"6",md:"6"},c.a.createElement(d.a,null,c.a.createElement(p.a,null,"Company Name"),c.a.createElement(E.a,{required:!0,type:"text",placeholder:"Enter CompanyName",name:"CompanyName",value:wa,onChange:function(e){return xa(e.target.value)}}))),c.a.createElement(i.a,{lg:"6",md:"6"},c.a.createElement(d.a,null,c.a.createElement(p.a,null,"Phone Number "),c.a.createElement(E.a,{required:!0,type:"number",onKeyDown:function(e){return["e","E","+","-"].includes(e.key)&&e.preventDefault()},min:0,maxLength:12,size:10,placeholder:"0123456789",name:"Phone_no",value:Ce,onChange:function(e){return _e(e.target.value)}}))),c.a.createElement(i.a,{lg:"6",md:"6"},c.a.createElement(d.a,null,c.a.createElement(p.a,null,"Company Type"),c.a.createElement(E.a,{required:!0,type:"text",placeholder:"Enter Companytype",name:"Companytype",value:ka,onChange:function(e){return Pa(e.target.value)}}))),c.a.createElement(i.a,{lg:"6",md:"6"},c.a.createElement(d.a,null,c.a.createElement(p.a,null,"GSTIN"),c.a.createElement(E.a,{required:!0,type:"text",placeholder:"Enter GSTIN No.",name:"GSTIN",value:I,onChange:function(e){return B(e.target.value)}}))),c.a.createElement(i.a,{lg:"6",md:"6"},c.a.createElement(d.a,null,c.a.createElement(u.a,null),c.a.createElement(p.a,{for:"cars"}," State *"),"supplier"===ja?c.a.createElement(c.a.Fragment,null,c.a.createElement(f.a,{required:!0,showCheckbox:"true",isObject:"false",options:T,onSelect:function(e,a){if(e.length)for(var t=0;t<e.length;t++)ua.push(e[t].id);var l=e.map((function(e){return e.id}));ra(l);var r=Object(n.a)(new Set(ua));if(1===r.length){var c=r[0],o=new FormData;o.append("state_id",c),b.a.post("/getcity",o).then((function(e){var a;L(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.cities)})).catch((function(e){console.log(e)}))}else L([])},onRemove:function(e,a){var t=e.map((function(e){return e.id}));ra(t)},displayValue:"state_title"})):c.a.createElement(c.a.Fragment,null,c.a.createElement("select",{required:!0,name:"SelectedState",value:W,onChange:function(e){var a=new FormData;X(e.target.value),a.append("state_id",e.target.value),b.a.post("/getcity",a).then((function(e){var a;L(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.cities)})).catch((function(e){console.log(e)}))},className:"form-control"},c.a.createElement("option",{value:"volvo"},"--Select State--"),T&&(null===T||void 0===T?void 0:T.map((function(e,a){return c.a.createElement("option",{key:a,value:null===e||void 0===e?void 0:e.id},null===e||void 0===e?void 0:e.state_title)}))))))),c.a.createElement(i.a,{lg:"6",md:"6"},c.a.createElement(p.a,{for:"cars"},"City * "),c.a.createElement(f.a,{required:!0,options:z,onSelect:function(e,a){if(console.log(e),e.length)for(var t=0;t<e.length;t++)O.push(e[t].id)},onRemove:function(e,a){console.log(e),console.log(a)},displayValue:"name"})),"supplier"===ja?c.a.createElement(c.a.Fragment,null,c.a.createElement(i.a,{lg:"6",md:"6"},c.a.createElement(d.a,null,c.a.createElement(p.a,null,"Place of Supply"),c.a.createElement(E.a,{required:!0,type:"text",placeholder:"Enter Place_of_Supply",name:"Place_of_Supply",value:xe,onChange:function(e){return De(e.target.value)}})))):null),c.a.createElement("hr",null),c.a.createElement(u.a,null,c.a.createElement(i.a,{className:"mt-2",lg:"6",md:"6",sm:"12"},c.a.createElement("h4",{className:"mt-5 pb-2"},"Billing Address :"),c.a.createElement(i.a,{className:"",lg:"12",md:"12",sm:"12"},c.a.createElement(d.a,null,c.a.createElement(p.a,{for:"cars"},"Choose Country"),c.a.createElement("select",{placeholder:"Enter City",name:"B_Country",value:ge,onChange:function(e){return be(e.target.value)},className:"form-control"},c.a.createElement("option",{value:"volvo"},"--Select Country--"),c.a.createElement("option",{value:"India"},"India")))),c.a.createElement(i.a,{lg:"12",md:"12",sm:"12"},c.a.createElement(d.a,null,c.a.createElement(p.a,{for:"cars"},"Choose State"),c.a.createElement("select",{name:"B_State",value:Pe,onChange:function(e){console.log(e.target.value),Re(e.target.value);var a=new FormData;a.append("state_id",e.target.value),b.a.post("/getcity",a).then((function(e){var a;L(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.cities)})).catch((function(e){console.log(e)}))},className:"form-control"},c.a.createElement("option",{value:"volvo"},"--Select State--"),T&&(null===T||void 0===T?void 0:T.map((function(e,a){return c.a.createElement("option",{key:a,value:null===e||void 0===e?void 0:e.id},null===e||void 0===e?void 0:e.state_title)})))))),c.a.createElement(i.a,{lg:"12",md:"12",sm:"12"},c.a.createElement(d.a,null,c.a.createElement(d.a,null,c.a.createElement(p.a,{for:"cars"},"Choose City"),c.a.createElement("select",{placeholder:"Enter City",name:"B_City",value:ee,onChange:function(e){return ae(e.target.value)},className:"form-control"},c.a.createElement("option",{value:"volvo"},"--Select City--"),z&&(null===z||void 0===z?void 0:z.map((function(e,a){return c.a.createElement("option",{key:a,value:null===e||void 0===e?void 0:e.id},null===e||void 0===e?void 0:e.name)}))))))),c.a.createElement(i.a,{lg:"12",md:"12",sm:"12"},c.a.createElement(d.a,null,c.a.createElement(p.a,null,"Street"),c.a.createElement(E.a,{required:!0,type:"text",placeholder:"Enter Street",name:"B_Street",value:Te,onChange:function(e){return Ue(e.target.value)}}))),c.a.createElement(i.a,{lg:"12",md:"12",sm:"12"},c.a.createElement(d.a,null,c.a.createElement(p.a,null,"PinCode"),c.a.createElement(E.a,{required:!0,type:"number",onKeyDown:function(e){return["e","E","+","-"].includes(e.key)&&e.preventDefault()},min:0,placeholder:"Enter PinCode",name:"B_PinCode",value:He,onChange:function(e){return Qe(e.target.value)}})))),c.a.createElement(i.a,{lg:"6",md:"6",sm:"12"},c.a.createElement("hr",null),c.a.createElement(u.a,null,c.a.createElement(i.a,{className:"ml-2",lg:"6",md:"6",sm:"12"},c.a.createElement(E.a,{name:"check",onChange:function(e){var a;a=e.target.checked,re(a),a?(ye(ge),Be(Pe),ie(ee),Le(Te),$e(He)):(ye(""),Be(""),ie(""),Le(""),$e(""))},style:{height:"15px",width:"20px"},type:"checkbox"})),c.a.createElement(i.a,{lg:"6",md:"6",sm:"6",className:"ml-3"},c.a.createElement("h5",null," Same as Billing Address "))),c.a.createElement("h4",{className:"py-2"},"Shipping Address :"),c.a.createElement(i.a,{lg:"12",md:"12",sm:"12"},c.a.createElement(d.a,null,c.a.createElement(p.a,{for:"cars"},"Choose Country"),c.a.createElement("select",{placeholder:"Enter City",name:"S_Country",disabled:!!le,value:Se,onChange:function(e){return ye(e.target.value)},className:"form-control"},c.a.createElement("option",{value:"volvo"},"--Select Country--"),c.a.createElement("option",{value:"India"},"India")))),c.a.createElement(i.a,{lg:"12",md:"12",sm:"12"},c.a.createElement(d.a,null,c.a.createElement(p.a,{for:"cars"},"Choose State"),c.a.createElement("select",{name:"S_State",value:Ie,onChange:function(e){Be(e.target.value);var a=new FormData;a.append("state_id",e.target.value),b.a.post("/getcity",a).then((function(e){var a,t;console.log(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.cities),L(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.cities)})).catch((function(e){console.log(e)}))},className:"form-control"},c.a.createElement("option",{value:"volvo"},"--Select State--"),T&&(null===T||void 0===T?void 0:T.map((function(e,a){return c.a.createElement("option",{key:a,value:null===e||void 0===e?void 0:e.id},null===e||void 0===e?void 0:e.state_title)})))))),c.a.createElement(i.a,{lg:"12",md:"12",sm:"12"},c.a.createElement(p.a,{for:"cars"},"Choose City"),c.a.createElement(d.a,null,c.a.createElement("select",{placeholder:"Enter City",name:"S_City",value:ue,onChange:function(e){return ie(e.target.value)},className:"form-control"},c.a.createElement("option",{value:"volvo"},"--Select City--"),z&&(null===z||void 0===z?void 0:z.map((function(e,a){return c.a.createElement("option",{key:a,value:null===e||void 0===e?void 0:e.id},null===e||void 0===e?void 0:e.name)})))))),c.a.createElement(i.a,{lg:"12",md:"12",sm:"12"},c.a.createElement(d.a,null,c.a.createElement(p.a,null,"Street"),c.a.createElement(E.a,{required:!0,disabled:!!le,type:"text",placeholder:"Enter Street",name:"S_Street",value:ze,onChange:function(e){return Le(e.target.value)}}))),c.a.createElement(i.a,{lg:"12",md:"12",sm:"12"},c.a.createElement(d.a,null,c.a.createElement(p.a,null,"PinCode"),c.a.createElement(E.a,{required:!0,disabled:!!le,type:"number",placeholder:"Enter PinCode",onKeyDown:function(e){return["e","E","+","-"].includes(e.key)&&e.preventDefault()},min:0,name:"S_PinCode",value:Ze,onChange:function(e){return $e(e.target.value)}}))))),c.a.createElement(u.a,{className:"mt-2"},c.a.createElement(i.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(p.a,{className:""},c.a.createElement("h4",null,"Status")),c.a.createElement("div",{className:"form-label-group",onChange:function(e){return Sa(e.target.value)}},c.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),c.a.createElement("span",{style:{marginRight:"20px"}},"Active"),c.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Deactive"}),c.a.createElement("span",{style:{marginRight:"3px"}},"Deactive")))),c.a.createElement(u.a,null,c.a.createElement(g.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mt-2 mx-2"},"Submit")))))))}},902:function(e,a,t){}}]);
//# sourceMappingURL=279.a7d99ce0.chunk.js.map