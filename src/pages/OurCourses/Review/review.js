import React from 'react';
import '../Review/review.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import icon from '../../../img/mol.svg'
import icon2 from '../../../img/mol2.svg'


const Review = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "10px",
        slidesToShow: 1,
        speed: 500,
        prevArrow: <img  src={icon} className="images-slick" alt=""/>,
        nextArrow: <img src={icon2} className="images-slick" alt=""/>,
    };


    return (
        <div id='review'>
            <div className="container">

                <h1 className=' mb-[3.5rem] ml-[2.5rem] '>Отзывы</h1>
                <Slider {...settings}>
                        <div className="review">
                            <div className="review--block">
                                <p>Твой опыт бесценен!Ты бьешь в самое сердце и в этом твой успех, любого бизнесмена!У
                                    меня есть шанс научиться на твоих ошибках.Этот опыт бесценен! <span>Смотреть полностью</span></p>
                                <div className="review--block__shift">
                                    <div className="review--block__shift--line">
                                        <h1>Muslim Bolot</h1>
                                    </div>
                                    <div className='border-[1px] text-white pl-[47%] m-4 '></div>
                                    <h2>Предпрениматель</h2>
                                </div>
                            </div>
                        </div>
                        <div className="review">
                            <div className="review--block">
                                <p>Твой опыт бесценен!Ты бьешь в самое сердце и в этом твой успех, любого бизнесмена!У
                                    меня есть шанс научиться на твоих ошибках.Этот опыт бесценен! <span>Смотреть полностью</span></p>
                                <div className="review--block__shift">
                                    <div className="review--block__shift--line">
                                        <h1>Muslim Bolot</h1>
                                    </div>
                                    <div className='border-[1px] text-white pl-[40%] m-3 '></div>
                                    <h2>Предпрениматель</h2>
                                </div>
                            </div>
                        </div>
                        <div className="review">
                            <div className="review--block">
                                <p>Твой опыт бесценен!Ты бьешь в самое сердце и в этом твой успех, любого бизнесмена!У
                                    меня есть шанс научиться на твоих ошибках.Этот опыт бесценен! <span>Смотреть полностью</span></p>
                                <div className="review--block__shift">
                                    <div className="review--block__shift--line">
                                        <h1>Muslim Bolot</h1>
                                    </div>
                                    <div className='border-[1px] text-white pl-[40%] m-3 '></div>
                                    <h2>Предпрениматель</h2>
                                </div>
                            </div>
                        </div>
                        <div className="review">
                            <div className="review--block">
                                <p>Твой опыт бесценен!Ты бьешь в самое сердце и в этом твой успех, любого бизнесмена!У
                                    меня есть шанс научиться на твоих ошибках.Этот опыт бесценен! <span>Смотреть полностью</span></p>
                                <div className="review--block__shift">
                                    <div className="review--block__shift--line">
                                        <h1>Muslim Bolot</h1>
                                    </div>
                                    <div className='border-[1px] text-white pl-[40%] m-3 '></div>
                                    <h2>Предпрениматель</h2>
                                </div>
                            </div>
                        </div>

                </Slider>
            </div>
        </div>
    );
};

export default Review;