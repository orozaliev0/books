import React from 'react';
import '../../../style/MaynCurs.scss'
import tol from '../../../img/cupofteam.png'
import soft from '../../../img/cofeeteam.svg'
import shop from '../../../img/shop.svg'
import tol2 from '../../../img/boobek.svg'

const MayCourses = () => {
    return (
        <div>
            <div id="Curs">
                <div className="container">
                    <div className="Curs">
                        <div className="Curs--team">
                            <div className="Curs--team__lead">
                                <img  className='w-[11%] ml-[9rem] ' src={tol} alt=""/>
                                <h1>Наши курсы</h1>
                                <p>Получайте новые знания, навыки и возможности для эффективной жизни.</p>
                                <div className="Curs--team__lead--blossom">
                                    <button>Подобрать пакет</button>
                                    <button className='navbar'>Войти</button>
                                </div>
                            </div>
                            <div className="Curs--team__left">
                                <img className='' src={soft} alt=""/>
                            </div>
                        </div>
                    </div>
                    <img className=' ml-[710px] mt-[8rem]'  src={shop} alt=""/>
                    <img  className='ml-[-525px] mt-[-13rem] '    src={tol2} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default MayCourses;