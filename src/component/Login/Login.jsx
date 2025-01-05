import React from "react";
import s from "./Login.module.css";
import { NavLink } from "react-router-dom";
const Login = (props) => {
  const setLogin = () => {
    props.setAuth(true);
    localStorage.setItem("isAuth", "true");
  };
  return (
    <div className={s.login_wrapper}>
      <div className={s.log_block}>
        <div className={s.header_login}>{props.login_active ? <div>Login</div> : <div>Registration</div>}</div>
        {props.login_active ? (
          <div className={s.input_block}>
            <input className={s.input_login} placeholder="Login" />
            <input className={s.input_login} placeholder="Password" />
          </div>
        ) : (
          <div className={s.input_block}>
            <input className={s.input_login} placeholder="Login" />
            <input className={s.input_login} placeholder="Password" />
            <input className={s.input_login} placeholder="Repeat password" />
          </div>
        )}

        <div className={s.reg_block}>
          {props.login_active ? (
            <div>
              You don't have an account in our system?{" "}
              <a className={s.reg_btn} onClick={() => props.setLoginActive()}>Register for free</a>
            </div>
          ) : (
            <div>
              have an account?{" "}
              <a  onClick={() => props.setLoginActive()} className={s.reg_btn}>Log in for free</a>
            </div>
          )}
        </div>
        <div className={s.btn_block}>
          <button className={s.log_btn} onClick={() => setLogin()}>
            login
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;
