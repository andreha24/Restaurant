import React from "react";
import PropTypes from "prop-types";

import "./index.css";

function Span({ title, className }) {
  return <span className={className}>{title}</span>;
}

Span.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};

export default Span;
