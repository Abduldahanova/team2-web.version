import React from "react";
import P from "./Personal.module.css"
import Header from "../../components/header/Header"
import persona from "../../images/Illustration 2.png"
import logo from "../../images/Illustration 2.png"

const PersonalArea = () => {
    return (
        <div className={P.section}>
            < Header />
            <div className={P.main}>
                <h1>Личные данные</h1>
                <div className={P.container}>
                    <div className={P.img}>
                        <img src={persona}
                         alt="" />
                    </div>
                    <div className={P.info_block}>
                        <div className={P.name}>
                            <img src={logo} alt="" />
                            <h2>Алина Раимова </h2>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PersonalArea