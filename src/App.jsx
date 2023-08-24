import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Modale from "./pages/Modale";
import Onglets from "./pages/Onglets";
import NavbarResponsive from "./pages/NavbarResponsive";
import Validation from "./pages/Validation";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/composants-courant-2/" element={<Home />} />
          <Route path="/composants-courant-2/modale" element={<Modale />} />
          <Route path="/composants-courant-2/onglets" element={<Onglets />} />
          <Route
            path="/composants-courant-2/navbar"
            element={<NavbarResponsive />}
          />
          <Route
            path="/composants-courant-2/validation"
            element={<Validation />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
