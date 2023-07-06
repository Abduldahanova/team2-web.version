import React from "react";
import H from "./Home.module.css"
import Header from "../../components/header/Header";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

const textAnimtetion = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: {delay: custom * 0.2}
    }),
}
const Home = () => {
    return (
        <>
            <motion.section
            initial="hidden"
            whileInView="visible"
            className={H.section}>
               
                <Header />
                <div className={H.main}>
                    <div className={H.content}>
                        <motion.h1 custom={1} variants={textAnimtetion} className={H.text}>Добро пожаловать в систему <br />электронной очереди!</motion.h1>
                        <Link to={"/About"}><motion.button custom={2} variants={textAnimtetion} className={H.button}>Подробнее</motion.button></Link>
                    </div>
                </div>
            </motion.section>

        </>
    )
}
export default Home



