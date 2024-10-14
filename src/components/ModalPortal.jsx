import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css"; // Optional CSS for modal styling

const ModalPortal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // If the modal is not open, return nothing.

  // Create the modal content
  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("portal-root") // This is the target DOM element
  );
};

export default ModalPortal;
