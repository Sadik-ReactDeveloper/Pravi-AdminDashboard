// InvoiceGenerator.js
import React, { useEffect, useState } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import InvoiceTemplate from "./InvoiceTemplate";
import POInVoice from "./POInVoice";
// import POInVoice from "./POInVoice";

const InvoiceGenerator = (props) => {
  const [Printview, setPrintview] = useState({});

  useEffect(() => {
    console.log(props?.PrintData);
    if (props?.PrintData) {
      setPrintview(props?.PrintData);
    }
  }, []);

  return (
    <div>
      {/* Use PDFViewer to preview the generated PDF */}
      <PDFViewer width="1000" height="800">
        <InvoiceTemplate invoiceData={Printview} fileName="invoice.pdf" />
        {/* <POInVoice invoiceData={Printview} fileName="invoice.pdf" /> */}
      </PDFViewer>
    </div>
  );
};

export default InvoiceGenerator;
