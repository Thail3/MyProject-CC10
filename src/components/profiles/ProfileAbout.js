// import axios from "../../config/axios";
import React, { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";

function ProfileAbout({ person }) {
  const { captionSub, user } = useContext(AuthContext);
  console.log(user);

  return (
    <>
      <div className="ml-4">
        <p className="font-bold text-lg">
          {person.firstName} {person.lastName}
        </p>
      </div>

      <div className="px-3 mt-3">
        {/* <p>{captionSub ? captionSub : person.about}</p> */}
        <p>{captionSub ? person.about : person.about}</p>
      </div>
      <div className="flex mt-3 border-b"></div>
    </>
  );
}

export default ProfileAbout;
