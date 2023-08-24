function Pseudo({ inputValue, setInputValue, showValidation }) {
  return (
    <div className="field">
      <label htmlFor="pseudo">Entrez votre pseudo</label>
      <input
        type="text"
        id="pseudo"
        value={inputValue.pseudo}
        onChange={(e) =>
          setInputValue({ ...inputValue, pseudo: e.target.value })
        }
      />
      {showValidation.pseudo && (
        <p className="para-error">
          Votre pseudo doit contenir entre 3 et 64 caractères
        </p>
      )}
    </div>
  );
}
export default Pseudo;
