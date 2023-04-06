import React from 'react';
import '../../../style/MaynCurs.scss'
import tol from '../../../img/cupofteam.png'
import soft from '../../../img/cofeeteam.svg'
const MayCourses = () => {
    return (
        <div>
            <div id="Curs">
                <div className="container">
                    <div className="Curs">
                        <img src={tol} alt=""/>
                        <img src={tol} alt=""/>
                        <div className="Curs--team">
                            <div className="Curs--team__lead">
                                <img src={tol} alt=""/>

                                <h1>Наши курсы</h1>
                                <p>Получайте новые знания, навыки и возможности для эффективной жизни.</p>
                                <div className="Curs--team__lead--blossom">
                                    <button>Подобрать пакет</button>
                                    <button className='navbar'>Войти</button>
                                </div>
                            </div>
                            <div className="Curs--team__left">
                                <img src={soft} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MayCourses;