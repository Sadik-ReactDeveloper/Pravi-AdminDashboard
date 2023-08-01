import React, { Component } from "react";
import {
  Card,
  CardBody,
  Col,
  Form,
  Row,
  Input,
  Label,
  Button,
  FormGroup,
  CustomInput,
} from "reactstrap";
import { history } from "../../../../history";
import axiosConfig from "../../../../axiosConfig";
import { Route } from "react-router-dom";
import swal from "sweetalert";
export class EditProductType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FullName: "",
      UserName: "",
      Mobile: "",
      Email: "",
      City: "",
      status: "",
      Password: "",
      AssignRole: "",
      Role: "",
      viewData: [],
      rolesList: [],
    };
  }
  async componentDidMount() {
    let { id } = this.props.match.params;
    const data = new FormData();
    data.append("user_id", id);
    await axiosConfig
      .post("/usereditview", data)
      .then((response) => {
        this.setState({
          UserName: response.data.data.username,
          FullName: response.data.data.full_name,
          Mobile: response.data.data.mobile,
          Email: response.data.data.email,
          Role: response.data.data.role,
          City: response.data.data.city,
          Password: response.data.data.password,
          status: response.data.data.status,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    let pageparmission = JSON.parse(localStorage.getItem("userData"));
    const formdata = new FormData();
    formdata.append("user_id", pageparmission?.Userinfo?.id);
    formdata.append("role", pageparmission?.Userinfo?.role);
    await axiosConfig
      .post("/getrolelistdropdown", formdata)
      .then((response) => {
        const propertyNames = Object.values(response.data?.data?.roles);
        this.setState({
          productName: propertyNames,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handlerStatus = (e) => {
    console.log(e.target.value);
    this.setState({ Status: e.target.value });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  changeHandlerRole = (e) => {
    console.log(e.target.value);
    this.setState({ Role: e.target.value });
  };

  submitHandler = (e) => {
    let { id } = this.props.match.params;
    e.preventDefault();
    console.log(
      id,
      this.state.FullName,
      this.state.UserName,
      this.state.Mobile,
      this.state.Email,
      this.state.Role,
      this.state.City,
      this.state.Password,
      this.state.status
    );
    const data = new FormData();
    data.append("user_id", id);
    data.append("full_name", this.state.FullName);
    data.append("username", this.state.UserName);
    data.append("mobile", this.state.Mobile);
    data.append("email", this.state.Email);
    data.append("role", this.state.Role);
    data.append("city", this.state.City);
    data.append("password", this.state.Password);
    data.append("status", this.state.status);

    axiosConfig
      .post("/usereditsubmit", data)
      .then((response) => {
        console.log(response.data);
        // this.setState({EditData:response.data.data})
        swal("Success!", "Submitted SuccessFull!", "success");
        // this.props.history.push(
        //   "/app/freshlist/attribute/productAttributeList"
        // );
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Edit User
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() =>
                      history.push("/app/freshlist/house/producttype")
                    }
                  >
                    Back
                  </Button>
                )}
              />
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={(e) => this.submitHandler(e)}>
              <Row className="mb-2">
                <Col lg="6" md="6" className="mb-1">
                  <Label>UserName</Label>
                  <Input
                    type="text"
                    placeholder="UserName"
                    name="UserName"
                    disabled
                    value={this.state.UserName}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-1">
                  <Label>FullName</Label>
                  <Input
                    type="text"
                    placeholder="FullName"
                    name="FullName"
                    disabled
                    value={this.state.FullName}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-1">
                  <Label>Email</Label>
                  <Input
                    type="email"
                    placeholder="Email"
                    disabled
                    name="Email"
                    value={this.state.Email}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-1">
                  <Label>Mobile</Label>
                  <Input
                    type="number"
                    placeholder="Mobile"
                    name="Mobile"
                    disabled
                    value={this.state.Mobile}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-1">
                  <Label>City</Label>
                  <Input
                    type="text"
                    placeholder="City"
                    name="City"
                    value={this.state.City}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" className="mb-1">
                  <Label>Password</Label>
                  <Input
                    type="text"
                    placeholder="Password"
                    name="Password"
                    value={this.state.Password}
                    onChange={this.changeHandler}
                  />
                </Col>

                <Col lg="6" md="6">
                  <Label className="mt-2  mb-2"> Select Role</Label>

                  <CustomInput
                    type="select"
                    placeholder=""
                    name="Role"
                    value={this.state.Role}
                    onChange={this.changeHandlerRole}
                  >
                    {this.state.productName &&
                      this.state.productName?.map((list, i) => (
                        <option key={i} value={list}>
                          {list}
                        </option>
                      ))}
                  </CustomInput>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label className="mb-1">Status</Label>
                  <div
                    className="form-label-group"
                    onChange={(e) => this.handlerStatus(e)}
                  >
                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="Active"
                    />
                    <span style={{ marginRight: "20px" }}>Active</span>

                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="status"
                      value="Inactive"
                    />
                    <span style={{ marginRight: "3px" }}>Inactive</span>
                  </div>
                </Col>
              </Row>
              <Row>
                <Button.Ripple
                  color="primary"
                  type="submit"
                  className="mr-1 mb-1"
                >
                  Edit User
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default EditProductType;
