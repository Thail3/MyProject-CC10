import React from "react";
import { ALL_FRIEND, REQUEST_FRIEND, FIND_FRIEND } from "../../config/data";

function FriendAction({
  friend,
  mode,
  requestFriend,
  acceptFriend,
  deleteFriend,
}) {
  return (
    <div className="flex mt-4 space-x-3 lg:mt-6">
      {/* {mode === ALL_FRIEND && (
        <button className="disabled" onClick={() => requestFriend(friend.id)}>
          Add friend
        </button>
      )} */}
      {mode === FIND_FRIEND && (
        <button
          className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => requestFriend(friend.id)}
        >
          Add friend
        </button>
      )}
      {mode === REQUEST_FRIEND && (
        <button
          className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => acceptFriend(friend.id)}
        >
          Add friend
        </button>
      )}
      <button
        className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-black bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-500"
        onClick={() => deleteFriend(friend.id)}
      >
        Delete
      </button>
      {/* <button className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-black bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-500">
        Message
      </button> */}
    </div>
  );
}

export default FriendAction;
