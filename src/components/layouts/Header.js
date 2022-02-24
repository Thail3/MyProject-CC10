import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import profileImg from "../../assets/images/profileImg.png";
import { Link } from "react-router-dom";
import SearchFilter from "./SearchFilter";
import axios from "../../config/axios";

function Header() {
  const { logout, user } = useContext(AuthContext);
  const [allMember, setAllMember] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  console.log(user);

  const fetchMember = async () => {
    try {
      const res = await axios.get("/users/alluser");
      setAllMember(res.data.allUser);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchMember();
  }, []);

  console.log(allMember);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = allMember.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(allMember);
    }
  };

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
              <i
                className="bi bi-person text-3xl text-blue-500 hover:text-blue-400 pl-3"
                role="button"
              ></i>
            </Link>
            <i
              className="bi bi-search text-2xl text-blue-500 hover:text-blue-400 pl-3"
              data-bs-toggle="collapse"
              href="#multiCollapseExample1"
              role="button"
              aria-expanded="false"
              aria-controls="multiCollapseExample1"
            ></i>
            <i
              className="bi bi-box-arrow-right text-3xl text-blue-500 hover:text-blue-400 pl-3"
              role="button"
              onClick={() => logout()}
            ></i>
          </div>

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

        <SearchFilter
          allMember={allMember}
          searchItems={searchItems}
          filteredResults={filteredResults}
          searchInput={searchInput}
          setFilteredResults={setFilteredResults}
        />
      </header>
    </>
  );
}

export default Header;
