import React from "react";

const Navbar = () => {
  return (
    <div>
      <div
        id="navBar"
        class="d-flex sticky-top justify-content-center mb-4 p-0"
      >
        <div class="col-9">
          <nav class="navbar navbar-expand-lg bg-white shadow rounded">
            <div class="container-fluid">
              <a class="navbar-brand" href="home.html">
                ellemby
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div
                class="collapse navbar-collapse justify-content-between flex-row-reverse"
                id="navbarNav"
              >
                <a id="loginBtn" href="login.html">
                  <button class="Btn">
                    <div class="sign">
                      <svg viewBox="0 0 512 512">
                        <path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"></path>
                      </svg>
                    </div>

                    <div class="text">Login</div>
                  </button>
                </a>

                <div
                  id="logoutBtn"
                  class="d-flex justify-content-center align-items-center gap-3 BTN-Hide"
                >
                  <div
                    class="d-flex align-items-center justify-content-center gap-3 text-dark"
                    onclick="navigateMyProfile()"
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      id="profile-image"
                      class="rounded-circle"
                      alt=""
                      width="50px"
                      height="50px"
                    />
                    <p id="profile-name" class="mb-0 fw-bold"></p>
                  </div>
                  <div>
                    <button onclick="logOutStorage()" class="Btn bg-danger">
                      <div class="sign">
                        <svg viewBox="0 0 512 512">
                          <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                        </svg>
                      </div>

                      <div class="text">Logout</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
