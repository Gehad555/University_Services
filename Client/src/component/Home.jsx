import React from "react";
import { Link } from "react-router-dom";
import style from "./styels/Home.module.css";
const Home = () => {
  return (
    <div className={style.home} style={{ height: "100vh" }}>
      <nav className="navbar sticky-top bg-body-tertiary">
        <div className="container-fluid justify-content-around">
          <img
            src="faculty-image-removebg-preview.png"
            alt=""
            width={"100px"}
          />
          <div id={style.linkId} className="d-flex align-items-center justify-content-center gap-4">
            <Link>Home</Link>
            <Link>About Us</Link>
            <Link>About college</Link>
            <Link>College Activities</Link>
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
      </nav>
      <div className={style.te}>
        <h2>Welcome suez canal university </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit,
          facilis. Aliquam reiciendis, debitis consequatur vitae repellat
          voluptates voluptate ipsa perferendis voluptas ullam praesentium
          tenetur perspiciatis beatae itaque adipisci et facilis.
        </p>
        <div className="d-flex align-items-center justify-content-center gap-4 text-center">
          <Link className="w-25">Login</Link>
          <Link className="w-25">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
