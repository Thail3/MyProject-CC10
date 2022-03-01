import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginForm() {
  const [emailOrPhoneNumber, setEmailOrPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    login(emailOrPhoneNumber, password);
  };

  const notify = () => {
    if (!emailOrPhoneNumber) {
      toast.warn("กรุณาป้อน Email or Phonenumber", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (!password) {
      toast.warn("กรุณาป้อน Password", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error("ไม่สามารถเข้าสู่ระบบได้", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <form onSubmit={handleSubmitLogin}>
      <div className="bg-blue-600 rounded-xl ">
        <div className="flex justify-around py-4">
          <div className="text-white no-underline">Login</div>
          <button
            className="text-white no-underline"
            onClick={() => navigate("/register")}
            type="button"
          >
            Sing up
          </button>
        </div>

        <div className="bg-white px-5 pt-5 rounded-xl">
          <div>
            <h1 className="font-semibold text-2xl">Welcome back</h1>
            <p className="font-light text-xs">Login with your account</p>
          </div>

          <div className="">
            <p className="mt-5">Username</p>
            <div className="col-auto">
              <label htmlFor="inputPassword2" className="visually-hidden">
                Username
              </label>
              <input
                className="form-control"
                id="inputPassword2"
                placeholder=""
                value={emailOrPhoneNumber}
                onChange={(e) => setEmailOrPhoneNumber(e.target.value)}
              />
            </div>
          </div>
          <div className="pb-3">
            <p className="mt-2">Password</p>
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
          </div>

          <div className="max-w-sm m-auto p-1.5 mt-3 bg-blue-600 text-center rounded-full">
            <button className="text-white" onClick={notify}>
              Login
            </button>
            <ToastContainer
              position="top-right"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
