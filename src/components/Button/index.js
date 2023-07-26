import React from "react";

const Button = ({title, className, onClick, disabled, type}) => {
    return(
        <button className={className} disabled={disabled} type={type} onClick={onClick}>{title}</button>
    )
}

export default Button