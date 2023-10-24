import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import style from "./styels/Email.module.css";
const EmailVerify = () => {
    const navigate = useNavigate();
    const [isLoading, setisLoading] = useState(false);
    const [errorList, seterrorList] = useState([]);
    const [userDetails, setuserDetails] = useState({
        email: "",
    });
    const [visible, setvisible] = useState(false);
    const getuser = (e) => {
        let myuser = { ...userDetails };
        myuser[e.target.name] = e.target.value;
        setuserDetails(myuser);
        console.log(userDetails);
    };
    function submitForget(e) {
        e.preventDefault();
        setisLoading(true);
        axios
            .post("http://localhost:3000/api/v1/auth/forgotpassword", userDetails)
            .then(function (response) {
                console.log(response.data);
                setisLoading(false);
                setvisible(true);
                seterrorList(response.data.message);
                // navigate('/login')
            })
            .catch(function (error) {
                console.log(error.response.data.message);
                setisLoading(false);
                seterrorList(error.response.data.message);
                setvisible(true);
            });
    }
    return (
        <>
            <div
                id={style.home}
                className="container-fluid bg-dark position-relative"
                style={{ height: "100vh" }}
            >
                <div
                    className="img position-absolute"
                    style={{ top: "15px", right: "25px" }}
                >
                    <img width="100px" src="faculty-image-removebg-preview.png" alt="" />
                </div>
                <div
                    id={style.Message_Success}
                    className="d-flex gap-4 align-items-center bg-white rounded-4 shadow"
                >
                    <div className={style.icon}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 448 512"
                        >
                            <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                        </svg>
                    </div>
                    <div className={style.text}>
                        <h2>Thank You</h2>
                        <p className="fs-4">check your Email please</p>
                    </div>
                    <div className={style.close}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 384 512"
                        >
                            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                        </svg>{" "}
                    </div>
                </div>
                {visible ? '' : ''}
                <div
                    id={style.Message_false}
                    className="d-flex gap-4 align-items-center bg-white rounded-4 shadow"
                >
                    <div className={style.icon}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 384 512"
                        >
                            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                        </svg>{" "}
                    </div>
                    <div className={style.text}>
                        <h2>ERROR</h2>
                        <p className="fs-4">Something Went Wrong Please Try Again</p>
                    </div>
                    <div className={style.close}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 384 512"
                        >
                            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                        </svg>{" "}
                    </div>
                </div>
                {/* {visible ? <div className="position-fixed z-3 bg-info py-2 px-4 shadow rounded-3 d-flex align-items-center gap-4" style={{ bottom: '20px', right: "10px" }}>
                    <h5>{errorList}</h5>
                    <i onClick={() => setvisible(false)} className="fa-solid fa-xmark-circle" style={{ cursor: "pointer" }}></i>
                </div> : ''} */}
                <div className={style.content}>
                    <form className={style.form_main} action="" onSubmit={submitForget}>
                        <p className={style.heading}>forget The password</p>
                        <label htmlFor="">email</label>
                        <div className={style.inputContainer}>
                            <i id={style.inputIcon} className="fa-regular fa-envelope"></i>
                            <input
                                onChange={getuser}
                                placeholder="email"
                                id="email"
                                name="email"
                                className={style.inputField}
                                type="email"
                            />
                        </div>
                        <div>
                            <button id={style.button1}>
                                {isLoading ? (
                                    <i className="fas fa-spinner fa-spin"></i>
                                ) : (
                                    "Continue"
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default EmailVerify;
