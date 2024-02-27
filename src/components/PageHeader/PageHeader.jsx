import React, { useContext } from "react";
import { RiArrowGoBackFill } from "react-icons/ri";
import { AppContext } from "../../App";

import "./PageHeader.css";

const PageHeader = ({ title }) => {
  const { setCurrentPage } = useContext(AppContext);

  const cancelAndReturn = () => {
    setCurrentPage("/");
  };
  return (
    <div className="page-header">
      <RiArrowGoBackFill
        className="page-header-back"
        color="red"
        size={"26px"}
        onClick={cancelAndReturn}
      />
      <h2 className="page-title">{title}</h2>
    </div>
  );
};

export default PageHeader;
