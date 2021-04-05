import React, { useState } from "react";
import Images from "./Images";
import ModalWindow from "./ModalWindow";

function Main(props) {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className="main">
      <Images modalActive={modalActive} setModalActive={setModalActive} />
      <ModalWindow modalActive={modalActive} setModalActive={setModalActive} />
    </div>
  );
}

export default Main;
