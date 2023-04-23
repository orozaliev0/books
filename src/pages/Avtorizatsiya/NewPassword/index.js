import React from 'react';
import "../../../style/NewPassword.scss"
import {useNavigate} from "react-router-dom";

const NewPassword = () => {

    const navigate = useNavigate()

    return (
        <div id={"new"}>
            <div className="blockNew">
                <h2>Востановить пароль</h2>
                <input type="text" placeholder={"Новый пароль"}/>
                <input type="text" placeholder={"Повторите"}/>
                <button>Востановить пароль</button>
            </div>
        </div>
    );
};

export default NewPassword;