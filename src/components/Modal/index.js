import React, {useState, useRef} from "react";
import {useSelector, useDispatch } from "react-redux";


import Input from "./Input";
import Button from "../../components/Button";
import { addTable } from "../../store/user/userSlice";

import './index.css'

const Modal = ({onClick}) => {
    const inputNameRef = useRef(null);
    const inputNumRef = useRef(null)
    const inputPeopleRef = useRef(null)
    const inputDataRef = useRef(null)
    const table = useSelector(state => state.userReducer.userTable);
    const dispatch = useDispatch()

    const clearInputs = () => {
        inputNameRef.current.value = '';
    }

    //need to change
    const [value, onChange] = useState(new Date());

    return(
        <div className='order-modal'>
           <div className='detail-info'>
               <img src="/img/other/logo.png" alt="logo"/>
               <img src="/img/other/closer.png" alt="closer" className='close-modal' onClick={onClick}/>
               <h3>ЗАБРОНИРОВАТЬ СТОЛИК</h3>
               <form className='form-adding'>
                       <Input title='Имя' ref={inputNameRef} type='text'/>
                       <Input title='Телефон' ref={inputNumRef} type='tel'/>
                       <Input title='Гостей' ref={inputPeopleRef} type='number'/>
                       <Input title='Гостей' ref={inputDataRef} type='date'/>
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
                   }))
                   clearInputs()
               }}
               />
           </div>
        </div>
    )
}

export default Modal