import React, { useState } from "react";
import { ReactComponent as CheckMark } from "../icons/check-mark.svg";
export const PromoCodeItem = ({ title, description }) => {
  const [promoCode, setPromoCode] = useState("");
  const [ShowCheck, setShowCheck] = useState(false);
  const handleInputChange = (event) => {
    setPromoCode(event.target.value);
  };

  const handleApplyClick = () => {
    setShowCheck(!ShowCheck);
  };

  return (
    <div className="promo-card">
      <h2 className="promo-title">{title}</h2>
      <p className="promo-description">{description}</p>
      <div className="promo-input-container">
        <input
          type="text"
          className="promo-input"
          placeholder="Enter promo code"
          value={promoCode}
          onChange={handleInputChange}
        />
        {ShowCheck && (
          <div className="check-mark">
            <CheckMark />
          </div>
        )}
        <button className="promo-button" disabled={!promoCode.trim()} onClick={handleApplyClick}>
          Apply
        </button>
      </div>
    </div>
  );
};
