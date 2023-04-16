import React from 'react';
import "../../../style/Books.scss"
import book from "../../../img/image 1.png"
import life from "../../../img/image 2.png"
import {Link, NavLink} from "react-router-dom";


const Books = () => {
    return (
        <div id="books">
            <div className="container">
                <div className="books">
                    <div className="books--tabs">
                        <a href="#tabs_1">Все разделы</a>
                        <a href="#tabs_2">Новое</a>
                        <a href="#tabs_3">Софт-скилс</a>
                        <a href="#tabs_4">Книги</a>
                        <a href="#tabs_5">Окружение</a>
                    </div>
                    <div className="books--start">
                        <div className="books--start__startBook">
                            <div className="books--start__startBook--block">
                                <div className="books--start__startBook--block__title">
                                    <h2>С какой книги начать?</h2>
                                </div>
                                <div className="books--start__startBook--block__article">

                                    <h3>Полезные статьи</h3>

                                    <div className="books--start__startBook--block__article--men">
                                        <a href="">Все</a>
                                        <a href="">Новое</a>
                                        <a href="">Книги</a>
                                    </div>
                                </div>
                                <div className="books--start__startBook--block__img">
                                    <img src={book} alt=""/>
                                </div>
                                <div className="books--start__startBook--block__line"></div>
                                <div className="books--start__startBook--block__author">
                                    {/*<div className="">*/}
                                    <h4>Автор: Muslim Bolot</h4>
                                    <h4>Дата: 22.08.22</h4>
                                    {/*</div>*/}
                                </div>
                            </div>
                            <div className="books--start__startBook--block">
                                <div className="books--start__startBook--block__title">
                                    <h2>С какой книги начать?</h2>
                                </div>
                                <div className="books--start__startBook--block__article">

                                    <h3>Полезные статьи</h3>

                                    <div className="books--start__startBook--block__article--men">
                                        <a href="">Все</a>
                                        <a href="">Новое</a>
                                        <a href="">Книги</a>
                                    </div>
                                </div>
                                <div className="books--start__startBook--block__img">
                                    <img src={book} alt=""/>
                                </div>
                                <div className="books--start__startBook--block__line"></div>
                                <div className="books--start__startBook--block__author">
                                    {/*<div className="">*/}
                                    <h4>Автор: Muslim Bolot</h4>
                                    <h4>Дата: 22.08.22</h4>
                                    {/*</div>*/}
                                </div>
                            </div>
                            <div className="books--start__startBook--block">
                                <div className="books--start__startBook--block__title">
                                    <h2>С какой книги начать?</h2>
                                </div>
                                <div className="books--start__startBook--block__article">

                                    <h3>Полезные статьи</h3>

                                    <div className="books--start__startBook--block__article--men">
                                        <a href="">Все</a>
                                        <a href="">Новое</a>
                                        <a href="">Книги</a>
                                    </div>
                                </div>
                                <div className="books--start__startBook--block__img">
                                    <img src={book} alt=""/>
                                </div>
                                <div className="books--start__startBook--block__line"></div>
                                <div className="books--start__startBook--block__author">
                                    {/*<div className="">*/}
                                    <h4>Автор: Muslim Bolot</h4>
                                    <h4>Дата: 22.08.22</h4>
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                        <div className="books--start__secondStart">
                            <div className="books--start__startBook--block">
                                <div className="books--start__startBook--block__title">
                                    <h2>С какой книги начать?</h2>
                                </div>
                                <div className="books--start__startBook--block__article">

                                    <h3>Полезные статьи</h3>

                                    <div className="books--start__startBook--block__article--men">
                                        <a href="">Все</a>
                                        <a href="">Новое</a>
                                        <a href="">Книги</a>
                                    </div>
                                </div>
                                <div className="books--start__startBook--block__img">
                                    <img src={book} alt=""/>
                                </div>
                                <div className="books--start__startBook--block__line"></div>
                                <div className="books--start__startBook--block__author">
                                    {/*<div className="">*/}
                                    <h4>Автор: Muslim Bolot</h4>
                                    <h4>Дата: 22.08.22</h4>
                                    {/*</div>*/}
                                </div>
                            </div>
                            <div className="special">
                                <div className="books--start__startBook--block__title">
                                    <h2>С какой книги начать?</h2>
                                </div>
                                <div className="books--start__startBook--block__article">

                                    <div className=""><h3>Полезные статьи</h3></div>


                                    <div className="books--start__startBook--block__article--men">
                                        <a href="#tabs_1">Все</a>
                                        <a href="#tabs_2">Новое</a>
                                        <a href="#tabs_4">Книги</a>
                                    </div>
                                </div>
                                <div className="books--start__startBook--block__peopleBook">
                                    <img className={"book1"} src={book} alt=""/>
                                    <img className={"life"} src={life} alt=""/>
                                </div>
                                <div className="books--start__startBook--block__line"></div>
                                <div className="books--start__startBook--block__author">
                                    {/*<div className="">*/}
                                    <h4>Автор: Muslim Bolot</h4>
                                    <h4>Дата: 22.08.22</h4>
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                        <div className="books--start__thirdStart">
                            <div className="books--start__startBook--block">
                                <div className="books--start__startBook--block__title">
                                    <h2>С какой книги начать?</h2>
                                </div>
                                <div className="books--start__startBook--block__article">

                                    <h3>Полезные статьи</h3>

                                    <div className="books--start__startBook--block__article--men">
                                        <a href="">Все</a>
                                        <a href="">Новое</a>
                                        <a href="">Книги</a>
                                    </div>
                                </div>
                                <div className="books--start__startBook--block__img">
                                    <img src={book} alt=""/>
                                </div>
                                <div className="books--start__startBook--block__line"></div>
                                <div className="books--start__startBook--block__author">
                                    {/*<div className="">*/}
                                    <h4>Автор: Muslim Bolot</h4>
                                    <h4>Дата: 22.08.22</h4>
                                    {/*</div>*/}
                                </div>
                            </div>
                            <div className="books--start__startBook--block">
                                <div className="books--start__startBook--block__title">
                                    <h2>С какой книги начать?</h2>
                                </div>
                                <div className="books--start__startBook--block__article">

                                    <h3>Полезные статьи</h3>

                                    <div className="books--start__startBook--block__article--men">
                                        <a href="">Все</a>
                                        <a href="">Новое</a>
                                        <a href="">Книги</a>
                                    </div>
                                </div>
                                <div className="books--start__startBook--block__img">
                                    <img src={book} alt=""/>
                                </div>
                                <div className="books--start__startBook--block__line"></div>
                                <div className="books--start__startBook--block__author">
                                    {/*<div className="">*/}
                                    <h4>Автор: Muslim Bolot</h4>
                                    <h4>Дата: 22.08.22</h4>
                                    {/*</div>*/}
                                </div>
                            </div>
                            <div className="books--start__startBook--block">
                                <div className="books--start__startBook--block__title">
                                    <h2>С какой книги начать?</h2>
                                </div>
                                <div className="books--start__startBook--block__article">

                                    <h3>Полезные статьи</h3>

                                    <div className="books--start__startBook--block__article--men">
                                        <a href="">Все</a>
                                        <a href="">Новое</a>
                                        <a href="">Книги</a>
                                    </div>
                                </div>
                                <div className="books--start__startBook--block__img">
                                    <img src={book} alt=""/>
                                </div>
                                <div className="books--start__startBook--block__line"></div>
                                <div className="books--start__startBook--block__author">
                                    {/*<div className="">*/}
                                    <h4>Автор: Muslim Bolot</h4>
                                    <h4>Дата: 22.08.22</h4>
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="books--showMore">

                        <NavLink to={"/new-books"}>
                            <button>Показать больше</button>
                        </NavLink>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Books;

