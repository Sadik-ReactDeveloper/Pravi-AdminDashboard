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

class DateWiseReport extends React.Component {
  state = {
    rowData: [],
    paginationPageSize: 20,
    currenPageSize: "",
    CurrentDate: "",
    SelectedDate: "",
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
        width: 150,
        filter: true,
      },
      {
        headerName: "po_no",
        field: "po_no",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.po_no}</span>
            </div>
          );
        },
      },
      {
        headerName: "order_status",
        field: "order_status",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              <Badge color="success">{params.data.order_status}</Badge>
            </div>
          );
        },
      },
      {
        headerName: "username",
        field: "username",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.username}</span>
            </div>
          );
        },
      },
      {
        headerName: "user_mobile_no",
        field: "product",
        filter: true,
        width: 190,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.user_mobile_no}</span>
            </div>
          );
        },
      },
      {
        headerName: "user_email",
        field: "user_email",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.user_email}</span>
            </div>
          );
        },
      },

      {
        headerName: "phone_no",
        field: "phone_no",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.phone_no}</span>
            </div>
          );
        },
      },
      {
        headerName: "created_by",
        field: "created_by",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.created_by}</span>
            </div>
          );
        },
      },
      {
        headerName: "state_title",
        field: "state_title",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.state_title}</span>
            </div>
          );
        },
      },
      {
        headerName: "supplier_name",
        field: "supplier_name",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.supplier_name}</span>
            </div>
          );
        },
      },
      {
        headerName: "total",
        field: "total",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.total}</span>
            </div>
          );
        },
      },
      {
        headerName: "supplier_city_name",
        field: "supplier_city_name",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.supplier_city_name}</span>
            </div>
          );
        },
      },
      {
        headerName: "company_name",
        field: "company_name",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.company_name}</span>
            </div>
          );
        },
      },
      {
        headerName: "company_type",
        field: "company_type",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.company_type}</span>
            </div>
          );
        },
      },
      {
        headerName: "created_date",
        field: "created_date",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.created_date}</span>
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
              <Eye
                className="mr-50"
                size="25px"
                color="green"
                onClick={() =>
                  history.push(
                    `/app/freshlist/subscriber/viewSubscriber/${params.data._id}`
                  )
                }
              />
            </div>
          );
        },
      },
    ],
  };
  componentDidMount() {
    const date = new Date().toISOString();
    console.log(date.split("T")[0]);
    this.setState({ CurrentDate: date.split("T")[0] });
    let pageparmission = JSON.parse(localStorage.getItem("userData"));
    // console.log(pageparmission.role);
    let newparmisson = pageparmission?.role?.find(
      (value) => value?.pageName === "Date Wise"
    );
    console.log(newparmisson);
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
        console.log(response?.data?.data);
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
  HandleDateWiseReport = (e) => {
    e.preventDefault();
    let pageparmission = JSON.parse(localStorage.getItem("userData"));
    console.log("object", this.state.SelectedDate);
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
    const { rowData, columnDefs, defaultColDef } = this.state;

    return (
      console.log(rowData),
      (
        <Row className="app-user-list">
          <Col sm="12"></Col>
          <Col sm="12">
            <Card>
              <Row className="m-2">
                <Col sm="" lg="" md="">
                  <h1 className="float-left">Date Wise Report</h1>
                </Col>
                <Col lg="3" sm="3" md="3">
                  <label for="start">Start Date:</label>

                  <input
                    onChange={(e) => {
                      this.setState({ SelectedDate: e.target.value });
                    }}
                    className="form-control"
                    type="date"
                    id="start"
                    name="trip-start"
                    pattern="\d{4}-\d{2}-\d{2}"
                    // value="2018-07-22"
                    min="2019-01-01"
                    max={this.state.CurrentDate && this.state.CurrentDate}
                  />
                </Col>
                <Col lg="3" sm="3" md="3">
                  <label for="start">End Date:</label>

                  <input
                    onChange={(e) => {
                      this.setState({ SelectedDate: e.target.value });
                    }}
                    className="form-control"
                    type="date"
                    id="start"
                    name="trip-start"
                    pattern="\d{4}-\d{2}-\d{2}"
                    // value="2018-07-22"
                    min="2019-01-01"
                    max={this.state.CurrentDate && this.state.CurrentDate}
                  />
                </Col>
                <Col>
                  <Button
                    className="mt-2"
                    onClick={(e) => this.HandleDateWiseReport(e)}
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
      )
    );
  }
}
export default DateWiseReport;
