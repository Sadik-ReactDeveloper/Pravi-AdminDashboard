import React from "react";
import {
  Card,
  CardBody,
  Input,
  Label,
  Row,
  CustomInput,
  Col,
  Form,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import "../../../../assets/css/main.css";
import axiosConfig from "../../../../axiosConfig";
import { ContextLayout } from "../../../../utility/context/Layout";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import { Eye, Trash2, ChevronDown, Edit } from "react-feather";
import { history } from "../../../../history";
import { ToWords } from "to-words";
import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../../assets/scss/pages/users.scss";
import swal from "sweetalert";
import AnalyticsDashboard from "../../../dashboard/analytics/AnalyticsDashboard";
import { Route, Link } from "react-router-dom";
import { AiOutlineDownload } from "react-icons/ai";
import InvoiceGenerator from "../subcategory/InvoiceGenerator1";
import { TbPhysotherapist } from "react-icons/tb";

const toWords = new ToWords({
  localeCode: "en-IN",
  converterOptions: {
    currency: true,
    ignoreDecimal: false,
    ignoreZeroCurrency: false,
    doNotAddOnly: false,
    currencyOptions: {
      // can be used to override defaults for the selected locale
      name: "Rupee",
      plural: "Rupees",
      symbol: "₹",
      fractionalUnit: {
        name: "Paisa",
        plural: "Paise",
        symbol: "",
      },
    },
  },
});
class All extends React.Component {
  state = {
    modal: false,
    PrintData: {},
  };

  state = {
    rowData: [],
    Viewpermisson: null,
    Editpermisson: null,
    Createpermisson: null,
    Deletepermisson: null,
    paginationPageSize: 20,
    currenPageSize: "",
    getPageSize: "",
    info: true,
    ViewBill: true,
    wordsNumber: "",
    sgst: "",
    cgst: "",
    otherCharges: "",
    deliveryCharges: "",
    defaultColDef: {
      sortable: true,
      // editable: true,
      resizable: true,
      suppressMenu: true,
    },
    columnDefs: [
      // {
      //   headerName: "S.No",
      //   valueGetter: "node.rowIndex + 1",
      //   field: "node.rowIndex + 1",
      //   width: 80,
      //   filter: true,
      // },
      {
        headerName: "Order Id ",
        field: "order_id",
        filter: true,
        resizable: true,
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div>
                <span>{params?.data?.order_id}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "Status",
        field: "order_status",
        filter: true,
        width: 160,
        cellRendererFramework: (params) => {
          return params.data?.order_status === "Completed" ? (
            <div className="badge badge-pill badge-success">Completed</div>
          ) : params.data?.order_status === "Pending" ? (
            <div className="badge badge-pill badge-warning">
              {params.data?.order_status}
            </div>
          ) : params.data?.order_status === "Rejected" ? (
            <div className="badge badge-pill bg-primary">Rejected</div>
          ) : params.data?.order_status === "Cancelled" ? (
            <div className="badge badge-pill bg-danger">
              {params.data.order_status}
            </div>
          ) : params.data?.order_status === "Approved" ? (
            <div className="badge badge-pill bg-success">Approved</div>
          ) : null;
        },
      },

      // {
      //   headerName: "Change Status ",
      //   field: "Change Status",
      //   filter: true,
      //   resizable: true,
      //   width: 230,
      //   cellRendererFramework: params => {
      //     // console.log(params.data?.order_id);

      //     return (
      //       <div className="d-flex align-items-center cursor-pointer">
      //         <div>
      //           <select
      //             // className="form-control"
      //             defaultValue={params.data?.order_status}
      //             onChange={e => {
      //               // console.log(e.target.value);
      //               let data = new FormData();
      //               data.append("order_id", params.data?.order_id);
      //               data.append("order_status", e.target.value);
      //               axiosConfig
      //                 .post(`/change_order_status`, data)
      //                 .then(res => {
      //                   console.log(res?.data.message);
      //                   if (res?.data.message) {
      //                     this.componentDidMount();
      //                     swal("status Updated Succesfully");
      //                   }
      //                 })
      //                 .catch(err => {
      //                   console.log(err);
      //                 });
      //             }}
      //             name="changestatus"
      //             id="changeStatus"
      //           >
      //             <option value={params.data?.order_status}>
      //               {params.data?.order_status}
      //             </option>
      //             <option value="Pending">--UpdateStatus--</option>
      //             <option value="Pending">Pending</option>
      //             <option value="Completed">Completed</option>
      //             <option value="Rejected">Rejected</option>
      //             <option value="Cancelled">Cancelled</option>
      //           </select>
      //         </div>
      //       </div>
      //     );
      //   },
      // },
      {
        headerName: "Download Bill ",
        field: "order_id",
        filter: true,
        resizable: true,
        width: 180,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center justify-content-center cursor-pointer">
              <div>
                <span>
                  <AiOutlineDownload
                    onClick={() => this.handleBillDownload(params?.data)}
                    fill="green"
                    size="30px"
                  />
                </span>
              </div>
            </div>
          );
        },
      },
      // {
      //   headerName: "Created By",
      //   field: "create_order_user_full_name",
      //   filter: true,
      //   resizable: true,
      //   width: 150,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="d-flex align-items-center cursor-pointer">
      //         <div>
      //           <span>{params.data?.create_order_user_full_name}</span>
      //         </div>
      //       </div>
      //     );
      //   },
      // },

      {
        headerName: "Supplier",
        field: "supplier_name",
        filter: true,
        resizable: true,
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div>
                <span>{params.data?.supplier_name}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "Order Date",
        field: "order_date",
        filter: true,
        resizable: true,
        width: 180,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div>
                <span>{params.data?.order_date}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "Subtotal",
        field: "sub_total",
        filter: true,
        resizable: true,
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div>
                <span>{params.data?.sub_total}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "Total",
        field: "total",
        filter: true,
        resizable: true,
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div>
                <span>{params.data?.total}</span>
              </div>
            </div>
          );
        },
      },

      // {
      //   headerName: "Product Image",
      //   field: "product_images",
      //   filter: true,
      //   resizable: true,
      //   width: 160,
      //   cellRendererFramework: (params) => {
      //     // console.log(params.data);
      //     return (
      //       <div className="d-flex align-items-center cursor-pointer">
      //         <div>
      //           {params?.data?.product_images &&
      //           params.data?.product_images?.length ? (
      //             <>
      //               <img
      //                 style={{ borderRadius: "12px" }}
      //                 src={params.data?.product_images[0]}
      //                 alt="image"
      //                 width="60px"
      //               />
      //             </>
      //           ) : (
      //             "No image"
      //           )}
      //         </div>
      //       </div>
      //     );
      //   },
      // },

      {
        headerName: "Actions",
        field: "sortorder",
        field: "transactions",
        width: 120,
        cellRendererFramework: (params) => {
          return (
            <div className="actions cursor-pointer">
              {this.state.Viewpermisson && (
                <Route
                  render={({ history }) => (
                    <Eye
                      className="mr-50"
                      size="25px"
                      color="green"
                      onClick={() =>
                        history.push(
                          `/app/freshlist/order/editplaceorder/${params.data?.order_id}`
                        )
                      }
                    />
                  )}
                />
              )}
              {/* {this.state.Editpermisson && (
                <Route
                  render={({ history }) => (
                    <Edit
                      className="mr-50"
                      size="25px"
                      color="blue"
                      onClick={() =>
                        history.push(
                          `/app/freshlist/order/editplaceorder/${params.data?.order_id}`
                        )
                      }
                    />
                  )}
                />
              )} */}

              {this.state.Deletepermisson && (
                <Route
                  render={() => (
                    <Trash2
                      className="mr-50"
                      size="25px"
                      color="red"
                      onClick={() => {
                        let selectedData = this.gridApi.getSelectedRows();
                        this.runthisfunction(params.data.id);
                        this.gridApi.updateRowData({ remove: selectedData });
                      }}
                    />
                  )}
                />
              )}
            </div>
          );
        },
      },

      // {
      //   headerName: "categoryName",
      //   field: "category_name",
      //   filter: true,
      //   resizable: true,
      //   width: 160,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="d-flex align-items-center cursor-pointer">
      //         <div>
      //           <span>{params.data?.category_name}</span>
      //         </div>
      //       </div>
      //     );
      //   },
      // },
      // {
      //   headerName: "brandname ",
      //   field: "brand_name",
      //   filter: true,
      //   resizable: true,
      //   width: 180,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="d-flex align-items-center cursor-pointer">
      //         <div>
      //           <span>{params.data?.brand_name}</span>
      //         </div>
      //       </div>
      //     );
      //   },
      // },
      // {
      //   headerName: "city",
      //   field: "city",
      //   filter: true,
      //   resizable: true,
      //   width: 160,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="d-flex align-items-center cursor-pointer">
      //         <div>
      //           <span>{params.data?.city}</span>
      //         </div>
      //       </div>
      //     );
      //   },
      // },
      // {
      //   headerName: "order Creation date",
      //   field: "order_date",
      //   filter: true,
      //   resizable: true,
      //   width: 230,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="d-flex align-items-center cursor-pointer">
      //         <div>
      //           <span>{params.data?.order_date}</span>
      //         </div>
      //       </div>
      //     );
      //   },
      // },
      // {
      //   headerName: "deliverydate",
      //   field: "delivery_date",
      //   filter: true,
      //   resizable: true,
      //   width: 230,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="d-flex align-items-center cursor-pointer">
      //         <div>
      //           <span>{params.data?.delivery_date}</span>
      //         </div>
      //       </div>
      //     );
      //   },
      // },
      // {
      //   headerName: "description",
      //   field: "description",
      //   filter: "true",
      //   width: 180,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="d-flex align-items-center cursor-pointer">
      //         <div className="">
      //           <span>{params.data?.description}</span>
      //         </div>
      //       </div>
      //     );
      //   },
      // },
      // {
      //   headerName: "discountprice",
      //   field: "discountprice",
      //   filter: "true",
      //   width: 180,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="d-flex align-items-center cursor-pointer">
      //         <div className="">
      //           <span>{params.data?.discountprice}</span>
      //         </div>
      //       </div>
      //     );
      //   },
      // },
      // {
      //   headerName: "email",
      //   field: "email",
      //   filter: true,
      //   resizable: true,
      //   width: 190,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="d-flex align-items-center cursor-pointer">
      //         <div>
      //           <span>{params.data?.email}</span>
      //         </div>
      //       </div>
      //     );
      //   },
      // },

      // {
      //   headerName: "full_name",
      //   field: "full_name",
      //   filter: true,
      //   resizable: true,
      //   width: 170,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="d-flex align-items-center cursor-pointer">
      //         <div>
      //           <span>{params.data?.full_name}</span>
      //         </div>
      //       </div>
      //     );
      //   },
      // },

      // {
      //   headerName: "mobile",
      //   field: "mobile",
      //   filter: true,
      //   resizable: true,
      //   width: 190,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="d-flex align-items-center cursor-pointer">
      //         <div>
      //           <span>{params.data?.mobile}</span>
      //         </div>
      //       </div>
      //     );
      //   },
      // },
      // {
      //   headerName: "price",
      //   field: "price",
      //   filter: true,
      //   resizable: true,
      //   width: 150,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="d-flex align-items-center cursor-pointer">
      //         <div>
      //           <span>{params.data?.price}</span>
      //         </div>
      //       </div>
      //     );
      //   },
      // },

      // {
      //   headerName: "producttype",
      //   field: "product_type",
      //   filter: true,
      //   resizable: true,
      //   width: 190,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="d-flex align-items-center cursor-pointer">
      //         <div>
      //           <span>{params.data?.product_type}</span>
      //         </div>
      //       </div>
      //     );
      //   },
      // },
      // {
      //   headerName: "shippingfee",
      //   field: "shipping_fee",
      //   filter: true,
      //   resizable: true,
      //   width: 190,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="d-flex align-items-center cursor-pointer">
      //         <div>
      //           <span>{params.data?.shipping_fee}</span>
      //         </div>
      //       </div>
      //     );
      //   },
      // },
      // {
      //   headerName: "status",
      //   field: "status",
      //   filter: true,
      //   resizable: true,
      //   width: 180,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="d-flex align-items-center cursor-pointer">
      //         <div>
      //           <span>{params.data?.status}</span>
      //         </div>
      //       </div>
      //     );
      //   },
      // },
      // {
      //   headerName: "stock",
      //   field: "stock",
      //   filter: true,
      //   resizable: true,
      //   width: 180,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="d-flex align-items-center cursor-pointer">
      //         <div>
      //           <span>{params.data?.stock}</span>
      //         </div>
      //       </div>
      //     );
      //   },
      // },
      // {
      //   headerName: "subtotal",
      //   field: "subtotal",
      //   filter: true,
      //   resizable: true,
      //   width: 180,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="d-flex align-items-center cursor-pointer">
      //         <div>
      //           <span>{params.data?.subtotal}</span>
      //         </div>
      //       </div>
      //     );
      //   },
      // },
      // {
      //   headerName: "tags",
      //   field: "tags",
      //   filter: true,
      //   resizable: true,
      //   width: 180,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="d-flex align-items-center cursor-pointer">
      //         <div>
      //           <span>{params.data?.tags}</span>
      //         </div>
      //       </div>
      //     );
      //   },
      // },
      // {
      //   headerName: "tax_rate",
      //   field: "tax_rate",
      //   filter: true,
      //   resizable: true,
      //   width: 180,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="d-flex align-items-center cursor-pointer">
      //         <div>
      //           <span>{params.data?.tax_rate}</span>
      //         </div>
      //       </div>
      //     );
      //   },
      // },

      // {
      //   headerName: "Permitions",
      //   field: "permitions",
      //   filter: true,
      //   width: 180,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <CustomInput
      //         type="switch"
      //         className="mr-1"
      //         id="primary"
      //         name="primary"
      //         inline
      //         onChange={this.handleSwitchChange}
      //       ></CustomInput>
      //     );
      //   },
      // },
    ],
  };
  handleSwitchChange = () => {
    return swal("Success!", "Submitted SuccessFully!", "success");
  };

  handleBillDownload = (data) => {
    console.log(data.sub_total);
    this.setState({ PrintData: data });
    const toWords = new ToWords();
    let words = toWords.convert(Number(data.sub_total), { currency: true });
    this.setState({ wordsNumber: words });
    console.log(words);
    // console.log("object");
    this.toggleModal();
  };
  toggleModal = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };

  async componentDidMount() {
    let { id } = this.props.match.params;
    // console.log(id);

    let pageparmission = JSON.parse(localStorage.getItem("userData"));

    const formdata = new FormData();
    formdata.append("user_id", pageparmission?.Userinfo?.id);
    formdata.append("role", pageparmission?.Userinfo?.role);
    await axiosConfig
      .post(`/orderlist`, formdata)
      .then((res) => {
        // console.log(res.data.data);
        let rowData = res?.data?.data;
        this.setState({ rowData });
      })
      .catch((err) => {
        console.log(err?.response);
      });

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

    // await axiosConfig.get("/admin/allorder_list").then((response) => {

    // console.log(newparmisson?.permission.includes("Create"));
    // });
  }

  async runthisfunction(id) {
    await axiosConfig.delete(`/admin/del_order/${id}`).then((response) => {
      swal("Row Deleted!", "SuccessFull Deleted!", "error");
      console.log(response);
    });
  }
  onGridReady = (params) => {
    this.gridApi = params.api;
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
  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
    console.log(event.target.files[0]);
  };
  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files });
    this.setState({ selectedName: event.target.files.name });
    console.log(event.target.files);
  };
  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
  };
  handleSubmit = () => {
    this.setState({ ViewBill: true });
  };

  render() {
    const { rowData, columnDefs, defaultColDef } = this.state;
    return (
      <Row className="app-user-list">
        <Col sm="12">
          <Card>
            <Row className="m-2">
              <Col>
                <h1 col-sm-6 className="float-left">
                  Place Order List
                </h1>
              </Col>
              <Col>
                {this.state.Createpermisson && (
                  <Route
                    render={({ history }) => (
                      <Button
                        className=" float-right"
                        color="primary"
                        onClick={() =>
                          history.push("/app/freshlist/order/Placeorder")
                        }
                      >
                        Create Order
                      </Button>
                    )}
                  />
                )}
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
                              (this.state.getPageSize - 1)}
                          -
                          {this.state.rowData.length -
                            this.state.currenPageSize * this.state.getPageSize >
                          0
                            ? this.state.currenPageSize * this.state.getPageSize
                            : this.state.rowData.length}
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
                      <div className="table-input mr-1">
                        <Input
                          placeholder="Search here..."
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
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggleModal}
          className={this.props.className}
          style={{ maxWidth: "1050px" }}
        >
          <ModalHeader toggle={this.toggleModal}>Download Bill</ModalHeader>
          <ModalBody>
            {this.state.ViewBill && this.state.ViewBill ? (
              <>
                <div style={{ width: "100%" }} className="">
                  <InvoiceGenerator
                    sgst={this.state.sgst}
                    cgst={this.state.cgst}
                    deliveryCharges={this.state.deliveryCharges}
                    otherCharges={this.state.otherCharges}
                    PrintData={this.state.PrintData}
                    wordsNumber={this.state.wordsNumber}
                  />
                </div>
              </>
            ) : (
              <>
                <div style={{ width: "100%" }} className="">
                  <Form onSubmit={() => this.handleSubmit()}>
                    <Row>
                      <Col lg="6" className="mb-2">
                        <Label>SGST</Label>
                        <Input
                          required
                          type="number"
                          name="sgst"
                          placeholder="Enter SGST"
                          value={this.state.sgst}
                          onChange={this.changeHandler}
                        ></Input>
                      </Col>
                      <Col lg="6" className="mb-2">
                        <Label>CGST</Label>
                        <Input
                          required
                          type="number"
                          name="cgst"
                          placeholder="Enter CGST"
                          value={this.state.cgst}
                          onChange={this.changeHandler}
                        ></Input>
                      </Col>
                      <Col lg="6">
                        <Label>Other Charges</Label>
                        <Input
                          type="number"
                          name="otherCharges"
                          placeholder="Enter Other Charges"
                          value={this.state.otherCharges}
                          onChange={this.changeHandler}
                        ></Input>
                      </Col>
                      <Col lg="6">
                        <Label>Delivery Charges</Label>
                        <Input
                          type="number"
                          name="deliveryCharges"
                          placeholder="Enter Delivery Charges"
                          value={this.state.deliveryCharges}
                          onChange={this.changeHandler}
                        ></Input>
                      </Col>
                      <Col lg="3" className="mt-2">
                        <Button color="primary" type="submit">
                          Submit
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </>
            )}
          </ModalBody>
        </Modal>
      </Row>
    );
  }
}
export default All;
