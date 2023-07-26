import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Field } from 'react-final-form'
import DatePicker, { registerLocale } from "react-datepicker";
import { setMinutes ,setHours, format } from "date-fns";
import ru from 'date-fns/locale/ru';
import InputMask from 'react-input-mask';


import Button from "../../components/Button";
import { addTable } from "../../store/user/userSlice";


import "react-datepicker/dist/react-datepicker.css";
import './index.css'


const Modal = ({onClick}) => {
    registerLocale('ru', ru)

    const allTables = [1,2,3,4,5,6,7,8,9,10]

    const [startDate, setStartDate] = useState(
        setHours(setMinutes(new Date(), 0), 9)
    );
    const filterPassedTime = (time) => {
        const currentDate = new Date();
        const selectedDate = new Date(time);

        return currentDate.getTime() < selectedDate.getTime();
    };


    const required = value => (value ? undefined : 'Обязательное поле')
    const mustBeNumber = value => (isNaN(value) ? 'Это должно быть число' : undefined)
    const minValue = min => value => isNaN(value) || value >= min ? undefined : `Должно быть больше ${min}`
    const minLength = value => value.length >= 6 ? undefined : 'Должно быть больше 6 символов';
    const validatePhoneNumber = value => {
        const phoneNumberPattern = /^(\+380\s?)?(\d{2,3}\s?)?\d{3}\s?\d{2}\s?\d{2}$/;
        if (!value) {
            return 'Обязательное поле';
        } else if (!phoneNumberPattern.test(value.replace(/\s/g, ''))) {
            return 'Некорректный формат телефона';
        }
        return undefined;
    };


    const composeValidators = (...validators) => value =>  validators.reduce((error, validator) => error || validator(value), undefined)

    const dispatch = useDispatch();

    const onSubmit = (e) => {
        const formattedDateTime = format(e['data'], 'MM/dd/yy HH:mm');

        dispatch(addTable(
        {
                ...e,
                data: formattedDateTime
              }
            ))
    }


    return(
        <div className='order-modal'>
           <div className='detail-info'>
               <img src="/img/other/logo.png" alt="logo"/>
               <img src="/img/other/closer.png" alt="closer" className='close-modal' onClick={onClick}/>
               <h3>ЗАБРОНИРОВАТЬ СТОЛИК</h3>
               <Form
                   onSubmit={onSubmit}
                   render={({ handleSubmit }) => (
                       <form onSubmit={handleSubmit}  className='form-adding'>

                           <Field name="username" validate={required}>
                               {({ input, meta }) => (
                                   <div className={`form-field-wrapper  ${meta.error && meta.touched ? 'error' : ''}`}>
                                       <input {...input} type="text" placeholder="Имя" className='form-field' autoComplete='off'/>
                                       {meta.error && meta.touched && <span>{meta.error}</span>}
                                   </div>
                               )}
                           </Field>

                               <Field name='phoneNumber' validate={composeValidators(required, minLength, validatePhoneNumber)}>
                                   {({ input, meta }) => (
                                       <div className={`form-field-wrapper  ${meta.error && meta.touched ? 'error' : ''}`}>
                                       <InputMask
                                           {...input}
                                           mask="+380 99 999 99 99"
                                           maskChar="_"
                                           placeholder="Телефон"
                                           className='form-field'
                                           alwaysShowMask={true}
                                       />
                                           {meta.error && meta.touched && <span>{meta.error}</span>}
                                       </div>
                                   )}
                               </Field>



                               <Field name='table' component='select' validate={required}>
                                   {({ input, meta }) => (
                                       <div className={`form-field-wrapper  ${meta.error && meta.touched ? 'error' : ''}`}>
                                           <select {...input} name='table' className='form-field'>
                                               <option value="" disabled defaultValue>Столик</option>
                                               {allTables.map((num, index) => (
                                                   <option value={num} key={index}>{num}</option>
                                               ))}
                                           </select>
                                           {meta.error && meta.touched && <span>{meta.error}</span>}
                                       </div>
                                   )}
                               </Field>




                               <Field name='guests' component='input' validate={composeValidators(required, minValue(1), mustBeNumber)}>
                                   {({ input, meta }) => (
                                       <div className={`form-field-wrapper  ${meta.error && meta.touched ? 'error' : ''}`}>
                                           <input {...input} type="text" placeholder="Количество гостей" className='form-field' autoComplete='off'/>
                                           {meta.error && meta.touched && <span>{meta.error}</span>}
                                       </div>
                                   )}
                               </Field>



                               <Field name='data' validate={required}>
                                   {({ input, meta }) => (
                                       <div className={`form-field-wrapper  ${meta.error && meta.touched ? 'error' : ''}`}>
                                           <div style={{position: "relative", width:'100%'}}>
                                               <DatePicker
                                                   autoComplete="off"
                                                   placeholderText='Дата/Время'
                                                   name='data'
                                                   locale={ru}
                                                   selected={input.value}
                                                   onChange={(date) => setStartDate(date)}
                                                   showTimeSelect
                                                   filterTime={filterPassedTime}
                                                   dateFormat='dd/MM/yy HH:mm'
                                                   isClearable
                                                   {...input}
                                                   className='form-field'
                                               />
                                               {meta.error && meta.touched && <span>{meta.error}</span>}
                                           </div>
                                       </div>
                                   )}
                               </Field>


                           <Button title='Забронировать' className='order-link' type='submit' />
                       </form>
                   )}

               />


               {/*<form className='form-adding'>*/}
               {/*        <Input title='Имя' ref={inputNameRef} type='text'/>*/}
               {/*        <Input title='Телефон' ref={inputNumRef} type='tel'/>*/}
               {/*        <Input title='Гостей' ref={inputPeopleRef} type='number'/>*/}
               {/*        <DatePicker*/}
               {/*            locale="ru"*/}
               {/*            selected={startDate}*/}
               {/*            onChange={(date) => setStartDate(date)}*/}
               {/*            showTimeSelect*/}
               {/*            filterTime={filterPassedTime}*/}
               {/*            isClearable*/}
               {/*            dateFormat="MMMM d, yyyy h:mm aa"*/}
               {/*            className='input-styles'*/}
               {/*        />*/}
               {/*</form>*/}
               {/*<Button title='Забронировать' className='order-link' onClick={() => {*/}
               {/*    if(Object.keys(table).length !== 0){*/}
               {/*        alert("Вы уже зарезервировали столик!")*/}
               {/*        return null*/}
               {/*    }*/}
               {/*    dispatch(addTable({*/}
               {/*        username: inputNameRef.current.value,*/}
               {/*        phone_number: inputNumRef.current.value,*/}
               {/*        people: inputPeopleRef.current.value,*/}
               {/*        date:inputDataRef.current.value,*/}
               {/*    }))*/}
               {/*    clearInputs()*/}
               {/*}}*/}
               {/*/>*/}
           </div>
        </div>
    )
}

export default Modal