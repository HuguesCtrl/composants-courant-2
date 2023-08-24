import Pseudo from "../systemeValidation/Pseudo";
import Password from "../systemeValidation/Password";
import PasswordConfirmation from "../systemeValidation/PasswordConfirmation";
import "../systemeValidation/validation.css";
import { useState } from "react";

function Validation() {
  const [showValidation, setShowValidation] = useState({
    pseudo: false,
    password: false,
    passwordConfirmation: false,
  });

  const [inputValue, setInputValue] = useState({
    pseudo: "",
    password: "",
    passwordConfirmation: "",
  });

  const submitForm = (e) => {
    e.preventDefault();
    if (validationCheck()) {
      console.log("Envoyé !!!");
      setInputValue((state) => ({ ...state, pseudo: "" }));
      setInputValue((state) => ({ ...state, password: "" }));
      setInputValue((state) => ({ ...state, passwordConfirmation: "" }));
    } else {
      console.log("erreur");
    }
  };

  const validationCheck = () => {
    const areValid = {
      pseudo: false,
      password: false,
      passwordConfirmation: false,
    };
    if (inputValue.pseudo.length < 3 || inputValue.pseudo.length > 64) {
      setShowValidation((state) => ({ ...state, pseudo: true }));
    } else {
      areValid.pseudo = true;
      setShowValidation((state) => ({ ...state, pseudo: false }));
    }
    if (inputValue.password.length < 6 || !/\d/.test(inputValue.password)) {
      setShowValidation((state) => ({ ...state, password: true }));
    } else {
      areValid.password = true;
      setShowValidation((state) => ({ ...state, password: false }));
    }
    if (inputValue.passwordConfirmation !== inputValue.password) {
      setShowValidation((state) => ({ ...state, passwordConfirmation: true }));
    } else {
      areValid.passwordConfirmation = true;
      setShowValidation((state) => ({ ...state, passwordConfirmation: false }));
    }
    if (Object.values(areValid).every((value) => value)) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div>
      <h2>Entrez vos informations</h2>
      <form onSubmit={submitForm} autoComplete="off">
        <Pseudo
          inputValue={inputValue}
          setInputValue={setInputValue}
          showValidation={showValidation}
        />
        <Password
          inputValue={inputValue}
          setInputValue={setInputValue}
          showValidation={showValidation}
        />
        <PasswordConfirmation
          inputValue={inputValue}
          setInputValue={setInputValue}
          showValidation={showValidation}
        />
        <button className="submit">Envoyer</button>
      </form>
    </div>
  );
}
export default Validation;
