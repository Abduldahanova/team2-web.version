import React, { useState } from "react";
import auth from "./Auth.module.css";
import Header from "../../components/header/Header";

const Auth = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  };

  return (
    <div className={auth.section}>
      <Header />
      <div className={auth.main}>
        <div className={auth.container}>
          <input
            className={auth.number}
            type="tel"
            placeholder="Введите номер"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
          <button
            className={`${auth.button} ${phoneNumber ? auth.buttonActive : ""}`}
          >
            Продолжить
          </button>
          <div className={auth.checkboxContainer}>
            <input
              type="checkbox"
              id="consentCheckbox"
              checked={isCheckboxChecked}
              onChange={handleCheckboxChange}
            />
            <label
              htmlFor="consentCheckbox"
              className={isCheckboxChecked ? auth.labelActive : ""}
            >
              Согласие на обработку персональных данных
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;


