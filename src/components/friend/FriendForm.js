import FriendAction from "./FriendAction";
import defaultImg from "../../assets/images/profileImg.png";

function FriendForm({
  friend,
  mode,
  requestFriend,
  acceptFriend,
  deleteFriend,
}) {
  return (
    <div className="max-w-xl mt-5 mr-11">
      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 p-1">
        <div className="flex justify-end px-4 pt-4"></div>
        <div className="flex flex-col items-center pb-10">
          <img
            className="mb-3 w-24 h-24 rounded-full shadow-lg "
            src={friend.profileImg ?? defaultImg}
            alt="Friendimage-Profile"
            role="button"
          />

          <span className="text-sm text-gray-500 dark:text-gray-400 font-bold">
            {friend.firstName} {friend.lastName}
          </span>
          <FriendAction
            friend={friend}
            mode={mode}
            requestFriend={requestFriend}
            acceptFriend={acceptFriend}
            deleteFriend={deleteFriend}
          />
        </div>
      </div>
    </div>
  );
}

export default FriendForm;
