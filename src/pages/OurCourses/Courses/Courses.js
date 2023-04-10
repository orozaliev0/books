import React from 'react';
import {useState} from "react";
import command from "../../../img/comm.png"
import "../../../style/Courses.scss"
import {useNavigate} from "react-router-dom";

const Courses = () => {
    const [creatingComm, setCreatingComm] = useState([1, 2, 3])
    const [creatingComm2, setCreatingComm2] = useState([1, 2, 3])
    const navigation = useNavigate()

    return (
            <div className="container">
                <div className="abCourses">
                    <div className="abCourses--title">
                        <h1>Курсы</h1>
                    </div>
                    <div className="abCourses--comm">
                        <div className={"abCourses--comm__block"}>
                            <h1 className="abCourses--comm__block--subTitle">Создание команды</h1>
                            <div className="abCourses--comm__block--tabs">
                                <h3>Обучение</h3>
                                <div className="abCourses--comm__block--tabs__allTabs">
                                    <button>Все</button>
                                    <button onClick={() => navigation("/creatingCommand")}>Новое</button>
                                    <button>Книги</button>
                                </div>
                            </div>
                            <img src={command} alt=""/>
                            <div className="abCourses--comm__block--showMore">
                                <a href=""><h3>Подробнее...</h3></a>

                            </div>
                        </div>
                        <div className={"abCourses--comm__block"}>
                            <h1 className="abCourses--comm__block--subTitle">Создание команды</h1>
                            <div className="abCourses--comm__block--tabs">
                                <h3>Обучение</h3>
                                <div className="abCourses--comm__block--tabs__allTabs">
                                    <button>Все</button>
                                    <button>Новое</button>
                                    <button>Книги</button>
                                </div>
                            </div>
                            <img src={command} alt=""/>
                            <div className="abCourses--comm__block--showMore">
                                <a href=""><h3>Подробнее...</h3></a>
                                <p>Если нет подписки</p>
                            </div>
                        </div>
                        <div className={"abCourses--comm__block"}>
                            <h1 className="abCourses--comm__block--subTitle">Создание команды</h1>
                            <div className="abCourses--comm__block--tabs">
                                <h3>Обучение</h3>
                                <div className="abCourses--comm__block--tabs__allTabs">
                                    <button>Все</button>
                                    <button>Новое</button>
                                    <button>Книги</button>
                                </div>
                            </div>
                            <img src={command} alt=""/>
                            <div className="abCourses--comm__block--showMore">
                                <a href=""><h3>Подробнее...</h3></a>
                            </div>
                        </div>
                    </div>
                    <div className="abCourses--button">
                        <button>Смотреть все курсы</button>
                    </div>
                </div>
                <div className="crtCom">
                    <div className="crtCom--title">
                        <h1>Мастер классы</h1>
                    </div>
                    <div className="crtCom--crtComBlock">
                        {
                            creatingComm.map(el => (
                                <div className={"abCourses--comm__block"}>
                                    <h1 className="abCourses--comm__block--subTitle">Создание команды</h1>
                                    <div className="abCourses--comm__block--tabs">
                                        <h3>Обучение</h3>
                                        <div className="abCourses--comm__block--tabs__allTabs">
                                            <button>Все</button>
                                            <button>Новое</button>
                                            <button>Книги</button>
                                        </div>
                                    </div>
                                    <img src={command} alt=""/>
                                    <div className="abCourses--comm__block--showMore">
                                        <a href=""><h3>Подробнее...</h3></a>

                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="crtCom--crtComBlock2">
                        {
                            creatingComm2.map(el => (
                                <div className={"abCourses--comm__block"}>
                                    <h1 className="abCourses--comm__block--subTitle">Создание команды</h1>
                                    <div className="abCourses--comm__block--tabs">
                                        <h3>Обучение</h3>
                                        <div className="abCourses--comm__block--tabs__allTabs">
                                            <button>Все</button>
                                            <button>Новое</button>
                                            <button>Книги</button>
                                        </div>
                                    </div>
                                    <img src={command} alt=""/>
                                    <div className="abCourses--comm__block--showMore">
                                        <a href=""><h3>Подробнее...</h3></a>

                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="crtCom--crtBtn">
                        <button>Смотреть все мастер классы</button>
                    </div>

                </div>
            </div>
    );
};

export default Courses;