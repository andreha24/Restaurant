import React from 'react';
import PersonalPageHeader from "./Header";
import Footer from "../../components/Footer";



const PersonalPage = () => {
    return (
        <div className='page-container'>
            <PersonalPageHeader />
            <Footer/>
        </div>
    );
};

export default PersonalPage;