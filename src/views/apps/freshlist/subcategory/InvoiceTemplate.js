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

const styles = StyleSheet.create({
  page: {
    // flexDirection: "row",
    // backgroundColor: "#E4E4E4",
    fontFamily: "Helvetica",
    padding: 30,
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
});

const InvoiceTemplate = ({ invoiceData }) => {
  const { items, customerName, date, total } = invoiceData;

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
                style={{ width: "120px", padding: "22px 10px" }}
                src={logo}
                // style={styles.image}
              >
                Invoice
              </Image>
              <View style={{ padding: "10px" }}>
                <Text style={{ fontSize: "10px", fontWeight: "bold" }}>
                  PRAVI CORPORATE MANAGEMENT SERVICES PVT. LTD.
                </Text>

                <Text
                  style={{
                    fontSize: "8px",
                    marginTop: "5px",
                    marginBottom: "5px",
                  }}
                >
                  ROOM 7,A-WING,Shree Datta Digambar CHS Ltd.
                </Text>
                <Text style={{ fontSize: "8px", padding: "5px" }}>
                  Guru Datta Mandir Road ,Gaurishankarwadi No. 1{" "}
                </Text>
                <Text style={{ fontSize: "8px", padding: "5px" }}>
                  Opp. Yashomandir,Pant Nagar ,Ghatkopar East,
                </Text>
                <Text style={{ fontSize: "8px", padding: "5px" }}>
                  Mumbai,Maharastra, 400075. india
                </Text>
                <Text style={{ fontSize: "10px", padding: "5px" }}>
                  GSTIN: 27AAHCP2196E1ZB
                </Text>
              </View>
            </View>

            <Text style={styles.title}>Invoice</Text>
            <Text style={styles.customername}>Customer: {customerName}</Text>
            <Text style={styles.customername}>Date: {date}</Text>
            <View style={styles.section}>
              {items.map((item, index) => (
                <View style={styles.item} key={index}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemQuantity}>{item.quantity}</Text>
                  <Text style={styles.itemPrice}>${item.price}</Text>
                </View>
              ))}
            </View>
            <Text style={styles.total}>Total: ${total}</Text>
          </View>
        </Page>
      </Document>
    </>
  );
};

export default InvoiceTemplate;
