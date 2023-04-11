import React from 'react';
import '../../../style/MaynCurs.scss'
import tol from '../../../img/kaptaltwo.svg'
import soft from '../../../img/cofeeteam.svg'
import shop from '../../../img/shop.svg'
import tol2 from '../../../img/boobek.svg'
import {useNavigate} from "react-router-dom";
import pop from '../../../img/pop.svg'


const MayCourses = () => {

    const navigate = useNavigate();

    return (
        <div id="Curs">
            <div className="container">
                <img className='ml-[67rem] mt-[-6rem]' src={pop} alt=""/>

                <div className="Curs">
                    <div className="Curs--team">
                        <div className="Curs--team__lead">
                            <img className='w-[11%] ml-[9rem] ' src={tol} alt=""/>
                            <h1>Наши курсы</h1>
                            <p>Получайте новые знания, навыки и возможности для эффективной жизни.</p>
                            <div className="Curs--team__lead--blossom">
                                <button className='face' onClick={() => navigate('/more')}>Подобрать пакет</button>
                                <button className='navbar'>Войти</button>
                            </div>
                        </div>
                        <div className="Curs--team__left">
                            <img className='' src={soft} alt=""/>
                        </div>
                    </div>
                </div>
                <img className=' ml-[1036px] mt-[28rem]' src={shop} alt=""/>
                <img className='ml-[-256px] mt-[-14rem] ' src={tol2} alt=""/>
            </div>
        </div>
    );
};

export default MayCourses;