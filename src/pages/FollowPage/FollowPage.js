import React, {useState} from 'react';
import '../../style/FollowPage.scss'
import booksBlock2 from "../../img/books_block2.png";
import {BsCheckLg} from "react-icons/bs"
import {useNavigate} from "react-router-dom";
import books from "../../img/books_follow.png"
import books2 from "../../img/books_follow2.png"
import books3 from "../../img/books_follow3.png"
import books4 from "../../img/books_follow4.png"
import books5 from "../../img/books_follow5.png"
import booksBlock from "../../img/books_block2.png"
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import {useDispatch, useSelector} from "react-redux";
// import booksBlock2 from "../../img/books_block2.png"
// import Swal from 'sweetalert2/dist/sweetalert2.js'
// import 'sweetalert2/src/sweetalert2.scss'


const FollowPage = () => {
    const navigate = useNavigate()
    const price_one = 220
    const price_two = 500
    const [index, setIndex] = useState(0)


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [num, setNum] = useState(0)
    const [text, setText] = useState('')
    // const [radio, setRadio] = useState(false)
    // const [check, setCheck] = useState(false)
    // const [tel, setTel] = useState(0)


    const dispatch = useDispatch()
    const {payment} = useSelector(state => state)


    function handleName(e) {
        setName(e.target.value)
    }

    function handleNum(e) {
        setNum(e.target.value)
    }

    function handleEmail(e) {
        setEmail(e.target.value)
    }

    // function handleText(e) {
    //     setText(e.target.value)
    // }

    // function handleRadio(e) {
    //     setRadio(e.target.value)
    // }
    //
    // function handleCheck(e) {
    //     setEmail(e.target.value)
    // }
    //
    // function handleTel(e) {
    //     setTel(e.target.value)
    // }


    const handleSubmit = () => {
        dispatch({type: 'PAYMENT', payload: false})
        if (!email || !num || !name ) {
            Swal.fire('Error!')
        } else {
            dispatch({type: 'PAYMENT', payload: true})

            navigate('/wait')
            setTimeout(() => {
                navigate('/success')
                setTimeout(() => {
                    navigate('/')
                    dispatch({type: 'PAYMENT', payload: false})
                }, 2000)
            }, 2000)
        }
    }

    return (

        <div className='container'>
            <div className="page">
                <img src={books2} alt="" className='page__books2'/>
                <img src={books3} alt="" className='page__books3'/>
                <form onSubmit={event => event.preventDefault()}>
                    <div className="page__block">
                        <h1>Оформление подписки</h1>
                        <div className='page__block__inp'>
                            <h2>ФИО</h2>
                            <input onChange={handleName} type="text" placeholder="Muslim Bolot Joodarovich"
                                   name='name'/>
                        </div>

                        <div className='page__block__inp'>
                            <h2>Електронная почта</h2>
                            <input onChange={handleEmail} type="text" placeholder='Example@gmail.com' name='email'/>
                        </div>

                        <div className='page__block__inp'>
                            <h2>Номер телефона</h2>
                            <input onChange={handleNum} type="number" placeholder='+996 770 55 55 55 ' name='number'/>
                        </div>

                        <div className='page__block__inp'>
                            <h2>Промокод</h2>
                            <input  type="text" placeholder="If you do have"/>
                        </div>


                        <h2 className='page__block__title'>Оплата</h2>
                        <div className='page__block__check'>
                            <div>
                                <input  type="radio" name="radio" className={"radio"}/>
                                <p>Visa</p>
                            </div>

                            <div>
                                <input type="radio" name="radio" className={"radio"}/>
                                <p>Master Card</p>
                            </div>

                        </div>

                        <div className="page__block__card">
                            <div className='page__block__card__1'>
                                <h2>Номер карты</h2>
                                <input type='number' placeholder='1234 4567 7788 9210'/>
                            </div>
                            <div className='page__block__card__2'>
                                <h2>Срок</h2>
                                <input type="number" placeholder='12/25'/>
                            </div>
                            <div className='page__block__card__3'>
                                <h2>CVV</h2>
                                <input type="number" placeholder='398'/>
                            </div>
                        </div>

                        <h2 className='page__block__h2'>Уровень пакета</h2>

                        <div className='page__block__price'>
                            <div className='page__block__price--block'>
                                <h3>Обычный</h3>
                                <div className='page__block__price--block-div'>
                                    <input  type="radio" name='price'/>
                                    <p>Ежемесячно</p>
                                    <img src={booksBlock} alt="" className='booksBlock'/>
                                </div>
                                <div className='page__block__price--block-div'>
                                    <input type="radio" name='price'/>
                                    <p>Ежегодно</p>
                                </div>
                                <div className='page__block__price--block2__check' style={{marginTop: "14px"}}>
                                    <BsCheckLg className='page__block__price--block2__check_icons'/>
                                    <h4>Все новые статьи</h4>
                                </div>
                                <div className='page__block__price--block2__check'>
                                    <BsCheckLg className='page__block__price--block2__check_icons'/>
                                    <h4>Все мастер классы по саморозвитию</h4>
                                </div>
                                <img src={booksBlock2} alt="" className='booksBlock2'/>
                                <div className='page__block__price--block-btn'
                                     onClick={() => setIndex(0)}>
                                    <h1>Цена: {price_one}$</h1>
                                    <button
                                        style={{
                                            background: index === 0 ? "white" : "",
                                            color: index === 0 ? "blue" : "",
                                            fontWeight: 400

                                        }}
                                    >{index === 0 ? "Выбрано" : "Выбрать"}</button>
                                </div>
                            </div>
                            <div className='page__block__price--block2'>
                                <h3>Интенсив</h3>
                                <div className='page__block__price--block-div'>
                                    <input type="radio" name='tabs'/>
                                    <p>Ежемесячно</p>
                                </div>
                                <div className='page__block__price--block-div'>
                                    <input type="radio" name='tabs'/>
                                    <p>Ежегодно</p>
                                </div>

                                <div className='page__block__price--block2__check' style={{marginTop: "14px"}}>
                                    <BsCheckLg className='page__block__price--block2__check_icons'/>
                                    <h4>Все новые статьи</h4>
                                </div>
                                <div className='page__block__price--block2__check'>
                                    <BsCheckLg className='page__block__price--block2__check_icons'/>
                                    <h4>Все мастер классы по саморозвитию</h4>
                                </div>
                                <div className='page__block__price--block2__check'>
                                    <BsCheckLg className='page__block__price--block2__check_icons'/>
                                    <h4>Курс по накоплению <br/>средств с выполотой <br/>долгов</h4>
                                </div>
                                <div className='page__block__price--block2__check'>
                                    <BsCheckLg className='page__block__price--block2__check_icons'/>
                                    <h4>Курс по быстрому <br/>карьерному росту</h4>
                                </div>
                                <div className='page__block__price--block2__check'>
                                    <BsCheckLg className='page__block__price--block2__check_icons'/>
                                    <h4>Курс по одолеванию <br/>страха потери</h4>
                                </div>

                                <div className='page__block__price--block2-btn'
                                     onClick={() => setIndex(1)}

                                >
                                    <h1>Цена: {price_two} $ <span>750$</span></h1>
                                    <button
                                        style={{
                                            background: index === 1 ? "white" : "",
                                            color: index === 1 ? "blue" : "",
                                            fontWeight: 400
                                        }}
                                    >{index === 1 ? "Выбрано" : "Выбрать"}</button>
                                </div>
                            </div>
                        </div>

                        <div className='page__block__button'>
                            <button onClick={handleSubmit}>Оплатить {
                                index === 1 ? price_two : price_one
                            }
                                $
                            </button>
                        </div>
                        <div className='page__block__last'>
                            <input type="checkbox"/>
                            <h2 className='page__block__bottom'>Я ознакомился и согласен с Условиями оказания услуг</h2>
                        </div>
                    </div>
                   

            
                </form>
                <img src={books} alt="" className='page__booksF'/>
                <img src={books4} alt="" className='page__books4'/>
                <img src={books5} alt="" className='page__books5'/>


            </div>

        </div>
    );
};

export default FollowPage;