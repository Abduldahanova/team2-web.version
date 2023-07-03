import React, { useState, useEffect } from "react";
import L from "./Loading.module.css";
import logo from "../../images/Frame 2.png";
import { Link } from "react-router-dom";

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Link to="/Home" className={L.noDecoration}>
        {isLoading && (
          <div className={L.liquidanimation}>
            <div className={L.box}>
              <div className={L.text}>
                <img src={logo} alt="" />
                <div className={L.logo}>
                  <h1>РСК БАНК</h1>
                  <p>Больше возможностей</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Link>
    </>
  );
};

export default Loading;






