const data = [
  { txt: "Je suis le contenu-1 !" },
  { txt: "Je suis le contenu-2 !!" },
  { txt: "Je suis le contenu-3 !!!" },
  { txt: "Je suis le contenu-4 !!!!" },
  { txt: "Je suis le contenu-5 !!!!!" },
];
import { useState } from "react";
import "../onglets/onglets.css";

function Onglets() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className="padding onglets">
      <h2>Système d'onglets</h2>
      <div className="onglets-content">
        <div className="btn-onglets">
          {data.map((item, index) => {
            return (
              <button key={index} onClick={() => setSelectedIndex(index)}>
                Tab-{index + 1}
              </button>
            );
          })}
        </div>
        {<p>{data[selectedIndex].txt}</p>}
      </div>
    </div>
  );
}
export default Onglets;
