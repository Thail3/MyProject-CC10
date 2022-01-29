import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../config/axios";
import { ErrorContext } from "../../contexts/ErrorContext";

function RegisterForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailOrPhoneNumber, setEmailOrPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { setError } = useContext(ErrorContext);

  const navigate = useNavigate();

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/users/register", {
        firstName,
        lastName,
        emailOrPhoneNumber,
        password,
        confirmPassword,
      });
      navigate("/");
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmitRegister}>
        <div className="bg-blue-600 rounded-xl">
          <div className="text-center py-4 ">
            <button
              className="text-white no-underline"
              onClick={() => navigate("/")}
            >
              Login
            </button>
          </div>

          <div className="bg-white px-5 pt-5 rounded-xl">
            <div>
              <p className="font-light text-xs">Sign-in with your account</p>
            </div>

            <form>
              <p className="mt-5">FirstName</p>
              {/* <label for="username">Username</label> */}
              <div className="col-auto">
                <label htmlFor="inputPassword2" className="visually-hidden">
                  FirstName
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword2"
                  placeholder=""
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
            </form>
            <form>
              <p className="mt-2">LastName</p>
              {/* <label for="username">Username</label> */}
              <div className="col-auto">
                <label htmlFor="inputPassword2" className="visually-hidden">
                  LastName
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword2"
                  placeholder=""
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </form>
            <form>
              <p className="mt-2">Email</p>
              {/* <label for="username">Username</label> */}
              <div className="col-auto">
                <label htmlFor="inputPassword2" className="visually-hidden">
                  Email
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword2"
                  placeholder=""
                  value={emailOrPhoneNumber}
                  onChange={(e) => setEmailOrPhoneNumber(e.target.value)}
                />
              </div>
            </form>

            <form className="">
              <p className="mt-2">Password</p>
              {/* <label for="password">Password</label> */}
              <div className="col-auto">
                <label htmlFor="inputPassword2" className="visually-hidden">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword2"
                  placeholder=""
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </form>
            <form className="pb-3">
              <p className="mt-2">Confirm Password</p>
              {/* <label for="password">Password</label> */}
              <div className="col-auto">
                <label htmlFor="inputPassword2" className="visually-hidden">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword2"
                  placeholder=""
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </form>

            <div className="max-w-sm m-auto p-1.5 bg-blue-600 text-center rounded-full">
              <button className="text-white">Login</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default RegisterForm;
