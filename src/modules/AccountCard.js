import React from "react";
import "./AccountCard.css";

const AccountCard = ({name, city, email}) => {

    return (<div className="block">
        <p>Account Card</p>
        <div className="formInput">
            <p>Name: </p>
            <p className="accInput">{name}</p>
        </div>
        <div className="formInput">
            <p>City: </p>
            <p className="accInput">{city}</p>
        </div>
        <div className="formInput">
            <p>Email:</p>
            <p className="accInput">{email}</p>
        </div>
    </div>);
};

export default AccountCard;