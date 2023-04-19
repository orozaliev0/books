import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import "../../style/avtor.css"

const Avtorizatsiya = () => {
    const [email, setEmail] = useState(localStorage.getItem("email") || "");
    const [isPassword, setIsPassword] = useState(false);
    const [error, setError] = useState(false);
    const [userName, setUserName] = useState(localStorage.getItem("userName") || "");
    const [password, setPassword] = useState(""); // Добавляем состояние для пароля

    useEffect(() => {
        localStorage.setItem("email", email);
        localStorage.setItem("userName", userName);
    }, [email, userName]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "email") {
            setEmail(value);
        }
        if (name === "password") {
            setPassword(value); // Обновляем состояние пароля
        }
    };

    const passwordClick = () => {
        setIsPassword(!isPassword);
    };

    const handleClick = () => {
        // Извлекаем только имя пользователя из email
        const userNameWithoutDomain = email.split("@")[0];
        setUserName(userNameWithoutDomain);
    };

    return (
        <div className="block flex flex-col items-center justify-evenly">
            <h1>Войти в аккаунт</h1>
            <input
                className={error ? "border-2 border-red-700" : "border-2 border-amber-50"}
                name={"email"}
                onChange={handleChange}
                type="email"
                placeholder="Email"
                value={email}
            />
            <div>
                <div>
                    <input
                        className={error ? "border-2 border-red-700" : "border-2 border-amber-50"}
                        name={"password"}
                        onChange={handleChange}
                        type={isPassword ? "password" : "email"}
                        placeholder="Password"
                        value={password} // Используем значение из состояния пароля
                    />
                </div>
                <div className="chexavtori">
                    <div onClick={passwordClick}>
                        {isPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                    </div>
                </div>
            </div>
            <button onClick={handleClick}>
                <h2>{userName ? `Привет, ${userName}` : "Войти"}</h2>
            </button>
            <span>Забыли пароль?</span>
        </div>
    );
};

export default Avtorizatsiya;
