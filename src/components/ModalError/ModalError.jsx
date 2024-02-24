import React from "react";
import { CgClose } from "react-icons/cg";

import "./ModalError.css";

const ModalError = ({ setShowErrorModal, setErrorText, errorMsg }) => {
  const closeModal = () => {
    setShowErrorModal(false);
    setErrorText("");
  };

  return (
    <div className="modal-error-wrapper">
      <div className="modal-error">
        <span>{errorMsg}</span>
        <button className="modal-error-close" onClick={closeModal}>
          <CgClose color="red" size={"20px"} />
        </button>
      </div>
    </div>
  );
};

export default ModalError;
