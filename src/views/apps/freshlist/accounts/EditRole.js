import React, { useContext, useEffect, useState } from "react";
import { Row, Col, Card, Button, Label, Input, Form } from "reactstrap";
import { Roles } from "./AddRole";
import { useParams } from "react-router-dom";
import axios from "axios";
// import AddRoleUpdate from "./AddRoleUpdate";
import { permission } from "./DummyPermissiom";
import axiosConfig from "../../../../axiosConfig";
// import navigationConfig from "../../../../configs/navigationConfig";
import swal from "sweetalert";
import { CiGlass } from "react-icons/ci";
import { CloudLightning } from "react-feather";

export default function EditRole(props) {
  const [Desc, setDesc] = useState("");
  const [Role, setRole] = useState("");
  const [myRole, setMyRole] = useState("");
  const [Selected, setSelected] = useState([]);
  const [SelectedIndex, setIndex] = useState("");
  const [show, setShow] = useState(true);
  const [getpermission, setgetpermission] = useState([]);
  const [permissionList, setPermissionList] = useState([]);
  const [isChecked, setIsChecked] = useState(true);
  const [view, setView] = useState(true);
  const [create, setCreate] = useState(true);
  const [edit, setEdit] = useState(true);
  const [deletebtn, setDeleteBtn] = useState(true);

  const handleSelectPage = (value, checked, permit, title, ele) => {
    if (checked) {
      const newarrry = Selected.map((val, i) => {
        let x = val?.pagename;
        if (x === title) {
          const newperset = Selected[i].permission.includes(permit);

          if (newperset) {
            // console.log(newperset);
          } else {
            // console.log(newperset);
            let arr = Selected[i].permission.push(permit);
            // console.log(arr);
          }
        } else {
          const found = Selected.find(
            (element, i) => element.pagename === title
          );
          let newfound = found?.pagename === title;
          if (newfound === false) {
            const newarr = Selected.concat({
              pagename: title,
              permission: [permit],
            });
            setSelected(newarr);
          }
        }
      });
      if (Selected.length < 1) {
        const newarr = Selected.concat({
          pagename: title,
          permission: [permit],
        });
        setSelected(newarr);
      }
    } else {
      let remove = Selected?.map((ele, i) => {
        let y = ele?.pagename;
        if (title === y) {
          ele?.permission.splice(ele?.permission.indexOf(permit), 1);
        }
        if (ele?.permission.length === 0) {
          Selected.splice(i, 1);
        }
      });
    }
  };
  useEffect(() => {
    // console.log(Selected);
    console.log(Selected[0]?.permission[0]);
    // if (Selected[0]?.permission[0] || Selected[0]?.permission[1]) {
    //   setView();
    // }

    Selected[0]?.permission[0] === "View"
      ? setView(true)
      : Selected[0]?.permission[1] === "Create"
      ? setCreate(true)
      : Selected[0]?.permission[2] === "Edit"
      ? setEdit(true)
      : Selected[0]?.permission[3] === "Delete"
      ? setDeleteBtn(true)
      : null;
  }, [Selected]);

  useEffect(() => {
    const rollName = props.history.location?.data?.data?.role_name;
    // console.log(permission);
    let formdata = new FormData();
    formdata.set("role_name", rollName);
    axiosConfig
      .post(`/editroleview`, formdata)
      .then(Response => {
        console.log(Response?.data.data.permissioninfo);
        setMyRole(Response?.data.data?.roleinfo?.role_name);
        setDesc(Response?.data?.data?.roleinfo?.description);
        setPermissionList(Response?.data?.data?.permissioninfo);
      })
      .catch(error => {
        console.log("1Error", error);
      });
    const newarr = permission.map(value => value?.pagename);
    setgetpermission(newarr);
    // console.log(Selected);
    {
      permissionList &&
        permissionList?.map(getpermi => {
          console.log(getpermi.permission);
          if (getpermi?.pagename === value?.title) {
            setIsChecked(true);
          } else {
            setIsChecked(false);
          }
          console.log(getpermi.permission);
          getpermi.permission === "View"
            ? setView(true)
            : getpermi.permission === "Create"
            ? setCreate(true)
            : getpermi.permission === "Edit"
            ? setEdit(true)
            : getpermi.permission === "Delete"
            ? setDeleteBtn(true)
            : null;
        });
    }
  }, []);

  const handleSumit = e => {
    e.preventDefault();
    // let formdata = new FormData();
    // formdata.set("user_id", 1);
    // formdata.set("role_name", "sadik");
    // formdata.set("description", Desc);
    // formdata.set("selectedarray", JSON.stringify(Selected));

    // axiosConfig
    //   .post(`/addroles`, formdata)
    //   .then(res => {
    //     console.log(res);
    //     swal("Success", "Role Created");
    //     setSelected("");
    //     setDesc("");
    //     setRole("");
    //     var checkboxes = document.getElementsByName("check");
    //     for (var checkbox of checkboxes) {
    //       checkbox.checked = false;
    //     }
    //   })
    //   .catch(er => {
    //     console.log(er);
    //   });
  };
  const handlesetparent = (value, index) => {
    console.log("checkValue", value);
    console.log("index", index);
    setShow(!value);
    setIsChecked(!isChecked);
    setIndex(index);
  };
  return (
    <>
      <Row className="">
        <Col xl={12}>
          <Card>
            <div className="container" />
            <Form
              onSubmit={e => {
                handleSumit(e);
              }}
            >
              <div className="container mt-5">
                <Row className="mb-3 container">
                  <Col>
                    <Label>Enter Role *</Label>
                    <Input
                      required
                      value={myRole}
                      onChange={e => setMyRole(e.target.value)}
                      type="text"
                      placeholder="Enter Role"
                      className="form-control"
                    />
                  </Col>
                  <Col>
                    <Label>Enter Role Description * </Label>
                    <Input
                      required
                      value={Desc}
                      onChange={e => setDesc(e.target.value)}
                      type="text"
                      placeholder="Enter Role Desc.."
                      // className="form-control"
                    />
                  </Col>
                </Row>
              </div>
              <section className="mt-5 container">
                <Row className="gy-0 container">
                  {Roles &&
                    Roles?.map((value, index) => (
                      <Col
                        key={index}
                        style={{
                          borderRadius: "12px",
                          // background: "#e5dfdf26",
                          height: `${
                            show && SelectedIndex === index ? "340px" : "40px"
                          }`,
                        }}
                        className="customcol gy-0 mb-2 "
                        lg="12"
                        md="12"
                        sm="12"
                      >
                        <Row
                          style={{
                            lineHeight: "44px",
                            borderRadius: "6px",
                            background: "#f7f7f8",
                          }}
                          className="roleheading"
                        >
                          <Col className="gy-2" lg="4" sm="4" md="4">
                            <div className="align-item-center">
                              <input
                                className="mt-1"
                                checked={isChecked}
                                name="check"
                                onClick={e => {
                                  handlesetparent(e.target.checked, index);
                                  handleSelectPage(
                                    e.target.value,
                                    e.target.checked,
                                    "parentPermit",
                                    value?.title,
                                    index
                                  );
                                }}
                                style={{
                                  height: "19px",
                                  width: "26px",
                                }}
                                type="checkbox"
                              />
                              <span className="mx-3 gy-0">{value?.title}</span>
                            </div>
                          </Col>
                          <Col className="gy-2">
                            <div className="d-flex justify-content-center">
                              <span className="mx-3"> View</span>
                            </div>
                          </Col>
                          <Col className="gy-2">
                            <div className="d-flex justify-content-center">
                              <span className="mx-3"> Create</span>
                            </div>
                          </Col>
                          <Col className="gy-2">
                            <div className="d-flex justify-content-center">
                              <span className="mx-3"> Edit</span>
                            </div>
                          </Col>
                          <Col className="gy-2">
                            <div className="d-flex justify-content-center">
                              <span className="mx-3"> Delete</span>
                            </div>
                          </Col>
                        </Row>

                        {show && SelectedIndex === index ? (
                          <>
                            <div className="container">
                              <div className="gy-2 mt-2">
                                {value?.TabName?.map((ele, i) => (
                                  <>
                                    <Row key={i} className="">
                                      <Col lg="4" sm="4" md="4">
                                        <h6 className="mt-1"> {ele?.title}</h6>
                                      </Col>
                                      {ele?.permission?.map((permit, ind) => (
                                        <Col key={ind} lg="2" md="2" sm="2">
                                          <div className="d-flex justify-content-center">
                                            <input
                                              name="check"
                                              checked={view}
                                              onClick={e => {
                                                handleSelectPage(
                                                  e.target.value,
                                                  e.target.checked,
                                                  permit,
                                                  ele.title,
                                                  ind
                                                );
                                              }}
                                              style={{
                                                height: "19px",
                                                width: "26px",
                                              }}
                                              type="checkbox"
                                            />
                                          </div>
                                        </Col>
                                      ))}
                                    </Row>
                                  </>
                                ))}
                              </div>
                            </div>
                          </>
                        ) : null}
                      </Col>
                    ))}
                </Row>
                <Row>
                  <Col>
                    <div className="d-flex justify-content-center mb-2">
                      <Button
                        type="submit"
                        style={{ cursor: "pointer" }}
                        color="primary"
                      >
                        Submit
                      </Button>
                    </div>
                  </Col>
                </Row>
              </section>
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  );
}
