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
      Address: "",
      fullname: "",
      B_City: "",
      checkbox: "",
      S_City: "",
      Mobile_no: "",
      B_Country: "",
      S_Country: "",
      Phone_no: "",
      Place_of_Supply: "",
      B_State: "",
      S_State: "",
      B_Street: "",
      S_Street: "",
      B_PinCode: "",
      S_PinCode: "",
      setuserList: false,
      password: "",
      email: "",
      status: "",
      AssignRole: "",
      CompanyName: "",
      Companytype: "",
      Selectuser: "",
      UserName: "",
      UserId: "",
      City: "",
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
        console.log(response.data.data);
        if (this.state.B_Street === this.state.S_Street) {
          this.setState({ checkbox: true });
        }
        this.setState({
          B_City: response.data.data.billing_city,
          B_Country: response.data.data.billing_country,
          B_PinCode: response.data.data.billing_pincode,
          B_State: response.data.data.billing_state,
          B_Street: response.data.data.billing_street,
          CompanyName: response.data.data.company_name,
          Companytype: response.data.data.company_type,
          Role: response.data.data.role,
          AssignRole: response.data.data.role,
          email: response.data.data.email,
          fullname: response.data.data.full_name,
          Mobile_no: response.data.data.mobile,
          Phone_no: response.data.data.phone_no,
          Place_of_Supply: response.data.data.place_supply,
          S_City: response.data.data.shipping_city,
          S_Country: response.data.data.shipping_country,
          S_PinCode: response.data.data.shipping_pincode,
          S_State: response.data.data.shipping_state,
          S_Street: response.data.data.shipping_street,
          UserName: response.data.data.username,
          password: response.data.data.password,
          status: response.data.data.status,
          UserId: response.data.data.id,
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
  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };

  submitHandler = (e) => {
    let { id } = this.props.match.params;
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("id", id);
    formdata.append("password", this.state.password);
    formdata.append("full_name", this.state.fullname);
    formdata.append("username", this.state.UserName);
    formdata.append("city", this.state.B_City);
    formdata.append("mobile", this.state.Mobile_no);
    formdata.append("email", this.state.email);
    formdata.append("status", this.state.status);
    formdata.append("role", this.state.AssignRole);
    formdata.append("company_name", this.state.CompanyName);
    formdata.append("company_type", this.state.Companytype);
    formdata.append("place_supply", this.state.Place_of_Supply);
    formdata.append("billing_street", this.state.B_Street);
    formdata.append("billing_city", this.state.B_City);
    formdata.append("billing_state", this.state.B_State);
    formdata.append("billing_country", this.state.B_Country);
    formdata.append("billing_pincode", this.state.B_PinCode);
    formdata.append("shipping_street", this.state.S_Street);
    formdata.append("shipping_city", this.state.S_City);
    formdata.append("shipping_state", this.state.S_State);
    formdata.append("shipping_country", this.state.S_Country);
    formdata.append("shipping_pincode", this.state.S_PinCode);
    formdata.append("phone_no", this.state.Phone_no);

    axiosConfig
      .post("/usereditsubmit", formdata)
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

  handleMatchaddress = (value) => {
    this.setState({ checkbox: value });
    if (value) {
      this.setState({ S_Country: this.state.B_Country });
      this.setState({ S_State: this.state.B_State });
      this.setState({ S_City: this.state.B_City });
      this.setState({ S_Street: this.state.B_Street });
      this.setState({ S_PinCode: this.state.B_PinCode });
    } else {
      this.setState({ S_Country: "" });
      this.setState({ S_State: "" });
      this.setState({ S_City: "" });
      this.setState({ S_Street: "" });
      this.setState({ S_PinCode: "" });
    }
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
                      history.push("/app/freshlist/house/userlist")
                    }
                  >
                    Back
                  </Button>
                )}
              />
            </Col>
          </Row>
          {/* <CardBody>
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
          </CardBody> */}

          <Card>
            <div className="container ">
              <h4 className="py-2">
                Selected User Type :-{" "}
                {this.state.AssignRole === "Client" ? "Client" : "User"}
              </h4>
              <Row>
                {/* {this.state.AssignRole === "Client" && (
                  <Col lg="2" md="2">
                    <FormGroup>
                      <h3>
                        Client{" "}
                        <span>
                          <Input
                            required
                            checked={
                              this.state.AssignRole === "Client" ? true : false
                            }
                            className="mx-2"
                            type="radio"
                            name="role"
                            value="Client"
                            onChange={(e) => {
                              this.setState({ setuserList: false });
                              this.setState({ AssignRole: "Client" });
                            }}
                          />
                        </span>
                      </h3>
                    </FormGroup>
                  </Col>
                )} */}

                {/* {this.state.AssignRole === "User" && (
                  <Col lg="2" md="2">
                    <FormGroup>
                      <h3>
                        User{" "}
                        <span>
                          <Input
                            required
                            height="21px"
                            width="41px"
                            className="mx-2"
                            type="radio"
                            checked={
                              this.state.AssignRole === "User" ? true : false
                            }
                            name="City"
                            value="User"
                            onChange={(e) => {
                              this.setState({ setuserList: true });
                              this.setState({ AssignRole: "User" });
                            }}
                          />
                        </span>
                      </h3>
                    </FormGroup>
                  </Col>
                )} */}
              </Row>
            </div>

            <CardBody>
              <Form className="m-1" onSubmit={this.submitHandler}>
                <Row className="mb-2">
                  <Col lg="6" md="6">
                    <FormGroup>
                      <Label>Name *</Label>
                      <Input
                        required
                        // disabled
                        type="text"
                        placeholder="Enter Your Name"
                        name="fullname"
                        value={this.state.fullname}
                        onChange={this.changeHandler}
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="6" md="6">
                    <FormGroup>
                      <Label>Display Name *</Label>
                      <Input
                        required
                        // disabled
                        type="text"
                        placeholder="Enter Your Name"
                        name="UserName"
                        value={this.state.UserName}
                        onChange={this.changeHandler}
                      />
                    </FormGroup>
                  </Col>

                  <Col lg="6" md="6">
                    <FormGroup>
                      <Label>Mobile Number *</Label>
                      <Input
                        required
                        type="number"
                        maxLength={10}
                        size={10}
                        placeholder="0123456789"
                        name="Mobile_no"
                        value={this.state.Mobile_no}
                        onChange={this.changeHandler.bind(this)}
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="6" md="6">
                    <FormGroup>
                      <Label>Phone Number </Label>
                      <Input
                        required
                        type="number"
                        maxLength={10}
                        size={10}
                        placeholder="0123456789"
                        name="Phone_no"
                        value={this.state.Phone_no}
                        onChange={this.changeHandler.bind(this)}
                      />
                    </FormGroup>
                  </Col>

                  <Col lg="6" md="6">
                    <FormGroup>
                      <Label>Email</Label>
                      <Input
                        required
                        disabled
                        type="email"
                        placeholder="abcd@gmail.com..."
                        name="email"
                        value={this.state.email}
                        onChange={this.changeHandler}
                      />
                    </FormGroup>
                  </Col>
                  {/* <Col lg="6" md="6">
                    <FormGroup>
                      <Label>Password</Label>
                      <Input
                        required
                        disabled
                        type="text"
                        placeholder="Enter password"
                        name="password"
                        value={this.state.password}
                        onChange={this.changeHandler}
                      />
                    </FormGroup>
                  </Col> */}
                  <Col lg="6" md="6">
                    <FormGroup>
                      <Label>Company Name</Label>
                      <Input
                        required
                        type="text"
                        placeholder="Enter CompanyName"
                        name="CompanyName"
                        value={this.state.CompanyName}
                        onChange={this.changeHandler}
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="6" md="6">
                    <FormGroup>
                      <Label>Company Type</Label>
                      <Input
                        required
                        type="text"
                        placeholder="Enter Companytype"
                        name="Companytype"
                        value={this.state.Companytype}
                        onChange={this.changeHandler}
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="6" md="6">
                    <FormGroup>
                      <Label>Place of Supply</Label>
                      <Input
                        required
                        type="text"
                        placeholder="Enter Place_of_Supply"
                        name="Place_of_Supply"
                        value={this.state.Place_of_Supply}
                        onChange={this.changeHandler}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col>
                    <h4 className="mt-4">Billing Address :</h4>

                    <Col className="py-2" lg="12" md="12" sm="12">
                      <FormGroup>
                        <label for="cars">Choose Country</label>
                        <select
                          placeholder="Enter City"
                          name="B_Country"
                          value={this.state.B_Country}
                          onChange={this.changeHandler}
                          className="form-control"
                        >
                          <option value="volvo">--Select Country--</option>
                          <option value="India">India</option>
                        </select>
                      </FormGroup>
                    </Col>
                    <Col lg="12" md="12" sm="12">
                      <FormGroup>
                        <label for="cars">Choose State</label>
                        <select
                          name="B_State"
                          value={this.state.B_State}
                          onChange={this.changeHandler}
                          className="form-control"
                        >
                          <option value="volvo">--Select State--</option>
                          <option value="Madhya Pradesh">Madhya Pradesh</option>
                          <option value="Uttar Pradesh">Uttar Pradesh</option>
                          <option value="Maharastra">Maharastra</option>
                        </select>
                      </FormGroup>
                    </Col>
                    <Col lg="12" md="12" sm="12">
                      <FormGroup>
                        <FormGroup>
                          <label for="cars">Choose City</label>
                          <select
                            placeholder="Enter City"
                            name="B_City"
                            value={this.state.B_City}
                            onChange={this.changeHandler}
                            className="form-control"
                          >
                            <option value="volvo">--Select City--</option>
                            <option value="Indore">Indore</option>
                            <option value="Panvel">Panvel</option>
                            <option value="khandwa">khandwa</option>
                          </select>
                        </FormGroup>
                      </FormGroup>
                    </Col>
                    <Col lg="12" md="12" sm="12">
                      <FormGroup>
                        <Label>Street</Label>
                        <Input
                          required
                          type="text"
                          placeholder="Enter Street"
                          name="B_Street"
                          value={this.state.B_Street}
                          onChange={this.changeHandler}
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="12" md="12" sm="12">
                      <FormGroup>
                        <Label>PinCode</Label>
                        <Input
                          required
                          type="text"
                          placeholder="Enter PinCode"
                          name="B_PinCode"
                          value={this.state.B_PinCode}
                          onChange={this.changeHandler}
                        />
                      </FormGroup>
                    </Col>
                  </Col>
                  <Col>
                    <Row>
                      <Col lg="1" md="1">
                        <input
                          name="check"
                          checked={
                            this.state.B_Street === this.state.S_Street
                              ? true
                              : false
                          }
                          onChange={(e) => {
                            this.handleMatchaddress(e.target.checked);
                          }}
                          style={{
                            height: "15px",
                            width: "20px",
                          }}
                          type="checkbox"
                        />
                      </Col>
                      <Col>
                        <h5> Same as Billing Address </h5>
                      </Col>
                    </Row>
                    <h4 className="py-2">Shipping Address :</h4>

                    <Col lg="12" md="12" sm="12">
                      <FormGroup>
                        <label for="cars">Choose Country</label>
                        <select
                          placeholder="Enter City"
                          name="S_Country"
                          disabled={this.state.checkbox ? true : false}
                          value={this.state.S_Country}
                          onChange={this.changeHandler}
                          className="form-control"
                        >
                          <option value="volvo">--Select Country--</option>
                          <option value="India">India</option>
                        </select>
                      </FormGroup>
                    </Col>
                    <Col lg="12" md="12" sm="12">
                      <FormGroup>
                        <label for="cars">Choose State</label>
                        <select
                          name="S_State"
                          disabled={this.state.checkbox ? true : false}
                          value={this.state.S_State}
                          onChange={this.changeHandler}
                          className="form-control"
                        >
                          <option value="volvo">--Select State--</option>
                          <option value="Madhya Pradesh">Madhya Pradesh</option>
                          <option value="Uttar Pradesh">Uttar Pradesh</option>
                          <option value="Maharastra">Maharastra</option>
                        </select>
                      </FormGroup>
                    </Col>
                    <Col lg="12" md="12" sm="12">
                      <FormGroup>
                        <FormGroup>
                          <label for="cars">Choose City</label>
                          <select
                            disabled={this.state.checkbox ? true : false}
                            placeholder="Enter City"
                            name="S_City"
                            value={this.state.S_City}
                            onChange={this.changeHandler}
                            className="form-control"
                          >
                            <option value="volvo">--Select City--</option>
                            <option value="Indore">Indore</option>
                            <option value="Panvel">Panvel</option>
                            <option value="khandwa">khandwa</option>
                          </select>
                        </FormGroup>
                      </FormGroup>
                    </Col>
                    <Col lg="12" md="12" sm="12">
                      <FormGroup>
                        <Label>Street</Label>
                        <Input
                          required
                          disabled={this.state.checkbox ? true : false}
                          type="text"
                          placeholder="Enter Street"
                          name="S_Street"
                          value={this.state.S_Street}
                          onChange={this.changeHandler}
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="12" md="12" sm="12">
                      <FormGroup>
                        <Label>PinCode</Label>
                        <Input
                          required
                          disabled={this.state.checkbox ? true : false}
                          type="text"
                          placeholder="Enter PinCode"
                          name="S_PinCode"
                          value={this.state.S_PinCode}
                          onChange={this.changeHandler}
                        />
                      </FormGroup>
                    </Col>
                  </Col>
                </Row>

                {this.state.setuserList && (
                  <Row className="mt-2">
                    <Col lg="6" md="6">
                      <Label className="mt-2  mb-2"> Select Role</Label>

                      <CustomInput
                        type="select"
                        placeholder=""
                        name="AssignRole"
                        value={this.state.AssignRole}
                        onChange={this.changeHandler}
                      >
                        <option value="Admin">--Select Role--</option>

                        {this.state.productName &&
                          this.state.productName?.map((value, index) => (
                            <option key={index} value={value}>
                              {value}
                            </option>
                          ))}
                      </CustomInput>
                    </Col>
                  </Row>
                )}
                <Row>
                  <Col lg="6" md="6" sm="6" className="mb-2">
                    <Label className="mb-1 py-2">
                      <h4>Status</h4>
                    </Label>
                    <div
                      className="form-label-group"
                      onChange={this.changeHandler1}
                    >
                      <input
                        checked={this.state.status === "Active" ? true : false}
                        style={{ marginRight: "3px" }}
                        type="radio"
                        name="status"
                        value="Active"
                      />
                      <span style={{ marginRight: "20px" }}>Active</span>

                      <input
                        style={{ marginRight: "3px" }}
                        type="radio"
                        checked={
                          this.state.status === "Deactive" ? true : false
                        }
                        name="status"
                        value="Deactive"
                      />
                      <span style={{ marginRight: "3px" }}>Deactive</span>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mt-2 mx-2"
                  >
                    Submit
                  </Button.Ripple>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Card>
      </div>
    );
  }
}
export default EditProductType;
