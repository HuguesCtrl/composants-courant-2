function PasswordConfirmation({ inputValue, setInputValue, showValidation }) {
  return (
    <div className="field">
      <label htmlFor="confPass">Confirmez votre mot de passe</label>
      <input
        type="password"
        id="confPass"
        value={inputValue.passwordConfirmation}
        onChange={(e) =>
          setInputValue({ ...inputValue, passwordConfirmation: e.target.value })
        }
      />
      {showValidation.passwordConfirmation && (
        <p className="para-error">Les mdp ne correspondent pas...</p>
      )}
    </div>
  );
}
export default PasswordConfirmation;
