import axios from "axios";
import Joi from "joi";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [isLoading, setisLoading] = useState(false);

  const [errorList, seterrorList] = useState([]);
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
        <div className="img position-absolute" style={{ top: "15px", right: "25px" }}>
          <img width="100px" src="faculty-image-removebg-preview.png" alt="" />
        </div>
        <div className={style.content}>
          <form className={style.form_main} action="">
           
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
      </div>
    </>
  );
};
export default Register;