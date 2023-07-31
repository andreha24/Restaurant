import React, {useState} from "react";
import { useParams } from 'react-router';
import {useDispatch} from "react-redux";
import {Form, Field} from "react-final-form";
import {Link} from "react-router-dom";


import Aside from "../../components/Aside";
import Contacts from "../../components/Contacts";
import Footer from "../../components/Footer";
import PersonalArea from "../../components/PersonalArea";
import Button from "../../components/Button";
import Span from "../../components/Span";
import {add} from "../../store/cart/slice";

import { dishesInfo } from './dishesInfo';

import './index.css'

const DishDetails = () => {
    const dispatch = useDispatch();
    const [count, SetCount] = useState(1);

    const increase = () => {
        SetCount(prev => prev + 1)
    }

    const decrease = () => {
        SetCount(prev => prev - 1)
    }

    const { dish } = useParams();
    const info = dishesInfo[dish];

    const onSubmit = (e) => {
        dispatch(add({
            img:'123',
            title: info.title,
            price: Number(info.price.replace(/\D/g,'')),
            count_of_dishes: count,
            additions: e.addition
        }))
    }

    return(
       <div className='page-container'>
           <div className='main-dish-container'>
               <Aside />

               <div className='main-dish-wrapper'>
                   <PersonalArea />
                   <Link to='/page-menu' className='back-to-menu'>Вернуться к меню</Link>
                   <div className='main-dish-content'>

                       <div className='dish-details'>
                           <img style={{height:'100%'}} src={info.image} alt="img"/>

                           <div className='dish-detail'>
                               <h2 style={{marginTop: '0'}}>{info.title}</h2>
                               <hr/>

                               <div>
                                   <Span title={info.price} className='dish-price'/>
                                   <Span title= {`/ ${info.weight}`} className='dish-weight'/>
                               </div>


                               <Form
                                   onSubmit={onSubmit}
                                   render = {({ handleSubmit }) => (
                                     <form onSubmit={handleSubmit}>
                                         <h3>Количество порций:</h3>

                                         <div className='counter-wrapper'>
                                             <div className='counter-container'>
                                                 <span>{count}</span>
                                                 <div className='counter-btns'>
                                                     <button onClick={increase} type="button">
                                                         <img src='/img/other/arrow-top.png' alt='add-dish'/>
                                                     </button>
                                                     <button onClick={decrease}  disabled={count === 1} type="button">
                                                         <img src='/img/other/arrow-down.png' alt='delete-dish'/>
                                                     </button>
                                                 </div>
                                             </div>

                                             <Button
                                                 title='В корзину'
                                                 className='add-to-cart-btn'
                                                 type='submit'
                                                 disabled={count === 0}
                                             />
                                         </div>

                                         <h2 style={{borderTop: '1px solid '}}>Сделать еще вкуснее</h2>


                                         <div className='dish-additions'>
                                           <div className='dish-addition'>
                                             <label>Тигровые креветки 60г</label>
                                             <Field
                                                  name="addition"
                                                   component="input"
                                                  type="checkbox"
                                                     value="shrimp"
                                             />
                                           </div>

                                           <div className='dish-addition'>
                                              <label>Томаты</label>
                                              <Field
                                              name="addition"
                                                   component="input"
                                               type="checkbox"
                                               value="tomatoes"
                                             />
                                           </div>

                                           <div className='dish-addition'>
                                              <label>Бекон</label>
                                              <Field
                                                 name="addition"
                                                   component="input"
                                                  type="checkbox"
                                                 value="bacon"
                                               />
                                           </div>


                                          <div className='dish-addition'>
                                             <label>Сыр чеддер 30г </label>
                                             <Field
                                               name="addition"
                                                 component="input"
                                                 type="checkbox"
                                                  value="cheese"
                                               />
                                          </div>
                                       </div>
                                 </form>
                               )}
                             />
                           </div>
                       </div>

                       <Contacts />
                   </div>
               </div>
           </div>

           <Footer />
       </div>
    )
}

export default DishDetails;
