import React from 'react';

import './index.css'

const LoginPage = () => {
    return (
       <div className='login-form-wrapper'>
           <form className='login-form'>
               <div className='login-form-inputs'>
                   <input type="text" placeholder='Email' className='login-form-input'/>

                   <input type="password" placeholder='Password' className='login-form-input'/>
                </div>
               <button type='submit' className='log-btn'>Войти</button>
           </form>
       </div>
    );
};

export default LoginPage;