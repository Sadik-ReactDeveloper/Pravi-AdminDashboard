import React from "react";
import {
  Card,
  CardBody,
  Input,
  Row,
  Col,
  Button,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Badge,
} from "reactstrap";
import axios from "axios";
import { ContextLayout } from "../../../../utility/context/Layout";
import { AgGridReact } from "ag-grid-react";
import { Edit, Trash2, ChevronDown, Eye } from "react-feather";
import { history } from "../../../../history";
import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../../assets/scss/pages/users.scss";
import { Route, Link } from "react-router-dom";
// import { components } from "react-select";
import axiosConfig from "../../../../axiosConfig";
const rowHeight = 100;
const newarr = [];
class ProductWise extends React.Component {
  state = {
    rowData: [],
    paginationPageSize: 20,
    currenPageSize: "",
    filteredRowData: [],
    originalRowData: [], // Store the original data
    productFilterText: "",
    SelectedProduct: "",
    getPageSize: "",
    defaultColDef: {
      sortable: true,
      // editable: true,
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
        headerName: "PoNo",
        field: "po_no",
        filter: true,
        // innerHeight: 100,
        width: 120,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data?.po_no}</span>
            </div>
          );
        },
      },
      {
        headerName: "Product Name",
        field: "products",
        filter: true,
        // innerHeight: 100,
        width: 160,
        // filterParams: {
        //   textCustomComparator: function (filter, value, filterText) {
        //     // Convert product titles to a single string for filtering
        //     const allTitles = value.map((product) => product.title).join(", ");
        //     return allTitles.toLowerCase().includes(filterText.toLowerCase());
        //   },
        // },
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex flex-wrap">
              {params?.data?.products &&
                params?.data?.products?.map((ele, i) => (
                  <span key={i}>{ele?.title} ,</span>
                ))}
            </div>
          );
        },
      },
      {
        headerName: "OrderStatus",
        field: "order_status",
        filter: true,
        width: 160,
        cellRendererFramework: (params) => {
          return (
            <div>
              <Badge color="success">{params.data?.order_status}</Badge>
            </div>
          );
        },
      },
      {
        headerName: "Branch Code",
        field: "display_code",
        filter: true,
        width: 160,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data?.display_code}</span>
            </div>
          );
        },
      },
      // {
      //   headerName: "mobileno",
      //   field: "product",
      //   filter: true,
      //   width: 190,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div className="d-flex align-items-center cursor-pointer">
      //         <span>{params.data.user_mobile_no}</span>
      //       </div>
      //     );
      //   },
      // },
      // {
      //   headerName: "useremail",
      //   field: "user_email",
      //   filter: true,
      //   width: 200,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div>
      //         <span>{params.data.user_email}</span>
      //       </div>
      //     );
      //   },
      // },

      // {
      //   headerName: "phoneno",
      //   field: "phone_no",
      //   filter: true,
      //   width: 200,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div>
      //         <span>{params.data.phone_no}</span>
      //       </div>
      //     );
      //   },
      // },
      // {
      //   headerName: "createdby",
      //   field: "created_by",
      //   filter: true,
      //   width: 200,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div>
      //         <span>{params.data.created_by}</span>
      //       </div>
      //     );
      //   },
      // },
      // {
      //   headerName: "state",
      //   field: "state_title",
      //   filter: true,
      //   width: 200,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div>
      //         <span>{params.data.state_title}</span>
      //       </div>
      //     );
      //   },
      // },
      {
        headerName: "suppliername",
        field: "supplier_name",
        filter: true,
        width: 180,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data?.supplier_name}</span>
            </div>
          );
        },
      },
      {
        headerName: "total",

        field: "total",
        filter: true,
        width: 140,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data?.total}</span>
            </div>
          );
        },
      },
      // {
      //   headerName: "suppliercity",
      //   field: "supplier_city_name",
      //   filter: true,
      //   width: 200,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div>
      //         <span>{params.data.supplier_city_name}</span>
      //       </div>
      //     );
      //   },
      // },
      // {
      //   headerName: "companyname",
      //   field: "company_name",
      //   filter: true,
      //   width: 200,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div>
      //         <span>{params.data.company_name}</span>
      //       </div>
      //     );
      //   },
      // },
      // {
      //   headerName: "companytype",
      //   field: "company_type",
      //   filter: true,
      //   width: 200,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div>
      //         <span>{params.data.company_type}</span>
      //       </div>
      //     );
      //   },
      // },
      {
        headerName: "createddate",
        field: "created_date",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data?.created_date}</span>
            </div>
          );
        },
      },

      // {
      //   headerName: "Status",
      //   field: "status",
      //   filter: true,
      //   width: 150,
      //   cellRendererFramework: (params) => {
      //     return params.value === "Block" ? (
      //       <div className="badge badge-pill badge-success">
      //         {params.data.status}
      //       </div>
      //     ) : params.value === "Unblock" ? (
      //       <div className="badge badge-pill badge-warning">
      //         {params.data.status}
      //       </div>
      //     ) : null;
      //   },
      // },
      {
        headerName: "Actions",
        field: "sortorder",
        field: "transactions",
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="actions cursor-pointer">
              <Route
                render={({ history }) => (
                  <Eye
                    className="mr-50"
                    size="25px"
                    color="blue"
                    onClick={() =>
                      history.push({
                        pathname: `/app/freshlist/cart/ViewoneFinalreport`,
                        state: params.data,
                      })
                    }
                  />
                )}
              />
            </div>
          );
        },
      },
    ],
  };
  handleProductFilterChange = (event) => {
    const filterText = event.target.value.toLowerCase();
    let pageparmission = JSON.parse(localStorage.getItem("userData"));

    // const formdata = new FormData();
    // formdata.append("user_id", pageparmission?.Userinfo?.id);
    // formdata.append("role", pageparmission?.Userinfo?.role);
    // axiosConfig
    //   .post("/reportApi", formdata)
    //   .then((response) => {
    //     let rowData = response?.data?.data;
    //     this.setState({ rowData });
    //   })
    //   .catch((err) => {
    //     // console.log(err);
    //   });

    const { originalRowData, rowData } = this.state;

    const filteredRowData = rowData.map((row) => {
      const filteredProducts = row.products.filter((product) =>
        product.title.toLowerCase().includes(filterText)
      );
      return {
        ...row,
        products: filteredProducts,
      };
    });

    let newarrr = filteredRowData.filter((ele, i) => ele?.products.length > 0);
    console.log(newarrr);
    this.searchiTem(newarrr);
  };
  searchiTem = (data) => {
    this.setState({ rowData: data });
  };

  // componentDidUpdate() {
  //   this.setState({ rowData: newarr });
  // }

  componentDidMount() {
    let pageparmission = JSON.parse(localStorage.getItem("userData"));
    // console.log(pageparmission.role);
    let newparmisson = pageparmission?.role?.find(
      (value) => value?.pageName === "Product Wise"
    );
    // console.log(newparmisson);
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
    axiosConfig
      .post("/reportApi", formdata)
      .then((response) => {
        let rowData = response?.data?.data;
        this.setState({ rowData });
      })
      .catch((err) => {
        // console.log(err);
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
  handleProductWiseReport = (e) => {
    e.preventDefault();
    let pageparmission = JSON.parse(localStorage.getItem("userData"));
    console.log("object", this.state.SelectedProduct);
    const data = new FormData();
    data.append("user_id", pageparmission?.Userinfo?.id);
    data.append("role", "User");
    axiosConfig
      .post("/getUserlistforBudget", data)
      .then((response) => {
        let userDataList = response?.data?.data?.users;
        // this.setState({ userDataList });
      })
      .catch((err) => {
        // console.log(err);
      });
  };
  render() {
    const {
      filteredRowData,
      productFilterText,
      rowData,
      columnDefs,
      defaultColDef,
    } = this.state;
    return (
      // console.log(filteredRowData),
      // console.log(productFilterText),
      <Row className="app-user-list">
        <Col sm="12"></Col>
        <Col sm="12">
          <Card>
            <Row className="m-2">
              <Col sm="6" lg="6" md="6">
                <h1 sm="6" className="float-left">
                  Product Wise Report
                </h1>
              </Col>
              <Col lg="4" md="4" sm="4">
                <label for="cars">Select Product :</label>

                <select
                  onChange={(e) => {
                    this.setState({ SelectedProduct: e.target.value });
                  }}
                  className="form-control"
                  name="cars"
                  id="cars"
                >
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select>
              </Col>
              <Col>
                <Button
                  className="mt-2"
                  onClick={(e) => this.handleProductWiseReport(e)}
                  color="primary"
                >
                  Submit
                </Button>
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
                          placeholder="search..."
                          onChange={(e) => {
                            // this.updateSearchQuery(e.target.value);
                            this.handleProductFilterChange(e);
                          }}
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
                        rowHeight={rowHeight}
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
export default ProductWise;
