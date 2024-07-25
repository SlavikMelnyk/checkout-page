import React from "react";
import { ReactComponent as BigDagger } from "../../icons/big-dagger.svg";

const NavigateModal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="nav-modal-overlay" onClick={onClose}>
      <div className="nav-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="nav-close-button" onClick={onClose}>
          <div className="dagger">
            <BigDagger width={40} height={40} />
          </div>
        </button>
        {children}
      </div>
    </div>
  );
};

export default NavigateModal;
