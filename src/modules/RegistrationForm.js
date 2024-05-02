import React from "react";
import "./RegistrationForm.css";

const RegistrationForm = ({ name, city, email, password, handleChangeEmail,
    handleChangeName, handleChangeCity, handleChangePassword, onSubmitForm}) => {
    
     const checkPassword = (password) => {
        const beginWithoutDigit = /^\D.*$/;
        const withoutSpecialChars = /^[^-() /]*$/;
        const containsLetters = /^.*[a-zA-Z]+.*$/;
        
        return (
            beginWithoutDigit.test(password) &&
            withoutSpecialChars.test(password) &&
            containsLetters.test(password)
        );
    };

    const checkEmail = (email) => {
        const emailValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailValid.test(email);
    };

    const ValidForm = () => {
        return checkEmail(email) && checkPassword(password);
    }

    return (<div className="block">
        <p>Registration Form</p>
        <form>
            <div className="formInput">
                <label className="regInput">Name</label>
                <input value={name} onChange={(event) => handleChangeName(event)}></input>
            </div>
           <div className="formInput">
                <label className="regInput">City</label>
                <input value={city} onChange={(event) => handleChangeCity(event)}></input>
            </div>
            <div className="formInput">
                <label className="regInput">Email</label>
                <input value={email} onChange={(event) => handleChangeEmail(event)}></input>
            </div>
            <div className="formInput">
                <label className="regInput">Password</label>
                <input value={password} onChange={(event) => handleChangePassword(event)}></input>
            </div>
            {ValidForm() && <button onClick={onSubmitForm}>Save</button>}
        </form>
    </div>);
};

export default RegistrationForm;