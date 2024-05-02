import React, { useState } from "react";
import "./RegistrationForm.css";
import "./AccountCard.css";
import AccountCard from "./AccountCard";
import RegistrationForm from "./RegistrationForm";

const Home = () => {
    const [name, useName] = useState("");
    const [city, useCity] = useState("");
    const [email, useEmail] = useState("");
    const [password, usePassword] = useState("");
    const [account, useAccount] = useState(false);

    const HandleChangeEmail = (e) => {
        useEmail(e.target.value);
    };

    const HandleChangeName = (e) => {
        useName(e.target.value);
    };

    const HandleChangeCity = (e) => {
        useCity(e.target.value);
    };

    const HandleChangePassword = (e) => {
        usePassword(e.target.value);
    }

    const OnSubmitForm = () => {
        return useAccount(true);
    }

    return <div className="block">
        {account ?
        (<AccountCard
            name={name}
            city={city}
            email={email}
        />) : (
        <RegistrationForm
            handleChangeEmail={HandleChangeEmail}
            handleChangeName={HandleChangeName}
            handleChangeCity={HandleChangeCity}
            handleChangePassword={HandleChangePassword}
            onSubmitForm={OnSubmitForm}
            name={name}
            city={city}
            email={email}
            password = {password}
        />)}
    </div>
};

export default Home;