import React, {useState} from "react";
import { useParams } from 'react-router';
import {useDispatch} from "react-redux";
import Aside from "../../components/Aside";
import Contacts from "../../components/Contacts";
import Footer from "../../components/Footer";
import PersonalArea from "../../components/PersonalArea";
import Button from "../../components/Button";
import Span from "../../components/Span";
import {add} from "../../store/cart/slice";

import { dishesInfo } from './dishesInfo';

import './index.css'
import {Link} from "react-router-dom";

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

    return(
       <>
           <div className='header-home'>
               <Aside/>
               <div className='main-wrapper'>
                   <div className='main-container'>
                       <PersonalArea/>
                       <Link to='/page-menu' className='back-to-menu'>Вернуться к меню</Link>
                       <div className='dish-details'>
                           <div className='dish-details-info'>
                               <img src={info.image} alt=""/>
                               <div>
                                   <div className='dish-detail'>
                                       <h1>{info.title}</h1>
                                       <hr/>
                                       <div><Span title={info.price} className='dish-price'/> <Span title= {`/ ${info.weight}`} className='dish-weight'/> </div>
                                       <div>Количество порций:</div>
                                       <div className='add-to-basket-container'>
                                           <div className='counter'>
                                               <span>{count}</span>
                                               <div className='counter-btn'>
                                                   <button onClick={increase}><img src='/img/other/arrow-top.png' alt='add-dish'/></button>
                                                   <button onClick={decrease}  disabled={count === 0}><img src='/img/other/arrow-down.png' alt='delete-dish'/></button>
                                               </div>
                                           </div>
                                           <Button title='В корзину' className='order-link' disabled={count === 0} onClick={() => dispatch(add({
                                               img:'123',
                                               title: info.title,
                                               price: Number(info.price.replace(/\D/g,'')),
                                               count_of_dishes: count
                                           }))}/>
                                       </div>
                                       <hr/>
                                       <div>
                                           <h1>Сделать еще вкуснее</h1>
                                           <div className='dish-additions'>
                                               <div className='dish-addition'>
                                                   <Span title='Тигровые креветки 60 г' className='dish-weight' />
                                                   <Span title='450 $' className='dish-price' />
                                               </div>
                                               <input type="checkbox"/>
                                           </div>
                                           <div className='dish-additions'>
                                               <div className='dish-addition'>
                                                   <Span title='Томаты / паприка' className='dish-weight' />
                                                   <Span title='80 $' className='dish-price' />
                                               </div>
                                               <input type="checkbox"/>
                                           </div>
                                           <div className='dish-additions'>
                                               <div className='dish-addition'>
                                                   <Span title='Бекон' className='dish-weight' />
                                                   <Span title='120 $' className='dish-price' />
                                               </div>
                                               <input type="checkbox"/>
                                           </div>
                                           <div className='dish-additions'>
                                               <div className='dish-addition'>
                                                   <Span title='Сыр чеддер 30г' className='dish-weight' />
                                                   <Span title='80 $' className='dish-price' />
                                               </div>
                                               <input type="checkbox"/>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           <Contacts/>
           <Footer/>
       </>
    )
}

export default DishDetails;


