import React from "react";
import PropTypes from "prop-types";
import Pdf from "react-to-pdf";
import { Box, Button } from "@mui/material";

const PDFButton = ({ children, filename, targetRef }) => (
  <Pdf targetRef={targetRef} filename={filename}>
    {({ toPdf }) => <Button onClick={toPdf}>{children}</Button>}
  </Pdf>
);

PDFButton.propTypes = {
  filename: PropTypes.string,
  targetRef: PropTypes.any,
};

PDFButton.defaultProps = {
  filename: "invoice_detail.pdf",
};

export default PDFButton;
