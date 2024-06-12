import s from "./modal.module.css";
import popup_loose from "../../images/popup_loose.png";
import popup_win from "../../images/popup_win.png";
import coin from "../../images/coin.png";
import coin2 from "../../images/coin2.png";
import coin3 from "../../images/coin3.png";
import coin4 from "../../images/coin4.png";
import coin5 from "../../images/coin5.png";

import { createPortal } from "react-dom";
import { useEffect } from "react";
const modalRoot = document.querySelector("#modal");

export default function Modal({
  onClose,
  count,
  setCount,
  showModal,
  onCheckout,
}) {
  useEffect(() => {
    document.body.classList.add(s.overvlow);
    return () => {
      document.body.classList.remove(s.overvlow);
    };
  }, []);

  function CloseAndSpin() {
    if (count === 0) {
      onCheckout();
      return;
    }
    onClose();
    setCount(count - 1);
  }

  return createPortal(
    <div
      className={`${s.modalBackDrop} ${showModal ? s.show : ""}`}
      onClick={() => CloseAndSpin()}
    >
      <div className={s.container}>
        {count !== 1 && (
          <>
            <img className={`${s.coin} ${s.coin1}`} src={coin} alt="coin" />
            <img className={`${s.coin} ${s.coin2}`} src={coin2} alt="coin2" />
            <img className={`${s.coin} ${s.coin3}`} src={coin3} alt="coin3" />
            <img className={`${s.coin} ${s.coin4}`} src={coin4} alt="coin4" />
            <img className={`${s.coin} ${s.coin5}`} src={coin5} alt="coin5" />
          </>
        )}
        {count === 1 && (
          <img className={s.popUp} src={popup_loose} alt="lose" />
        )}
        {count !== 1 && <img className={s.popUp} src={popup_win} alt="win" />}
        <p className={s.text}>
          {count === 1 && (
            <>
              PARABÉNS <br></br> Ganhou 250 Rodadas Grátis <br></br> nas slots
              da Play'n GO
            </>
          )}
          {count !== 1 && (
            <>
              GANHOU!<br></br> Junte-se à LEON hoje e<br></br> receba um Bónus
              até 500 €
            </>
          )}
        </p>
        <div className={s.btn} onClick={setCount}>
          JOGAR
        </div>
      </div>
    </div>,
    modalRoot
  );
}
