function ModaleContent({ toggleModale }) {
  return (
    <div className="modale-container">
      <div className="modale-overlay" onClick={() => toggleModale(false)}>
        <div className="modale-content" onClick={(e) => e.stopPropagation()}>
          <h2>Je suis le titre de la modale</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
            eaque autem temporibus cumque quisquam nesciunt distinctio veniam
            aperiam accusamus quae dolore iste praesentium nam nihil explicabo
            iusto ab nisi, amet quam. Minima aperiam laborum eligendi.
          </p>
          <button className="btn-close" onClick={() => toggleModale(false)}>
            X
          </button>
        </div>
      </div>
    </div>
  );
}
export default ModaleContent;
