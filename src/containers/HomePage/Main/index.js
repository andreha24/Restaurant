import React from "react";
import Info from "./Info"
import SectionName from "../../../components/Contacts/SectionName";
import Contacts from "../../../components/Contacts";
import Button from "../../../components/Button";
import { mainData } from "./constants";

import './index.css'

const Main = () => {
    const { foodExxeRelo, delivery, menu } = mainData;
    return(
        <div className='main-info'>

            <div className='container'>
                <SectionName title='О РЕСТОРАНЕ' className='line'/>
                <Info title={foodExxeRelo.title} className='about-restaurant' text={foodExxeRelo.text} />
            </div>

            <div className='container'>
                <SectionName title='МЕНЮ' className='line'/>
                <Info title={menu.title} className='about-menu' text={menu.text} />
                <div className='menus'>
                    <div className='frames'>
                        <div className='frame'>
                            <img src="/img/other/menu.png" alt="menu"/>
                            <SectionName title='ОСНОВНОЕ МЕНЮ' className='menu-line'/>
                        </div>
                    </div>
                    <div className='frames'>
                        <div className='frame'>
                            <img src="/img/other/bar-menu.png" alt="menu"/>
                            <SectionName title='БАРНАЯ КАРТА' className='menu-line'/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                    <SectionName title='ДОСТАВКА' className='line'/>
                    <Info className='about-delivery' title={delivery.title} text={delivery.text} />
                    <div className='delivery-buttons'>
                        <Button title='Подробнее' className='more-info'/>
                        <Button title='Условия доставки' className='delivery-conditions'/>
                    </div>
            </div>
            <Contacts />
        </div>
    )
};

export default Main
