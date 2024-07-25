import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "./Modals/Modal";
import { ReactComponent as ArrowDown } from "../icons/arrow-down.svg";
import { PromoCodeItem } from "./PromoCode";

const PaymentMethod = ({ icon, title, description, cheep }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  console.log(cheep);

  return (
    <div>
      <div className="payment-method" onClick={handleOpenModal}>
        {cheep && (
          <>
            {" "}
            <div className="cheep" style={{ backgroundColor: cheep.color }}>
              <p className="cheep-title">{cheep.title}</p>
            </div>
          </>
        )}
        <div className="payment-method-icon">{icon}</div>
        <div className="payment-method-details">
          <h3 className="payment-method-title">{title}</h3>
          <p className="payment-method-description">{description}</p>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className="modal-header">
          <div className="curent-balance">
            <p>Current Balance:</p>
            <p className="balance-dolar">$ 0.00</p>
          </div>
        </div>

        <div className="card-item">
          <div className="card-item-info">
            <p>{icon}</p>
            <div className="all-card-info">
              <div className="main-card-info">
                <p className="card-info">{title},</p>
                <p className="card-info">USD</p>
                <p className="card-info">{description}</p>
              </div>
              <div className="card-item-description">
                <p className="description-for-card">
                  Please notice that you will send money in the USD
                </p>
              </div>
            </div>
          </div>
          <ArrowDown />
        </div>
        <div className="amount">
          <p>Amount</p>
          <div className="input-deposit">
            <div className="input"> $ 21</div>
            <div className="plus-input">
              <div className="plus-many">+ $10</div>
              <div className="plus-many">+ $20</div>
              <div className="plus-many">+ $30</div>
              <div className="plus-many">+ $50</div>
              <div className="plus-many">+ $100</div>
            </div>
            <p className="amont-description">
              From 21.00 to 906.00 USD at a time
            </p>
          </div>
        </div>
        <PromoCodeItem title={"Promo Code"} description={""} />
        <button className="promo-button">Deposit</button>
      </Modal>
    </div>
  );
};

PaymentMethod.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cheep: PropTypes.shape({
    title: PropTypes.string,
    color: PropTypes.string,
  }),
};

export default PaymentMethod;
