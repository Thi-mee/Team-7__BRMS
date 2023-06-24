import React, { useState } from "react";

import style from "../styles/Auth.module.css";
// import tcnlogo from "/assets/IKORODU_1_-removebg-preview-cropped.png";
// import orange_bus from "/assets/orange_bus-removebg-preview.png"
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [inputType, setInputType] = useState("password");
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div className={style.container}>
        <div className={style.first_half}>
          <img src="/assets/TCN_logo.png" alt="Church Logo" />
          <img src="/assets/orange_bus" alt="Church Bus" className={style.church_bus}/>
        </div>
        <div className={style.second_half}>
          <h1 className={style.text}>Login</h1>
          <h2 className={style.para}>Enter your details</h2>
          <div className={style.flex_input}>
            <input
              type="text"
              placeholder="Enter your name"
              className={style.email_input}
            />
            <div>
              <input
                type={inputType}
                placeholder="Enter your password"
                className={style.password_input}
              />
              {showPassword ? (
                <FaEyeSlash className={style.eye_icon}
                onClick={()=>{setShowPassword(!showPassword); setInputType("password")}}
                />
              ) : (
                <FaEye
                  className={style.eye_icon}
                  onClick={() => {
                    setShowPassword(!showPassword);
                    setInputType("text");
                  }}
                />
              )}
            </div>
            <button className={style.forgot_password_btn}>
              Forgot Password?
            </button>
            <button className={style.login_btn}>LOG IN</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
