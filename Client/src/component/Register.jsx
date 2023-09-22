import axios from "axios";
import Joi from "joi";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div>
      <div className="container my-5 px-3">
        <div className="">
          <h2 className="my-5">Register Now</h2>
          {errorList.map((err, ind) => {
            if (ind === 4) {
              return (
                <div key={ind} className="alert alert-danger">
                  fadaale password invalid
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
          <form className="py-0" onSubmit={subnitregister}>
            <label className="fs-4" htmlFor="first_name">
              name :
            </label>
            <input
              // required={true}
              onChange={getuser}
              className="form-control p-3 mb-3 "
              type="text"
              name="name"
              id="first_name"
              value={user.name}
            />
            <label className="fs-4" htmlFor="Last_name">
              user name :
            </label>
            <input
              // required={true}
              onChange={getuser}
              className="form-control p-3 mb-3 "
              type="text"
              name="username"
              id="age"
              value={user.username}
            />
            <label className="fs-4" htmlFor="email">
              email :
            </label>
            <input
              // required={true}
              onChange={getuser}
              className="form-control p-3 mb-2 "
              type="email"
              name="email"
              id="email"
              value={user.email}
            />
            <label className="fs-4" htmlFor="password">
              password :
            </label>
            <input
              // required={true}
              onChange={getuser}
              className="form-control p-3 mb-2 "
              type="password"
              name="password"
              id="passwordd"
              value={user.password}
            />

            <label className="fs-4" htmlFor="password">
              profile_image :
            </label>
            <input
              // required={true}
              onChange={getuser}
              className="form-control p-3 mb-2 "
              type="text"
              name="image"
              id="image"
              value={user.image}
            />

            <button
              className="btn btn-outline-dark mt-3"
              type="submit"
            >
              {isLoading ? (
                <i className="fas fa-spinner fa-spin"></i>
              ) : (
                "register"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;