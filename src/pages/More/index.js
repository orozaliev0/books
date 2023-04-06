import React from 'react';
import '../../style/More.scss'
import Accordion from "../../components/main/Accordion";
import {BsCheckLg} from "react-icons/bs";
import {RxCross2} from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import booksFollow from "../../img/books_block2.png";
import more from '../../img/more.svg'
import books2 from '../../img/books_follow2.png'
import booksAcc from '../../img/booksAcc.png'
import moreB from '../../img/booksMore.png'
import books from "../../img/books_block2.png"
import books4 from "../../img/books_follow4.png"
import kail12 from "../../img/Kaif 12.svg"


const More = () => {

    const navigate = useNavigate();

    return (
        <div className='container'>

            <div className='to-more'>
                <h3>Пакеты / Подробнее о пакетах</h3>
                <h1>ВЫБЕРИТЕ СВОЙ ПАКЕТ УЧАСТИЯ</h1>
                <h3>Присоединяйтесь к нам и начните свой путь к успеху.</h3>
            </div>
            <div className='to'>
                <div className='to--block'>
                    <h3>Обычный</h3>
                    <div className='to--block-div'>
                        <input type="radio" name='price' required/>
                        <p>Ежемесячно</p>
                    </div>
                    <div className='to--block-div' style={{marginBottom: '10px'}}>
                        <input type="radio" name='price' required/>
                        <p>Ежегодно</p>
                    </div>

                    <div className='to--block2__check'>
                        <BsCheckLg className='to--block2__check_icons'/>
                        <h4>Все новые статьи</h4>
                    </div>


                    <div className='to--block2__check'>
                        <BsCheckLg className='page__block__price--block2__check_icons'/>
                        <h4>Все мастер классы по саморозвитию</h4>
                    </div>
                    <div className='to--block-btn'>
                        <h1>Цена:<span>250$</span></h1>
                        <button onClick={() => navigate('/followPage')}>Подписаться</button>
                    </div>

                </div>
                <div className='to--block2'>
                    <h3>Интенсив</h3>
                    <div className='to--block-div'>
                        <input type="radio" name='tabs' required/>
                        <p>Ежемесячно</p>
                    </div>
                    <div className='to--block-div'  style={{marginBottom: '10px'}}>
                        <input type="radio" name='tabs' required/>
                        <p>Ежегодно</p>
                    </div>

                    <div className='to--block2__check'>
                        <BsCheckLg className='to--block2__check_icons'/>
                        <h4>Все новые статьи</h4>
                    </div>
                    <div className='to--block2__check'>
                        <BsCheckLg className='to--block2__check_icons'/>
                        <h4>Все мастер классы по саморозвитию</h4>
                    </div>
                    <div className='to--block2__check'>
                        <BsCheckLg className='to--block2__check_icons'/>
                        <h4>Курс по накоплению <br/>средств с выполотой <br/>долгов</h4>
                    </div>
                    <div className='to--block2__check'>
                        <BsCheckLg className='to--block2__check_icons'/>
                        <h4>Курс по быстрому <br/>карьерному росту</h4>
                    </div>
                    <div className='to--block2__check'>
                        <BsCheckLg className='to--block2__check_icons'/>
                        <h4>Курс по одолеванию <br/>страха потери</h4>
                    </div>
                    <div className='to--block2-btn'>
                        <h1>Цена:<span>750$</span></h1>
                        <button onClick={() => navigate('/followPage')}>Подписаться</button>
                    </div>
                </div>
            </div>
            <div className="to_block">
                <h1>В “Обычный” пакет участия для само-развития включает в себя: </h1>
                <img src={booksFollow} alt="" className='to_block__books'/>
                <div className='to_block_div'>
                    <BsCheckLg className='to_block_div_icon'/>
                    <h4>Все новые статьи</h4>
                </div>
                <div className='to_block_div'>
                    <BsCheckLg className='to_block_div_icon'/>
                    <h4>Все мастер классы по саморозвитию</h4>
                </div>
                <div className='to_block_div'>
                    <RxCross2 className='to_block_div_icon'/>
                    <h4>Курс по чтению языка тела</h4>
                </div>
                <div className='to_block_div'>
                    <RxCross2 className='to_block_div_icon'/>
                    <h4>Все мастер классы по саморозвитию</h4>
                </div>
                <div className='to_block_div'>
                    <RxCross2 className='to_block_div_icon'/>
                    <h4> Курс по быстрому карьерному росту</h4>
                </div>
                <div className='to_block_div'>
                    <RxCross2 className='to_block_div_icon'/>
                    <h4>Курс по одолеванию страха потери</h4>
                </div>
                <img src={more} alt="" className='to_block__books2'/>
                <img src={moreB} alt="" className='to_block__books3'/>
                <img src={books} alt="" className='to_block__books4'/>
                <img src={books4} alt="" className='to_block__books5'/>
                <img src={kail12} alt="" className='to_block__books6'/>

            </div>
            <div className="to_block2">
                <h1>Плюсы пакета</h1>
                <p>Выбрав этот пакет вы получаете возможность получать неогранниченное количество самых <br/>эксклюзивных мастер классов, а также очень много наиполезнейших статей от самых разных <br/>успешных людей чтобы получать ежедневные уроки чтобы улучшить жизнь и не только</p>
            </div>

            <img src={books2} alt="" className='booksAcc'/>
            <img src={booksAcc} alt="" className='booksAcc2'/>


            <Accordion/>
        </div>
    );
};

export default More;