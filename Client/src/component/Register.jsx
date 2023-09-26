import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./styels/Register.module.css"
const Register = () => {
  const navigate = useNavigate();
  const [isLoading, setisLoading] = useState(false);
  const [errorList, seterrorList] = useState([]);
  const [passwordVisible, setpasswordVisible] = useState(false);
  const [visible, setvisible] = useState(false)
  const hidepassword = () => {
    setpasswordVisible(!passwordVisible);
  };
  const [user, setuser] = useState({
    answer: "",
    isAdmin: false,
    password: "",
    email: "",
    userName: "",
  });
  const getuser = (e) => {
    const { name, value } = e.target;
    setuser((old) => ({
      ...old,
      [name]: name === 'isAdmin' ? value === 'true' : value,
    }));
    console.log(user);
  };
  async function submitregister(e) {
    e.preventDefault();
    setisLoading(true);
    await axios
      .post("http://localhost:5000/api/v1/auth/register", user)
      .then(function (response) {
        console.log(response);
        setisLoading(false);
        // navigate("/home");
        setvisible(true)
        console.log('done');
      }).catch(function (error) {
        console.log(error.response.data.message);
        seterrorList(error.response.data.message);
        setisLoading(false);
        setvisible(true)
        console.log('errrr');
      })
  }
  return (
    <>
      <div id={style.home} className="container-fluid bg-dark position-relative" style={{ height: "100vh" }}>
        <div className="w-100 h-100 d-flex justify-content-center align-items-center">
          <div className="img position-absolute" style={{ top: "15px", right: "25px" }}>
            <img width="100px" src="faculty-image-removebg-preview.png" alt="" />
          </div>
          {visible ? <div className="position-fixed z-3 bg-info py-2 px-4 shadow rounded-3 d-flex align-items-center gap-4" style={{ bottom: '20px', right: "10px" }}>
            <h5>{errorList}</h5>
            <i onClick={() => setvisible(false)} className="fa-solid fa-xmark-circle" style={{ cursor: "pointer" }}></i>
          </div> : ''}
          <div className={`container p-5 text-center ${style.form_main}`}>
            <h4 className="text-white">Register</h4>
            <form action="" >
              <div className="row row-cols-md-2 justify-content-between">
                <div className="col">
                  <label htmlFor="">user Name</label>
                  <div className={style.inputContainer}>
                    <i id={style.inputIcon} className="fa-regular fa-user"></i>
                    <input onChange={getuser} placeholder="userName" id="userName" name="userName" className={style.inputField} type="text" />
                  </div>
                  <label htmlFor="">email</label>
                  <div className={style.inputContainer}>
                    <i id={style.inputIcon} className="fa-regular fa-envelope"></i>
                    <input onChange={getuser} placeholder="email" id="email" name="email" className={style.inputField} type="email" />
                  </div>
                  <label htmlFor="">Secret Word</label>
                  <div className={style.inputContainer}>
                    <i id={style.inputIcon} className="fa-solid fa-key"></i>
                    <input onChange={getuser} placeholder="answer" id="answer" name="answer" className={style.inputField} />
                  </div>
                </div>
                <div className="col">
                  {/* <label htmlFor="">Name</label>
                  <div className={style.inputContainer}>
                    <i id={style.inputIcon} className="fa-solid fa-circle-user"></i>
                    <input onChange={getuser} placeholder="name" id="name" name="name" className={style.inputField} />
                  </div> */}
                  <label htmlFor="">password</label>
                  <div className={style.inputContainer}>
                    <input onChange={getuser} placeholder="password" id="password" name="password" className={style.inputField} type={passwordVisible ? 'text' : 'password'} />
                    <i id={style.inputIcon} className="fa-solid fa-lock"></i>
                    {passwordVisible ? <i onClick={hidepassword} id={style.eye} className="fa-regular fa-eye-slash"></i> : <i onClick={hidepassword} id={style.eye} className="fa-regular fa-eye"></i>}
                  </div>
                  <label htmlFor="">Access</label>
                  <div className={`d-flex justify-content-around align-items-center px-5 my-5`}>
                    <div className="d-flex align-items-center gap-3">
                      <input onChange={getuser} value="true" id="admin" name="isAdmin" type="radio" />
                      <label htmlFor="admin">student</label>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                      <input onChange={getuser} value="false" id="student" name="isAdmin" type="radio" />
                      <label htmlFor="student">Admin</label>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div className="d-flex justify-content-center align-items-center gap-3 my-3">
              <button onClick={() => navigate('/login')} id={style.button}>Login</button>
              <button onClick={submitregister} id={style.button1}>
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