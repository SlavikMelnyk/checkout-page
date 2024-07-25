import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as Arrowleft } from "../../icons/arrow-left.svg";
import { ReactComponent as Dagger } from "../../icons/dagger.svg";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-back" onClick={onClose}>
          <Arrowleft />
          <p className="back">Back to Payment Method</p>
        </div>
        <div className="modal-close" onClick={onClose}>
          <Dagger />
        </div>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
