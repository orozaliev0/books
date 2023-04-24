import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import "../../style/avtor.css"
import {NavLink, useNavigate} from "react-router-dom";


const Avtorizatsiya = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState(localStorage.getItem("email") || "");
    const [isPassword, setIsPassword] = useState(false);
    const [error, setError] = useState(false);
    const [userName, setUserName] = useState(localStorage.getItem("userName") || "");
    const [password, setPassword] = useState(""); // Добавляем состояние для пароля
    
    useEffect(() => {
        localStorage.setItem("email", email);
        localStorage.setItem("userName", userName);
    }, [email, userName]);

    console.log(password);  
    console.log(userName);  
    console.log(email);  

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "email") {
            setEmail(value);
        }
        if (name === "password") {
            setPassword(value);
        }
    };


    const passwordClick = () => {
        setIsPassword(!isPassword);
    };

    const handleClicker = () => {
        if (email === "myemail@gmail.com" && password === "123"){
            setUserName(email.split('@')[0]);
            navigate("/")
        }
        else if (email === '' && password === ''){
            setError(true)
        }
        else if (email !== '' && password !== ''){
            setError(false)
        }
        else{
           alert("не правильный email или пароль ")
        }
    }
    const handleClick = () => {


        // Извлекаем только имя пользователя из email   
        const userNameWithoutDomain = email.split("@")[0];
        setUserName(userNameWithoutDomain);
    };

    return (
        <div className="block flex flex-col items-center justify-evenly">
            <h1>Войти в аккаунт</h1>
            <input
                className={error ? "border-2 border-red-600" : "border-2 border-amber-50"}
                name={"email"}
                onChange={handleChange}
                type="email"
                placeholder="Email"
                value={email}
            />
            <div>
                <div>
                    <input
                        className={error ? "border-2 border-red-600" : "border-2 border-amber-50"}
                        name={"password"}
                        onChange={handleChange}
                        type={isPassword ? "password" : "text"}
                        placeholder="Password"
                        value={password}
                    />
                </div>
                <div className="chexavtori">
                    <div onClick={passwordClick}>
                        {isPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                    </div>
                </div>
            </div>
            <button onClick={handleClicker}>
                   <h2 onClick={handleClick}>{userName ? `Привет, ${userName}` : "Войти"}</h2>
            </button>

            <span className={"cursor-pointer"} onClick={() => navigate("/changePassword")}>Забыли пароль?</span>


        </div>
    );
};

export default Avtorizatsiya;
