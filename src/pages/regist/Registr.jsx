import React, { useState, useEffect } from "react";
import R from "./Registr.module.css";
import Header from "../../components/header/Header";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.2 },
  },
};

const blockAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
    rotate: -180,
  },
  visible: custom => ({
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: { delay: custom * 0.4 },
  }),
};

const Registr = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <motion.section
        initial="hidden"
        animate="visible"
        className={R.section}
      >
        <Header />

        <div className={R.content}>
          <div className={R.main}>
            <motion.h1
              variants={textAnimation}
              initial="hidden"
              animate="visible"
              className={R.text}
            >
              Добро пожаловать в систему <br />
              электронной очереди!
            </motion.h1>
            <motion.div
              custom={2}
              variants={blockAnimation}
              initial="hidden"
              animate="visible"
              className={R.block}
            >
              <div className={R.outer}>
                <div className={R.container2}>
                Онлайн очередь:
                  <span className={R.words}>
                    <b
                      className={
                        currentWordIndex === 0 ? `${R.is_visible}` : `${R.is_hidden}`
                      }
                    >
                      Удобно
                    </b>
                    <b
                      className={
                        currentWordIndex === 1 ? `${R.is_visible}` : `${R.is_hidden}`
                      }
                    >
                      Просто
                    </b>
                    <b
                      className={
                        currentWordIndex === 2 ? `${R.is_visible}` : `${R.is_hidden}`
                      }
                    >
                      Быстро
                    </b>
                  </span>
                </div>
              </div>
              <div className={R.regist}>
                <NavLink to="/Auth"><button className={R.button_phone}>Войти по телефону</button></NavLink>
                <p>Запросить Client ID приложения РСКБанк</p>
                <NavLink><button className={R.button_kassa}>Записаться в кассу</button></NavLink>
                <p>Осблуживание в кассе без авторизации</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Registr;


