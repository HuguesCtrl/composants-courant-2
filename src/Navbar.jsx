import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="menu-principal">
      <ul>
        <li>
          <NavLink to="/composants-courant-2/">Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/composants-courant-2/modale">Modale</NavLink>
        </li>
        <li>
          <NavLink to="/composants-courant-2/onglets">Onglets</NavLink>
        </li>
        <li>
          <NavLink to="/composants-courant-2/navbar">Navbar</NavLink>
        </li>
        <li>
          <NavLink to="/composants-courant-2/validation">Validation</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
