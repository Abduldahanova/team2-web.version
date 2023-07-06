import React from "react";
import h from "./Header.module.css"
import logo from "../../images/Frame 2 (2).png"
import stroke from "../../images/Vector 2 (Stroke).png"
import { Link } from "react-router-dom";


const Header = () => {
    return (
      <div className={h.header2}>
      <div className={h.logotip}>
        <img src={logo} alt="" />
        <div className={h.logo}>
          <h1>РСК БАНК</h1>
          <p>Больше возможностей</p>
        </div>
      </div>
      <nav className={h.menu}>
        <ul>
          <Link to={"/About"} className={h.link}><li>О нас</li></Link>
          <Link to={"/Queue"} className={h.link}><li>Онлайн очередь</li></Link>
          <Link to={"/Registr"} className={h.link}><li>Войти</li></Link>
          
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