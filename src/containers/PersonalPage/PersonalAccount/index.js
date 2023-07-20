import React from 'react';
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {deleteTable} from "../../../store/user/userSlice";

import './index.css'

const PersonalAccount = () => {
    const {username, phone_number, people, date, time} = useSelector(state => state.userReducer.userTable)

    return (
        <>
            {username === undefined ?
                <div>Для того чтобы пользоваться аккаунтом вам нужно <Link to='/login-page'>войти</Link> в него </div>
                :
                <div className='user-wrapper'>
                    <div className='user-profile'>

                        <img src="/img/other/account.png" alt="user-photo" className='user-img' />

                        <div className='user-info'>
                            <div className='user-info-detail'>
                                <h3>Имя пользователя: </h3><h1>{username}</h1>
                            </div>
                            <div className='user-info-detail'>
                                <h3>Номер телефона:</h3><h2>{phone_number}</h2>
                            </div>
                        </div>

                    </div>

                    <div className='user-preferences'>
                        <div className='user-table'>
                            <h2>Информация про забронированный столик</h2>
                            <div>
                                <span>Количество гостей: </span>
                                <h3>{people}</h3>
                            </div>
                            <div>
                                <span>Дата/время: </span>
                                <h3>{date}/{time}</h3>
                            </div>

                        </div>


                        <div className='user-order'>
                            <h2>Ваш заказ</h2>
                        </div>
                    </div>
                </div>
            }
        </>

    );
};

export default PersonalAccount;