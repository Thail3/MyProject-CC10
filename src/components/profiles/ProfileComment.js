import React from "react";

function ProfileComment() {
  return (
    <>
      <div className="flex mt-2 ">
        <div>
          <img className="w-16 rounded-full" src="" alt="" />
        </div>

        <div className="ml-4">
          <p>
            <span className="font-bold">Josh W</span>{" "}
            <span className="text-gray-500"> · Jul 21</span>
          </p>

          <p>
            Launched my new website a few weeks ago Rocket. Any feedback? Too
            boring? Too basic? Not sure what else to add to it!
          </p>
        </div>
      </div>
    </>
  );
}

export default ProfileComment;
