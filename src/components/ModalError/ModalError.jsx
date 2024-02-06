import React from "react";

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
          ❌
        </button>
      </div>
    </div>
  );
};

export default ModalError;
