import { useNavigate } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import axios from "../config/axios";
import {
  clearToken,
  setToken,
  getToken,
  getRole,
} from "../services/localStorage";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [editAbout, setEditAbout] = useState("");
  const [captionSub, setCaptionSub] = useState("");
  const [role, setRole] = useState(getRole());

  useEffect(() => {
    if (getToken()) {
      axios
        .get("/users/me")
        .then((res) => setUser(res.data.user))
        .catch((err) => console.log(err));
    }
  }, []);

  const navigate = useNavigate();

  //?ทำการ login ด้วย emailOrPhoneNumber และ password โดยลิงค์ไปที่ backend axios.post("/users/login", แล้วก็นำมันไป  navigate('/home')
  const login = async (emailOrPhoneNumber, password) => {
    try {
      const res = await axios.post("/users/login", {
        emailOrPhoneNumber,
        password,
      });

      setToken(res.data.token);
      setUser(res.data.user);
      setRole("user");
      navigate("/");
    } catch (e) {}
  };
  //?ทำการ logout โดยการ clearToken ออกโดย clearToken มาจาก localStorage แล้วไปตั้งค่า user ให้เป็น null
  const logout = () => {
    clearToken();
    setUser(null);
    setRole("guest");
  };

  const updateUser = (value) => {
    setUser((prev) => ({ ...prev, ...value }));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        updateUser,
        editAbout,
        setEditAbout,
        captionSub,
        setCaptionSub,
        role,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;

export { AuthContext };
