import { useEffect, useState } from "react";
import s from "./wheel.module.css";
import wheel from "../../images/wheel.png";
import bonuses from "../../images/bonuses.png";
import btnSpin from "../../images/btn_spin.png";
import eclipse from "../../images/eclipse_part.png";
import Modal from "../Modal/Modal";

export default function Wheel({ onCheckout }) {
  const [count, setCount] = useState(2);
  const [showModal, setShowModal] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    if (count === 1) {
      setTimeout(() => togleModal(), 5000);
    }
    if (count === 0) {
      setTimeout(() => togleModal(), 7000);
    }
  }, [count]);
  function togleModal() {
    return setShowModal(!showModal);
  }
  const handleButtonClick = () => {
    if (isButtonDisabled || count === 0) {
      return;
    }
    setIsButtonDisabled(true);

    setCount(count - 1);

    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 3500);

    // if (count === 1) {
    //   setTimeout(() => setShowModal(true), 4000);
    // }
  };
  console.log("count", count);
  return (
    <div className={s.container}>
      <img className={s.wheel} src={wheel} alt="wheel" />
      <img className={s.eclipse} src={eclipse} alt="eclipse" />
      <img
        className={`${s.bonuses} ${count === 1 && s.bonuses_1_spin}
          ${count === 0 && s.bonuses_2_spin}`}
        src={bonuses}
        alt="bonuses"
      />
      <img
        className={s.btnSpin}
        src={btnSpin}
        alt="btnSpin"
        onClick={handleButtonClick}
      />
      <div className={s.btn} onClick={handleButtonClick}>
        RODAR
      </div>
      <Modal
        onClose={togleModal}
        count={count}
        setCount={handleButtonClick}
        showModal={showModal}
        onCheckout={onCheckout}
      />
    </div>
  );
}
