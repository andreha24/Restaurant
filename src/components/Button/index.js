import React from "react";
import PropTypes from "prop-types";

function Button({
  title, className, onClick, disabled, type = "button",
}) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button className={className} disabled={disabled} type={type} onClick={onClick}>{title}</button>
  );
}
Button.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
