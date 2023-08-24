function ButtonModale({ toggleModale, showModale }) {
  return (
    <button onClick={() => toggleModale()}>
      {!showModale ? "Afficher la modale" : "Modale affichée"}
    </button>
  );
}
export default ButtonModale;
