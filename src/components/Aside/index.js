import React from "react";
import {Link} from "react-router-dom";

import './index.css'

const Aside = () => {
    return(
        <div className='left-bar'>
            <div className='logo'>
                    <Link to="/"><img src="/img/other/logo.png" alt="logo"/></Link>
                <img src="/img/other/logo-menu.png" alt="logo-menu"/>
            </div>
            <div className="social-media">
                <img src="/img/contacts/youtube.png" alt="youtube"/>
                <img src="/img/contacts/instagram.png" alt="instagram"/>
                <img src="/img/contacts/telegram.png" alt="telegram"/>
            </div>
        </div>
    )
}

export default Aside