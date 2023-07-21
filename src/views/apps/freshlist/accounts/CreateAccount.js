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
import Multiselect from "multiselect-react-dropdown";
import axiosConfig from "../../../../axiosConfig";
// import Multiselect from "multiselect-react-dropdown";
import swal from "sweetalert";
import "../../../../../src/layouts/assets/scss/pages/users.scss";
import { Route } from "react-router-dom";
export class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Address: "",
      fullname: "",
      City: "",
      phone_no: "",
      password: "",
      email: "",
      status: "",
      AssignRole: "",
      Selectuser: "",
      UserName: "",
    };
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };

  //   async componentDidMount() {
  //     axiosConfig
  //       .get("/admin/product_list")
  //       .then((response) => {
  //         console.log(response.data.data);
  //         this.setState({
  //           productName: response.data.data,
  //         });
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });

  //     axiosConfig
  //       .get("/admin/getall_units")
  //       .then((response) => {
  //         this.setState({
  //           attribuName: response.data.data,
  //         });
  //       })
  //       .catch((err) => {
  //         swal("Oops", "Something went wrong!", "error");
  //         console.log(err);
  //       });
  //   }

  submitHandler = (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("password", this.state.password);
    formdata.append("full_name", this.state.fullname);
    formdata.append("username", this.state.UserName);
    formdata.append("city", this.state.City);
    formdata.append("mobile", this.state.phone_no);
    formdata.append("email", this.state.email);
    formdata.append("status", this.state.status);
    formdata.append("role", this.state.AssignRole);

    // formdata.append("", this.state.AssignRole);
    // formdata.append("username", this.state.UserName);
    axiosConfig
      .post("/createuser", formdata)
      .then((response) => {
        // console.log(response.data?.success);
        if (response.data?.success) {
          swal("Success!", "Submitted SuccessFull!", "success");
          this.setState({ AssignRole: "" });
          this.setState({ status: "" });
          this.setState({ email: "" });
          this.setState({ City: "" });
          this.setState({ phone_no: "" });
          this.setState({ UserName: "" });
          this.setState({ fullname: "" });
          this.setState({ password: "" });
        }
        // this.props.history.push("/app/freshlist/order/all");
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
                Add User here
              </h1>
            </Col>
            {/* <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() => history.push("/app/freshlist/order/all")}
                  >
                    Back
                  </Button>
                )}
              />
            </Col> */}
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row className="mb-2">
                {/* <Col lg="6" md="6">
                  <FormGroup>
                    <Label>User Name</Label>
                    <Multiselect
                      selectionLimit="1"
                      name="UserName"
                      // singleSelect
                      placeholder="user Name"
                      value={this.state.UserName}
                      isObject={false}
                      onRemove={(e) => {
                        console.log(e);
                      }}
                      onSelect={(e) => {
                        this.setState({ UserName: e });
                        // this.setState({ [e.target.name]: e.target.value });
                        console.log(e);
                      }}
                      onChange={this.changeHandler}
                      options={[
                        "$6465464564664",
                        "$65466464",
                        "$6546ddd4646465464",
                        "$65464dd465466",
                        "$6546ss6464",
                        "$65aa466464",
                        "$6546464vv646f5464",
                        "$654644dr65f466",
                        "$6546646rrf4",
                        "$654sff6646f4",
                        "$6546464frtt6465464",
                        "$6546446f5466",
                        "$6546646f4",
                        "$6546f46df4f6465464",
                        "$654ddfd6f4465466",
                      ]}
                      showCheckbox
                      className="mmm "
                    />

                   
                    <Input
                      type="number"
                      placeholder=""
                      name="UserName"
                      value={this.state.UserName}
                      onChange={this.changeHandler.bind(this)}
                    /> 
                  </FormGroup>
                </Col> */}
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Name</Label>
                    <Input
                      required
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
                    <Label>Display Name</Label>
                    <Input
                      required
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
                    <Label>Mobile Number</Label>
                    <Input
                      required
                      type="number"
                      maxLength={10}
                      size={10}
                      placeholder="0123456789"
                      name="phone_no"
                      value={this.state.phone_no}
                      onChange={this.changeHandler.bind(this)}
                    />
                  </FormGroup>
                </Col>

                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Email</Label>
                    <Input
                      required
                      type="email"
                      placeholder="abcd@gmail.com..."
                      name="email"
                      value={this.state.email}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Password</Label>
                    <Input
                      required
                      type="password"
                      placeholder="Enter password"
                      name="password"
                      value={this.state.password}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>

                {/* <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Product Name</Label>
                    <Multiselect
                      name="UserName"
                      placeholder="ata tamater Aalu "
                      value={this.state.UserName}
                      isObject={false}
                      onRemove={(e) => {
                        console.log(e);
                      }}
                      onSelect={(e) => {
                        this.setState({ UserName: e });
                        // this.setState({ [e.target.name]: e.target.value });
                        console.log(e);
                      }}
                      onChange={this.changeHandler}
                      options={[
                        "Aalu",
                        "tamater",
                        "milk",
                        "Soya Chunks",
                        "Ata",
                        "Ice Cream",
                      ]}
                      showCheckbox
                      className="mmm "
                    />
                   
                  </FormGroup>
                </Col> */}
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>City</Label>
                    <Input
                      required
                      type="text"
                      placeholder="Enter City"
                      name="City"
                      value={this.state.City}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <hr />
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
                    <option value="Admin">Admin</option>
                    <option value="Seller">Seller</option>
                    <option value="Seller">UPI</option>
                    <option value="Seller">Other</option>
                  </CustomInput>
                </Col>
                {/* <Col lg="6" md="6">
                  <Label className="mt-2  mb-2"> Select User</Label>

                  <CustomInput
                    type="select"
                    placeholder=""
                    name="Selectuser"
                    value={this.state.Selectuser}
                    onChange={this.changeHandler}
                  >
                    <option value="user1">user 1</option>
                    <option value="user2">user2</option>
                    <option value="user2">UPI</option>
                    <option value="user2">Other</option>
                  </CustomInput>
                </Col> */}
              </Row>
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
      </div>
    );
  }
}
export default CreateAccount;
