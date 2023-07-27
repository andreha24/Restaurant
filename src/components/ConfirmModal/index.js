import React from 'react';
import './index.css'


const ConfirmModal = ({children, onClick}) => {
    return (
        <div className="confirm-modal">
            <span className="close-confirm-modal" onClick={onClick}>X</span>
            {children}
        </div>
    );
};

export default ConfirmModal;