// InvoiceGenerator.js
import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import InvoiceTemplate from "./InvoiceTemplate";

const InvoiceGenerator = () => {
  const invoiceData = {
    customerName: "John Doe",
    date: "2023-08-02",
    items: [
      { name: "Item A", quantity: 2, price: 10 },
      { name: "Item B", quantity: 3, price: 15 },
      { name: "Item B", quantity: 3, price: 15 },
      // Add more items as needed
    ],
    total: 65,
  };

  return (
    <div>
      {/* Use PDFViewer to preview the generated PDF */}
      <PDFViewer width="1000" height="800">
        <InvoiceTemplate invoiceData={invoiceData} fileName="invoice.pdf" />
      </PDFViewer>
    </div>
  );
};

export default InvoiceGenerator;
