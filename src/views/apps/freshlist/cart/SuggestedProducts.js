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
  Label,
  FormGroup,
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

class SuggestedProducts extends React.Component {
  state = {
    rowData: [],
    userDataList: [],
    user: "",
    mainRole: "",
    paginationPageSize: 20,
    currenPageSize: "",
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
        width: 150,
        filter: true,
      },
      {
        headerName: "Name",
        field: "subscriptions",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.subscriptions}</span>
            </div>
          );
        },
      },
      {
        headerName: "Product Name",
        field: "product",
        filter: true,
        width: 190,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <span>{params.data.product}</span>
            </div>
          );
        },
      },
      {
        headerName: "How Many Day",
        field: "validity",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.validity}</span>
            </div>
          );
        },
      },
      {
        headerName: "How Many Orders Placed",
        field: "orders",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.orders}</span>
            </div>
          );
        },
      },
      {
        headerName: "How Many Remaining",
        field: "remaining",
        filter: true,
        width: 200,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>{params.data.remaining}</span>
            </div>
          );
        },
      },

      {
        headerName: "Status",
        field: "status",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return params.value === "Block" ? (
            <div className="badge badge-pill badge-success">
              {params.data.status}
            </div>
          ) : params.value === "Unblock" ? (
            <div className="badge badge-pill badge-warning">
              {params.data.status}
            </div>
          ) : null;
        },
      },
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
    let pageparmission = JSON.parse(localStorage.getItem("userData"));
    console.log("role", pageparmission.Userinfo.role);
    this.setState({ mainRole: pageparmission?.Userinfo?.role });
    let newparmisson = pageparmission?.role?.find(
      (value) => value?.pageName === "Budget List"
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
    console.log(newparmisson?.permission.includes("View"));
    console.log(newparmisson?.permission.includes("Create"));
    console.log(newparmisson?.permission.includes("Edit"));
    console.log(newparmisson?.permission.includes("Delete"));

    const formdata = new FormData();
    formdata.append("user_id", pageparmission?.Userinfo?.id);
    formdata.append("role", pageparmission?.Userinfo?.role);
    axiosConfig.post("/getuserlist", formdata).then((response) => {
      let userDataList = response?.data?.data?.users;
      console.log(userDataList);
      this.setState({ userDataList });
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
  render() {
    const { rowData, columnDefs, defaultColDef } = this.state;
    return (
      console.log(rowData),
      (
        <Row className="app-user-list">
          <Col sm="12">
            <Card>
              <Row className="m-2">
                <Col>
                  <h1 sm="4" className="">
                    Budget List
                  </h1>
                </Col>
                {this.state.mainRole === "Super Admin" && (
                  <>
                    <Col>
                      <label className="selectClient">Assign A Budget</label>
                      <input className="form-control" type="number" />
                    </Col>
                    <Col>
                      <FormGroup>
                        <Label>Select A User</Label>

                        <select
                          required
                          onChange={(e) =>
                            this.setState({ user: e.target.value })
                          }
                          className="form-control"
                          name="Select"
                          id="Select"
                        >
                          <option value="">Select A User</option>
                          {this.state.userDataList &&
                            this.state.userDataList?.map((val, i) => (
                              <option key={i} value={val?.id}>
                                {val?.username}
                              </option>
                            ))}
                        </select>
                      </FormGroup>
                    </Col>
                    <Col>
                      <Button color="primary" className="mt-1">
                        Submit
                      </Button>
                    </Col>
                  </>
                )}
              </Row>

              {/* <Col>
                  <Button color="primary" className="mt-1">
                    Assign Budget
                  </Button>
                </Col> */}
              {/* <Col>
                  <input className="form-control mt-1" type="number" />
                </Col>
                <Col>
                  <Button color="primary" className="mt-1">
                    TOPUP Budget
                  </Button>
                </Col> */}

              {/* <Col>
                  <Button color="primary" className="mt-1">
                    Submit
                  </Button>
                </Col>
              </Row> */}
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
export default SuggestedProducts;
