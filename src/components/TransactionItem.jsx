// src/components/Transaction.jsx
import React from "react";

const Transaction = ({
  icon,
  title,
  transactionNumber,
  date,
  amount,
  status,
}) => {
  return (
    <div className="transaction-card">
      <div className="transaction-icon">
        <div className="icon-background">
          <div className="icon">{icon}</div>
        </div>
      </div>
      <div className="transaction-details">
        <div className="">
          <div className="transaction-title">{title}</div>
          <div className="transaction-description">Withdraw</div>
        </div>
        <div className="transaction-info">
          <div className="transaction-number"> {transactionNumber}</div>
          <div className="transaction-description">Transaction Number </div>
        </div>
        <div className="d">
          <div className="transaction-date">{date}</div>
          <div className="transaction-description">Payment Date</div>
        </div>
        <div className="d">
          <div className="transaction-amount">{amount}</div>
          <div className="transaction-description">Amount Payed</div>
        </div>
        <div className="transaction-status-info">
          <div className={`transaction-status ${status.toLowerCase()}`}>
            {" "}
            {status}
          </div>
          <div className="transaction-description">Operation Status</div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
