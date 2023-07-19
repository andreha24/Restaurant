import React, {useRef} from "react";
import {useSelector, useDispatch } from "react-redux";
import { addTable } from "../../store/user/userSlice";
import Input from "./Input";
import Button from "../../components/Button";

import './index.css'

const Modal = ({onClick}) => {
    const inputNameRef = useRef(null);
    const inputNumRef = useRef(null)
    const inputPeopleRef = useRef(null)
    const inputTimeRef = useRef(null)
    const inputDataRef = useRef(null)
    const table = useSelector(state => state.userReducer.userTable);
    const dispatch = useDispatch()

    const clearInputs = () => {
        inputNameRef.current.value = '';
    }

    return(
        <div className='order-modal'>
           <div className='detail-info'>
               <img src="/img/other/logo.png" alt="logo"/>
               <img src="/img/other/closer.png" alt="closer" className='close-modal' onClick={onClick}/>
               <h3>ЗАБРОНИРОВАТЬ СТОЛИК</h3>
               <form className='form-adding'>
                   <div className='personal-info'>
                       <Input title='Имя' ref={inputNameRef} type='text'/>
                       <Input title='Телефон' ref={inputNumRef} type='tel'/>
                       <Input title='Гостей' ref={inputPeopleRef} type='number'/>
                   </div>
                   <div className='restaurant-info'>
                       <Input title='Дата' ref={inputDataRef} type='date'/>
                       <Input title='Время' ref={inputTimeRef} type='time'/>
                   </div>
               </form>
               <Button title='Забронировать' className='order-link' onClick={() => {
                   if(Object.keys(table).length !== 0){
                       alert("Вы уже зарезервировали столик!")
                       return null
                   }
                   dispatch(addTable({
                       username: inputNameRef.current.value,
                       phone_number: inputNumRef.current.value,
                       people: inputPeopleRef.current.value,
                       date:inputDataRef.current.value,
                       time: inputTimeRef.current.value
                   }))
                   clearInputs()
               }}
               />
           </div>
        </div>
    )
}

export default Modal