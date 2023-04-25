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
import {FaUserAlt} from "react-icons/fa";


const Header = ({userName}) => {
    const [burger, setBurger] = useState(false)
    const navigate = useNavigate()
    const {page, setPage} = useContext(PageConText)
    const dispatch = useDispatch()
    const {payment} = useSelector(state => state)
    const [isOpensss, setisOpensss] = useState(false)




    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(!open);
        getLogin()
    };
    console.log(open)

    const handleMenuOne = () => {
        setOpen(false);
        window.scroll(0, 0)
    };

    const handleMenuTwo = () => {
        setOpen(false);
        localStorage.removeItem('email')
    };


    const user = localStorage.getItem("email")

    const getLogin = () => {
        if (user === null) {
            return <div className='Header--btn'>
                <button onClick={() => navigate('/form')}><img className='w-[20%]' src={vector} alt=""/>{"Войти"}</button>
            </div>

        } else if (user !== '') {
            return <div className={"button"}>
                <div className="dropdown">
                    <div className="">
                        <button onClick={handleOpen} className="dropdown_dropbtn"><FaUserAlt className=' w=[30px]'/><AfterButton page={page}/>{user ? user.slice(0, 6) : "Войти"}</button>
                    </div>
                    <div>
                        {open ?
                            <div id="myDropdown">
                                <div className="dropdown_drop-content">
                                    <Link onClick={handleMenuOne} to='/regis'>Account</Link>
                                    <div className='dropdown_drop-content_line'></div>
                                    <Link onClick={handleMenuTwo}>Sign out</Link>
                                </div>
                            </div>
                            : ''}
                    </div>
                </div>
            </div>
        }
    }

    return (
        <header style={{
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
                        <NavLink onClick={() => window.scroll(0, 0)} to={'/'}>
                            <a href="">Главная</a>
                        </NavLink>
                        <NavLink onClick={() => window.scroll(0, 0)} to={'/our-courses'}>
                            <a href="">Наши курсы</a>
                        </NavLink>
                        <NavLink onClick={() => window.scroll(0, 0)} to={'/aboutUs'}>
                            <a href="">О нас</a>
                        </NavLink>
                    </div>

                    <div className="header--btn">
                        <div className={"button"} onClick={() => getLogin()}>{getLogin()}</div>
                    </div>
                    <div className="header--menu">
                        {
                            burger ?
                                <button onClick={() => setBurger(false)}><IoMdClose className="menu-icon"/>
                                </button>
                                :
                                <button onClick={() => setBurger(true)}><GiHamburgerMenu className="menu-icon"/>
                                </button>
                        }
                    </div>
                </div>
                <div className={burger ? "header--tran" : "header--tran-cl"}>
                    <div className="transition-all delay-700">
                        <h5 className="header--menu-h">SELF DEVELOPING SCHOOL</h5>
                        <div className="header--text-mn">
                            <NavLink onClick={() => window.scroll(0, 0)} to={'/'}>
                                <a href="">Главная</a>
                            </NavLink>
                            <NavLink onClick={() => window.scroll(0, 0)} to={'/our-courses'}>
                                <a href="">Наши курсы</a>
                            </NavLink>
                            <NavLink onClick={() => window.scroll(0, 0)} to={'/aboutUs'}>
                                <a href="">О нас</a>
                            </NavLink>
                        </div>
                        <div className="">
                            <div className="dropdown">
                                <button onClick={handleOpen} className="dropdown_dropbtn"><FaUserAlt className=' w=[30px]'/><AfterButton page={page}/>{user ? user.slice(0, 6) : getLogin()}</button>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className={burger ? "header--hr" : "header--hr-close"}/>
            </div>
        </header>
    )
}
export default Header;