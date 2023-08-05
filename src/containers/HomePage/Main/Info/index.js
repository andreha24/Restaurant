import React from "react";
import PropTypes from "prop-types";

function Info({ title, text, className }) {
  return (
    <div className={className}>
      <h1>{title}</h1>
      <div>
        {text.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

Info.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
};

export default Info;
