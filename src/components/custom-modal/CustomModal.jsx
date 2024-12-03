import React from "react";
import "./CustomModal.scss";

const CustomModal = ({ isOpen, message, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {message && <p>{message}</p>}
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CustomModal;
