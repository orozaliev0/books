import React, {useState} from 'react';
import {IoIosArrowDown} from "react-icons/io";
import '../../../../style/AcardionTwo.css'

const AcardionTwo = ({mode,text}) => {
    const [isOpen ,setIsOpen] = useState(false)
    const handleClick = () => {
        setIsOpen(!isOpen)
        const icon = document.querySelector('.accordion__button-icon')
        icon.classList.toggle('rotate')
    }
    return (
        <div className="accc">
            <div className="accordion">
                <div className="acc-df">
                    <div className="acc-br-one">
                        <div className="модуль">
                            Модуль {mode}
                        </div>
                        <div className="введения">
                            <h1>{text}</h1>
                        </div>
                    </div>
                    <div className="acc-br-two">
                        <div className="acc-br">
                            <button>1 неделя</button>
                        </div>
                        <div>
                            <h1 className="df" onClick={handleClick}>{isOpen ? "More" : "Main"}<IoIosArrowDown className="accordion__button-icon"/></h1>
                        </div>
                    </div>
                </div>
                <div>
                    {
                        isOpen && (
                            <div>
                                <p className="accordion_text_one">Урок 1: Введение в курс </p>
                                <p className="accordion_text_two">Урок 2: Бизнес онлайн и офлайн</p>
                                <p className="accordion_text_three">Урок 3: Имидж компании</p>
                                <p className="accordion_text_fo">Результат модуля: вы узнаете, как будет проходить <br/>
                                    обучение, познакомитесь с трекером и другими <br/>
                                    участниками курса.</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default AcardionTwo;