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
import UserContext from "../../../../context/Context";

import axiosConfig from "../../../../axiosConfig";
import { ContextLayout } from "../../../../utility/context/Layout";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import { Eye, Trash2, ChevronDown, Edit, Trash, Edit2 } from "react-feather";
import { history } from "../../../../history";
import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../../assets/scss/pages/users.scss";
import swal from "sweetalert";
import { Route } from "react-router-dom";
import { BsEye, BsTrash } from "react-icons/bs";
class RoleList extends React.Component {
  static contextType = UserContext;

  state = {
    rowData: [],
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
        width: 150,
        filter: true,
      },
      {
        headerName: "Role Name",
        field: "Name",
        filter: true,
        resizable: true,
        width: 160,
        cellRendererFramework: params => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{params?.data?.role_name}</span>
              </div>
            </div>
          );
        },
      },

      {
        headerName: "Actions",
        field: "sortorder",
        field: "transactions",
        width: 160,
        cellRendererFramework: params => {
          return (
            <div className="actions cursor-pointer">
              <BsEye
                className="mr-50"
                size="25px"
                color="green"
                onClick={() =>
                  history.push(
                    `/app/freshlist/account/updateexistingrole/${params.data.id}`
                  )
                }
              />
<<<<<<< HEAD
              <Route
                render={({ history }) => (
                  <Edit
                    className="mr-50"
                    size="25px"
                    color="blue"
                    onClick={() =>
                      history.push({
                        pathname: `/app/freshlist/account/editRole/${params.data.id}`,
                        data: params,
                      })
                    }
                  />
                )}
=======
              <Edit2
                className="mr-50"
                size="25px"
                color="blue"
                onClick={() =>
                  history.push(
                    `/app/freshlist/account/updateexistingrole`
                    // `/app/freshlist/account/updateexistingrole/${params.data.id}`
                  )
                }
>>>>>>> 23df7562ee331f070063eb0087b57ba48a0f07f8
              />
              <BsTrash
                className="mr-50"
                size="25px"
                color="red"
                onClick={() => {
                  let selectedData = this.gridApi.getSelectedRows();
                  // this.runthisfunction(params.data._id);
                  this.gridApi.updateRowData({ remove: selectedData });
                }}
              />
            </div>
          );
        },
      },
    ],
  };
  async componentDidMount() {
    axiosConfig
      .get("/getrolelist")
      .then(response => {
        // console.log(response.data?.data?.roles);
        // const propertyNames = Object.values(response.data?.data?.roles);

        this.setState({ rowData: response.data?.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  async runthisfunction(id) {
    console.log(id);
    await axiosConfig.get(`/delcontactus/${id}`).then(response => {
      console.log(response);
    });
  }
  onGridReady = params => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.setState({
      currenPageSize: this.gridApi.paginationGetCurrentPage() + 1,
      getPageSize: this.gridApi.paginationGetPageSize(),
      totalPages: this.gridApi.paginationGetTotalPages(),
    });
  };
  updateSearchQuery = val => {
    this.gridApi.setQuickFilter(val);
  };

  filterSize = val => {
    if (this.gridApi) {
      this.gridApi.paginationSetPageSize(Number(val));
      this.setState({
        currenPageSize: val,
        getPageSize: val,
      });
    }
  };
  //   onChangeHandler = (event) => {
  //     this.setState({ selectedFile: event.target.files[0] });
  //     this.setState({ selectedName: event.target.files[0].name });
  //     console.log(event.target.files[0]);
  //   };
  //   onChangeHandler = (event) => {
  //     this.setState({ selectedFile: event.target.files });
  //     this.setState({ selectedName: event.target.files.name });
  //     console.log(event.target.files);
  //   };
  //   changeHandler1 = (e) => {
  //     this.setState({ status: e.target.value });
  //   };
  //   changeHandler = (e) => {
  //     this.setState({ [e.target.name]: e.target.value });
  //   };
  //   submitHandler = (e) => {
  //     e.preventDefault();
  //     const data = new FormData();
  //     data.append("banner_title", this.state.banner_title);
  //     data.append("bannertype", this.state.bannertype);
  //     data.append("status", this.state.status);
  //     for (const file of this.state.selectedFile) {
  //       if (this.state.selectedFile !== null) {
  //         data.append("banner_img", file, file.name);
  //       }
  //     }

  //     axiosConfig
  //       .post("/addbanner", data)
  //       .then((response) => {
  //         console.log(response);
  //         swal("Successful!", "You clicked the button!", "success");
  //         this.props.history.push("/app/freshlist/banner/bannerList");
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };

  render() {
    const { rowData, columnDefs, defaultColDef } = this.state;
    return (
      <Row className="app-user-list">
        <Col sm="12">
          <Card>
            <Row className="m-2">
              <Col>
                <h1 col-sm-6 className="float-left">
                  Created Role List
                </h1>
              </Col>
              {/* <Col>
                <Route
                  render={({ history }) => (
                    <Button
                      className=" float-right"
                      color="primary"
                      onClick={() =>
                        history.push("/app/freshlist/refundrequest/addRefund")
                      }
                    >
                      Add Refund
                    </Button>
                  )}
                />
              </Col> */}
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
                    {/* <div className="d-flex flex-wrap justify-content-between mb-1">
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
                    </div> */}
                  </div>
                  <ContextLayout.Consumer>
                    {context => (
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
export default RoleList;
