import React from "react";
import PropTypes from "prop-types";

import "./index.css";

function SectionName({ title, className }) {
  return (
    <span className={`block-header ${className}`}>{title}</span>
  );
}

SectionName.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};

export default SectionName;
