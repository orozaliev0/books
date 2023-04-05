import React, {useContext, useState} from 'react';
import row from '../../../img/Kaif 1.svg'
import {Link, NavLink, useNavigate} from "react-router-dom";
import '../../../style/Header.scss'
import vector from '../../../img/Vector.svg'
import {PageConText} from "../Context/ContextWrapper";
import AfterButton from "./AfterButton";

const Header = () => {

    const navigate = useNavigate()
    const {page, setPage} = useContext(PageConText)

    return (
        <header id="header">
            <div className="container">
                <div className="header">
                    <NavLink to={'/'}>
                        <div className="">
                            <img className='pl-16' src={row} alt=""/>
                            <h1> SELF DEVELOPING SCHOOL</h1>
                        </div>
                    </NavLink>
                    <div className="header--text">
                        <NavLink to={'/'}>
                            <a href="">Главная</a>
                        </NavLink>
                        <NavLink to={'/our courses'}>
                            <a href="">Наши курсы</a>
                        </NavLink>
                        <NavLink to={'/about us'}>
                            <a href="">О нас</a>
                        </NavLink>
                    </div>
                    <div className="header--btn">
                        <button style={{}} onClick={() => navigate("/form")}><img className='w-[90%]' src={vector} alt=""/><AfterButton page={page}/>Войти</button>
                    </div>
                </div>

            </div>
            <hr/>
        </header>


    );
};

export default Header;

