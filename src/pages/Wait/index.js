import React from 'react';
import '../../style/Wait.scss'
import books from "../../img/booksAcc.png"


const Wait = () => {
    return (
        <div className='container'>
            <div className="hang_on">
                <img src={books} alt=""/>
                <h1>SELF DEVELOPING SCHOOL</h1>
                <p>Ожидание оплаты</p>
            </div>
        </div>
    );
};

export default Wait;