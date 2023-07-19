import React from "react";

const Info = ({title, text, className}) => {
    return(
        <div className={className}>
            <h1>{title}</h1>
            <div>
                {text.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
        </div>
    )
}

export default Info