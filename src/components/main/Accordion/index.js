import React, {useState,useEffect} from 'react';
import '../../../style/Accordion.scss'
import {MdArrowBackIosNew} from "react-icons/md";
import dions from "../../../img/acardion-img.png"


const Accordion = () => {
    const handleClickIcon = () => {

    }
    useEffect(() => {
        const detailsElements = document.querySelectorAll("details");
        detailsElements.forEach(detailsElement => {
            detailsElement.addEventListener("click", function() {
                detailsElements.forEach(otherDetailsElement => {
                    if (otherDetailsElement !== detailsElement) {
                        otherDetailsElement.removeAttribute("open");
                    }
                });
            });
        });
    }, []);
    return (
        <div id="acc">
            <div className="container">
                <div className="dion">
                    <div className="dion-right">
                        <div>
                            <h1 className="Dion-h1">Появились вопросы?</h1>
                        </div>
                        <div>
                            <div>
                                <img className="Dion-img" src={dions} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="dion-left">
                        <div className="dionsAcc">
                            <hr/>
                            <details>
                                <summary className="summary-text" onClick={handleClickIcon}>
                                    <h3 className="summary-text">Сколько всего насчитывается материала
                                        всего?</h3>
                                </summary>
                                <p className="details-parag">К сожелению мы уже утратили счет материалы спустьа столько
                                    лет <br/>
                                    работы и уже их настолько много что их уже не</p>
                            </details>
                            <hr className="hrTwo"/>
                        </div>
                        <div className="dionsAcc">
                            <details>
                                <summary className="summary-text">
                                    <h3>Потеряю ли я оставшесея время если
                                        перейду на другой до окончания этого?</h3>
                                </summary>
                                <p className="details-parag">К сожелению мы уже утратили счет материалы спустьа столько
                                    лет <br/>
                                    работы и уже их настолько много что их уже не</p>
                            </details>
                            <hr className="hrTwo"/>
                        </div>
                        <div className="dionsAcc">
                            <details>
                                <summary className="summary-text">
                                    <h3>Могу ли я отказаться от автопродления
                                        подписки?
                                    </h3>
                                </summary>
                                <p className="details-parag">К сожелению мы уже утратили счет материалы спустьа столько
                                    лет <br/>
                                    работы и уже их настолько много что их уже не</p>
                            </details>
                            <hr className="hrTwo"/>
                        </div>
                        <div className="dionsAcc">
                            <details>
                                <summary className="summary-text">
                                    <h3>Откуда мне узнавать про новые статьи и
                                        курсы?</h3>
                                </summary>
                                <p className="details-parag">К сожелению мы уже утратили счет материалы спустьа столько
                                    лет <br/>
                                    работы и уже их настолько много что их уже не</p>
                            </details>
                            <hr className="get-tenHr"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Accordion;