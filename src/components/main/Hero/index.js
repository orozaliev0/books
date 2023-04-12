import React from 'react';
import '../../../style/Hero.scss'
import HI from "../../../img/HeroImg.png"
import kaif4 from "../../../img/Kaif4.svg"
import Kaif3 from '../../../img/Kaif 3.png'
import Kaif11 from "../../../img/Kaif 11.svg"
import Kaif2 from "../../../img/books_block2.png"


const Hero = () => {
    return (
        <div id="Hero">
            <div className="container">
                <div className="Hero-Book1">
                    <div className="Hero-Book1-one">
                        <img src={Kaif11} alt=""/>
                    </div>
                    <div className="Hero-Book2-two" style={{marginTop: '120px'}}>
                        <img src={Kaif2} alt=""/>
                    </div>
                </div>
                <div className="Hero">
                    <div style={{paddingTop:'7%'}} className="Hero--right">
                        <h1 className="Hero-right-h1">Само развитие лучше
                            чем школьное обучение</h1>
                        <p className="Hero-right-p">Здесь вы найдете все для само-обучения.</p>
                        <button  type="button"
                                 className="Hero-right-btn text-blue-900 bg-white from-purple-600 to-blue-500 hover:bg-gradient-to-bl hover:text-white  hover:outline-0 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Подобрать пакет

                        </button>

                    </div>
                    <div className="Hero--left">
                        <img src={HI} alt=""/>
                    </div>
                </div>
            </div>
            <div className="Hero-book2">
                <div>
                    <img style={{marginLeft:"5px"}} src={kaif4} alt=""/>
                </div>
                <div>
                    <img src={Kaif3} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Hero;