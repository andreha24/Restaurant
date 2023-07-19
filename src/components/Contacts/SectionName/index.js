import React from "react";

import './index.css';

const SectionName = ({title, className}) => {
    return(
            <span className={`block-header ${className}`}>{title}</span>
    )
}

export default SectionName