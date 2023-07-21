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

export class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category_name: "",
      Price: "",
      // type: "",
      description: "",
      variety: "",
      shipmentfee: "",
      Tags: "",
      taxrate: "",
      status: "",
      selectedFile1: null,
      selectedName1: "",
      selectedFile2: null,
      selectedName2: "",
      selectedFile3: null,
      selectedName3: "",
      selectedFile4: null,
      selectedName4: "",
    };
  }

  onChangeHandler1 = (event) => {
    this.setState({ selectedFile1: event.target.files[0] });
    this.setState({ selectedName1: event.target.files[0].name });
    console.log(event.target.files[0]);
  };
  onChangeHandler2 = (event) => {
    this.setState({ selectedFile2: event.target.files[0] });
    this.setState({ selectedName2: event.target.files[0].name });
    console.log(event.target.files[0]);
  };
  onChangeHandler3 = (event) => {
    this.setState({ selectedFile3: event.target.files[0] });
    this.setState({ selectedName3: event.target.files[0].name });
    console.log(event.target.files[0]);
  };
  onChangeHandler4 = (event) => {
    this.setState({ selectedFile4: event.target.files[0] });
    this.setState({ selectedName4: event.target.files[0].name });
    console.log(event.target.files[0]);
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

    data.append("title", this.state.category_name);
    data.append("veriety", this.state.variety);
    data.append("price", this.state.Price);
    data.append("description", this.state.description);
    data.append("shipping_fee", this.state.shipmentfee);
    data.append("tax_rate", this.state.taxrate);
    data.append("tags", this.state.Tags);
    // data.append("status", this.state.status);
    data.append("image", this.state.selectedFile1);

    axiosConfig
      .post(`/addproduct`, data)
      .then((response) => {
        console.log(response);
        if (response.data.success) {
          swal("Success!", "You Data iS been Submitted", "success");
          // this.props.history.push("/app/freshlist/category/categoryList");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <Card>
          <h1 className="p-2 ">Product Upload</h1>
          <Row className="m-2">
            <Col>
              <h2>Basic Information</h2>
            </Col>
            {/* <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() =>
                      history.push("/app/freshlist/category/categoryList")
                    }
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
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Title</Label>
                    <Input
                      type="text"
                      placeholder="Title"
                      name="category_name"
                      bsSize="lg"
                      value={this.state.category_name}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Description</Label>
                    <Input
                      type="text"
                      placeholder="Description ..."
                      name="description"
                      bsSize="lg"
                      value={this.state.description}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label> PRICE (₹)</Label>
                    <Input
                      type="number"
                      placeholder="Amount In Number"
                      name="Price"
                      bsSize="lg"
                      value={this.state.Price}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Variety</Label>
                    <Input
                      type="text"
                      placeholder="Variety..."
                      name="variety"
                      bsSize="lg"
                      value={this.state.variety}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                {/* <Col lg="6" md="6">
                  <FormGroup>
                    <Label>STOCK</Label>
                    <Input
                      type="TEXT"
                      placeholder="STOCK"
                      name="STOCK"
                      bsSize="lg"
                        value={this.state.category_name}
                        onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col> */}
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>SHIPING FEE(₹)</Label>
                    <Input
                      type="number"
                      placeholder="Number..."
                      name="shipmentfee"
                      bsSize="lg"
                      value={this.state.shipmentfee}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>TAX RATE (%)</Label>
                    <Input
                      type="number"
                      placeholder="Tax in Percentage"
                      name="taxrate"
                      bsSize="lg"
                      value={this.state.taxrate}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>TAGS</Label>
                    <Input
                      type="text"
                      placeholder="Type here..."
                      name="Tags"
                      bsSize="lg"
                      value={this.state.Tags}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Row className="my-2 mx-2">
                  <h2>Media & Published</h2>
                </Row>
                <Row>
                  <Col lg="3" md="3">
                    <FormGroup>
                      <CustomInput
                        type="file"
                        onChange={this.onChangeHandler3}
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="3" md="3">
                    <FormGroup>
                      <CustomInput
                        type="file"
                        onChange={this.onChangeHandler3}
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="3" md="3">
                    <FormGroup>
                      <CustomInput
                        type="file"
                        onChange={this.onChangeHandler3}
                      />
                    </FormGroup>
                  </Col>
                  <Col lg="3" md="3">
                    <FormGroup>
                      <CustomInput
                        type="file"
                        onChange={this.onChangeHandler3}
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </Row>
              <Row>
                <Button.Ripple
                  color="primary"
                  type="submit"
                  className="mr-1 mb-1"
                >
                  Add Product
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default AddProduct;
