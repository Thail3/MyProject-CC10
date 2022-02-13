import React from "react";
import { ALL_FRIEND, REQUEST_FRIEND ,FIND_FRIEND} from "../../config/data";

function FriendNavbar({ changeMode }) {
  return (
    <div className="h-full w-160 fixed z-1 top-0 left-0 overflow-x-hidden  ">
      <ul className="pt-80 ">
        <button className="p-2">
          <li
            className="hover:bg-violet-300"
            onClick={() => changeMode(FIND_FRIEND)}
          >
            All Friend
          </li>
          <li
            className="hover:bg-violet-200"
            onClick={() => changeMode(REQUEST_FRIEND)}
          >
            Request Friend
          </li>
          <li
            className="hover:bg-violet-200"
            onClick={() => changeMode(ALL_FRIEND)}
          >
            My Friend
          </li>
        </button>
      </ul>
    </div>
  );
}

export default FriendNavbar;
