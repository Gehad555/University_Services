import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import style from "./styels/Reset.module.css"
const ResetPassowrd = () => {
    const navigate = useNavigate();
    // const { getUserData } = useContext(userContext);
    const [isLoading, setisLoading] = useState(false);
    const [errorList, seterrorList] = useState([]);
    const [userDetails, setuserDetails] = useState({
        newPassword: ""
    });
    const [visible, setvisible] = useState(false)
    const getuser = (e) => {
        let myuser = { ...userDetails };
        myuser[e.target.name] = e.target.value;
        setuserDetails(myuser);
        console.log(userDetails);
    };
    function submitReset(e) {
        e.preventDefault();
        setisLoading(true);
        axios
            .post("http://localhost:5000/api/v1/auth/forgot-password", userDetails)
            .then(function (response) {
                console.log(response.data);
                setisLoading(false);
                setvisible(true)
                seterrorList(response.data.message);
                navigate('/login')
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
                    <form className={style.form_main} action="" onSubmit={submitReset}>
                        <p className={style.heading}>Reset The password</p>
                        <label htmlFor="">New Password</label>
                        <div className={style.inputContainer}>
                            <input onChange={getuser} placeholder="Password" id="newPassword" name="newPassword" required className={style.inputField} type={passwordVisible ? 'text' : 'password'} />
                            <i id={style.inputIcon} className="fa-solid fa-lock"></i>
                            {passwordVisible ? <i onClick={hidePassword} id={style.eye} className="fa-regular fa-eye-slash"></i> : <i onClick={hidePassword} id={style.eye} className="fa-regular fa-eye"></i>}
                        </div>
                        <label htmlFor="">Confirm Password</label>
                        <div className={style.inputContainer}>
                            <input onChange={getuser} placeholder="Confirm" id="newPassword" name="newPassword" required className={style.inputField} type={passwordVisible ? 'text' : 'password'} />
                            <i id={style.inputIcon} className="fa-solid fa-lock"></i>
                            {passwordVisible ? <i onClick={hidePassword} id={style.eye} className="fa-regular fa-eye-slash"></i> : <i onClick={hidePassword} id={style.eye} className="fa-regular fa-eye"></i>}
                        </div>
                        <div className="my-3">
                            <button id={style.button}>
                                {isLoading ? <i className="fas fa-spinner fa-spin"></i> : "Reset"}
                            </button>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                            <input type="checkbox" name="" id="" />
                            <b className="text-white fw-light" htmlFor="">remember me</b>
                        </div>
                    </form>
                </div>
            </div >
        </>
    );
};

export default ResetPassowrd;

