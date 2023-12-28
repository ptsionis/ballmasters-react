import React from "react";

const Loader = () => {
  return (
    <div className="page container-fluid d-flex justify-content-center align-items-center">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
