import React from 'react';
import {useNavigate} from "react-router-dom";
import "../../../style/PasswordChange.scss"

const PasswordChange = () => {

    const navigate = useNavigate()

    return (
        <div id={"change"}>
            <div className="blockLine">
                <h3>Востановить пароль</h3>
                <h5>Введите адрес электронной почты, который вы использовали для регистрации.
                    Вам будет отправлено письмо с инструкциями по сбросу пароля.</h5>
                <input placeholder={"Email"}/>
                <button onClick={() => navigate("/newPassword")}>Отправить инструкцию</button>
                <h6>Уже есть аккаунт. <a onClick={() => navigate("/registration")} href="">Войти</a></h6>
            </div>
        </div>
    );
};

export default PasswordChange;