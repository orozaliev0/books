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



const Header = ({userName}) => {

    const [burger, setBurger] = useState(false)
    const navigate = useNavigate()
    const {page, setPage} = useContext(PageConText)
    const dispatch = useDispatch()
    const {payment} = useSelector(state => state)
    const [isOpensss, setisOpensss] = useState(false)

    const myDrop = () => {
        document.getElementById("myDropdown").classList.toggle("show");
    }



    const user = localStorage.getItem("email")
    // console.log(user.length === 0)

    const getLogin = () => {
        if (user === '') {
            return <div className='Header--btn'>
                <button onClick={() => navigate('/form')}><img className='w-[20%]' src={vector} alt=""/><AfterButton page={page}/>{user ? user.toUpperCase().slice(0,6) : "Войти"}</button>
            </div>
          // return  <button className={"button"} onClick={()=> navigate("/form")}>
          //     <img className='w-[50%]' src={vector} alt=""/><AfterButton page={page}/>{user ? user.toUpperCase().slice(0,6) : "Войти"}
          // </button>
        }
        else if (user !== ''){
            return <div className={"button"}>
                <div className="dropdown">
                    <button onClick={myDrop} className="dropdown_dropbtn"><img className='w-[90%] text-blue-900' src={vector} alt=""/><AfterButton page={page}/>{user ? user.toUpperCase().slice(0,6) : "Войти"}</button>
                            <div id="myDropdown" className="dropdown_drop-content" style={{transition:"3s"}}>
                                <Link onClick={ () => window.scroll(0,0)}  to="/regis"> Account</Link>
                                <div className='dropdown_drop-content_line'></div>
                                <Link to="/" onClick={() => localStorage.removeItem('email')}> Sign out</Link>
                            </div>
                </div>

                {/*<button>*/}
                {/*    <img className='w-[90%]' src={vector} alt=""/><AfterButton page={page}/>{user ? user.toUpperCase().slice(0,6) : "Войти"}*/}
                {/*</button>*/}

            </div>
        }

    }
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
                        <NavLink onClick={() =>  window.scroll(0,0)} to={'/'}>
                            <a href="">Главная</a>
                        </NavLink>
                        <NavLink onClick={() => window.scroll(0,0)} to={'/our-courses'}>
                            <a href="">Наши курсы</a>
                        </NavLink>
                        <NavLink onClick={() => window.scroll(0,0)} to={'/aboutUs'}>
                            <a href="">О нас</a>
                        </NavLink>
                    </div>

                    <div className="header--btn">
                                <div className={"button"} onClick={() => getLogin()}>{getLogin()}</div>

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
                           <button onClick={ () => navigate("/form")}><img className='w-[90%]' src={vector} alt=""/><AfterButton page={page}/>{}</button>
                       </div>
                   </div>
                </div>
            </div>
            <hr className={burger ? "header--hr" : "header--hr-close"}/>
        </header>


    );
};

export default Header;

