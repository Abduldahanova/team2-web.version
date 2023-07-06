import React, { useState } from "react";
import L from "./List.module.css";
import location from "../../images/Location.png";
import calendar from "../../images/calendar.png";
import rest from "../../images/clock.png";
import arrow from "../../images/Arrow down.png";
import arrow2 from "../../images/Arrow down2.png";
import nope from "../../images/x-02.png";
import Data from "./Data";

const List = () => {
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [arrowImage1, setArrowImage1] = useState(arrow);

  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [arrowImage2, setArrowImage2] = useState(arrow);

  const [showData, setShowData] = useState(false);
  const toggleDropdown1 = () => {
    setDropdownOpen1(!dropdownOpen1);
    setArrowImage1(dropdownOpen1 ? arrow : arrow2);
  };

  const toggleDropdown2 = () => {
    setDropdownOpen2(!dropdownOpen2);
    setArrowImage2(dropdownOpen2 ? arrow : arrow2);
  };

  const handleNopeClick = () => {
    window.location.reload();
  };

  const handleContinueClick = () => {
    setShowData(true);
  };

  return (
    <div>
      {showData ? (
        <Data />
      ) : (
        <div className={L.title}>
          <div className={L.hat}>
            <h1>Центральный филиал</h1>
            <img src={nope} alt="" onClick={handleNopeClick} />
          </div>

          <div className={L.info_box}>
            <div className={L.info}>
              <img src={location} alt="" />
              <p>ул.Манас 96А</p>
            </div>
            <div className={L.info}>
              <img src={calendar} alt="" />
              <p>Понедельник - Пятница</p>
              <p>09:00 - 16:00 </p>
            </div>
            <div className={L.info}>
              <img src={rest} alt="" />
              <p>Перерыв</p>
              <p>12:00 - 13:00 </p>
            </div>
          </div>
          <div className={L.buttons}>
            <button className={L.dropdownButton} onClick={toggleDropdown1}>
              Обслуживание юридических лиц <img src={arrowImage1} alt="" />
            </button>

            {dropdownOpen1 && (
              <div className={L.dropdownContent}>
                <div className={L.content}>
                  <p>Денежные переводы</p>
                  <p>Банковские переводы</p>
                  <p>Выдача карт</p>
                  <p>Денежные переводы</p>
                  <p>Банковские переводы</p>
                  <p>Банковские переводы</p>
                </div>
              </div>
            )}

            <button className={L.dropdownButton} onClick={toggleDropdown2}>
              Обслуживание физических лиц <img src={arrowImage2} alt="" />
            </button>
            {dropdownOpen2 && (
              <div className={L.dropdownContent}>
                <p>Пополнение счета</p>
                <p>Снятие наличных</p>
                <p>Оплата услуг</p>
              </div>
            )}
            <button className={L.continueButton} onClick={handleContinueClick}>
              Продолжить
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default List;




