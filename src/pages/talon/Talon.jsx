import React from "react";
import T from "./Talon.module.css"
import Localiz from "../../images/Location2.png"
import calendar from "../../images/calendar2.png"
import user from "../../images/user-profile-03.png"
import { NavLink } from "react-router-dom";
import Header from "../../components/header/Header"

const Talon = () => {
    return (
        <div className={T.section}>
            < Header />
            <div className={T.main}>
            <div className={T.container}>
                <h1>Ваш талон успешно создан</h1>
                <div className={T.text}>
                <p>Просим вас прибыть в банк заранее на 10 минут относительно назначенного времени. При входе 
                в банк вам необходимо на терминале ввести активационный код или отсканировать QR-код.</p>
                </div>

                <div className={T.info_block}>
                    <table>
                        <tbody>
                            <tr>
                            <td>Код для активизации:</td>
                            <td>
                                №1122
                            </td>
                            </tr>
                            <tr>
                            <img src={Localiz} alt="" />
                            <td>Адрес филиала:</td>
                            <td>
                                ул. Манас 96А
                            </td>
                            </tr>
                            <tr>
                            <img src={calendar} alt="" />
                            <td>Дата посещения:</td>
                            <td>
                                Сегодня 14:30
                            </td>
                            </tr>
                            <tr>
                            <img src={user} alt="" />
                            <td>Услуга:</td>
                            <td>
                                Юридическое лицо/Банковские переводы
                            </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={T.buttons}>
                <NavLink to="/Queue"><button className={T.button}>Перенести запись</button></NavLink>
                <NavLink to="/About"><button className={T.button}>Отменить запись</button></NavLink>
                <NavLink to="/About"><button className={T.button2}>Понятно</button></NavLink>
                </div>
               
            </div>
            </div>
        </div>
    )
}
export default Talon