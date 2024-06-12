import { useEffect } from "react";
import Container from "./components/Container/Container";
import Main from "./components/Main/Main";
import Wheel from "./components/Wheel/Wheel";

const tele = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tele.ready();
  });

  const onCheckout = () => {
    tele.MainButton.text = "Clickable";
    tele.MainButton.show();
  };
  return (
    <Container>
      <Main />
      <Wheel onCheckout={onCheckout} />
    </Container>
  );
}

export default App;
