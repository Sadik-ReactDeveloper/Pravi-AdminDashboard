import React from "react";
import {
  Card,
  CardBody,
  Input,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Button,
  CardTitle,
  CardText,
  Label,
  FormGroup,
} from "reactstrap";
import axios from "axios";
import axiosConfig from "../../../../axiosConfig";
import ReactHtmlParser from "react-html-parser";
import { ContextLayout } from "../../../../utility/context/Layout";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import { Eye, Trash2, ChevronDown, Edit, CloudLightning } from "react-feather";

import { history } from "../../../../history";
import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../../assets/scss/pages/users.scss";
import { FaWallet, Facart, FaCartArrowDown, FaBoxOpen } from "react-icons/fa";
import "moment-timezone";
import { Route } from "react-router-dom";
import { timers } from "jquery";

class Placeorder extends React.Component {
  state = {
    product: [],
    rowData: [],
    Typelist: [],
    SelectedProduct: [],
    Type: "",
    Addedbtn: false,
    Viewpermisson: null,
    Editpermisson: null,
    Createpermisson: null,
    Deletepermisson: null,
    paginationPageSize: 20,
    currenPageSize: "",
    getPageSize: "",
    defaultColDef: {
      sortable: true,
      editable: true,
      resizable: true,
      rowSelection: "multiple",
      suppressMenu: true,
    },
    columnDefs: [
      {
        headerName: "UID",
        valueGetter: "node.rowIndex + 1",
        field: "node.rowIndex + 1",
        // checkboxSelection: true,
        width: 150,
        filter: true,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <input
                  className="addinarray"
                  onClick={(e) => {
                    console.log(e.target.checked);
                    if (e.target.checked) {
                      console.log(this.state.SelectedProduct);
                      this.setState({
                        SelectedProduct: this.state.SelectedProduct.concat(
                          params?.data
                        ),
                      });
                    } else {
                      let data = this.state.SelectedProduct.filter((ele, i) => {
                        if (ele?.id === params?.data?.id) {
                          this.state.SelectedProduct.splice(i, 1);
                        }
                      });
                    }
                  }}
                  type="checkbox"
                />
              </div>
            </div>
          );
        },
      },

      {
        headerName: "PRODUCT Image",
        field: "product",
        filter: "agSetColumnFilter",
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                {/* <span>{params.data?.title}</span> */}
                {params?.data?.product_images ? (
                  <img
                    style={{ borderRadius: "12px" }}
                    width="60px"
                    height="40px"
                    src={params?.data?.product_images[0]}
                    alt="image"
                  />
                ) : (
                  "No Image "
                )}
              </div>
            </div>
          );
        },
      },
      {
        headerName: "brand_name",
        field: "brand_name",
        filter: "agSetColumnFilter",
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{params.data?.brand_name}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "product_type",
        field: "product_type",
        filter: "agSetColumnFilter",
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{params.data?.product_type}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "PRODUCT",
        field: "title",
        filter: "agSetColumnFilter",
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{params.data?.title}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "CATEGORY",
        field: "category_name",
        filter: "agSetColumnFilter",
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{params.data?.category_name}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "Description",
        field: "description",
        filter: "agSetColumnFilter",
        width: 120,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{ReactHtmlParser(params.data?.description)}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "PRICE",
        field: "price",
        filter: "agSetColumnFilter",
        width: 120,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{params.data?.price}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "DiscountPrice",
        field: "discountprice",
        filter: "agSetColumnFilter",
        width: 120,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{params.data?.discountprice}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "Shipping Fee",
        field: "shipping_fee",
        filter: "agSetColumnFilter",
        width: 120,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{params.data?.shipping_fee}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "Tax Rate",
        field: "tax_rate",
        filter: "agSetColumnFilter",
        width: 120,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{params.data?.tax_rate}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "Tags",
        field: "tags",
        filter: "agSetColumnFilter",
        width: 120,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{params.data?.tags}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "STOCK",
        field: "stock",

        filter: "agSetColumnFilter",
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{ReactHtmlParser(params.data?.stock)}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "Created ",
        field: "created_date",
        filter: "agSetColumnFilter",
        width: 120,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>
                  {ReactHtmlParser(params.data?.created_date?.split(" ")[0])}
                </span>
              </div>
            </div>
          );
        },
      },
      // {
      //   headerName: "SALES",
      //   field: "pisces",
      //   filter: "agSetColumnFilter",
      //   width: 120,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="d-flex align-items-center cursor-pointer">
      //         <div className="">
      //           <span>{ReactHtmlParser(params.data.pisces)}</span>
      //         </div>
      //       </div>
      //     );
      //   },
      // },
      {
        headerName: "Actions",
        field: "transactions",
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="actions cursor-pointer">
              {/* {this.state.Viewpermisson && (
                <Eye
                  className="mr-50"
                  size="25px"
                  color="green"
                  onClick={() =>
                    history.push(
                      `/app/freshlist/order/viewAll/${params.data.id}`
                    )
                  }
                />
              )} */}
              {this.state.Editpermisson && (
                <Edit
                  className="mr-50"
                  size="25px"
                  color="blue"
                  onClick={() =>
                    this.props.history.push({
                      pathname: `/app/freshlist/house/editmyproduct/${params.data?.id}`,
                      state: params.data,
                    })
                  }
                />
              )}
              {this.state.Deletepermisson && (
                <Trash2
                  className="mr-50"
                  size="25px"
                  color="Red"
                  onClick={() => {
                    let selectedData = this.gridApi.getSelectedRows();

                    this.runthisfunction(params.data?.id);
                    this.gridApi.updateRowData({ remove: selectedData });
                  }}
                />
              )}
            </div>
          );
        },
      },
    ],
  };
  componentDidUpdate() {
    console.log(this.state.SelectedProduct);
  }
  async componentDidMount() {
    let pageparmission = JSON.parse(localStorage.getItem("userData"));

    let newparmisson = pageparmission?.role?.find(
      (value) => value?.pageName === "Place Order"
    );

    this.setState({ Viewpermisson: newparmisson?.permission.includes("View") });
    this.setState({
      Createpermisson: newparmisson?.permission.includes("Create"),
    });
    this.setState({
      Editpermisson: newparmisson?.permission.includes("Edit"),
    });
    this.setState({
      Deletepermisson: newparmisson?.permission.includes("Delete"),
    });

    const formdata = new FormData();
    formdata.append("user_id", pageparmission?.Userinfo?.id);
    formdata.append("role", pageparmission?.Userinfo?.role);

    await axiosConfig
      .post("/productlistapi", formdata)
      .then((response) => {
        this.setState({ rowData: response.data.data });
        // console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error.response);
      });

    axiosConfig.post("/producttypelistview", formdata).then((response) => {
      let Typelist = response.data.data;
      // console.log(Typelist);
      this.setState({ Typelist });
    });
  }

  async runthisfunction(id) {
    console.log(id);
    let data = new FormData();
    data.append("id", id);
    await axiosConfig
      .post("/deleteproduct", data)
      .then((resp) => {
        console.log(resp);
      })
      .then((response) => {
        console.log(response);
      });
  }

  onGridReady = (params) => {
    this.gridApi = params.api;
    // console.log(params.api);
    this.gridColumnApi = params.columnApi;
    this.setState({
      currenPageSize: this.gridApi.paginationGetCurrentPage() + 1,
      getPageSize: this.gridApi.paginationGetPageSize(),
      totalPages: this.gridApi.paginationGetTotalPages(),
    });
  };

  updateSearchQuery = (val) => {
    this.gridApi.setQuickFilter(val);
  };

  filterSize = (val) => {
    if (this.gridApi) {
      this.gridApi.paginationSetPageSize(Number(val));
      this.setState({
        currenPageSize: val,
        getPageSize: val,
      });
    }
  };
  render() {
    const { rowData, columnDefs, defaultColDef } = this.state;
    return (
      <>
        <Row className="app-user-list">
          <Col sm="12">
            <Card>
              <Row className="m-2">
                <Col>
                  <h1 col-sm-6 className="float-left">
                    Place Order
                  </h1>
                </Col>

                <Col lg="3">
                  {this.state.SelectedProduct &&
                  this.state.SelectedProduct.length > 0 ? (
                    <Route
                      render={({ history }) => (
                        <Button
                          className="float-right mx-2"
                          color="primary"
                          onClick={() => {
                            localStorage.setItem(
                              "SelectedProduct",
                              JSON.stringify(this.state.SelectedProduct)
                            );
                            history.push("/app/freshlist/order/Selectedorder");
                          }}
                        >
                          Add
                        </Button>
                      )}
                    />
                  ) : null}

                  <Route
                    render={({ history }) => (
                      <Button
                        className="float-right mx-2"
                        color="primary"
                        onClick={() => history.push("/app/freshlist/order/all")}
                      >
                        Back
                      </Button>
                    )}
                  />
                </Col>
              </Row>
              <CardBody>
                {this.state.rowData === null ? null : (
                  <div className="ag-theme-material w-100 my-2 ag-grid-table">
                    <div className="d-flex flex-wrap justify-content-between align-items-center">
                      <div className="mb-1">
                        <UncontrolledDropdown className="p-1 ag-dropdown">
                          <DropdownToggle tag="div">
                            {this.gridApi
                              ? this.state.currenPageSize
                              : "" * this.state.getPageSize -
                                (this.state.getPageSize - 1)}{" "}
                            -{" "}
                            {this.state.rowData.length -
                              this.state.currenPageSize *
                                this.state.getPageSize >
                            0
                              ? this.state.currenPageSize *
                                this.state.getPageSize
                              : this.state.rowData.length}{" "}
                            of {this.state.rowData.length}
                            <ChevronDown className="ml-50" size={15} />
                          </DropdownToggle>
                          <DropdownMenu right>
                            <DropdownItem
                              tag="div"
                              onClick={() => this.filterSize(20)}
                            >
                              20
                            </DropdownItem>
                            <DropdownItem
                              tag="div"
                              onClick={() => this.filterSize(50)}
                            >
                              50
                            </DropdownItem>
                            <DropdownItem
                              tag="div"
                              onClick={() => this.filterSize(100)}
                            >
                              100
                            </DropdownItem>
                            <DropdownItem
                              tag="div"
                              onClick={() => this.filterSize(134)}
                            >
                              134
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </div>
                      <div className="d-flex flex-wrap justify-content-between mb-1">
                        <div className=" mr-1">
                          <FormGroup>
                            <label className=""> Choose Type *</label>
                          </FormGroup>
                        </div>
                        <div className=" mr-1">
                          <FormGroup>
                            <select
                              onChange={(e) => {
                                this.setState({ Type: e.target.value });
                                this.updateSearchQuery(e.target.value);
                              }}
                              className="form-control"
                              name="Select"
                              id="Select"
                            >
                              <option value="">--Select Type--</option>
                              {this.state.Typelist &&
                                this.state.Typelist?.map((val, i) => (
                                  <option key={i} value={val?.product_type}>
                                    {val?.product_type}
                                  </option>
                                ))}
                            </select>
                          </FormGroup>
                        </div>
                        <div className="table-input mr-1">
                          <Input
                            placeholder="search..."
                            onChange={(e) =>
                              this.updateSearchQuery(e.target.value)
                            }
                            value={this.state.value}
                          />
                        </div>
                        <div className="export-btn">
                          <Button.Ripple
                            color="primary"
                            onClick={() => this.gridApi.exportDataAsCsv()}
                          >
                            Export as CSV
                          </Button.Ripple>
                        </div>
                      </div>
                    </div>
                    <ContextLayout.Consumer>
                      {(context) => (
                        <AgGridReact
                          gridOptions={{}}
                          rowSelection="multiple"
                          defaultColDef={defaultColDef}
                          columnDefs={columnDefs}
                          rowData={rowData}
                          onGridReady={this.onGridReady}
                          colResizeDefault={"shift"}
                          animateRows={true}
                          floatingFilter={false}
                          pagination={true}
                          paginationPageSize={this.state.paginationPageSize}
                          pivotPanelShow="always"
                          enableRtl={context.state.direction === "rtl"}
                        />
                      )}
                    </ContextLayout.Consumer>
                  </div>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}
export default Placeorder;

// import React from "react";
// import {
//   Card,
//   CardBody,
//   Input,
//   Row,
//   Col,
//   UncontrolledDropdown,
//   DropdownMenu,
//   DropdownItem,
//   DropdownToggle,
//   Button,
//   CardTitle,
//   CardText,
//   Label,
//   Form,
//   FormGroup,
// } from "reactstrap";

// import axiosConfig from "../../../../axiosConfig";
// import ReactHtmlParser from "react-html-parser";
// import { ContextLayout } from "../../../../utility/context/Layout";
// import { AgGridReact } from "ag-grid-react";
// import "ag-grid-community/dist/styles/ag-grid.css";
// import { Trash2, ChevronDown, AtSign, Eye, UserPlus } from "react-feather";
// import { history } from "../../../../history";
// import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
// import "../../../../assets/scss/pages/users.scss";
// import { FaWallet, Facart, FaCartArrowDown, FaBoxOpen } from "react-icons/fa";
// import "moment-timezone";
// import { Route } from "react-router-dom";
// // import AssignClientCompoent from "./AssignClientCompoent";
// import swal from "sweetalert";

// class Placeorder extends React.Component {
//   state = {
//     product: [],
//     rowData: [],
//     GetCategory: [],
//     Clientlist: [],
//     Brandlist: [],
//     Typelist: [],
//     ProductListData: [],
//     userdata: {},
//     category_name: "",
//     Clientname: "",
//     DeliveryDate: "",
//     Product: "",
//     showProduct: false,
//     Type: "",
//     assign_to_client: "",
//     Brand: "",
//     category: "",
//     Viewpermisson: null,
//     Editpermisson: null,
//     Createpermisson: null,
//     Deletepermisson: null,
//     paginationPageSize: 20,
//     currenPageSize: "",
//     getPageSize: "",
//     defaultColDef: {
//       sortable: true,
//       // editable: true,
//       // resizable: true,
//       suppressMenu: true,
//     },
//     columnDefs: [
//       {
//         headerName: "UID",
//         filter: true,

//         valueGetter: "node.rowIndex + 1",
//         field: "node.rowIndex + 1",
//         // checkboxSelection: true,
//         width: 150,
//       },

//       {
//         headerName: "PRODUCT Image",
//         field: "product",
//         filter: "agSetColumnFilter",
//         width: 150,
//         cellRendererFramework: (params) => {
//           return (
//             <div className="d-flex align-items-center cursor-pointer">
//               <div className="">
//                 {/* <span>{params.data?.title}</span> */}

//                 {params?.data?.product_images ? (
//                   <>
//                     <img
//                       style={{ borderRadius: "12px" }}
//                       width="60px"
//                       height="40px"
//                       src={params?.data?.product_images[0]}
//                       alt="image"
//                     />
//                   </>
//                 ) : (
//                   "NO Image"
//                 )}
//               </div>
//             </div>
//           );
//         },
//       },
//       {
//         headerName: "PRODUCT",
//         field: "title",
//         filter: true,
//         width: 150,

//         cellRendererFramework: (params) => {
//           return (
//             <div className="d-flex align-items-center cursor-pointer">
//               <div className="">
//                 <span>{params.data?.title}</span>
//               </div>
//             </div>
//           );
//         },
//       },
//       {
//         headerName: "CATEGORY",
//         field: "category_name",
//         filter: "agSetColumnFilter",
//         width: 150,
//         cellRendererFramework: (params) => {
//           return (
//             <div className="d-flex align-items-center cursor-pointer">
//               <div className="">
//                 <span>{params.data?.category_name}</span>
//                 {/* <span>vdfgvdfv</span> */}
//               </div>
//             </div>
//           );
//         },
//       },
//       {
//         headerName: "Description",
//         field: "description",
//         filter: "agSetColumnFilter",
//         width: 120,
//         cellRendererFramework: (params) => {
//           return (
//             <div className="d-flex align-items-center cursor-pointer">
//               <div className="">
//                 <span>{ReactHtmlParser(params.data?.description)}</span>
//               </div>
//             </div>
//           );
//         },
//       },
//       {
//         headerName: "PRICE",
//         field: "price",
//         filter: "agSetColumnFilter",
//         width: 120,
//         cellRendererFramework: (params) => {
//           return (
//             <div className="d-flex align-items-center cursor-pointer">
//               <div className="">
//                 <span>{params.data?.price}</span>
//               </div>
//             </div>
//           );
//         },
//       },
//       {
//         headerName: "DiscountPrice",
//         field: "discountprice",
//         filter: "agSetColumnFilter",
//         width: 120,
//         cellRendererFramework: (params) => {
//           return (
//             <div className="d-flex align-items-center cursor-pointer">
//               <div className="">
//                 <span>{params.data?.discountprice}</span>
//               </div>
//             </div>
//           );
//         },
//       },
//       {
//         headerName: "Shipping Fee",
//         field: "shipping_fee",
//         filter: "agSetColumnFilter",
//         width: 120,
//         cellRendererFramework: (params) => {
//           return (
//             <div className="d-flex align-items-center cursor-pointer">
//               <div className="">
//                 <span>{params.data?.shipping_fee}</span>
//               </div>
//             </div>
//           );
//         },
//       },
//       {
//         headerName: "Tax Rate",
//         field: "tax_rate",
//         filter: "agSetColumnFilter",
//         width: 120,
//         cellRendererFramework: (params) => {
//           return (
//             <div className="d-flex align-items-center cursor-pointer">
//               <div className="">
//                 <span>{params.data?.tax_rate}</span>
//               </div>
//             </div>
//           );
//         },
//       },
//       {
//         headerName: "Tags",
//         field: "tags",
//         filter: "agSetColumnFilter",
//         width: 120,
//         cellRendererFramework: (params) => {
//           return (
//             <div className="d-flex align-items-center cursor-pointer">
//               <div className="">
//                 <span>{params.data?.tags}</span>
//               </div>
//             </div>
//           );
//         },
//       },
//       {
//         headerName: "STOCK",
//         field: "stock",

//         filter: "agSetColumnFilter",
//         width: 150,
//         cellRendererFramework: (params) => {
//           return (
//             <div className="d-flex align-items-center cursor-pointer">
//               <div className="">
//                 <span>{ReactHtmlParser(params.data?.stock)}</span>
//               </div>
//             </div>
//           );
//         },
//       },
//       {
//         headerName: "Created ",
//         field: "created_date",
//         filter: "agSetColumnFilter",
//         width: 120,
//         cellRendererFramework: (params) => {
//           return (
//             <div className="d-flex align-items-center cursor-pointer">
//               <div className="">
//                 <span>
//                   {ReactHtmlParser(params.data?.created_date?.split(" ")[0])}
//                 </span>
//               </div>
//             </div>
//           );
//         },
//       },
//       // {
//       //   headerName: "ASSIGN TO CLIENT",
//       //   field: "assigntoclient",
//       //   filter: "agSetColumnFilter",
//       //   width: 120,
//       //   cellRendererFramework: (params) => {
//       //     // console.log(params.data)
//       //     return (
//       //       <div className="d-flex align-items-center cursor-pointer">
//       //         <div className="">
//       //           <span>Demo</span>
//       //         </div>
//       //       </div>
//       //     );
//       //   },
//       // },
//       {
//         headerName: "Actions",
//         field: "transactions",
//         width: 150,
//         cellRendererFramework: (params) => {
//           return (
//             <div className="actions cursor-pointer">
//               {this.state.Editpermisson && (
//                 <Route
//                   render={({ history }) => (
//                     <UserPlus
//                       className="mr-50"
//                       color="green"
//                       size={20}
//                       onClick={() =>
//                         this.props.history.push({
//                           pathname: `/app/freshlist/house/assignedPage/${params.data?.id}`,
//                           state: params?.data,
//                         })
//                       }
//                     />
//                   )}
//                 />
//               )}
//               {this.state.Deletepermisson && (
//                 <Trash2
//                   className="mr-50"
//                   size="25px"
//                   color="Red"
//                   onClick={() => {
//                     let selectedData = this.gridApi.getSelectedRows();
//                     this.runthisfunction(params.data._id);
//                     this.gridApi.updateRowData({ remove: selectedData });
//                   }}
//                 />
//               )}
//             </div>
//           );
//         },
//       },
//     ],
//   };

//   async componentDidMount() {
//     let pageparmission = JSON.parse(localStorage.getItem("userData"));

//     // console.log(pageparmission);
//     this.setState({ userdata: pageparmission });
//     let newparmisson = pageparmission?.role?.find(
//       (value) => value?.pageName === "Place Order"
//     );
//     this.setState({ Viewpermisson: newparmisson?.permission.includes("View") });
//     this.setState({
//       Createpermisson: newparmisson?.permission.includes("Create"),
//     });
//     this.setState({
//       Editpermisson: newparmisson?.permission.includes("Edit"),
//     });
//     this.setState({
//       Deletepermisson: newparmisson?.permission.includes("Delete"),
//     });
//     const formdata = new FormData();
//     formdata.append("user_id", pageparmission?.Userinfo?.id);
//     formdata.append("role", pageparmission?.Userinfo?.role);

//     await axiosConfig.post("/getbrand", formdata).then((response) => {
//       let Brandlist = response.data.data?.brands;

//       this.setState({ Brandlist });
//     });
//     await axiosConfig.post("/getuserlist", formdata).then((response) => {
//       let Clientlist = response.data.data?.users;
//       console.log(Clientlist);
//       this.setState({ Clientlist });
//     });

//     await axiosConfig.post("/getcategory", formdata).then((response) => {
//       let GetCategory = response.data.data?.category;
//       // console.log(GetCategory);
//       this.setState({ GetCategory });
//     });

//     await axiosConfig
//       .post("/productlistapi", formdata)
//       // .post("/productlistapi")
//       .then((response) => {
//         this.setState({ rowData: response.data.data });
//         // console.log(response.data.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });

//     await axiosConfig
//       .post("/producttypelistview", formdata)
//       .then((response) => {
//         let Typelist = response.data.data;
//         // console.log(Typelist);
//         this.setState({ Typelist });
//       });

//     // await axiosConfig
//     //   .post("/productlistapi", formdata)
//     //   .then((response) => {
//     //     this.setState({ ProductListData: response.data.data });
//     //     console.log(response.data.data);
//     //   })
//     //   .catch((error) => {
//     //     console.log(error.response);
//     //   });
//   }

//   async runthisfunction(id) {
//     console.log(id);
//     await axiosConfig.get(`/deltermcondition/${id}`).then((response) => {
//       console.log(response);
//     });
//   }
//   submitHandlerAssign = (e) => {
//     e.preventDefault();
//     let pageparmission = JSON.parse(localStorage.getItem("userData"));

//     const formdata = new FormData();
//     if (this.state.Clientname) {
//       formdata.append("user_assign_trupee_id", this.state.Clientname);
//     }
//     formdata.append("user_id", pageparmission?.Userinfo?.id);
//     formdata.append("category_id", this.state.category);
//     formdata.append("brand_id", this.state.Brand);
//     formdata.append("product_type_id", this.state.Type);
//     formdata.append("product_id", this.state.Product);

//     formdata.append("qty", this.state.quantity);
//     formdata.append("delivery_date", this.state.DeliveryDate);
//     if (this.state.DeliveryDate && this.state.quantity) {
//       axiosConfig
//         .post(`/create_order`, formdata)
//         .then((res) => {
//           console.log(res.data);
//           if (res.data?.message) {
//             this.setState({ qty: "" });
//             this.setState({ delivery_date: "" });
//             swal("Success", "Order Created Successfully");
//           }
//         })
//         .catch((err) => {
//           console.log(err.response?.data.message);
//           if (err.response?.data.message) {
//             swal("Error", `${err.response?.data.message}`);
//           }
//         });
//     } else {
//       swal("Select and Enter Details");
//     }
//   };
//   submitHandler = (e) => {
//     e.preventDefault();
//     let pageparmission = JSON.parse(localStorage.getItem("userData"));
//     const formdata = new FormData();
//     formdata.append("user_id", pageparmission?.Userinfo?.id);
//     formdata.append("role", pageparmission?.Userinfo?.role);
//     formdata.append("category_id", this.state.category);
//     formdata.append("brand_id", this.state.Brand);
//     formdata.append("product_type_id", this.state.Type);
//     if (this.state.category && this.state.Brand && this.state.Type) {
//       axiosConfig
//         .post(`/getproducts`, formdata)
//         .then((res) => {
//           console.log(res.data.data);
//           this.setState({ showProduct: true });

//           this.setState({ ProductListData: res.data.data });
//         })
//         .catch((err) => {
//           console.log(err.response.data);
//           if (err.response.data.message) {
//             swal("No Product Found");
//           }
//         });
//     } else {
//       swal("Error", "Select Mandatory Fields");
//     }
//   };

//   onGridReady = (params) => {
//     this.gridApi = params.api;
//     this.gridColumnApi = params.columnApi;
//     this.setState({
//       currenPageSize: this.gridApi.paginationGetCurrentPage() + 1,
//       getPageSize: this.gridApi.paginationGetPageSize(),
//       totalPages: this.gridApi.paginationGetTotalPages(),
//     });
//   };

//   updateSearchQuery = (val) => {
//     this.gridApi.setQuickFilter(val);
//   };

//   filterSize = (val) => {
//     if (this.gridApi) {
//       this.gridApi.paginationSetPageSize(Number(val));
//       this.setState({
//         currenPageSize: val,
//         getPageSize: val,
//       });
//     }
//   };
//   render() {
//     const { rowData, columnDefs, defaultColDef } = this.state;
//     return (
//       <>
//         <Row>
//           {/* <Col lg="4" md="12">
//             <Card
//               className="bg-secondary  py-3 "
//               body
//               inverse
//               style={{ borderColor: "white" }}
//             >
//               <CardTitle
//                 className="fntweight"
//                 tag="h3"
//                 style={{ color: "black", fontSize: "16px" }}
//               >
//                 <FaBoxOpen style={{ color: "orange" }} />
//                 &nbsp;&nbsp; Total Products
//               </CardTitle>
//               <CardText
//                 className="wt-text"
//                 tag="span"
//                 style={{ color: "black", marginLeft: "4px" }}
//               >
//                 {this.state.product}
//               </CardText>
//             </Card>
//           </Col> */}
//           {/* <Col lg="4" md="12">
//             <Card
//               className="bg-secondary  py-3"
//               body
//               inverse
//               style={{ borderColor: "white" }}
//             >
//               <CardTitle
//                 className="fntweight"
//                 tag="h3"
//                 style={{ color: "black", fontSize: "16px" }}
//               >
//                 <FaBoxOpen style={{ color: "orange" }} />
//                 &nbsp;&nbsp; Total Categories
//               </CardTitle>
//               <CardText
//                 className="wt-text"
//                 tag="span"
//                 style={{ color: "black", marginLeft: "4px" }}
//               >
//                 {this.state.product}
//               </CardText>
//             </Card>
//           </Col> */}
//           {/* <Col lg="4" md="12">
//             <Card
//               className="bg-secondary  py-3"
//               body
//               inverse
//               style={{ borderColor: "white" }}
//             >
//               <CardTitle
//                 className="fntweight"
//                 tag="h3"
//                 style={{ color: "black", fontSize: "16px" }}
//               >
//                 <FaBoxOpen style={{ color: "orange" }} />
//                 &nbsp;&nbsp; Total Barnds
//               </CardTitle>
//               <CardText
//                 className="wt-text"
//                 tag="span"
//                 style={{ color: "black", marginLeft: "4px" }}
//               >
//                 {this.state.product}
//               </CardText>
//             </Card>
//           </Col> */}
//         </Row>
//         <Row className="app-user-list">
//           <Col sm="12"></Col>
//           <Col sm="12">
//             <Card>
//               {/* <Row className="pt-1 mx-1"></Row> */}
//               <Row className="m-2">
//                 <Col>
//                   <h1 col-sm-6 className="float-left">
//                     Create Order
//                   </h1>
//                 </Col>
//                 <Col>
//                   <Route
//                     render={({ history }) => (
//                       <Button
//                         className="float-right"
//                         color="primary"
//                         onClick={() => history.push("/app/freshlist/order/all")}
//                       >
//                         Back
//                       </Button>
//                     )}
//                   />
//                 </Col>
//               </Row>
//               <Row>
//                 <Col>
//                   <Form className="m-1 container" onSubmit={this.submitHandler}>
//                     <Row className="mb-2">
//                       <Col lg="3" md="3">
//                         <FormGroup>
//                           <Label> Choose Category *</Label>

//                           <select
//                             onChange={(e) =>
//                               this.setState({ category: e.target.value })
//                             }
//                             className="form-control"
//                             name="Select"
//                             id="Select"
//                           >
//                             <option value="volvo">--Select Category--</option>
//                             {this.state.GetCategory &&
//                               this.state.GetCategory?.map((val, i) => (
//                                 <option key={i} value={val?.id}>
//                                   {val?.category_name}
//                                 </option>
//                               ))}
//                           </select>
//                         </FormGroup>
//                       </Col>
//                       <Col lg="3" md="3">
//                         <FormGroup>
//                           <Label> Choose Type *</Label>

//                           <select
//                             onChange={(e) =>
//                               this.setState({ Type: e.target.value })
//                             }
//                             className="form-control"
//                             name="Select"
//                             id="Select"
//                           >
//                             <option value="volvo">--Select Type--</option>
//                             {this.state.Typelist &&
//                               this.state.Typelist?.map((val, i) => (
//                                 <option key={i} value={val?.id}>
//                                   {val?.product_type}
//                                 </option>
//                               ))}
//                           </select>
//                         </FormGroup>
//                       </Col>
//                       <Col lg="3" md="3">
//                         <FormGroup>
//                           <Label> Choose Brand *</Label>

//                           <select
//                             required
//                             onChange={(e) =>
//                               this.setState({ Brand: e.target.value })
//                             }
//                             className="form-control"
//                             name="Select"
//                             id="Select"
//                           >
//                             <option value="volvo">--Select Brand--</option>
//                             {this.state.Brandlist &&
//                               this.state.Brandlist?.map((val, i) => (
//                                 <option key={i} value={val?.id}>
//                                   {val?.brand_name}
//                                 </option>
//                               ))}
//                           </select>
//                         </FormGroup>
//                       </Col>
//                       <Col lg="3" md="3">
//                         <Button.Ripple
//                           color="primary"
//                           type="submit"
//                           className="mt-2"
//                         >
//                           Search
//                         </Button.Ripple>
//                       </Col>
//                     </Row>
//                   </Form>
//                   {/* <AssignClientCompoent /> */}
//                 </Col>
//               </Row>
//               {this.state.showProduct && (
//                 <div className="container">
//                   <Form className="m-1" onSubmit={this.submitHandlerAssign}>
//                     <Row className="mb-2">
//                       <Col lg="4" md="4" className="mb-1 ">
//                         <Label>Product List</Label>
//                         <Input
//                           required
//                           type="select"
//                           name="Product"
//                           placeholder="Enter Iden Type"
//                           value={this.state.Product}
//                           onChange={(e) =>
//                             this.setState({ Product: e.target.value })
//                           }
//                         >
//                           <option value="12ROW">--Selecte--</option>
//                           {this.state.ProductListData &&
//                             this.state.ProductListData?.map((val, i) => (
//                               <option key={i} value={val?.id}>
//                                 {val?.title}
//                               </option>
//                             ))}
//                         </Input>
//                       </Col>
//                       {this.state.userdata &&
//                       this.state.userdata?.Userinfo?.role === "Trupee" ? (
//                         <Col lg="4" md="4" className="mb-1 ">
//                           <Label>User List</Label>
//                           <Input
//                             required
//                             type="select"
//                             name="Clientname"
//                             placeholder="Enter Iden Type"
//                             value={this.state.Clientname}
//                             onChange={(e) =>
//                               this.setState({ Clientname: e.target.value })
//                             }
//                           >
//                             <option value="12ROW">--Selecte--</option>
//                             {this.state.Clientlist &&
//                               this.state.Clientlist?.map((val, i) => (
//                                 <option key={i} value={val?.id}>
//                                   {val?.full_name}
//                                 </option>
//                               ))}
//                           </Input>
//                         </Col>
//                       ) : null}
//                       <Col lg="4" md="4" className="mb-1 ">
//                         <Label>Quantity</Label>
//                         <Input
//                           required
//                           type="number"
//                           name="quantity"
//                           placeholder="Enter Quantity..."
//                           value={this.state.quantity}
//                           onChange={(e) =>
//                             this.setState({ quantity: e.target.value })
//                           }
//                         />
//                       </Col>
//                       <Col lg="4" md="4" className="mb-1 ">
//                         <Label>Delivery Date</Label>
//                         <Input
//                           required
//                           type="date"
//                           name="DeliveryDate"
//                           // placeholder="Enter Quantity..."
//                           value={this.state.DeliveryDate}
//                           onChange={(e) =>
//                             this.setState({ DeliveryDate: e.target.value })
//                           }
//                         />
//                       </Col>
//                       <Col lg="4" md="4" className="mb-1 ">
//                         <Button.Ripple
//                           color="primary"
//                           type="submit"
//                           className="mr-1 mt-2 mb-1"
//                         >
//                           Create Order
//                         </Button.Ripple>
//                       </Col>
//                     </Row>
//                   </Form>
//                 </div>
//               )}

//               {/* <CardBody>
//                 {this.state.rowData === null ? null : (
//                   <div className="ag-theme-material w-100 my-2 ag-grid-table">
//                     <div className="d-flex flex-wrap justify-content-between align-items-center">
//                       <div className="mb-1">
//                         <UncontrolledDropdown className="p-1 ag-dropdown">
//                           <DropdownToggle tag="div">
//                             {this.gridApi
//                               ? this.state.currenPageSize
//                               : "" * this.state.getPageSize -
//                                 (this.state.getPageSize - 1)}{" "}
//                             -{" "}
//                             {this.state.rowData.length -
//                               this.state.currenPageSize *
//                                 this.state.getPageSize >
//                             0
//                               ? this.state.currenPageSize *
//                                 this.state.getPageSize
//                               : this.state.rowData.length}{" "}
//                             of {this.state.rowData.length}
//                             <ChevronDown className="ml-50" size={15} />
//                           </DropdownToggle>
//                           <DropdownMenu right>
//                             <DropdownItem
//                               tag="div"
//                               onClick={() => this.filterSize(20)}
//                             >
//                               20
//                             </DropdownItem>
//                             <DropdownItem
//                               tag="div"
//                               onClick={() => this.filterSize(50)}
//                             >
//                               50
//                             </DropdownItem>
//                             <DropdownItem
//                               tag="div"
//                               onClick={() => this.filterSize(100)}
//                             >
//                               100
//                             </DropdownItem>
//                             <DropdownItem
//                               tag="div"
//                               onClick={() => this.filterSize(134)}
//                             >
//                               134
//                             </DropdownItem>
//                           </DropdownMenu>
//                         </UncontrolledDropdown>
//                       </div>
//                       <div className="d-flex flex-wrap justify-content-between mb-1">
//                         <div className="table-input mr-1">
//                           <Input
//                             placeholder="search..."
//                             onChange={(e) =>
//                               this.updateSearchQuery(e.target.value)
//                             }
//                             value={this.state.value}
//                           />
//                         </div>
//                         <div className="export-btn">
//                           <Button.Ripple
//                             color="primary"
//                             onClick={() => this.gridApi.exportDataAsCsv()}
//                           >
//                             Export as CSV
//                           </Button.Ripple>
//                         </div>
//                       </div>
//                     </div>
//                     <ContextLayout.Consumer>
//                       {(context) => (
//                         <AgGridReact
//                           gridOptions={{}}
//                           rowSelection="multiple"
//                           defaultColDef={defaultColDef}
//                           columnDefs={columnDefs}
//                           rowData={rowData}
//                           onGridReady={this.onGridReady}
//                           colResizeDefault={"shift"}
//                           animateRows={true}
//                           floatingFilter={false}
//                           pagination={true}
//                           paginationPageSize={this.state.paginationPageSize}
//                           pivotPanelShow="always"
//                           enableRtl={context.state.direction === "rtl"}
//                         />
//                       )}
//                     </ContextLayout.Consumer>
//                   </div>
//                 )}
//               </CardBody> */}
//             </Card>
//           </Col>
//         </Row>
//       </>
//     );
//   }
// }
// export default Placeorder;
