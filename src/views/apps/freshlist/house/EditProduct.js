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
import { CloudLightning } from "react-feather";

export class EditProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category_name: "",
      ViewoneProduct: {},
      P_Title: "",
      Price: "",
      stock: "",
      Regularprice: "",
      formValues: [{ PName: "", price: "" }],
      DiscountPrice: "",
      Addmore: false,
      rowData: [],
      description: "",
      variety: "",
      shipmentfee: "",
      Tags: "",
      taxrate: "",
      status: "",
      // selectedFile1: null,
      // selectedName1: "",
      // selectedFile2: null,
      // selectedName2: "",
      selectedFile3: [],
      selectedName3: "",
      // selectedFile4: null,
      // selectedName4: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async componentDidMount() {
    console.log(this.props?.location?.state);

    this.setState({
      category_name: this.props?.location?.state?.category_name,
    });
    this.setState({ P_Title: this.props?.location?.state?.title });
    this.setState({ Price: this.props?.location?.state?.price });
    this.setState({ stock: this.props?.location?.state?.stock });

    this.setState({
      DiscountPrice: this.props?.location?.state?.discountprice,
    });
    this.setState({ description: this.props?.location?.state?.description });
    // this.setState({ variety: this.props?.location?.state?.category_name })
    this.setState({ shipmentfee: this.props?.location?.state?.shipping_fee });
    this.setState({ Tags: this.props?.location?.state?.tags });
    this.setState({ taxrate: this.props?.location?.state?.tax_rate });
    this.setState({ status: this.props?.location?.state?.status });
    await axiosConfig.get("/getcategory").then((response) => {
      let rowData = response.data.data?.category;
      console.log(rowData);
      this.setState({ rowData });
    });
  }

  handleChange(i, e) {
    let formValues = this.state.formValues;
    formValues[i][e.target.name] = e.target.value;
    this.setState({ formValues });
  }

  addFormFields() {
    this.setState({
      formValues: [...this.state.formValues, { PName: "", price: "" }],
    });
    this.handleSubmit();
  }

  removeFormFields(i) {
    let formValues = this.state.formValues;
    formValues.splice(i, 1);
    this.setState({ formValues });
  }

  handleSubmit() {
    console.log(this.state.formValues);
  }

  onChangeHandler3 = (event) => {
    let selectedName = Array.from(event.target.files);
    console.log(selectedName);
    this.setState({ selectedFile3: selectedName });
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

    data.append("id", this.props?.location?.state?.id);
    data.append("title", this.state.P_Title);
    data.append("veriety", JSON.stringify(this.state.formValues));
    data.append("category_id", this.state.category_name);
    data.append("stock", this.state.stock);
    data.append("price", this.state.Price);
    data.append("discountprice", this.state.DiscountPrice);
    data.append("description", this.state.description);
    data.append("shipping_fee", this.state.shipmentfee);
    data.append("tax_rate", this.state.taxrate);
    data.append("tags", this.state.Tags);
    data.append("status", "Active");
    // this.state.selectedFile3.forEach((image, index) => {
    //   data.append(`image`, image);
    // });
    // debugger;
    for (let i = 0; i < this.state.selectedFile3?.length; i++) {
      data.append("images[]", this.state.selectedFile3[i]);
    }
    // for (const file of this.state.selectedFile3) {
    //   if (this.state.selectedFile3 !== null) {
    //     data.append("image_name", file);
    //   }
    // }
    axiosConfig
      .post(`/editproduct`, data, {
        //   .post(`/addproduct`, data, {
        headers: {
          "Content-Type": "multipart/form-data; ",
        },
      })
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
          <h1 className="p-2 ">Product Update</h1>
          <Row className="m-2">
            <Col>
              <h2>Existing Information</h2>
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
                    <Label> Choose Category</Label>

                    <select
                      onChange={(e) =>
                        this.setState({ category_name: e.target.value })
                      }
                      className="form-control"
                      name="Select"
                      id="Select"
                    >
                      {" "}
                      <option value={this.props?.location?.state?.id}>
                        {this.props?.location?.state?.category_name}
                      </option>
                      <option value="volvo">--Select Category--</option>
                      {this.state.rowData &&
                        this.state.rowData?.map((val, i) => (
                          <option key={i} value={val?.id}>
                            {val?.category_name}
                          </option>
                        ))}
                    </select>
                    {/* <Input
                      type="text"
                      placeholder="Title"
                      name="category_name"
                      bsSize="lg"
                      value={this.state.category_name}
                      onChange={this.changeHandler}
                    /> */}
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Title</Label>
                    <Input
                      type="text"
                      placeholder="Title"
                      name="P_Title"
                      bsSize="lg"
                      value={this.state.P_Title}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="12" md="12">
                  <FormGroup>
                    <Label>Description</Label>
                    <textarea
                      type="text"
                      rows={5}
                      className="form-control"
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
                  <Row>
                    <Col lg="2" sm="2" md="2">
                      <div>
                        <h5 className="mt-2"> OR</h5>
                      </div>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Button
                          style={{ width: "100%" }}
                          color="primary"
                          className="button add mt-2"
                          type="button"
                          // onClick={() => this.addFormFields()}
                          onClick={() => this.setState({ Addmore: true })}
                        >
                          Add
                        </Button>

                        {/* <Label>Variety</Label>
                        <Input
                          type="text"
                          placeholder="Variety..."
                          name="variety"
                          bsSize="lg"
                          value={this.state.variety}
                          onChange={this.changeHandler}
                        /> */}
                      </FormGroup>
                    </Col>
                  </Row>
                </Col>{" "}
              </Row>
              {this.state.Addmore ? (
                <>
                  <Row>
                    <Col lg="12">
                      {this.state.formValues.map((element, index) => (
                        <div className="" key={index}>
                          <Row className="py-1">
                            <Col lg="4" sm="4">
                              <label>Product Name</label>
                              <input
                                className="form-control"
                                type="text"
                                name="PName"
                                value={element.PName || ""}
                                onChange={(e) => this.handleChange(index, e)}
                              />
                            </Col>
                            <Col lg="4" sm="4">
                              <label>Price</label>
                              <input
                                className="form-control"
                                type="number"
                                name="price"
                                value={element.price || ""}
                                onChange={(e) => this.handleChange(index, e)}
                              />
                            </Col>
                            <Col>
                              {index ? (
                                <Button
                                  color="primary"
                                  type="button"
                                  className="button remove mt-2"
                                  onClick={() => this.removeFormFields(index)}
                                >
                                  Remove
                                </Button>
                              ) : null}
                              <Button
                                color="primary"
                                className="button add mt-2  mx-3"
                                type="button"
                                onClick={() => this.addFormFields()}
                              >
                                Add
                              </Button>
                            </Col>
                          </Row>
                        </div>
                      ))}
                    </Col>
                  </Row>
                </>
              ) : null}

              <Row>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label> Stock </Label>
                    <Input
                      type="number"
                      placeholder="Amount In Number"
                      name="stock"
                      bsSize="lg"
                      value={this.state.stock}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Discount Price</Label>
                    <Input
                      type="number"
                      placeholder="Discount Price"
                      name="DiscountPrice"
                      bsSize="lg"
                      value={this.state.DiscountPrice}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
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
                <Col lg="4" sm="4">
                  <FormGroup>
                    <Label>Media & Published (Select multiple files)</Label>
                    <CustomInput
                      multiple
                      style={{ cursor: "pointer" }}
                      accept="image/png,image/jpeg,image/jpg"
                      name="image[]"
                      type="file"
                      onChange={this.onChangeHandler3}
                    />
                  </FormGroup>
                </Col>

                {this.props?.location?.state?.product_images && (
                  <Col lg="8" sm="8">
                    <Label>Existing Images</Label>
                    <FormGroup>
                      {this.props?.location?.state?.product_images?.map(
                        (value) => {
                          return (
                            <span className="mx-1">
                              <img
                                style={{ borderRadius: "12px" }}
                                src={value}
                                width="150px"
                                height="150px"
                                alt="images"
                              />
                            </span>
                          );
                        }
                      )}
                    </FormGroup>
                  </Col>
                )}
              </Row>
              <Row>
                <Button.Ripple
                  color="primary"
                  type="submit"
                  className="mr-1 mb-1"
                >
                  Update Product
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default EditProduct;
