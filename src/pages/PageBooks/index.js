import React, {useState} from 'react';
import "../../style/BooksPage.scss"
import {GrNext, GrPrevious} from "react-icons/gr";
import {data} from "../../components/fake-backend/backend";

const PageBooks = () => {

    const [page, setPage] = useState(1)
    const [book2, setBook2] = useState([1, 2, 3, 4, 5, 6, 7, 8])

    return (
        <div id="allBooks">
            <div className="container">
                <div className="allBooks">
                    <span className='allBooks--span'>Наши курсы</span>
                    <h1 className="allBooks--title">Статьи</h1>
                    <div className='allBooks--tabs'>
                        <button>Все разделы</button>
                        <button>Новое</button>
                        <button>Софт-скилс</button>
                        <button>Книги</button>
                        <button>Окружение</button>
                    </div>
                    <div className="allBooks--block">
                        <div className="allBooks--block__first" style={{
                            display: page === 1 ? "flex" : "none"
                        }}>
                            {
                                data.slice(0, 9).map(el => (
                                    <div className="allBooks--block__first--aboutBooks">
                                        <div className="allBooks--block__first--aboutBooks__title">
                                            <h1>С какой книги начать?</h1>
                                            <button>Новое</button>
                                        </div>
                                        <div className="allBooks--block__first--aboutBooks__tabs">
                                            <h3>Полезные статьи</h3>
                                            <button>Все</button>
                                            <button>Новое</button>
                                            <button>Книги</button>
                                        </div>
                                        <img src={el.img} alt=""/>
                                        <div className='allBooks--block__first--aboutBooks__line'/>
                                        <div className="allBooks--block__first--aboutBooks__date">
                                            <h3>Автор: {el.author}</h3>
                                            <h3>Дата: {el.date}</h3>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="allBooks--block__second" style={{
                            display: page === 2 ? "flex" : "none"
                        }}>
                            {
                                data.slice(9, 18).map(el => (
                                    <div className="allBooks--block__first--aboutBooks">
                                        <div className="allBooks--block__first--aboutBooks__title">
                                            <h1>С какой книги начать?</h1>
                                            <button>Новое</button>
                                        </div>
                                        <div className="allBooks--block__first--aboutBooks__tabs">
                                            <h3>Полезные статьи</h3>
                                            <button>Все</button>
                                            <button>Новое</button>
                                            <button>Книги</button>
                                        </div>
                                        <img src={el.img} alt=""/>
                                        <div className='allBooks--block__first--aboutBooks__line'/>
                                        <div className="allBooks--block__first--aboutBooks__date">
                                            <h3>Автор: {el.author}</h3>
                                            <h3>Дата: {el.date}</h3>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="allBooks--block__three" style={{
                            display: page === 3 ? "flex" : "none"
                        }}>
                            {
                                data.slice(9, 18).map(el => (
                                    <div className="allBooks--block__first--aboutBooks">
                                        <div className="allBooks--block__first--aboutBooks__title">
                                            <h1>С какой книги начать?</h1>
                                            <button>Новое</button>
                                        </div>
                                        <div className="allBooks--block__first--aboutBooks__tabs">
                                            <h3>Полезные статьи</h3>
                                            <button>Все</button>
                                            <button>Новое</button>
                                            <button>Книги</button>
                                        </div>
                                        <img src={el.img} alt=""/>
                                        <div className='allBooks--block__first--aboutBooks__line'/>
                                        <div className="allBooks--block__first--aboutBooks__date">
                                            <h3>Автор: {el.author}</h3>
                                            <h3>Дата: {el.date}</h3>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="allBooks--block__four" style={{
                            display: page === 4 ? "flex" : "none"
                        }}>
                            {
                                data.slice(9, 18).map(el => (
                                    <div className="allBooks--block__first--aboutBooks">
                                        <div className="allBooks--block__first--aboutBooks__title">
                                            <h1>С какой книги начать?</h1>
                                            <button>Новое</button>
                                        </div>
                                        <div className="allBooks--block__first--aboutBooks__tabs">
                                            <h3>Полезные статьи</h3>
                                            <button>Все</button>
                                            <button>Новое</button>
                                            <button>Книги</button>
                                        </div>
                                        <img src={el.img} alt=""/>
                                        <div className='allBooks--block__first--aboutBooks__line'/>
                                        <div className="allBooks--block__first--aboutBooks__date">
                                            <h3>Автор: {el.author}</h3>
                                            <h3>Дата: {el.date}</h3>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="allBooks--block__five" style={{
                            display: page === 5 ? "flex" : "none"
                        }}>
                            {
                                data.slice(9, 18).map(el => (
                                    <div className="allBooks--block__first--aboutBooks">
                                        <div className="allBooks--block__first--aboutBooks__title">
                                            <h1>С какой книги начать?</h1>
                                            <button>Новое</button>
                                        </div>
                                        <div className="allBooks--block__first--aboutBooks__tabs">
                                            <h3>Полезные статьи</h3>
                                            <button>Все</button>
                                            <button>Новое</button>
                                            <button>Книги</button>
                                        </div>
                                        <img src={el.img} alt=""/>
                                        <div className='allBooks--block__first--aboutBooks__line'/>
                                        <div className="allBooks--block__first--aboutBooks__date">
                                            <h3>Автор: {el.author}</h3>
                                            <h3>Дата: {el.date}</h3>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="allBooks--block__six" style={{
                            display: page === 6 ? "flex" : "none"
                        }}>
                            {
                                data.slice(9, 18).map(el => (
                                    <div className="allBooks--block__first--aboutBooks">
                                        <div className="allBooks--block__first--aboutBooks__title">
                                            <h1>С какой книги начать?</h1>
                                            <button>Новое</button>
                                        </div>
                                        <div className="allBooks--block__first--aboutBooks__tabs">
                                            <h3>Полезные статьи</h3>
                                            <button>Все</button>
                                            <button>Новое</button>
                                            <button>Книги</button>
                                        </div>
                                        <img src={el.img} alt=""/>
                                        <div className='allBooks--block__first--aboutBooks__line'/>
                                        <div className="allBooks--block__first--aboutBooks__date">
                                            <h3>Автор: {el.author}</h3>
                                            <h3>Дата: {el.date}</h3>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="allBooks--block__seven" style={{
                            display: page === 7 ? "flex" : "none"
                        }}>
                            {
                                data.slice(9, 18).map(el => (
                                    <div className="allBooks--block__first--aboutBooks">
                                        <div className="allBooks--block__first--aboutBooks__title">
                                            <h1>С какой книги начать?</h1>
                                            <button>Новое</button>
                                        </div>
                                        <div className="allBooks--block__first--aboutBooks__tabs">
                                            <h3>Полезные статьи</h3>
                                            <button>Все</button>
                                            <button>Новое</button>
                                            <button>Книги</button>
                                        </div>
                                        <img src={el.img} alt=""/>
                                        <div className='allBooks--block__first--aboutBooks__line'/>
                                        <div className="allBooks--block__first--aboutBooks__date">
                                            <h3>Автор: {el.author}</h3>
                                            <h3>Дата: {el.date}</h3>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="allBooks--block__eight" style={{
                            display: page === 8 ? "flex" : "none"
                        }}>
                            {
                                data.slice(9, 18).map(el => (
                                    <div className="allBooks--block__first--aboutBooks">
                                        <div className="allBooks--block__first--aboutBooks__title">
                                            <h1>С какой книги начать?</h1>
                                            <button>Новое</button>
                                        </div>
                                        <div className="allBooks--block__first--aboutBooks__tabs">
                                            <h3>Полезные статьи</h3>
                                            <button>Все</button>
                                            <button>Новое</button>
                                            <button>Книги</button>
                                        </div>
                                        <img src={el.img} alt=""/>
                                        <div className='allBooks--block__first--aboutBooks__line'/>
                                        <div className="allBooks--block__first--aboutBooks__date">
                                            <h3>Автор: {el.author}</h3>
                                            <h3>Дата: {el.date}</h3>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="allBooks--block__nine" style={{
                            display: page === 9 ? "flex" : "none"
                        }}>
                            {
                                data.slice(9, 18).map(el => (
                                    <div className="allBooks--block__first--aboutBooks">
                                        <div className="allBooks--block__first--aboutBooks__title">
                                            <h1>С какой книги начать?</h1>
                                            <button>Новое</button>
                                        </div>
                                        <div className="allBooks--block__first--aboutBooks__tabs">
                                            <h3>Полезные статьи</h3>
                                            <button>Все</button>
                                            <button>Новое</button>
                                            <button>Книги</button>
                                        </div>
                                        <img src={el.img} alt=""/>
                                        <div className='allBooks--block__first--aboutBooks__line'/>
                                        <div className="allBooks--block__first--aboutBooks__date">
                                            <h3>Автор: {el.author}</h3>
                                            <h3>Дата: {el.date}</h3>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="allBooks--block__tine" style={{
                            display: page === 10 ? "flex" : "none"
                        }}>
                            {
                                data.slice(9, 18).map(el => (
                                    <div className="allBooks--block__first--aboutBooks">
                                        <div className="allBooks--block__first--aboutBooks__title">
                                            <h1>С какой книги начать?</h1>
                                            <button>Новое</button>
                                        </div>
                                        <div className="allBooks--block__first--aboutBooks__tabs">
                                            <h3>Полезные статьи</h3>
                                            <button>Все</button>
                                            <button>Новое</button>
                                            <button>Книги</button>
                                        </div>
                                        <img src={el.img} alt=""/>
                                        <div className='allBooks--block__first--aboutBooks__line'/>
                                        <div className="allBooks--block__first--aboutBooks__date">
                                            <h3>Автор: {el.author}</h3>
                                            <h3>Дата: {el.date}</h3>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="allBooks--block__eleven" style={{
                            display: page === 11 ? "flex" : "none"
                        }}>
                            {
                                data.slice(9, 18).map(el => (
                                    <div className="allBooks--block__first--aboutBooks">
                                        <div className="allBooks--block__first--aboutBooks__title">
                                            <h1>С какой книги начать?</h1>
                                            <button>Новое</button>
                                        </div>
                                        <div className="allBooks--block__first--aboutBooks__tabs">
                                            <h3>Полезные статьи</h3>
                                            <button>Все</button>
                                            <button>Новое</button>
                                            <button>Книги</button>
                                        </div>
                                        <img src={el.img} alt=""/>
                                        <div className='allBooks--block__first--aboutBooks__line'/>
                                        <div className="allBooks--block__first--aboutBooks__date">
                                            <h3>Автор: {el.author}</h3>
                                            <h3>Дата: {el.date}</h3>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="allBooks--block__twelve" style={{
                            display: page === 12 ? "flex" : "none"
                        }}>
                            {
                                data.slice(9, 18).map(el => (
                                    <div className="allBooks--block__first--aboutBooks">
                                        <div className="allBooks--block__first--aboutBooks__title">
                                            <h1>С какой книги начать?</h1>
                                            <button>Новое</button>
                                        </div>
                                        <div className="allBooks--block__first--aboutBooks__tabs">
                                            <h3>Полезные статьи</h3>
                                            <button>Все</button>
                                            <button>Новое</button>
                                            <button>Книги</button>
                                        </div>
                                        <img src={el.img} alt=""/>
                                        <div className='allBooks--block__first--aboutBooks__line'/>
                                        <div className="allBooks--block__first--aboutBooks__date">
                                            <h3>Автор: {el.author}</h3>
                                            <h3>Дата: {el.date}</h3>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="allBooks--block__thirteen" style={{
                            display: page === 13 ? "flex" : "none"
                        }}>
                            {
                                data.slice(9, 18).map(el => (
                                    <div className="allBooks--block__first--aboutBooks">
                                        <div className="allBooks--block__first--aboutBooks__title">
                                            <h1>С какой книги начать?</h1>
                                            <button>Новое</button>
                                        </div>
                                        <div className="allBooks--block__first--aboutBooks__tabs">
                                            <h3>Полезные статьи</h3>
                                            <button>Все</button>
                                            <button>Новое</button>
                                            <button>Книги</button>
                                        </div>
                                        <img src={el.img} alt=""/>
                                        <div className='allBooks--block__first--aboutBooks__line'/>
                                        <div className="allBooks--block__first--aboutBooks__date">
                                            <h3>Автор: {el.author}</h3>
                                            <h3>Дата: {el.date}</h3>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="allBooks--block__fourteen" style={{
                            display: page === 14 ? "flex" : "none"
                        }}>
                            {
                                data.slice(9, 18).map(el => (
                                    <div className="allBooks--block__first--aboutBooks">
                                        <div className="allBooks--block__first--aboutBooks__title">
                                            <h1>С какой книги начать?</h1>
                                            <button>Новое</button>
                                        </div>
                                        <div className="allBooks--block__first--aboutBooks__tabs">
                                            <h3>Полезные статьи</h3>
                                            <button>Все</button>
                                            <button>Новое</button>
                                            <button>Книги</button>
                                        </div>
                                        <img src={el.img} alt=""/>
                                        <div className='allBooks--block__first--aboutBooks__line'/>
                                        <div className="allBooks--block__first--aboutBooks__date">
                                            <h3>Автор: {el.author}</h3>
                                            <h3>Дата: {el.date}</h3>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="allBooks--block__fiften" style={{
                            display: page === 15 ? "flex" : "none"
                        }}>
                            {
                                data.slice(9, 18).map(el => (
                                    <div className="allBooks--block__first--aboutBooks">
                                        <div className="allBooks--block__first--aboutBooks__title">
                                            <h1>С какой книги начать?</h1>
                                            <button>Новое</button>
                                        </div>
                                        <div className="allBooks--block__first--aboutBooks__tabs">
                                            <h3>Полезные статьи</h3>
                                            <button>Все</button>
                                            <button>Новое</button>
                                            <button>Книги</button>
                                        </div>
                                        <img src={el.img} alt=""/>
                                        <div className='allBooks--block__first--aboutBooks__line'/>
                                        <div className="allBooks--block__first--aboutBooks__date">
                                            <h3>Автор: {el.author}</h3>
                                            <h3>Дата: {el.date}</h3>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className={"pagination"}>
                        <button onClick={() => setPage(page > 1 ? page - 1 : 1)}><GrPrevious className="pagination__pag"/></button>
                        <button className={"numPage"}>{page}</button>
                        <button onClick={() => setPage(page < 15 ? page + 1 : page)}><GrNext className="pagination__pag"/></button>
                    </div>

                </div>
            </div>
        </div>
    );
};


export default PageBooks;