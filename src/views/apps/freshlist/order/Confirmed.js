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
} from "reactstrap";
import axiosConfig from "../../../../axiosConfig";
import { ContextLayout } from "../../../../utility/context/Layout";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import { Eye, Trash2, ChevronDown, Edit } from "react-feather";
import { history } from "../../../../history";
import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../../assets/scss/pages/users.scss";
import Moment from "react-moment";
import "../../../../assets/css/main.css";
import swal from "sweetalert";
import { Route, Link } from "react-router-dom";
class Confirmed extends React.Component {
  state = {
    rowData: [],
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
      suppressMenu: true,
    },
    columnDefs: [
      {
        headerName: "S.No",
        valueGetter: "node.rowIndex + 1",
        field: "node.rowIndex + 1",
        width: 80,
        filter: true,
      },
      {
        headerName: "Status",
        field: "order_status",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          // order_status= 'Inprogress, 'Completed'

          return params.data?.order_status === "Completed" ? (
            <div className="badge badge-pill badge-success">Completed</div>
          ) : params.data?.order_status === "Pending" ? (
            <div className="badge badge-pill badge-warning">
              {params.data.order_status}
            </div>
          ) : params.data?.order_status === "Inprogress" ? (
            <div className="badge badge-pill bg-primary">Inprogress</div>
          ) : params.data?.order_status === "canceled" ? (
            <div className="badge badge-pill bg-danger">
              {params.data.order_status}
            </div>
          ) : params.data?.order_status === "orderreceived" ? (
            <div className="badge badge-pill bg-success">Order Received</div>
          ) : null;
        },
      },

      {
        headerName: "Actions",
        field: "sortorder",
        field: "transactions",
        width: 180,
        cellRendererFramework: (params) => {
          return (
            <div className="actions cursor-pointer">
              {this.state.Viewpermisson && (
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
              )}
              {this.state.Editpermisson && (
                <Route
                  render={({ history }) => (
                    <Edit
                      className="mr-50"
                      size="25px"
                      color="blue"
                      onClick={() =>
                        history.push(
                          `/app/freshlist/order/EditOrder/${params.data.id}`
                        )
                      }
                    />
                  )}
                />
              )}

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
      {
        headerName: "Order ID ",
        field: "order_id",
        filter: true,
        resizable: true,
        width: 180,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div>
                <span>{params.data?.order_id}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "Name ",
        field: "title",
        filter: true,
        resizable: true,
        width: 180,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div>
                <span>{params.data?.title}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "category_name",
        field: "category_name",
        filter: true,
        resizable: true,
        width: 160,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div>
                <span>{params.data?.category_name}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "description",
        field: "description",
        filter: true,
        resizable: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div>
                <span>{params.data?.description}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "Order Date",
        field: "order_date",
        filter: "true",
        width: 120,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{params.data?.order_date}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "order_id",
        field: "order_id",
        filter: "true",
        width: 160,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{params.data?.order_id}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "price",
        field: "price",
        filter: true,
        resizable: true,
        width: 160,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div>
                <span>{params.data?.price}</span>
              </div>
            </div>
          );
        },
      },

      {
        headerName: "discountprice",
        field: "discountprice",
        filter: true,
        resizable: true,
        width: 170,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div>
                <span>{params.data?.discountprice}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "product_images",
        field: "product_images",
        filter: true,
        resizable: true,
        width: 180,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div>
                <img
                  style={{ borderRadius: "12px" }}
                  src={params?.data?.product_images[0]}
                  alt="image"
                  width="60px"
                />
              </div>
            </div>
          );
        },
      },
      {
        headerName: "Quantity",
        field: "qty",
        filter: true,
        resizable: true,
        width: 190,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div>
                <span>{params.data?.qty}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "shipping_fee",
        field: "shipping_fee",
        filter: true,
        resizable: true,
        width: 190,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div>
                <span>{params.data?.shipping_fee}</span>
              </div>
            </div>
          );
        },
      },

      {
        headerName: "stock",
        field: "stock",
        filter: true,
        resizable: true,
        width: 190,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div>
                <span>{params.data?.stock}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "tags",
        field: "tags",
        filter: true,
        resizable: true,
        width: 190,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div>
                <span>{params.data?.tags}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "tax_rate",
        field: "tax_rate",
        filter: true,
        resizable: true,
        width: 180,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div>
                <span>{params.data?.tax_rate}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "subtotal",
        field: "subtotal",
        filter: true,
        resizable: true,
        width: 180,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div>
                <span>{params.data?.subtotal}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "total",
        field: "total",
        filter: true,
        resizable: true,
        width: 180,
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

  async componentDidMount() {
    let pageparmission = JSON.parse(localStorage.getItem("userData"));
    console.log(pageparmission?.Userinfo?.id);
    // order_status= 'Inprogress, 'Completed'
    const formdata = new FormData();
    formdata.append("user_id", pageparmission?.Userinfo?.id);
    // formdata.append("order_status", "Pending");
    formdata.append("order_status", "orderreceived");

    await axiosConfig
      .post(`/order_detail`, formdata)
      .then((res) => {
        console.log(res.data.data);
        let rowData = res.data.data;
        this.setState({ rowData });
      })
      .catch((err) => {
        console.log(err);
      });

    let newparmisson = pageparmission?.role?.find(
      (value) => value?.pageName === "Order Received List"
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
    const data = new FormData();
    data.append("banner_title", this.state.banner_title);
    data.append("bannertype", this.state.bannertype);
    data.append("status", this.state.status);
    for (const file of this.state.selectedFile) {
      if (this.state.selectedFile !== null) {
        data.append("banner_img", file, file.name);
      }
    }
    for (var value of data.values()) {
      console.log(value);
    }
    for (var key of data.keys()) {
      console.log(key);
    }
    axiosConfig
      .post("/addbanner", data)
      .then((response) => {
        console.log(response);
        swal("Successful!", "You clicked the button!", "success");
        this.props.history.push("/app/freshlist/banner/bannerList");
      })
      .catch((error) => {
        console.log(error);
      });
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
                  Confirmed Order List
                </h1>
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
                            this.state.currenPageSize * this.state.getPageSize >
                          0
                            ? this.state.currenPageSize * this.state.getPageSize
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
                      <div className="table-input mr-1">
                        <Input
                          placeholder="Hub Name"
                          onChange={(e) =>
                            this.updateSearchQuery(e.target.value)
                          }
                          value={this.state.value}
                        />
                      </div>
                      <div className="table-input mr-1">
                        <Input
                          placeholder="Order Id"
                          onChange={(e) =>
                            this.updateSearchQuery(e.target.value)
                          }
                          value={this.state.value}
                        />
                      </div>
                      <div className="table-input mr-1">
                        <Input
                          placeholder="Phone Number"
                          onChange={(e) =>
                            this.updateSearchQuery(e.target.value)
                          }
                          value={this.state.value}
                        />
                      </div>
                      <div className="table-input mr-1">
                        <Input
                          placeholder="Enter Email"
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
    );
  }
}
export default Confirmed;
