import React, {useState} from 'react';
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai";
import '../../style/avtor.css'
const Avtorizatsiya = () => {
    const [con,setCon] = useState([])
    const [error,setError] = useState(false)
    const [values, setValues] = useState({
        password: "",
        email: ""
    })

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const handleClick = () => {
        if (values.password.trim().length !== 0 && values.email.trim().length !== 0) {
            setError(false)
            setCon([...con, values])
        } else {
            setError(true)
        }
    }

const [isPassword , setIsPassword] = useState(false)
    const passwordClick = () =>{
        setIsPassword(!isPassword)
    }
    return (
        <div>
            <div className="block flex flex-col items-center justify-evenly">
                <h1>Войти в аккаунт</h1>
                <input className={error ? "border-2 border-red-700" : "border-2 border-amber-50"} name={"password"} onChange={handleChange} type="email" placeholder="Email"/>
                <div>
                    <div>
                        <input className={error ? "border-2 border-red-700" : "border-2 border-amber-50"} name={"email"} onChange={handleChange} type={isPassword ? "password" : "email"} placeholder="Password" />
                    </div>
                    <div className="chexavtori">
                        <div onClick={passwordClick}>{isPassword ? <AiFillEyeInvisible/> : <AiFillEye/>}</div>
                    </div>
                </div>
                <button onClick={handleClick}><h2>Войти</h2></button>
                <span>Забыли пароль?</span>
            </div>
        </div>
    );
};

export default Avtorizatsiya;