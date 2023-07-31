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
} from "reactstrap";
import axiosConfig from "../../../../axiosConfig";
import ReactHtmlParser from "react-html-parser";
import { ContextLayout } from "../../../../utility/context/Layout";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import { Trash2, ChevronDown } from "react-feather";
import { history } from "../../../../history";
import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../../assets/scss/pages/users.scss";
import Moment from "react-moment";
import { FaWallet, Facart, FaCartArrowDown, FaBoxOpen } from "react-icons/fa";
import "moment-timezone";
import { Route } from "react-router-dom";

class RateMaster extends React.Component {
  state = {
    rowData: [],
    Viewpermisson: null,
    Editpermisson: null,
    Createpermisson: null,
    Deletepermisson: null,
    Ratemaster: [],
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
        headerName: "UID",
        valueGetter: "node.rowIndex + 1",
        field: "node.rowIndex + 1",
        // checkboxSelection: true,
        width: 150,
        filter: true,
      },

      // {
      //   headerName: "PRODUCT",
      //   field: "product",
      //   filter: "agSetColumnFilter",
      //   width: 150,
      //   cellRendererFramework: (params) => {
      //     console.log(params?.data);
      //     return (
      //       <div className="d-flex align-items-center cursor-pointer">
      //         <div className="">
      //           <span>vcvvv</span>
      //         </div>
      //       </div>
      //     );
      //   },
      // },
      {
        headerName: "CATEGORY",
        field: "category",
        filter: "agSetColumnFilter",
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                {/* <span>{ReactHtmlParser(params.data.volume)}</span> */}
                <span>{params?.data?.category_name}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "BRAND",
        field: "brand",
        filter: "agSetColumnFilter",
        width: 120,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{ReactHtmlParser(params?.data?.brand_name)}</span>
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
                <span>{ReactHtmlParser(params.data.price)}</span>
              </div>
            </div>
          );
        },
      },
      // {
      //   headerName: "STOCK",
      //   field: "pisces",

      //   filter: "agSetColumnFilter",
      //   width: 150,
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
        headerName: "status",
        field: "pisces",

        filter: "agSetColumnFilter",
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{ReactHtmlParser(params.data.status)}</span>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "Date Created",
        field: "pisces",

        filter: "agSetColumnFilter",
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="d-flex align-items-center cursor-pointer">
              <div className="">
                <span>{params.data?.created_date?.split(" ")[0]}</span>
              </div>
            </div>
          );
        },
      },
      // {
      //   headerName: "ORDER",
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
              {this.state.Deletepermisson && (
                <Trash2
                  className="mr-50"
                  size="25px"
                  color="Red"
                  onClick={() => {
                    let selectedData = this.gridApi.getSelectedRows();
                    this.runthisfunction(params.data._id);
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
  // componentDidMount() {}

  async componentDidMount() {
    let pageparmission = JSON.parse(localStorage.getItem("userData"));

    let newparmisson = pageparmission?.role?.find(
      (value) => value?.pageName === "Rate Master"
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

    await axiosConfig
      .get("/getratemaster")
      .then((response) => {
        // console.log(response.data.data);
        this.setState({ rowData: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async runthisfunction(id) {
    console.log(id);
    await axiosConfig.get(`/deltermcondition/${id}`).then((response) => {
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
  render() {
    const { rowData, columnDefs, defaultColDef } = this.state;
    return (
      <Row className="app-user-list pt-1">
        <Col sm="12"></Col>
        <Col sm="12">
          <Card>
            <Row className="pt-1 mx-1">
              <Col lg="3" md="3" className="mb-1 ">
                <Label>SHOW BY</Label>
                <Input
                  required
                  type="select"
                  name="weight"
                  placeholder="Enter Iden Type"
                  // value={this.state.weight}
                  // onChange={this.changeHandler}
                >
                  <option value="12ROW">12 ROW</option>
                  <option value="24ROW">24 ROW</option>
                  <option value="36ROW">36 ROW</option>
                </Input>
              </Col>
              <Col lg="3" md="3" className="mb-1">
                <Label>RATING BY</Label>
                <Input
                  required
                  type="select"
                  name="weight"
                  placeholder="Enter Iden Type"
                  // value={this.state.weight}
                  // onChange={this.changeHandler}
                >
                  <option value="1Star">1 Star</option>
                  <option value="2Star">2 Star</option>
                  <option value="3Star">3 Star</option>
                  <option value="4Star">4 Star</option>
                  <option value="5Star">5 Star</option>
                </Input>
              </Col>
              <Col lg="3" md="3" className="mb-1">
                <Label>CATEGORY BY</Label>
                <Input
                  required
                  type="select"
                  name="weight"
                  placeholder="Enter Iden Type"
                  // value={this.state.weight}
                  // onChange={this.changeHandler}
                >
                  <option value="Mans">Mans</option>
                  <option value="Womans">Womans</option>
                  <option value="Kids">Kids</option>
                  <option value="Accessory">Accessory</option>
                </Input>
              </Col>
              <Col lg="3" md="3" className="mb-1">
                <Label>BRAND BY</Label>
                <Input
                  required
                  type="select"
                  name="weight"
                  placeholder="Enter Iden Type"
                  // value={this.state.weight}
                  // onChange={this.changeHandler}
                >
                  <option value="Ecstasy">Ecstasy</option>
                  <option value="Freeland">Freeland</option>
                  <option value="Rongdhonu">Rongdhonu</option>
                </Input>
              </Col>
            </Row>
            <Row className="m-2">
              <Col>
                <h1>Rate Master List</h1>
              </Col>
              <Col>
                <Route
                  render={({ history }) => (
                    <Button
                      className=" btn btn-success float-right"
                      onClick={() =>
                        history.push("/app/freshlist/house/AddRateMaster")
                      }
                    >
                      Add
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
export default RateMaster;
