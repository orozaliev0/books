import React from 'react';
import books from "../../img/booksAcc.png"
import '../../style/Wait.scss'



const Success = () => {
    return (
        <div className='container'>
            <div className="hang_on">
                <img src={books} alt=""/>
                <h1>SELF DEVELOPING SCHOOL</h1>
                <p> Спасибо за оплату.
                    <br/> Чек был выслан на вашу электронную почту</p>
            </div>
        </div>
    );
};

export default Success;