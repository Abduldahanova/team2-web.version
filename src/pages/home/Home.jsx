import React from "react";
import H from "./Home.module.css"
import Header from "../../components/header/Header";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className={H.section}>
                <Header />
                <div className={H.main}>
                    <div className={H.content}>
                        <h1 className={H.text}>Добро пожаловать в систему <br />электронной очереди!</h1>
                        <Link to={"/About"}><button className={H.button}>Подробнее</button></Link>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Home