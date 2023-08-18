// InvoiceTemplate.js
import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Rect,
} from "@react-pdf/renderer";
import logo from "../../../../assets/img/logo/paravilogo.jpeg";
import signature from "../../../../assets/img/logo/signature.png";

const styles = StyleSheet.create({
  page: {
    // flexDirection: "row",
    // backgroundColor: "#E4E4E4",
    fontFamily: "Helvetica",
    padding: 30,
  },
  header: {
    fontSize: "8px",
    marginTop: "1px",
    marginBottom: "2px",
  },
  GSTIN: {
    fontSize: "10px",
    fontWeight: "bold",
    marginTop: "1px",
    marginBottom: "2px",
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
  customername: {
    fontSize: 14,
    marginBottom: 8,
  },
  image: {
    width: 70,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    borderBottomStyle: "solid",
    padding: 5,
  },
  itemName: {
    flex: 1,
  },
  itemQuantity: {
    flex: 1,
  },
  itemPrice: {
    flex: 1,
  },
  total: {
    marginTop: 20,
    fontSize: 15,
  },
  tableAmount: {
    fontSize: "10px",
    fontWeight: "1000",
    marginLeft: "5px",
  },
});

const InvoiceTemplate = ({ tableList, invoiceData }) => {
  const { items, customerName, date, total } = invoiceData;
  const curentDate = new Date();

  let day = curentDate.getDate();
  let month = curentDate.getMonth() + 1;
  let year = curentDate.getFullYear();

  // This arrangement can be altered based on how we want the date's format to appear.
  let currentDate = `${day}-${month}-${year}`;
  // console.log(currentDate); // "17-6-2022"
  return (
    <>
      <Document>
        <Page size="A4" style={styles.page}>
          <View>
            <View
              style={{
                flexDirection: "row",
                border: "1px solid black",
                height: "100px",
              }}
            >
              <Image
                style={{ width: "200px", padding: "25px 10px" }}
                src={logo}
                // style={styles.image}
              ></Image>
              <View style={{ padding: "10px" }}>
                <Text style={{ fontSize: "10px", fontWeight: "bold" }}>
                  PRAVARI CORPORATE MANAGEMENT SERVICES PVT. LTD.
                </Text>

                <Text
                  style={{
                    fontSize: "8px",
                    marginTop: "5px",
                    marginBottom: "2px",
                  }}
                >
                  ROOM 7,A-WING,Shree Datta Digambar CHS Ltd.
                </Text>
                <Text style={styles.header}>
                  Guru Datta Mandir Road ,Gaurishankarwadi No. 1
                </Text>
                <Text style={styles.header}>
                  Opp. Yashomandir,Pant Nagar ,Ghatkopar East,
                </Text>
                <Text style={styles.header}>
                  Mumbai,Maharastra, 400075. india
                </Text>
                <Text style={styles.GSTIN}>GSTIN: 27AAHCP2196E1ZB</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                borderBottom: "1px solid black",
                borderRight: "1px solid black",
                borderLeft: "1px solid black",
                height: "70px",
              }}
            >
              <View
                style={{
                  width: "50%",
                  padding: "10px 10px",
                  borderRight: "1px solid black",
                }}
              >
                <View style={{ flexDirection: "row", paddingBottom: "3px" }}>
                  <Text
                    style={{
                      fontSize: "10px",
                      fontWeight: "bold",
                      width: "50%",
                    }}
                  >
                    Receipt No.
                  </Text>
                  <Text style={{ fontSize: "10px", fontWeight: "bold" }}>
                    :{invoiceData?.order_id}
                  </Text>
                </View>
                <View style={{ flexDirection: "row", paddingBottom: "3px" }}>
                  <Text
                    style={{
                      fontSize: "10px",
                      fontWeight: "bold",
                      width: "50%",
                    }}
                  >
                    Receipt Date.
                  </Text>{" "}
                  <Text style={{ fontSize: "10px", fontWeight: "bold" }}>
                    :{currentDate}
                    {/* {invoiceData?.delivery_date} */}
                  </Text>
                </View>
                <View style={{ flexDirection: "row", paddingBottom: "3px" }}>
                  <Text
                    style={{
                      fontSize: "10px",
                      fontWeight: "bold",
                      width: "50%",
                    }}
                  >
                    Term
                  </Text>{" "}
                  <Text style={{ fontSize: "10px", fontWeight: "bold" }}>
                    : Due on Receipt
                  </Text>
                </View>
              </View>

              <View style={{ padding: "10px", width: "50%" }}>
                <View style={{ flexDirection: "row", paddingBottom: "3px" }}>
                  <Text
                    style={{
                      fontSize: "10px",
                      fontWeight: "bold",
                      width: "50%",
                    }}
                  >
                    Place of Supply
                  </Text>{" "}
                  <Text style={{ fontSize: "10px", fontWeight: "bold" }}>
                    : Tamilnadu
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#b4b6baad",
                borderBottom: "1px solid black",
                borderRight: "1px solid black",
                borderLeft: "1px solid black",
                height: "20px",
              }}
            >
              <View
                style={{
                  width: "50%",
                  padding: "2px 2px",
                  borderRight: "1px solid black",
                }}
              >
                <View
                  style={{ flexDirection: "row", paddingBottom: "3px 3px" }}
                >
                  <Text
                    style={{
                      fontSize: "10px",
                      fontWeight: "1000",
                      marginLeft: "5px",
                      width: "50%",
                    }}
                  >
                    Bill To
                  </Text>
                </View>
              </View>

              <View style={{ padding: "2px", width: "50%" }}>
                <View style={{ flexDirection: "row", paddingBottom: "3px" }}>
                  <Text
                    style={{
                      fontSize: "10px",
                      fontWeight: "bold",
                      marginLeft: "5px",
                      width: "50%",
                    }}
                  >
                    Ship to
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                borderBottom: "1px solid black",
                borderRight: "1px solid black",
                borderLeft: "1px solid black",
                height: "90px",
              }}
            >
              <View
                style={{
                  width: "50%",
                  padding: "10px 10px",
                  borderRight: "1px solid black",
                }}
              >
                <View style={{ flexDirection: "", paddingBottom: "3px" }}>
                  <Text
                    style={{
                      fontSize: "13px",
                      fontWeight: "bold",
                    }}
                  >
                    IndusInd Bank
                  </Text>{" "}
                  <Text
                    style={{
                      fontSize: "10px",
                      width: "45%",
                      fontWeight: "bold",
                    }}
                  >
                    8Th Floor Tower,1 one India Bulls Centers, 841, S B marg
                    ,Mumbai-400013
                  </Text>
                </View>
              </View>

              <View style={{ padding: "10px", width: "50%" }}>
                <View style={{ flexDirection: "", paddingBottom: "3px" }}>
                  <Text
                    style={{
                      fontSize: "13px",
                      fontWeight: "bold",
                    }}
                  >
                    IndusInd Bank
                  </Text>
                  <Text
                    style={{
                      fontSize: "10px",
                      width: "45%",
                      fontWeight: "bold",
                    }}
                  >
                    8Th Floor Tower,1 one India Bulls Centers, 841, S B marg
                    ,Mumbai-400013
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                borderBottom: "1px solid black",
                borderRight: "1px solid black",
                borderLeft: "1px solid black",
                height: "50px",
              }}
            >
              <View
                style={{
                  width: "50%",
                  padding: "2px 2px",
                  borderRight: "1px solid black",
                }}
              >
                <View
                  style={{ flexDirection: "row", paddingBottom: "3px 3px" }}
                >
                  <Text
                    style={{
                      fontSize: "13px",
                      fontWeight: "1000",
                      padding: "12px 12px",

                      width: "50%",
                    }}
                  >
                    Client Code :
                  </Text>
                </View>
              </View>

              <View style={{ padding: "2px", width: "50%" }}>
                <View style={{ flexDirection: "row", paddingBottom: "3px" }}>
                  <Text
                    style={{
                      fontSize: "13px",
                      fontWeight: "1000",
                      padding: "12px 12px",
                      width: "50%",
                    }}
                  >
                    User Code :
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                backgroundColor: "black",
                borderBottom: "1px solid black",
                borderRight: "1px solid black",
                borderLeft: "1px solid black",
                height: "23px",
              }}
            >
              <View
                style={{
                  width: "5%",
                  padding: "5px 2px",
                  borderRight: "1px solid black",
                }}
              >
                <Text
                  style={{
                    fontSize: "10px",
                    color: "white",
                    fontWeight: "1000",
                    marginLeft: "5px",
                  }}
                >
                  #
                </Text>
              </View>
              {/* <View
                style={{
                  width: "10%",
                  padding: "5px 2px",
                  borderRight: "1px solid black",
                }}
              >
                <Text
                  style={{
                    fontSize: "10px",
                    color: "white",
                    fontWeight: "1000",
                    marginLeft: "5px",
                  }}
                >
                  PO Number
                </Text>
              </View> */}
              <View
                style={{
                  width: "25%",
                  padding: "5px 2px",

                  borderRight: "1px solid black",
                }}
              >
                <Text
                  style={{
                    fontSize: "10px",
                    fontWeight: "1000",
                    color: "white",

                    marginLeft: "5px",
                  }}
                >
                  Item and Description
                </Text>
              </View>
              <View
                style={{
                  width: "22%",
                  padding: "5px 2px",
                  justifyContent: "center",
                  borderRight: "1px solid black",
                }}
              >
                <Text
                  style={{
                    fontSize: "10px",
                    color: "white",
                    fontWeight: "1000",
                    marginLeft: "5px",
                  }}
                >
                  HSN/SAC
                </Text>
              </View>
              <View
                style={{
                  width: "18%",
                  padding: "5px 2px",

                  borderRight: "1px solid black",
                }}
              >
                <Text
                  style={{
                    fontSize: "10px",
                    color: "white",
                    fontWeight: "1000",
                    marginLeft: "5px",
                  }}
                >
                  QTY
                </Text>
              </View>
              <View
                style={{
                  width: "15%",
                  padding: "5px 2px",

                  borderRight: "1px solid black",
                }}
              >
                <Text
                  style={{
                    fontSize: "10px",
                    color: "white",
                    fontWeight: "1000",
                    marginLeft: "5px",
                  }}
                >
                  Rate
                </Text>
              </View>
              <View
                style={{
                  width: "15%",
                  padding: "5px 2px",

                  borderRight: "1px solid black",
                }}
              >
                <Text
                  style={{
                    fontSize: "10px",
                    color: "white",
                    fontWeight: "1000",
                    marginLeft: "5px",
                  }}
                >
                  Discount(%)
                </Text>
              </View>
              <View
                style={{
                  // width: "15%",
                  marginRight: "2px",
                  padding: "5px 2px",
                  borderRight: "1px solid black",
                }}
              >
                <Text
                  style={{
                    fontSize: "10px",
                    color: "white",
                    fontWeight: "1000",
                    marginLeft: "5px",
                  }}
                >
                  Amount
                </Text>
              </View>
            </View>
            {tableList.map((ele, ind) => {
              return (
                <>
                  <View
                    style={{
                      flexDirection: "row",

                      borderBottom: "1px solid black",
                      borderRight: "1px solid black",
                      borderLeft: "1px solid black",
                      height: "25px",
                    }}
                  >
                    <View
                      style={{
                        width: "5%",
                        padding: "5px 2px",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: "10px",
                          fontWeight: "1000",
                          marginLeft: "5px",
                        }}
                      >
                        1
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "25%",
                        padding: "5px 2px",
                      }}
                    >
                      <Text style={styles.tableAmount}>
                        {ele?.title}
                        {/* {invoiceData?.title} */}
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "20%",
                        padding: "5px 2px",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: "10px",

                          fontWeight: "1000",
                          marginLeft: "5px",
                        }}
                      >
                        5124588
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "15%",
                        padding: "5px 2px",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: "10px",

                          fontWeight: "1000",
                          marginLeft: "5px",
                        }}
                      >
                        {ele?.qty}
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "15%",
                        padding: "5px 2px",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: "10px",
                          fontWeight: "1000",
                          marginLeft: "5px",
                        }}
                      >
                        {ele?.price}
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "15%",
                        padding: "5px 2px",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: "10px",
                          fontWeight: "1000",
                          marginLeft: "5px",
                        }}
                      >
                        {ele?.discountprice}
                      </Text>
                    </View>
                    <View
                      style={{
                        marginRight: "2px",
                        padding: "5px 2px",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: "10px",
                          fontWeight: "1000",
                          marginLeft: "5px",
                        }}
                      >
                        {ele?.qty * ele?.price}
                      </Text>
                    </View>
                  </View>
                  ;
                </>
              );
            })}

            {/* <View
              style={{
                flexDirection: "row",
                borderRight: "1px solid black",
                borderLeft: "1px solid black",
                borderBottom: "1px solid black",
              }}
            >
              <View
                style={{
                  width: "50%",
                  padding: "10px 10px",
                  borderRight: "1px solid black",
                }}
              >
                <View style={{ flexDirection: "", paddingBottom: "3px" }}>
                  <Text
                    style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      // height: "40px",
                    }}
                  >
                    Total In Words
                  </Text>{" "}
                  <Text
                    style={{
                      fontSize: "12px",
                      width: "95%",
                      fontWeight: "bold",
                    }}
                  >
                    Seven Hundread Five and sixty five Rupees only.
                  </Text>{" "}
                </View>
                <View style={{ margingTop: "50px" }}>
                  <Text style={{ fontSize: "8px", marginTop: "15px" }}>
                    Pay To: Kd Advertisement
                  </Text>
                  <Text style={{ fontSize: "8px", marginTop: "3px" }}>
                    Bank: Kotak Mahindra
                  </Text>
                  <Text style={{ fontSize: "8px", marginTop: "3px" }}>
                    A/c No.: 54623465
                  </Text>
                  <Text style={{ fontSize: "8px", marginTop: "3px" }}>
                    IFSC: Kotak0001251
                  </Text>
                  <Text style={{ fontSize: "8px", marginTop: "3px" }}>
                    IFSC: MAROLI , ANDHERI EAST
                  </Text>
                </View>
                <View
                  style={{
                    margingTop: "50px",
                    marginBottom: "40px",
                  }}
                >
                  <Text style={{ fontSize: "10px", marginTop: "15px" }}>
                    Terms and Conditions
                  </Text>
                  <Text style={{ fontSize: "9px", marginTop: "3px" }}>
                    1. Paid Amount/Payment are not refundable in any case.
                  </Text>
                  <Text style={{ fontSize: "9px", marginTop: "3px" }}>
                    2. Pay Payment under 30 days.
                  </Text>
                </View>
              </View>

              <View
                style={{
                  padding: "10px",
                  width: "30%",
                  height: "120px",
                  borderBottom: "1px solid black",
                }}
              ></View>
              <View
                style={{
                  padding: "10px",
                  width: "30%",
                  height: "120px",
                  borderBottom: "1px solid black",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    gap: "10px",
                    paddingBottom: "3px",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontSize: "10px",
                      fontWeight: "bold",
                      // width: "70%",
                    }}
                  >
                    Sub Total
                  </Text>{" "}
                  <Text
                    style={{
                      // flexDirection: "row",
                      // justifyContent: "flex-end",
                      fontSize: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    630.00
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    gap: "10px",
                    paddingBottom: "3px",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontSize: "10px",
                      fontWeight: "bold",
                      // width: "70%",
                    }}
                  >
                    CGST(12.00%)
                  </Text>{" "}
                  <Text
                    style={{
                      // flexDirection: "row",
                      // justifyContent: "flex-end",
                      fontSize: "10px",
                      fontWeight: "bold",
                      // marginRight: "1px",
                    }}
                  >
                    37.00
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    gap: "10px",
                    paddingBottom: "3px",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontSize: "10px",
                      fontWeight: "bold",
                      // width: "70%",
                    }}
                  >
                    SGST(12.00%)
                  </Text>{" "}
                  <Text
                    style={{
                      // flexDirection: "row",
                      // justifyContent: "flex-end",
                      fontSize: "10px",
                      fontWeight: "bold",
                      // marginRight: "1px",
                    }}
                  >
                    37.00
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    gap: "10px",
                    paddingBottom: "3px",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontSize: "10px",
                      fontWeight: "bold",
                      // width: "70%",
                    }}
                  >
                    Courier Charges
                  </Text>{" "}
                  <Text
                    style={{
                      // flexDirection: "row",
                      // justifyContent: "flex-end",
                      fontSize: "10px",
                      fontWeight: "bold",
                      // marginRight: "1px",
                    }}
                  >
                    307.00
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    gap: "10px",
                    paddingBottom: "3px",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontSize: "10px",
                      fontWeight: "bold",
                      // width: "70%",
                    }}
                  >
                    Other Charges
                  </Text>{" "}
                  <Text
                    style={{
                      // flexDirection: "row",
                      // justifyContent: "flex-end",
                      fontSize: "10px",
                      fontWeight: "bold",
                      // marginRight: "1px",
                    }}
                  >
                    307.00
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    gap: "10px",
                    paddingBottom: "3px",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontSize: "10px",
                      fontWeight: "bold",
                      // width: "70%",
                    }}
                  >
                    Grand Total :
                  </Text>{" "}
                  <Text
                    style={{
                      // flexDirection: "row",
                      // justifyContent: "flex-end",
                      fontSize: "10px",
                      fontWeight: "bold",
                      // marginRight: "1px",
                    }}
                  >
                    710.00
                  </Text>
                </View>
              </View>
            </View> */}

            {/* testing */}
            <View
              style={{
                flexDirection: "row",
                borderRight: "1px solid black",
                borderLeft: "1px solid black",
                borderBottom: "1px solid black",
              }}
            >
              <View
                style={{
                  width: "55%",
                  padding: "10px 10px",
                  borderRight: "1px solid black",
                }}
              >
                <View style={{ flexDirection: "", paddingBottom: "3px" }}>
                  <Text
                    style={{
                      fontSize: "14px",
                      fontWeight: "bold",
                      // height: "40px",
                    }}
                  >
                    Total In Words
                  </Text>{" "}
                  <Text
                    style={{
                      fontSize: "12px",
                      width: "95%",
                      fontWeight: "bold",
                      marginTop: "10px",
                    }}
                  >
                    Seven Hundread Five and sixty five Rupees only.
                  </Text>{" "}
                </View>
                {/* <View style={{ margingTop: "50px" }}>
                  <Text style={{ fontSize: "8px", marginTop: "15px" }}>
                    Pay To: Kd Advertisement
                  </Text>
                  <Text style={{ fontSize: "8px", marginTop: "3px" }}>
                    Bank: Kotak Mahindra
                  </Text>
                  <Text style={{ fontSize: "8px", marginTop: "3px" }}>
                    A/c No.: 54623465
                  </Text>
                  <Text style={{ fontSize: "8px", marginTop: "3px" }}>
                    IFSC: Kotak0001251
                  </Text>
                  <Text style={{ fontSize: "8px", marginTop: "3px" }}>
                    IFSC: MAROLI , ANDHERI EAST
                  </Text>
                </View> */}
                <View
                  style={{
                    margingTop: "550px",
                    marginBottom: "10px",
                    height: "190px",
                    justifyContent: "flex-end",
                    // borderBottom: "1px solid black",
                  }}
                >
                  <Text style={{ fontSize: "10px", marginTop: "15px" }}>
                    Terms and Conditions
                  </Text>
                  <Text style={{ fontSize: "9px", marginTop: "3px" }}>
                    1. Paid Amount/Payment are not refundable in any case.
                  </Text>
                  <Text style={{ fontSize: "9px", marginTop: "3px" }}>
                    2. Pay Payment under 30 days.
                  </Text>
                </View>
              </View>

              <View
                style={{
                  width: "45%",
                  height: "250px",
                }}
              >
                <View style={{ height: "200px" }}>
                  <View
                    style={{
                      padding: "10px",
                      height: "130px",
                      borderBottom: "1px solid black",
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        gap: "10px",
                        paddingBottom: "3px",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",
                          marginBottom: "6px",
                        }}
                      >
                        Sub Total
                      </Text>
                      <Text
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",
                          marginBottom: "6px",
                        }}
                      >
                        {invoiceData?.total}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        gap: "10px",
                        paddingBottom: "3px",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",
                          marginBottom: "6px",
                        }}
                      >
                        CGST(12.00%)
                      </Text>
                      {/* <Text
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",
                          marginBottom: "6px",
                        }}
                      >
                        00.00
                      </Text> */}
                      <input type="number" placeholder="Enter CGST(12.00%)" />
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        gap: "10px",
                        paddingBottom: "3px",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",
                          marginBottom: "6px",
                        }}
                      >
                        SGST(12.00%)
                      </Text>
                      {/* <Text
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",
                          marginBottom: "6px",
                        }}
                      >
                        00.00
                      </Text> */}
                      <input type="number" placeholder="Enter  SGST(12.00%)" />
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        gap: "10px",
                        paddingBottom: "3px",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",
                          marginBottom: "6px",
                        }}
                      >
                        Courier Charges
                      </Text>{" "}
                      <Text
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",
                          marginBottom: "6px",
                        }}
                      >
                        307.00
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        gap: "10px",
                        paddingBottom: "3px",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",
                          marginBottom: "6px",
                        }}
                      >
                        Other Charges
                      </Text>{" "}
                      <Text
                        style={{
                          fontSize: "10px",
                          fontWeight: "bold",
                          marginBottom: "6px",
                        }}
                      >
                        307.00
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        gap: "10px",
                        paddingBottom: "3px",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: "11px",
                          fontWeight: "bold",
                          marginTop: "2px",
                        }}
                      >
                        Grand Total :
                      </Text>{" "}
                      <Text
                        style={{
                          fontSize: "11px",
                          fontWeight: "bold",
                          marginTop: "2px",
                        }}
                      >
                        710.00
                      </Text>
                    </View>
                  </View>
                </View>
                <View>
                  <View style={{ padding: "3px 3px ", height: "180px" }}>
                    <Text style={{ fontSize: "11px" }}> For</Text>
                    <Text
                      style={{
                        fontSize: "8px",
                        marginTop: "8px",
                        marginBottom: "8px",
                      }}
                    >
                      {" "}
                      PRAVARI CORPORATE MANAGEMENT SERVICES PVT. LTD.
                    </Text>
                    <View>
                      <Image
                        style={{ height: "50px", marginTop: "15px" }}
                        src={signature}
                      ></Image>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        marginBottom: "2px",
                        marginTop: "20px",
                        justifyContent: "center",
                      }}
                    >
                      <Text style={{ fontSize: "10px" }}>
                        Authorized Signature
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>

            {/* <View style={styles.section}>
              {items.map((item, index) => (
                <View style={styles.item} key={index}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemQuantity}>{item.quantity}</Text>
                  <Text style={styles.itemPrice}>${item.price}</Text>
                </View>
              ))}
            </View> */}
          </View>
        </Page>
      </Document>
    </>
  );
};

export default InvoiceTemplate;
