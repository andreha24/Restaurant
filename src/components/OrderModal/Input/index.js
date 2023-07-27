import React, {forwardRef} from "react";

import './index.css'

const Input = forwardRef(({title, type}, ref) => {
    return(
        <input type={type} ref={ref} className='input-styles' placeholder={title} maxLength={10} required={true}/>
    )
});

export default Input