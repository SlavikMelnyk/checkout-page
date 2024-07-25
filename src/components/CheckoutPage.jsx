import React, { useState } from "react";
import PaymentList from "./Paymentlist.jsx";
import { ReactComponent as MasterCardIcon } from "../icons/master-card.svg";
import { ReactComponent as Visa } from "../icons/visa.svg";
import { ReactComponent as Skrill } from "../icons/skrill.svg";
import { ReactComponent as Pm } from "../icons/pm.svg";
import { ReactComponent as Piastrix } from "../icons/piastrix.svg";
import { ReactComponent as Stic } from "../icons/sticpay.svg";
import { ReactComponent as Pin } from "../icons/pin.svg";
import { ReactComponent as Bitcoin } from "../icons/bitcoin.svg";
import { ReactComponent as Ethereum } from "../icons/ethereum.svg";
import { ReactComponent as Tether } from "../icons/tether.svg";
import { ReactComponent as BurgerMenu } from "../icons/burger-menu.svg";
import { ReactComponent as Logo } from "../icons/logo.svg";
import { ReactComponent as Search } from "../icons/search.svg";
import { ReactComponent as Gift } from "../icons/gift.svg";
import { ReactComponent as Bell } from "../icons/bell.svg";
import { ReactComponent as Avatar } from "../icons/avatar.svg";
import { ReactComponent as ArrowDown } from "../icons/arrow-down.svg";
import { ReactComponent as Plus } from "../icons/plus.svg";
import TransactionList from "./TransactionList.jsx";
import { PromoCodeItem } from "./PromoCode.jsx";
import NavigateModal from "./Modals/NavigateModal.jsx";

const CheckoutPage = () => {
  const paymentMethods = [
    {
      icon: <MasterCardIcon width={48} height={37} />,
      title: "Mastercard",
      description: "Comission 3%",
      cheep: {
        title: "POPULAR",
        color: "#2D69EB",
      },
    },
    {
      icon: <Visa width={100} height={40} />,
      title: "Visa",
      description: "Comission 3%",
      cheep: {
        title: "TRUSTED",
        color: "#FC3D40 ",
      },
    },
    {
      icon: <Skrill width={100} height={40} />,
      title: "Skrill",
      description: "Comission 0%",
    },
    {
      icon: <Pm width={40} height={40} />,
      title: "Perfect Money, EUR",
      description: "Comission 0%",
    },
    {
      icon: <Piastrix width={80} height={40} />,
      title: "Piastrix, EUR",
      description: "Comission 0%",
    },
    {
      icon: <Stic width={100} height={40} />,
      title: "SticPay",
      description: "Comission 0%",
    },
    {
      icon: <Pin width={80} height={50} />,
      title: "PIN",
      description: "Comission 1%",
    },
  ];

  const cryptoMethods = [
    {
      icon: <Bitcoin width={100} height={40} />,
      title: "BTC",
      description: "Comission 3%",
    },
    {
      icon: <Ethereum width={100} height={40} />,
      title: "ETH",
      description: "Comission 3%",
    },
    {
      icon: <Tether width={100} height={40} />,
      title: "USDT",
      description: "Comission 0%",
    },
  ];

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <div className="home-wrapper">
          <div className="burger-menu" onClick={handleOpenModal}>
            <BurgerMenu />
            <Logo />
          </div>
          <div className="profile-menu">
            <Search className="hidden-item" />
            <Gift className="hidden-item" />
            <Bell className="hidden-item" />
            <div className="balance">
              <div className="balance-number">
                <p className="number">125.02 $</p>
                <p className="procent">13%</p>
                <ArrowDown />
              </div>
              <div className="plus">
                <Plus />
              </div>
            </div>
            <Avatar className="hidden-item" />
          </div>
        </div>
      </header>
      <NavigateModal show={showModal} onClose={handleCloseModal}>
        <ul>
          <Logo width={40} height={50} />
          <li>Casino Games</li>
          <li>Live Games</li>
          <li>TV-Bet</li>
          <li>Sport Games</li>
          <li>Virtual</li>
          <li>Tournaments</li>
          <li>Spin Shop</li>
          <li>FAQ</li>
          <li>Support Chat</li>
        </ul>
      </NavigateModal>
      <div className="main-wraper">
        <div
          className="main-title"
          style={{ display: "flex", margin: "20px 0", flexDirection: "column", gap: "32px" }}
        >
          <p
            className="Make-deposit"
            style={{ color: "white", fontWeight: "bold", fontSize: "24px" }}
          >
            Make A deposit
          </p>
          <p
            className="choose-payment-method"
            style={{ color: "white", fontWeight: "bold", fontSize: "18px" }}
          >
            Choose Payment Method
          </p>
        </div>
        <div className="payment-lists">
          <PaymentList title="Cards, E-Money, PIN" methods={paymentMethods} />
          <PaymentList title="Cryptocurrency" methods={cryptoMethods} />
        </div>
        <div className="prmocode-conteiner">
          <PromoCodeItem
            title={"Have a promo code?"}
            description={
              " Enter promo code here. It will activate a special bonus!"
            }
          />
        </div>
        <TransactionList />
      </div>
    </div>
  );
};

export default CheckoutPage;
