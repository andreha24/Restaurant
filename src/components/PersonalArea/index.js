import React,  {useState}  from "react";
import { useSelector } from 'react-redux'
import { Transition } from "react-transition-group";
import { Link } from "react-router-dom";

import './index.css'
import Basket from "../../containers/Basket";

const PersonalArea = () => {

    const [cartVisible, setCartVisible] = useState(false);

    const changeCartStatus = () => {
        setCartVisible(!cartVisible)
    }

    const items = useSelector(state => state.cartReducer.items)

    return(
        <>
        <div className='account'>
            <div className='account-links'>
                <Link to="/personal-page"><img src="/img/other/account.png" alt="account"/></Link>
                <div>
                    <img src="/img/other/basket.png" alt="basket" className='basket-btn' onClick={changeCartStatus}/>
                    <span>
                    {items.length}
                    </span>
                </div>
            </div>
        </div>
            <Transition
                in={cartVisible}
                timeout={1000}
                mountOnEnter
                unmountOnExit
            >
                {state => <Basket onclick={changeCartStatus} className={state}/>}
            </Transition>
        </>
    )
}

export default PersonalArea