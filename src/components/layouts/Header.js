import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import profileImg from "../../assets/images/profileImg.png";
import PostWrapper from "../post/PostWrapper";

function Header() {
  const { logout, user } = useContext(AuthContext);
  return (
    <>
      <header className="flex justify-between px-3 pt-3 ">
        <div className="flex ">
          <div className="">
            <i className="bi bi-list text-3xl text-primary " role="button"></i>
          </div>
          <div className="pl-10">
            <i className="bi bi-house text-3xl text-primary" role="button"></i>
          </div>
          <div className="pl-10" onClick={() => logout()}>
            <i
              className="bi bi-box-arrow-right text-3xl text-primary"
              role="button"
            ></i>
          </div>
        </div>
        <p className="text-blue-500 font-bold text-xl">HOMECLUB</p>
        <div className="flex">
          <img
            src={user.profileImg ?? profileImg}
            width="40"
            className="rounded-circle"
            alt="user"
            role="button"
          />{" "}
          <span className="font-bold pl-3 text-blue-500 mt-2">Profile</span>
        </div>
      </header>
      <PostWrapper />
    </>
  );
}

export default Header;
