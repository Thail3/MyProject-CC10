import axios from "../../config/axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

function ProfileAbout({ posts }) {
  const [persons, setPersons] = useState({});
  const { id } = useParams();
  // console.log(id);

  const fetchUser = async () => {
    const res = await axios.get(`/users/${id}`);
  };
  return (
    <>
      <div className="ml-4">
        <p className="font-bold text-lg">
          {posts.User.firstName} {posts.User.lastName}
        </p>
      </div>

      <div className="px-3 mt-3">
        <p>
          DHIS2. Debian. React. Vue. Gatsby. PWAs. ES6. Node. Electron.
          Tailwind. Working with a UK charity to bring EMRs to the Developing
          World.
        </p>
      </div>
      <div className="flex mt-3 border-b"></div>
    </>
  );
}

export default ProfileAbout;
