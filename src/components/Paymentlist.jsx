import React from "react";
import PropTypes from "prop-types";
import PaymentMethod from "./PaymentMethod";

const PaymentList = ({ title, methods }) => {
  return (
    <div className="list-container">
      <div className="main-title">
        <h2 className="title-list">{title}</h2>
        <div className="payment-list">
          {methods.map((method, index) => (
            <PaymentMethod
              key={index}
              icon={method.icon}
              title={method.title}
              cheep={method?.cheep}
              description={method.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

PaymentList.propTypes = {
  title: PropTypes.string.isRequired,
  methods: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.element.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default PaymentList;
