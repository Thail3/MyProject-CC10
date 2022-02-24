import React from "react";
import { Outlet } from "react-router-dom";

function PublicLayout() {
  return (
    <div className="col-6 m-auto  p-0 box-border">
      <div className="text-center mt-12 mb-12">HOMECLUB</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default PublicLayout;
