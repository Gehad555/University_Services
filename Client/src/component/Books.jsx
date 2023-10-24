import React, { useState } from 'react';
import style from './styels/Books.module.css';
import { Link, useNavigate } from 'react-router-dom';
const Books = () => {
    const navigate = useNavigate()
    const [isPopupVisible, setPopupVisible] = useState(false);

    const showPopup = () => {
        setPopupVisible(true);
    };

    const hidePopup = () => {
        setPopupVisible(false);
    };
    return (
        <div>
            <div style={{ height: "100vh" }}>
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
                                className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-5 text-center position-relative"
                            >
                                <li onClick={() => navigate('/home')} id={style.btn}>Home</li>
                                <li onClick={() => navigate('')} id={style.btn}>About Us</li>
                                <li onClick={() => navigate('')} id={style.btn}>About college</li>
                                <li onClick={() => navigate('')} id={style.btn}>College Activities</li>
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
                        </div>
                    </div>
                </nav>
                <div style={{ padding: '10px 4rem' }}>
                    <div className="filter d-flex justify-content-center gap-4 my-3">
                        <button className='btn btn-dark'>first year</button>
                        <button className='btn btn-dark'>first year</button>
                        <button className='btn btn-dark'>first year</button>
                        <button className='btn btn-dark'>first year</button>
                        <button className='btn btn-dark'>first year</button>
                    </div>
                    <div class="row gap-4 justify-content-center">
                        <div id={style.card} className="col-3 shadow card rounded-4" style={{ width: '380px' }}>
                            <img src="pngegg.png" class="card-img-top" alt="..." />
                            <div class="card-body d-flex flex-column px-0">
                                <h5 class="card-title" style={{ fontSize: '1.8rem', fontWeight: "500" }}>Book Name</h5>
                                <p class="card-text"><small style={{ color: "#57C6F2", fontSize: '20px' }}>200 LE</small></p>
                                <div id={style.button} className="btn btn-outline-info rounded-3 align-self-end">Add To Cart </div>
                            </div>
                        </div>
                        <div id={style.card} className="col-3 shadow card rounded-4" style={{ width: '380px' }}>
                            <img src="pngegg.png" class="card-img-top" alt="..." />
                            <div class="card-body d-flex flex-column px-0">
                                <h5 class="card-title" style={{ fontSize: '1.8rem', fontWeight: "500" }}>Book Name</h5>
                                <p class="card-text"><small style={{ color: "#57C6F2", fontSize: '20px' }}>200 LE</small></p>
                                <div id={style.button} className="btn btn-outline-info rounded-3 align-self-end">Add To Cart </div>
                            </div>
                        </div>
                        <div id={style.card} className="col-3 shadow card rounded-4" style={{ width: '380px' }}>
                            <img src="pngegg.png" class="card-img-top" alt="..." />
                            <div class="card-body d-flex flex-column px-0">
                                <h5 class="card-title" style={{ fontSize: '1.8rem', fontWeight: "500" }}>Book Name</h5>
                                <p class="card-text"><small style={{ color: "#57C6F2", fontSize: '20px' }}>200 LE</small></p>
                                <div id={style.button} className="btn btn-outline-info rounded-3 align-self-end">Add To Cart </div>
                            </div>
                        </div>
                        <div id={style.card} className="col-3 shadow card rounded-4" style={{ width: '380px' }}>
                            <img src="pngegg.png" class="card-img-top" alt="..." />
                            <div class="card-body d-flex flex-column px-0">
                                <h5 class="card-title" style={{ fontSize: '1.8rem', fontWeight: "500" }}>Book Name</h5>
                                <p class="card-text"><small style={{ color: "#57C6F2", fontSize: '20px' }}>200 LE</small></p>
                                <div id={style.button} className="btn btn-outline-info rounded-3 align-self-end">Add To Cart </div>
                            </div>
                        </div>
                        <div id={style.card} className="col-3 shadow card rounded-4" style={{ width: '380px' }}>
                            <img src="pngegg.png" class="card-img-top" alt="..." />
                            <div class="card-body d-flex flex-column px-0">
                                <h5 class="card-title" style={{ fontSize: '1.8rem', fontWeight: "500" }}>Book Name</h5>
                                <p class="card-text"><small style={{ color: "#57C6F2", fontSize: '20px' }}>200 LE</small></p>
                                <div id={style.button} className="btn btn-outline-info rounded-3 align-self-end">Add To Cart </div>
                            </div>
                        </div>
                        <div id={style.card} className="col-3 shadow card rounded-4" style={{ width: '380px' }}>
                            <img src="pngegg.png" class="card-img-top" alt="..." />
                            <div class="card-body d-flex flex-column px-0">
                                <h5 class="card-title" style={{ fontSize: '1.8rem', fontWeight: "500" }}>Book Name</h5>
                                <p class="card-text"><small style={{ color: "#57C6F2", fontSize: '20px' }}>200 LE</small></p>
                                <div id={style.button} className="btn btn-outline-info rounded-3 align-self-end">Add To Cart </div>
                            </div>
                        </div>
                        <div id={style.card} className="col-3 shadow card rounded-4" style={{ width: '380px' }}>
                            <img src="pngegg.png" class="card-img-top" alt="..." />
                            <div class="card-body d-flex flex-column px-0">
                                <h5 class="card-title" style={{ fontSize: '1.8rem', fontWeight: "500" }}>Book Name</h5>
                                <p class="card-text"><small style={{ color: "#57C6F2", fontSize: '20px' }}>200 LE</small></p>
                                <div id={style.button} className="btn btn-outline-info rounded-3 align-self-end">Add To Cart </div>
                            </div>
                        </div>
                        <div id={style.card} className="col-3 shadow card rounded-4" style={{ width: '380px' }}>
                            <img src="pngegg.png" class="card-img-top" alt="..." />
                            <div class="card-body d-flex flex-column px-0">
                                <h5 class="card-title" style={{ fontSize: '1.8rem', fontWeight: "500" }}>Book Name</h5>
                                <p class="card-text"><small style={{ color: "#57C6F2", fontSize: '20px' }}>200 LE</small></p>
                                <div id={style.button} className="btn btn-outline-info rounded-3 align-self-end">Add To Cart </div>
                            </div>
                        </div>
                        <div id={style.card} className="col-3 shadow card rounded-4" style={{ width: '380px' }}>
                            <img src="pngegg.png" class="card-img-top" alt="..." />
                            <div class="card-body d-flex flex-column px-0">
                                <h5 class="card-title" style={{ fontSize: '1.8rem', fontWeight: "500" }}>Book Name</h5>
                                <p class="card-text"><small style={{ color: "#57C6F2", fontSize: '20px' }}>200 LE</small></p>
                                <div id={style.button} className="btn btn-outline-info rounded-3 align-self-end">Add To Cart </div>
                            </div>
                        </div>
                        <div id={style.card} className="col-3 shadow card rounded-4" style={{ width: '380px' }}>
                            <img src="pngegg.png" class="card-img-top" alt="..." />
                            <div class="card-body d-flex flex-column px-0">
                                <h5 class="card-title" style={{ fontSize: '1.8rem', fontWeight: "500" }}>Book Name</h5>
                                <p class="card-text"><small style={{ color: "#57C6F2", fontSize: '20px' }}>200 LE</small></p>
                                <div id={style.button} className="btn btn-outline-info rounded-3 align-self-end">Add To Cart </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Books;