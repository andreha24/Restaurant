import React from "react";

import './index.css'

const Span = ({title, className}) => {
    return(
        <span className={className}>{title}</span>
    )
}

export default Span