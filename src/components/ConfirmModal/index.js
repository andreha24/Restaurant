import React from "react";
import PropTypes from "prop-types";

import "./index.css";

function ConfirmModal({ children, onClick }) {
  return (
    <div className="confirm-modal">
      <button type="button" className="close-confirm-modal" onClick={onClick}>X</button>
      {children}
    </div>
  );
}

ConfirmModal.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default ConfirmModal;
