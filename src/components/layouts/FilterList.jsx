import React from "react";
import { useNavigate } from "react-router-dom";

function FilterList({ allMember }) {
  console.log(allMember);
  const navigate = useNavigate();
  return (
    <div className="" onClick={() => navigate(`/profile/${allMember.id}`)}>
      <p
        className="list-group-item list-group-item-action m-auto h-8"
        style={{ width: "70%" }}
      >
        {allMember.firstName} {allMember.lastName}
      </p>
    </div>
  );
}

export default FilterList;
