import { useState } from "react";
import ButtonModale from "../modale/ButtonModale";
import ModaleContent from "../modale/ModaleContent";
import { createPortal } from "react-dom";
import "../modale/modale.css";

function Modale() {
  const [showModale, setShowModale] = useState(false);
  console.log(showModale);
  const toggleModale = () => {
    setShowModale(!showModale);
  };
  return (
    <div className="padding">
      <ButtonModale toggleModale={toggleModale} showModale={showModale} />
      {showModale &&
        createPortal(
          <ModaleContent toggleModale={toggleModale} />,
          document.body
        )}
    </div>
  );
}
export default Modale;
