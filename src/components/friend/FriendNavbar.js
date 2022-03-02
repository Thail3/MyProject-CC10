import { ALL_FRIEND, REQUEST_FRIEND, FIND_FRIEND } from "../../config/data";

function FriendNavbar({ changeMode, mode }) {
  return (
    <div className="h-full w-160 fixed z-1 top-0 left-0 overflow-x-hidden flex flex-col justify-center">
      <div className="">
        <ul className="">
          <button className="p-2">
            <li
              className="hover:bg-violet-300 "
              style={{
                backgroundColor: `${mode === FIND_FRIEND ? "lightblue" : ""}`,
              }}
              onClick={() => changeMode(FIND_FRIEND)}
            >
              All Friend
            </li>
            <li
              className="hover:bg-violet-200"
              style={{
                backgroundColor: `${
                  mode === REQUEST_FRIEND ? "lightblue" : ""
                }`,
              }}
              onClick={() => changeMode(REQUEST_FRIEND)}
            >
              Request Friend
            </li>
            <li
              className="hover:bg-violet-200"
              style={{
                backgroundColor: `${mode === ALL_FRIEND ? "lightblue" : ""}`,
              }}
              onClick={() => changeMode(ALL_FRIEND)}
            >
              My Friend
            </li>
          </button>
        </ul>
      </div>
    </div>
  );
}

export default FriendNavbar;
