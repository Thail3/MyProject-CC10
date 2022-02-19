import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import profileImg from "../../assets/images/profileImg.png";
import { Link } from "react-router-dom";

function Header() {
  const { logout, user } = useContext(AuthContext);
  return (
    <>
      <header className="px-3 pt-3 w-full sticky top-0 z-10 ">
        <div className="md:flex  justify-between sm:flex sm:justify-between  ">
          <div className="">
            {/* <i
              className="bi bi-list text-3xl text-blue-500 hover:text-blue-300 lg:hidden"
              role="button"
            ></i> */}

            <Link to="/">
              <i
                className="bi bi-house text-3xl text-blue-500 hover:text-blue-400 pl-3"
                role="button"
              ></i>
            </Link>
            <Link to="/friend">
              <i className="bi bi-person text-3xl text-blue-500 hover:text-blue-400 pl-3"></i>
            </Link>
            <i
              className="bi bi-box-arrow-right text-3xl text-blue-500 hover:text-blue-400 pl-3"
              role="button"
              onClick={() => logout()}
            ></i>
          </div>
          {/* <span className="text-blue-500 font-bold text-xl ">HOMECLUB</span> */}
          <div className="sm:flex">
            <Link to={`/profile/${user.id}`}>
              <img
                src={user.profileImg ?? profileImg}
                className="rounded-circle w-10 h-10"
                alt="user"
                role="button"
              />{" "}
            </Link>
            <span className="font-bold pl-3 text-blue-500 mt-2 ">Profile</span>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
