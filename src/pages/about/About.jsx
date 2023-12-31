import React from "react";
import A from "./About.module.css"
import Header from "../../components/header/Header";
import first1 from "../../images/first.png"
import second2 from "../../images/second.png"
import third3 from "../../images/third.png"
import first from "../../images/phone1.png"
import second from "../../images/phone2.png"
import third from "../../images/phone3.png"
import apple from "../../images/apple.png" 
import playmarket from "../../images/playmarket.png"

import { motion } from "framer-motion";

const itemAnimtetion = {
  hidden: {
      y: 100,
      opacity: 0,
  },
  visible: custom => ({
      y: 0,
      opacity: 1,
      transition: {delay: custom * 0.2}
  }),
}

const About = () => {
    return (
        <motion.section
        initial="hidden"
        whileInView="visible"
        className={A.section}>
            < Header />
            <div className={A.main}>
              <div className={A.content}>
                  <p>Приветствуем вас в инновационном приложении РСК БАНКА - Очереди Без Ожидания! Откройте двери к мгновенному и безупречному обслуживанию! Впервые вы сможете избежать бесконечных очередей и получить быстрое и комфортное обслуживание в нашем банке. Насладитесь свободой выбора, удобством и превосходством технологий вместе с нами. Откройте для себя мир без ожидания и станьте нашим привилегированным клиентом</p>
                  <div className={A.container}>
                      <motion.div  custom={1} variants={itemAnimtetion} className={A.item}>
                          <div className={A.box}>
                              <img src={first1} alt="" />
                              <h2>Заполните онлайн-форму </h2>
                              <p>Заполните все обязательные поля, указав необходимые данные, контактную информацию и предпочтительное время визита.</p>
                          </div>
                      </motion.div>
                      <motion.div custom={2} variants={itemAnimtetion} className={A.item}>
                          <div className={A.box}>
                              <img src={second2} alt="" />
                              <h2>Получите регистрационный или QR-код</h2>
                              <p>После успешного заполнения формы вы получите уникальный регистрационный  
                              или QR-код, который позволит вам получить билет в выбранном офисе</p>
                          </div>
                      </motion.div>
                      <motion.div custom={3} variants={itemAnimtetion} className={A.item}>
                          <div className={A.box}>
                              <img src={third3} alt="" />
                              <h2>Приходите в назначенное время</h2>
                              <p>Приходите в офис в назначенное время. Введите регистрационный код или отсканируйте QR-код на терминале для получения талона</p>
                          </div>
                      </motion.div>
                  </div>
              </div>
              <div className={A.info}>
                  <div className={A.pic}>
                      <img className={A.img} src={first} alt="" />
                      <img className={A.img} src={second} alt="" />
                      <img className={A.img} src={third} alt="" />

                      <div className={A.info_block}>
                          <h1>Скачайте наше <br /> мобильное приложение</h1>
                          <div className={A.blocks}> 
                              <div className={A.block}>
                                  <img src={apple} alt="" />
                                  <p>Загрузите в < br /> <strong>App Store</strong></p>
                                
                              </div>
                              <div className={A.block}>
                                  <img src={playmarket} alt="" />
                                  <p>Загрузите в< br /><strong>Google Play</strong></p>
                              </div>
                          </div>
                          
                      </div>
                      
                  </div>
              </div>
              <hr/>
              <footer className={A.footer}>
                <div className={A.column}>
                  <h4>Банк</h4>
                  <ul>
                    <li>Информация о банке</li>
                    <li>Руководство</li>
                    <li>Реквизиты</li>
                    <li>Карьера в банке</li>
                    <li>Акции</li>
                  </ul>
                </div>
                <div className={A.column}>
                  <h4>Отделения</h4>
                  <ul>
                    <li>Карты</li>
                    <li>Кредиты</li>
                    <li>Депозиты</li>
                  </ul>
                </div>
                <div className={A.column}>
                  <h4>Частным лицам</h4>
                  <ul>
                    <li>Карты</li>
                    <li>Кредиты</li>
                    <li>Депозиты</li>
                  </ul>
                </div>
                <div className={A.column}>
                  <h4>Бизнесу</h4>
                  <ul>
                    <li>Банковские счета</li>
                    <li>Кредиты</li>
                    <li>Депозиты</li>
                  </ul>
                </div>
                <div className={A.bottom}>
                  <p>ОАО «РСК БАНК»</p>
                  <p>Головной офис: г. Бишкек ул. Московская 80/1</p>
                  <p>Круглосуточный контакт-центр: (0-312/0-552/0-706/0-775) 911-111</p>
                  <p>Телефон доверия: (0-312) 35-55-55</p>
                </div>
              </footer>
            </div>
            
        </motion.section >
    )
}
export default About