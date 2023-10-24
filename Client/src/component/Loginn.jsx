import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import style from "./styels/log.module.css"
const Loginn = () => {
  const navigate = useNavigate();
  // const { getUserData } = useContext(userContext);
  const [isLoading, setisLoading] = useState(false);
  const [errorList, seterrorList] = useState([]);
  const [userDetails, setuserDetails] = useState({
    userName: "",
    password: "",
  });
  const [visible, setvisible] = useState(false)
  const getuser = (e) => {
    let myuser = { ...userDetails };
    myuser[e.target.name] = e.target.value;
    setuserDetails(myuser);
    console.log(userDetails);
  };
  function submitLogin(e) {
    e.preventDefault();
    setisLoading(true);
    axios
      .post("http://localhost:5000/api/v1/auth/login", userDetails)
      .then(function (response) {
        console.log(response.data);
        setisLoading(false);
        setvisible(true)
        seterrorList(response.data.message);
        navigate("/home")

      })
      .catch(function (error) {
        console.log(error.response.data.message);
        setisLoading(false);
        seterrorList(error.response.data.message);
        setvisible(true)
      });
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
        {visible ? <div className="position-fixed z-3 bg-info py-2 px-4 shadow rounded-3 d-flex align-items-center gap-4" style={{ bottom: '20px', right: "10px" }}>
          <h5>{errorList}</h5>
          <i onClick={() => setvisible(false)} className="fa-solid fa-xmark-circle" style={{ cursor: "pointer" }}></i>
        </div> : ''}
        <div className={style.content}>
          <form className={style.form_main} action="" onSubmit={submitLogin}>
            <p className={style.heading}>Login</p>
            <label htmlFor="">user Name</label>
            <div className={style.inputContainer}>
              <i id={style.inputIcon} className="fa-regular fa-user"></i>
              <input onChange={getuser} placeholder="Username" id="username" name="userName" className={style.inputField} type="text" />
            </div>
            <label htmlFor="">Password</label>

            <div className={style.inputContainer2}>
              <input onChange={getuser} placeholder="Password" id="password" name="password" required className={style.inputField} type={passwordVisible ? 'text' : 'password'} />
              <i id={style.inputIcon} className="fa-solid fa-lock"></i>
              {passwordVisible ? <i onClick={hidePassword} id={style.eye} className="fa-regular fa-eye-slash"></i> : <i onClick={hidePassword} id={style.eye} className="fa-regular fa-eye"></i>}
            </div>
            <div className="d-flex w-100 my-3">
              <button onClick={() => navigate('/register')} id={style.button}>Register</button>
              <button id={style.button1}>
                {isLoading ? <i className="fas fa-spinner fa-spin"></i> : "Login"}
              </button>
            </div>
            <div className={style.signupContainer}>
              <div className="d-flex align-items-center gap-2">
                <input type="checkbox" name="" id="" />
                <p htmlFor="">remember me</p>
              </div>
              <Link to='/emailVerify'>forget the password?</Link>
            </div>
          </form>
        </div>
      </div >
    </>
  );
};

export default Loginn;

