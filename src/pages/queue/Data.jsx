import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./Data.css"
import nope from "../../images/x-02.png";
import { NavLink } from 'react-router-dom';

const Data = () => {
    const [value, onChange] = useState(new Date());
    const handleNopeClick = () => {
        window.location.reload();
      };
    return (
        <div className='calendar_container'>  
            <div className='backdo'>
                <h1>Выберите дату</h1>
                <img src={nope} alt="" onClick={handleNopeClick} />
            </div>
            
             <Calendar
             onChange={onChange}
             value={value}
            />
        <NavLink to="/Talon" className="button-calendar1"><button>Продолжить</button></NavLink>
      </div>
    )
}
export default Data