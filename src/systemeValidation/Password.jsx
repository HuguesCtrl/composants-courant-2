function Password({ inputValue, setInputValue, showValidation }) {
  console.log(showValidation);
  return (
    <div className="field">
      <label htmlFor="pass">Entrez votre mot de passe</label>
      <input
        type="password"
        id="pass"
        value={inputValue.password}
        onChange={(e) =>
          setInputValue({ ...inputValue, password: e.target.value })
        }
      />
      {showValidation.password && (
        <p className="para-error">
          Le mdp doit contenir au moins 1 chiffre et 6 caractères
        </p>
      )}
    </div>
  );
}
export default Password;
