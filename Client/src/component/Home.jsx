import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./styels/Home.module.css";
const Home = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const showPopup = () => {
    setPopupVisible(true);
  };

  const hidePopup = () => {
    setPopupVisible(false);
  };
  return (
    <>
      <div className={style.home} style={{ height: "100vh" }}>
        <nav className="navbar navbar-expand-lg p-3">
          <div className="container-fluid" style={{ padding: "0 40px" }}>
            <img
              src="faculty-image-removebg-preview.png"
              alt=""
              width={"100px"}
              style={{ padding: "0 15px" }}
            />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-around" id="navbarSupportedContent">
              <div
                id={style.linkId}
                className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-5 text-center position-relative ms-5"
              >
                <li id={style.btn}>Home</li>
                <li id={style.btn}>About Us</li>
                <li id={style.btn}>About college</li>
                <li id={style.btn}>College Activities</li>
                <li
                  id={style.btn}
                  onMouseEnter={showPopup}
                  onMouseLeave={hidePopup}
                >
                  Student
                </li>
                {isPopupVisible && (
                  <ul onMouseEnter={showPopup} onMouseLeave={hidePopup} className={style.popup}>
                    <li className="li"><Link to='/books'>Books</Link></li>
                    <li className="li"><Link>Subjects</Link></li>
                    <li className="li"><Link>Profile</Link></li>
                  </ul>
                )}
              </div>
              <div className={style.inputBox_container}>
                <svg
                  className={style.search_icon}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  alt="search icon"
                >
                  <path d="M46.599 46.599a4.498 4.498 0 0 1-6.363 0l-7.941-7.941C29.028 40.749 25.167 42 21 42 9.402 42 0 32.598 0 21S9.402 0 21 0s21 9.402 21 21c0 4.167-1.251 8.028-3.342 11.295l7.941 7.941a4.498 4.498 0 0 1 0 6.363zM21 6C12.717 6 6 12.714 6 21s6.717 15 15 15c8.286 0 15-6.714 15-15S29.286 6 21 6z"></path>
                </svg>
                <input
                  className={style.inputBox}
                  id="inputBox"
                  type="text"
                  placeholder="Search..."
                />
              </div>
            </div>
          </div>
        </nav>
        <div className={style.data}>
          <h2>Welcome suez canal university </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit,
            facilis. Aliquam reiciendis, debitis consequatur vitae repellat
            voluptates voluptate ipsa perferendis voluptas ullam praesentium
            tenetur perspiciatis beatae itaque adipisci et facilis. lore
          </p>
          <div className="d-flex align-items-center justify-content-center gap-5 text-center">
            <Link id={style.btn} className="px-5">Login</Link>
            <Link id={style.btn} className="px-5">Register</Link>
          </div>
        </div>
      </div >
      <div className={style.content}>
        <div className="d-flex flex-column align-items-center" style={{ gap: "40px" }}>
          <h3 className="pt-5">College departments</h3>
          <div className="w-50 p-3 rounded-4" style={{ border: "2px solid #57C6F2" }}>
            <h4 className="text-center py-3">Information System</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              assumenda iste impedit, ut harum eius doloribus ullam perferendis,
              adipisci necessitatibus voluptas, voluptates maiores quasi quam
              modi rerum non? Voluptatum, provident.
            </p>
          </div>
          <div className="w-50 p-3 rounded-4" style={{ border: "2px solid #57C6F2" }}>
            <h4 className="text-center py-3">Computer Science </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              assumenda iste impedit, ut harum eius doloribus ullam perferendis,
              adipisci necessitatibus voluptas, voluptates maiores quasi quam
              modi rerum non? Voluptatum, provident.
            </p>
          </div>
          <div className="w-50 p-3 rounded-4" style={{ border: "2px solid #57C6F2" }}>
            <h4 className="text-center py-3">Artificial intelligence</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              assumenda iste impedit, ut harum eius doloribus ullam perferendis,
              adipisci necessitatibus voluptas, voluptates maiores quasi quam
              modi rerum non? Voluptatum, provident.
            </p>
          </div>
          <div className="w-50 p-3 rounded-4" style={{ border: "2px solid #57C6F2" }}>
            <h4 className="text-center py-3">software</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              assumenda iste impedit, ut harum eius doloribus ullam perferendis,
              adipisci necessitatibus voluptas, voluptates maiores quasi quam
              modi rerum non? Voluptatum, provident.
            </p>
          </div>
        </div>
        <div className="row mx-0 mt-5 align-items-center justify-content-between py-4" style={{ borderTop: '3px solid #57C6F2' }}>
          <div className="col-3 d-flex justify-content-center">
            <img src="faculty-image-removebg-preview.png" alt="" width='100px' />
          </div>
          <div className="col-4">
            <p className="mb-0 fs-3" style={{ color: "#053B50" }}>About Us</p>
            <div className="d-flex align-items-center gap-4 my-3">
              <i className="fa-brands fa-linkedin fs-3"></i>
              <Link to='/https://www.linkedin.com/in/ehabyousef/' id={style.profile} className="mb-1 text-black fs-5 position-relative">(6) Ehab Yousef | LinkedIn</Link>
            </div>
            <div className="d-flex align-items-center gap-4 my-3">
              <i className="fa-brands fa-linkedin fs-3"></i>
              <Link to='/https://www.linkedin.com/in/sherry-ahmos-413a02222/' id={style.profile} className="mb-1 text-black fs-5 position-relative">(6) Sherry Ahmos | LinkedIn</Link>
            </div>
            <div className="d-flex align-items-center gap-4 my-3">
              <i className="fa-brands fa-linkedin fs-3"></i>
              <Link to='/https://www.linkedin.com/in/gehad-shalaby-7aa3b5250/' id={style.profile} className="mb-1 text-black fs-5 position-relative">(6) Gehad Shalaby | LinkedIn</Link>
            </div>
            <div className="d-flex align-items-center gap-4 my-3">
              <i className="fa-brands fa-linkedin fs-3"></i>
              <Link to='/https://www.linkedin.com/in/yasmeen-fakhri-el-azazi-0ab4a0244/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' id={style.profile} className="mb-1 text-black fs-5 position-relative">(8) Yasmeen Fakhri El_Azazi | LinkedIn</Link>
            </div>
          </div>
          <div className="col-5">
            <p className="mb-0 fs-3" style={{ color: "#053B50" }}>About College</p>
            <div className="d-flex gap-3 align-items-center my-3">
              <i className="fa-solid fa-phone fs-4"></i>
              <p className="mb-1 fs-5">(+2064) 3223007-(+2064) 32001258</p>
            </div>
            <div className="d-flex gap-3 align-items-center my-3">
              <i className="fa-regular fa-envelope fs-4"></i>
              <p className="mb-1 fs-5">President-office@suez.edu.eg</p>
            </div>
            <div className="d-flex gap-3 align-items-center my-3">
              <i className="fa-solid fa-location-dot fs-4"></i>
              <p className="mb-1 fs-5">4.5 Km the Ring Road, Ismailia, Egypt</p>
            </div>
            <div className="d-flex gap-4 my-3">
              <i className="fa-brands fa-facebook-f fs-4 "></i>
              <i className="fa-brands fa-instagram fs-4 "></i>
              <i className="fa-brands fa-x-twitter fs-4 "></i>
              <i className="fa-brands fa-youtube fs-4 "></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
