import React, { useContext } from "react";
import { AppContext } from "../../App";
import { CgClose } from "react-icons/cg";

import "./ModalForm.css";

const successMsg = "Question submitted successfully!";
const failMsg = "An error occured, please try again!";

const ModalForm = ({ success, setShowFormModal }) => {
  const { setCurrentPage } = useContext(AppContext);

  const closeModal = () => {
    setShowFormModal(false);
    if (success) {
      setCurrentPage("/");
    }
  };

  return (
    <div className="modal-form-wrapper">
      <div className="modal-form">
        <span className="modal-form-text">
          {success ? successMsg : failMsg}
        </span>
        <button className="modal-form-close" onClick={closeModal}>
          <CgClose color="red" size={"20px"} />
        </button>
      </div>
    </div>
  );
};

export default ModalForm;
