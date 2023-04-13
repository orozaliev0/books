import React, {useState} from 'react';
import '../../style/More.scss'
import {BsCheckLg} from "react-icons/bs";
import {RxCross2} from "react-icons/rx";
import {useNavigate} from "react-router-dom";
import Accordion from "../../components/main/Accordion";
import img from '../../img/books_block2.png'
import img2 from '../../img/books_follow2.png'
import books from '../../img/books_follow4.png'
import booksAcc from '../../img/booksAcc.png'
import plus from '../../img/Kaif 6.png'
import img3 from '../../img/books_follow3.png'
import img4 from '../../img/booksMore.png'

const More = () => {

    const navigate = useNavigate();
    const [learn, setLearn] = useState(false)


    return (
        <div className='container'>
            <div className='to-more'>
                <img src={img} alt="img" className='to-more_img'/>
                <img src={img2} alt="img" className='to-more_img2'/>
                <img src={img2} alt="img" className='to-more_img3'/>
                <img src={books} alt="img" className='to-more_img4'/>
                <img src={img3} alt="img" className='to-more_img5'/>
                <h3>Пакеты / Подробнее о пакетах</h3>
                <h1>ВЫБЕРИТЕ СВОЙ ПАКЕТ УЧАСТИЯ</h1>
                <h3>Присоединяйтесь к нам и начните свой путь к успеху.</h3>
            </div>
            <div className='to'>

                {
                    learn ?
                        <div style={{
                            opacity: '0.5',
                            border: "1px solid #DFAC4D",
                        }} onClick={() => setLearn(!learn)} className='to--block'>
                            <img src={img} alt="img" className='to--block_img'/>
                            <img src={img} alt="img" className='to--block_img2'/>
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
                        :
                        <div style={{
                            transform: 'scale(1.1)',
                            border: "1px solid white",
                            cursor: "pointer"
                        }} aria-disabled={true} onClick={() => setLearn(!learn)} className='to--block'>
                            <img src={img} alt="img" className='to--block_img'/>
                            <img src={img} alt="img" className='to--block_img2'/>
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
                }
                {
                    learn ?
                        <div  style={{
                            transform: "scale(1.1)",
                            border: "1px solid white",
                        }} onClick={() => setLearn(!learn)} className='to--block2'>
                            <h3>Интенсив</h3>
                            <div className='to--block-div'>
                                <input type="radio" name='tabs' required/>
                                <p>Ежемесячно</p>
                            </div>
                            <div className='to--block-div' style={{marginBottom: '10px'}}>
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
                        :
                        <div  style={{
                            border: "1px solid #DFAC4D",
                            opacity: '0.5',
                            cursor: 'pointer'
                        }} onClick={() => setLearn(!learn)} className='to--block2'>
                            <h3>Интенсив</h3>
                            <div className='to--block-div'>
                                <input type="radio" name='tabs' required/>
                                <p>Ежемесячно</p>
                            </div>
                            <div className='to--block-div' style={{marginBottom: '10px'}}>
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

                }

            </div>
            <div className="to_block">
                    <img src={img} alt="img" className='to_block__books'/>
                    <img src={img} alt="img" className='to_block__books2'/>
                    <img src={img4} alt="img" className='to_block__books3'/>
                <h1>В “Обычный” пакет участия для само-развития включает в себя: </h1>
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
                    <h4>Курс по накоплению средств с выполотой долгов</h4>
                </div>
                <div className='to_block_div'>
                    <RxCross2 className='to_block_div_icon'/>
                    <h4> Курс по быстрому карьерному росту</h4>
                </div>
                <div className='to_block_div'>
                    <RxCross2 className='to_block_div_icon'/>
                    <h4>Курс по одолеванию страха потери</h4>
                </div>

            </div>
            <div className="to_block2">
                <img src={plus} alt="img" className='to_block2_img'/>
                <img src={img2} alt="img" className='to_block2_img2'/>
                <img src={booksAcc} alt="img" className='to_block2_img3'/>
                <h1>Плюсы пакета</h1>
                <p>Выбрав этот пакет вы получаете возможность получать неогранниченное количество самых <br/>эксклюзивных
                    мастер классов, а также очень много наиполезнейших статей от самых разных <br/>успешных людей чтобы
                    получать ежедневные уроки чтобы улучшить жизнь и не только</p>
            </div>
            <Accordion/>
        </div>
    );
};

export default More;
