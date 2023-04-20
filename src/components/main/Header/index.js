import React, {useContext, useState} from 'react';
import row from '../../../img/Kaif 1.svg'
import {Link, NavLink, useNavigate} from "react-router-dom";
import '../../../style/Header.scss'
import vector from '../../../img/Vector.svg'
import {PageConText} from "../Context/ContextWrapper";
import AfterButton from "./AfterButton";
import {useDispatch, useSelector} from "react-redux";
import {IoMdClose} from "react-icons/io";
import {GiHamburgerMenu} from "react-icons/gi";

const Header = () => {
    const [burger, setBurger] = useState(false)
    const navigate = useNavigate()
    const {page, setPage} = useContext(PageConText)
    const dispatch = useDispatch()
    const {payment} = useSelector(state => state)


    return (
        <header
            style={{
                display: !payment ? 'block' : 'none'
            }} id="header">
            <div className="container">
                <div className="header">
                    <NavLink to={'/'}>
                        <div className="">
                            <img className=' lol   pl-16' src={row} alt=""/>
                            <h1 className="l"> SELF DEVELOPING SCHOOL</h1>
                        </div>
                    </NavLink>
                    <div className="header--text">
                        <NavLink to={'/'}>
                            <a href="">Главная</a>
                        </NavLink>
                        <NavLink to={'/our-courses'}>
                            <a href="">Наши курсы</a>
                        </NavLink>
                        <NavLink to={'/aboutUs'}>
                            <a href="">О нас</a>
                        </NavLink>
                    </div>
                    <div className="header--btn">
                        <button style={{}} onClick={() => navigate("/form")}><img className='w-[90%]' src={vector} alt=""/><AfterButton page={page}/>Войти</button>
                    </div>
                    <div className="header--menu">
                        {
                            burger ?
                                <button onClick={() => setBurger(false)}> <IoMdClose className="menu-icon"/> </button>
                                :
                                <button onClick={() => setBurger(true)}><GiHamburgerMenu className="menu-icon"/></button>
                        }
                    </div>
                </div>
                <div className={burger ? "header--tran" : "header--tran-cl"}>
                   <div className="transition-all delay-700">
                       <h5 className="header--menu-h">SELF DEVELOPING SCHOOL</h5>

                       <div className="header--text-mn">
                           <NavLink to={'/'}>
                               <a href="">Главная</a>
                           </NavLink>
                           <NavLink to={'/our-courses'}>
                               <a href="">Наши курсы</a>
                           </NavLink>
                           <NavLink to={'/about_us'}>
                               <a href="">О нас</a>
                           </NavLink>
                       </div>
                       <div className="header--btn-mn">
                           <button style={{}} onClick={() => navigate("/form")}><img className='w-[90%]' src={vector} alt=""/><AfterButton page={page}/>Войти</button>
                       </div>
                   </div>
                </div>

            </div>
            <hr className={burger ? "header--hr" : "header--hr-close"}/>
        </header>


    );
};

export default Header;

