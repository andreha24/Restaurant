import React from "react";

const Button = ({title, className, onClick, disabled}) => {
    return(
        <button className={className} disabled={disabled} onClick={onClick}>{title}</button>
    )
}

export default Button