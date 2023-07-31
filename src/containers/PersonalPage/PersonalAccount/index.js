import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {deleteTable} from "../../../store/user/userSlice";

import OrderModal from "../../../components/OrderModal";

import './index.css'
import Button from "../../../components/Button";

const PersonalAccount = () => {
    const [toggleModal, setToggleModal] = useState(false)

    const changeModalView = () => {
        setToggleModal(prev => !prev)
    }

    const email = localStorage.getItem('email');
    const {username, phoneNumber, table, guests, data} = useSelector(state => state.userReducer.userTable)
    
    return (
        <>
            {toggleModal && <OrderModal closeModal={changeModalView}/>}

            {email === null ?
                <div>Для того чтобы пользоваться аккаунтом вам нужно <Link to='/login-page'>войти</Link> в него </div>
                :
                <div className='user-wrapper'>
                    <div className='user-container'>
                        <div className='user-profile'>

                            <img src="/img/other/account.png" alt="user-photo" className='user-img' />

                            <div className='user-info'>
                                <span>Почта: </span><span>{email}</span>
                            </div>
                        </div>


                        <div className='user-preferences'>
                            <div className='user-table-wrapper'>
                                {guests === undefined ?
                                    <>
                                        <h3>У вас нет забронированного столика, забронируйте нажав на кнопку ниже</h3>
                                        <Button className='order-link' onClick={() => setToggleModal(true)} title='Забронировать столик' />
                                    </>
                                    :
                                    <>
                                        <h4>Информация про забронированный столик</h4>

                                        <div className='user-table'>
                                            <div className='user-table-detail'>
                                                <span>Имя:</span>
                                                <span>{username}</span>
                                            </div>
                                            <div className='user-table-detail'>
                                                <span>Номер телефона:</span>
                                                <span>{phoneNumber}</span>
                                            </div>
                                            <div className='user-table-detail'>
                                                <span>Количество гостей:</span>
                                                <span>{guests}</span>
                                            </div>
                                            <div className='user-table-detail'>
                                                <span>Номер столика:</span>
                                                <span>{table}</span>
                                            </div>
                                            <div className='user-table-detail'>
                                                <span>Дата/время:</span>
                                                <span>{data}</span>
                                            </div>
                                        </div>
                                    </>
                                }
                            </div>



                            <div className='user-order'>
                                <h2>Ваш заказ</h2>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>

    );
};

export default PersonalAccount;