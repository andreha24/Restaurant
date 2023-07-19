import React from "react";
import Aside from "../../../components/Aside";
import Navigation from "./Navigation"

import "./index.css"

const Header = () => {

    return(
        <header className='header-home'>
            <Aside/>
            <Navigation/>
        </header>
    )
}

export default Header