import axios from "axios";
import Joi from "joi";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./styels/Register.module.css"
const Register = () => {
  const navigate = useNavigate();
  const [isLoading, setisLoading] = useState(false);
  const [errorList, seterrorList] = useState([]);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const hidePassword = () => {
    setPasswordVisible(!passwordVisible);
  };
  const [user, setuser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    image:
      "https://e7.pngegg.com/pngimages/456/700/png-clipart-computer-icons-avatar-user-profile-avatar-heroes-logo-thumbnail.png",
  });
  const getuser = (e) => {
    const { name, value } = e.target;
    setuser((old) => ({
      ...old,
      [name]: value,
    }));
    console.log(user);
  };
  async function subnitregister(e) {
    e.preventDefault();
    setisLoading(true);
    let validateForm = validateRegister(user);
    if (validateForm.error) {
      setisLoading(false);
      seterrorList(validateForm.error.details);
      console.log(validateForm);
    } else {
      axios
        .post("https://tarmeezacademy.com/api/v1/register", user)
        .then(function (response) {
          console.log(response);
          setisLoading(false);
          navigate("/home");
        })
        .catch(function (error) {
          console.log(error.response.data.message);
          setisLoading(false);
        });

    }
  }
  function validateRegister() {
    let schema = Joi.object({
      name: Joi.string().alphanum().min(3).max(8).required(),
      username: Joi.string().alphanum().min(3).max(8).required(),
      email: Joi.string()
        .email({
          minDomainSegments: 2,
          tlds: { allow: ["com", "net"] },
        })
        .required(),
      password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,10}$"))
        .required(),
      image: Joi.string().required().label('image'),
    });
    return schema.validate(user, { abortEarly: false });
  }

  return (
    <>
      <div id={style.home} className="container-fluid bg-dark position-relative" style={{ height: "100vh" }}>
        <div className="w-100 h-100 d-flex justify-content-center align-items-center">
          <div className={`container p-5 text-center ${style.form_main}`}>
            <h4 className="text-white">Register</h4>
            <form action="">
              <div className="row row-cols-md-2 justify-content-between">
                <div className="col">
                  <label htmlFor="">user Name</label>
                  <div className={style.inputContainer}>
                    <i id={style.inputIcon} className="fa-regular fa-user"></i>
                    <input onChange={getuser} placeholder="Username" id="username" name="username" className={style.inputField} type="text" />
                  </div>
                  <label htmlFor="">Email</label>
                  <div className={style.inputContainer}>
                    <i id={style.inputIcon} className="fa-regular fa-envelope"></i>
                    <input onChange={getuser} placeholder="email" id="email" name="email" className={style.inputField} type="email" />
                  </div>
                  <label htmlFor="">Secret Word</label>
                  <div className={style.inputContainer}>
                    <i id={style.inputIcon} className="fa-solid fa-key"></i>
                    <input onChange={getuser} placeholder="Secret Word" id="Secret Word" name="Secret Word" className={style.inputField} />
                  </div>
                </div>
                <div className="col">
                  <label htmlFor="">Password</label>
                  <div className={style.inputContainer}>
                    <input onChange={getuser} placeholder="Password" id="password" name="password" className={style.inputField} type={passwordVisible ? 'text' : 'password'} />
                    <i id={style.inputIcon} className="fa-solid fa-lock"></i>
                    {passwordVisible ? <i onClick={hidePassword} id={style.eye} className="fa-regular fa-eye-slash"></i> : <i onClick={hidePassword} id={style.eye} className="fa-regular fa-eye"></i>}
                  </div>
                  <label htmlFor="">Phone</label>
                  <div className={style.inputContainer}>
                    <i id={style.inputIcon} className="fa-solid fa-phone"></i>
                    <input onChange={getuser} placeholder="phone" id="phone" name="phone" className={style.inputField} />
                  </div>
                  <label htmlFor="">Gender</label>
                  <div className={`d-flex justify-content-around align-items-center px-5 my-5`}>
                    <div className="d-flex align-items-center gap-3">
                      <input type="checkbox" />
                      <label htmlFor="">Male</label>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <input type="checkbox" />
                      <label htmlFor="">Female</label>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div className="d-flex justify-content-center align-items-center gap-3 my-3">
              <button id={style.button}>Login</button>
              <button id={style.button1}>
                {isLoading ? <i className="fas fa-spinner fa-spin"></i> : "Register"}
              </button>
            </div>
            <div className="d-flex justify-content-center align-items-center gap-3 my-3">
              <input type="checkbox" />
              <b className="text-white fs-5" htmlFor="">remember me</b>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;