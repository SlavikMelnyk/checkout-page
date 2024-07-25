import React, { useState } from "react";
import { ReactComponent as MasterCard } from "../icons/master-card.svg";
import { ReactComponent as Visa } from "../icons/visa.svg";
import { ReactComponent as Skrill } from "../icons/skrill.svg";
import { ReactComponent as Pm } from "../icons/pm.svg";
import { ReactComponent as Piastrix } from "../icons/piastrix.svg";
import { ReactComponent as DonerMenu } from "../icons/doner-menu.svg";
import Transaction from "./TransactionItem";

const transactions = [
  {
    icon: <MasterCard />,
    title: "Credit Card",
    description: "Pay using your credit card.",
    transactionNumber: "1234567890",
    date: "02.01 at 12:34PM",
    amount: "23.05$",
    status: "Processing",
    transNumDesc: "Purchase at Shop A",
  },
  {
    icon: <Visa />,
    title: "Bitcoin",
    description: "Pay using Bitcoin.",
    transactionNumber: "0987654321",
    date: "02.01 at 12:34PM",
    amount: "123.27$",
    status: "Active",
    transNumDesc: "Purchase at Shop B",
  },
  {
    icon: <Skrill />,
    title: "PayPal",
    description: "Pay using PayPal.",
    transactionNumber: "1122334455",
    date: "02.01 at 12:34PM",
    amount: "80.00$",
    status: "Performed",
    transNumDesc: "Purchase at Shop C",
  },
  {
    icon: <Pm />,
    title: "Skrill",
    description: "Pay using Skrill.",
    transactionNumber: "2233445566",
    date: "02.01 at 12:34PM",
    amount: "75.00$",
    status: "Active",
    transNumDesc: "Purchase at Shop D",
  },
  {
    icon: <Piastrix />,
    title: "Piastrix",
    description: "Pay using Piastrix.",
    transactionNumber: "3344556677",
    date: "02.01 at 12:34PM",
    amount: "125.00$",
    status: "Processing",
    transNumDesc: "Purchase at Shop E",
  },
];

const TransactionList = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [showMore, setShowMore] = useState(true);

  const toggleVisibility = () => {
    if (showMore) {
      setVisibleCount(transactions.length);
      setShowMore(false);
    } else {
      setVisibleCount(3);
      setShowMore(true);
    }
  };

  return (
    <div className="transaction-list">
      <div className="list-header">
        <p className="list-title">Last Transactions</p>
        <div className="doner-menu">
          <DonerMenu />
        </div>
      </div>
      {transactions.slice(0, visibleCount).map((transaction, index) => (
        <Transaction
          key={index}
          icon={transaction.icon}
          title={transaction.title}
          description={transaction.description}
          transactionNumber={transaction.transactionNumber}
          date={transaction.date}
          amount={transaction.amount}
          status={transaction.status}
          transNumDesc={transaction.transNumDesc}
        />
      ))}

      <button className="toggle-button" onClick={toggleVisibility}>
        {showMore ? "Show More" : "Show Less"}
      </button>
    </div>
  );
};

export default TransactionList;
