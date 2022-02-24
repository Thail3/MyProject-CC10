import React from "react";
import FilterList from "./FilterList";

function SearchFilter({
  allMember,
  searchItems,
  filteredResults,
  searchInput,
  setFilteredResults,
}) {
  console.log(allMember);
  return (
    <div className="col">
      <div className="collapse multi-collapse w-50" id="multiCollapseExample1">
        <div className="card card-body block">
          <div className="input-group mb-3">
            <i className="card bi bi-people-fill text-2xl p-2 mr-2 text-blue-500 border-0"></i>
            <input
              type="text"
              className="form-control"
              placeholder="Search . . ."
              onChange={(e) => searchItems(e.target.value)}
            />
          </div>
          <div>
            {filteredResults.map((item) => (
              <FilterList key={item.id} allMember={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchFilter;
