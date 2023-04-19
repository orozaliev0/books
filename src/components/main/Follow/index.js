import React from 'react';
import '../../../style/Follow.scss'
import {useNavigate} from "react-router-dom";
import more1 from '../../../img/more1.svg'
import img from '../../../img/more.svg'

const Follow = () => {

    const navigate = useNavigate()
    const follow =()=>{
        navigate("/followPage")
        window.scroll(0,0)
    }
  const more =()=>{
        navigate("/more")
        window.scroll(0,0,)
    }

    return (
        <div id='more'>
            <div className="container">
                <div className="more">
                    <img src={more1} alt="" className={"more__img"}/>
                    <div className='more__title'>
                        <h1>Подпишитесь сейчас за 250,00 $ / год</h1>
                        <p>И получи доступ ко всем нашим материалам и <br/>начинай развиватся сейчас вместе со всеми</p>
                    </div>
                    <div className='more__btn'>
                        <button onClick={() => follow()} className='more__btn--btn1'>Подписаться
                        </button>
                        <button onClick={() => more()} className='more__btn--btn2'>Узнать больше</button>
                    </div>
                    <img src={img} alt="" className='more__img2'/>
                </div>
            </div>
        </div>
    );
};

export default Follow;