import Joi from "joi";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../Context";
import axios from "axios";
import style from "./styels/log.module.css"
const Loginn = () => {
  const navigate = useNavigate();
  // const { getUserData } = useContext(userContext);
  const [isLoading, setisLoading] = useState(false);
  const [errorList, seterrorList] = useState([]);
  const [userDetails, setuserDetails] = useState({
    username: "",
    password: "",
  });
  const [alertfalse, setalertfalse] = useState(false);
  const getuser = (e) => {
    let myuser = { ...userDetails };
    myuser[e.target.name] = e.target.value;
    setuserDetails(myuser);
    console.log(userDetails);
  };
  function submitLogin(e) {
    e.preventDefault();
    setisLoading(true);
    let validateForm = validateLogin(userDetails);
    if (validateForm.error) {
      setisLoading(false);
      seterrorList(validateForm.error.details);
      console.log('errrr');
      console.log(errorList);
    } else {
      axios
        .post("https://tarmeezacademy.com/api/v1/login", userDetails)
        .then(function (response) {
          console.log(response);
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.user));
          navigate("/home");
          // getUserData();
        })
        .catch(function (error) {
          console.log(error.response.data.message);
          setisLoading(false);
          setalertfalse(true);
        });
    }
  }
  // console.log(userDetails);
  function validateLogin() {
    let schema = Joi.object({
      username: Joi.string().alphanum().min(3).max(8).required(),
      password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{5,10}$"))
        .required(),
    });
    return schema.validate(userDetails, { abortEarly: false });
  }
  const [passwordVisible, setPasswordVisible] = useState(false);

  const hidePassword = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <>
      <div id={style.home} className="container-fluid bg-dark position-relative" style={{ height: "100vh" }}>
        <div className="img position-absolute" style={{ top: "15px", right: "25px" }}>
          <img width="100px" src="faculty-image-removebg-preview.png" alt="" />
        </div>
        <div className={style.content}>
          <form className={style.form_main} action="" onSubmit={submitLogin}>
            {alertfalse && (
              <div className="alert alert-danger">Invalid email or password</div>
            )}
            {errorList.map((err, ind) => {
              if (ind === 1) {
                return (
                  <div key={ind} className="alert alert-danger">
                    password invalid
                  </div>
                );
              } else {
                return (
                  <div key={ind} className="alert alert-danger">
                    {err.message}
                  </div>
                );
              }
            })}
            <p className={style.heading}>Login</p>
            <label htmlFor="">user Name</label>
            <div className={style.inputContainer}>
              <i id={style.inputIcon} className="fa-regular fa-user"></i>
              <input onChange={getuser} placeholder="Username" id="username" name="username" className={style.inputField} type="text" />
            </div>
            <label htmlFor="">Password</label>

            <div className={style.inputContainer2}>
              <input onChange={getuser} placeholder="Password" id="password" name="password" className={style.inputField} type={passwordVisible ? 'text' : 'password'} />
              <i id={style.inputIcon} className="fa-solid fa-lock"></i>
              {passwordVisible ? <i onClick={hidePassword} id={style.eye} className="fa-regular fa-eye-slash"></i> : <i onClick={hidePassword} id={style.eye} className="fa-regular fa-eye"></i>}
            </div>
            <div className="d-flex w-100 my-3">
              <button id={style.button}>Register</button>
              <button id={style.button1}>
                {isLoading ? <i className="fas fa-spinner fa-spin"></i> : "Login"}
              </button>
            </div>
            <div className={style.signupContainer}>
              <div className="d-flex align-items-center gap-2">
                <input type="checkbox" name="" id="" />
                <p htmlFor="">remember me</p>
              </div>
              <Link href="#">forget the password?</Link>
            </div>
          </form>
        </div>
      </div >
    </>
  );
};

export default Loginn;

