import { useEffect, useState } from "react";
import FriendForm from "./FriendForm";
import FriendNavbar from "./FriendNavbar";
import { ALL_FRIEND, REQUEST_FRIEND } from "../../config/data";
import axios from "../../config/axios";

function FriendWrapper() {
  const [mode, setMode] = useState(ALL_FRIEND);
  const [friends, setFriends] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(true);
  // console.log(mode);

  useEffect(() => {
    const fetchFriends = async () => {
      let res;
      if (mode === ALL_FRIEND) {
        res = await axios.get("/friends?status=ACCEPTED");
      } else if (mode === REQUEST_FRIEND) {
        res = await axios.get("/friends?status=REQUESTED");
      } else {
        res = await axios.get("/friends/unknown");
      }
      setFriends(res.data.users);
    };
    fetchFriends();
  }, [mode, toggleFetch]);

  const changeMode = (value) => {
    setMode(value);
  };

  const requestFriend = async (requestToId) => {
    await axios.post("/friends", { requestToId });
    setToggleFetch((prev) => !prev);
  };

  const acceptFriend = async (friendId) => {
    await axios.patch("/friends/" + friendId);
    setToggleFetch((prev) => !prev);
  };

  const deleteFriend = async (friendId) => {
    await axios.delete("/friends/" + friendId);
    setToggleFetch((prev) => !prev);
  };
  return (
    <>
      <div className="md-container-8 flex flex-wrap ">
        <FriendNavbar changeMode={changeMode} mode={mode} />
        {friends.map((item) => (
          <FriendForm
            key={item.id}
            friend={item}
            mode={mode}
            requestFriend={requestFriend}
            acceptFriend={acceptFriend}
            deleteFriend={deleteFriend}
          />
        ))}
      </div>
    </>
  );
}

export default FriendWrapper;
