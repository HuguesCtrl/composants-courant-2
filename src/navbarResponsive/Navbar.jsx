import { NavLink } from "react-router-dom";
import Croix from "./Croix.png";
import Hamburger from "./Hamburger.png";
import { useEffect, useState, useRef } from "react";

function Navbarresponsive() {
  const [width, setWidth] = useState(window.innerWidth);
  const [menu, setMenu] = useState(false);
  const hamburger = useRef();
  const ul = useRef();
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    if (width > 720) {
      hamburger.current.classList.add("none");
      ul.current.classList.remove("none");
    } else {
      hamburger.current.classList.remove("none");
      ul.current.classList.add("none");
    }
  }, [width]);

  const toggleMenu = () => {
    setMenu(!menu);
    if (!menu) {
      ul.current.classList.add("flex-col");
      ul.current.classList.remove("none");
    } else {
      ul.current.classList.remove("flex-col");
      ul.current.classList.add("none");
    }
  };

  return (
    <nav className="navResponsive">
      <img
        src={!menu ? Hamburger : Croix}
        alt={!menu ? "Hamburger" : "Cacher le menu"}
        width={40}
        className="menu-icon"
        ref={hamburger}
        onClick={() => toggleMenu()}
      />
      <ul ref={ul}>
        <li>
          <NavLink>Accueil</NavLink>
        </li>
        <li>
          <NavLink>Tarifs</NavLink>
        </li>
        <li>
          <NavLink>Nos services</NavLink>
        </li>
        <li>
          <NavLink>A propos</NavLink>
        </li>
        <li>
          <NavLink>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navbarresponsive;
