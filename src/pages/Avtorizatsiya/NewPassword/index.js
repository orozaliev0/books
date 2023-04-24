import React from 'react';
import "../../../style/NewPassword.scss"
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const NewPassword = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [inputStyles, setInputStyles] = useState({
        email: {},
        confirmEmail: {}
    });



    const handleEmailChange = (event) => {
        const { value } = event.target;
        setEmail(value);
    };

    const handleConfirmEmailChange = (event) => {
        const { value } = event.target;
        setConfirmEmail(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (email === confirmEmail) {
            navigate('/');
        } else {
            setInputStyles({
                email: {border: '1.5px solid red'},
                confirmEmail: {border: '1.5px solid red'}
            })

        }
    }

    return (
        <div id={"new"}>
            <div className="blockNew">
                <h2>Востановить пароль</h2>
                <input onChange={handleEmailChange} value={email} placeholder={"Новый пароль"} style={inputStyles.email} />
                <input onChange={handleConfirmEmailChange}  value={confirmEmail} placeholder={"Повторите"} style={inputStyles.confirmEmail} />
                <button onClick={handleSubmit} >Востановить пароль</button>
            </div>
        </div>
    );
};

export default NewPassword;