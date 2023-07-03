import React from "react";
import h from "./Header.module.css"
import logo from "../../images/Frame 2 (2).png"
import stroke from "../../images/Vector 2 (Stroke).png"

const Header = () => {
    return (
        <div className={h.header}>
             <div className={h.logotip}>
                <img src={logo} alt="" />
                <div className={h.logo}>
                  <h1>РСК БАНК</h1>
                  <p>Больше возможностей</p>
                </div>
              </div>
              <nav className={h.menu}>
                <ul>
                    <li>О нас</li>
                    <li>Онлайн очередь</li>
                    <li className={h.drop}>RU <img className={h.stroke} src={stroke} alt="" /></li>
                    <ul>
                    <li>Kg</li>
                    <li>En</li>
                    </ul>
                </ul>
            </nav>

        </div>
    )
}
export default Header