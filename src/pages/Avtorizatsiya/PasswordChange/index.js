import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import "../../../style/PasswordChange.scss"

const PasswordChange = () => {


    const navigate = useNavigate()


    const [email, setEmail] = useState('');
    const [inputStyle, setInputStyle] = useState({});


    const handleEmailChange = (event) => {
        const {value} = event.target;
        setEmail(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (email === 'myemail@gmail.com') {
            navigate("/newPassword")
        } else {
            setInputStyle({border: '1px solid red'})
            alert("Такой E-mail не зарегистрирован");
        }
    }


    return (
        <div id={"change"}>
            <div className="blockLine">
                <h3>Востановить пароль</h3>
                <h5>Введите адрес электронной почты, который вы использовали для регистрации.
                    Вам будет отправлено письмо с инструкциями по сбросу пароля.</h5>
                <input style={inputStyle} onChange={handleEmailChange} name='email' className={"border-red-600"}
                       placeholder={"Email"}/>
                <button onClick={handleSubmit}>Отправить инструкцию</button>
                <h6>Уже есть аккаунт. <a onClick={() => navigate("/registration")} href="">Войти</a></h6>
            </div>
        </div>
    );
};

export default PasswordChange;