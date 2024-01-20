import PropTypes  from "prop-types";

function Books({book}) {
  return (
    <article>
      <h2>{book.title}</h2>
      <p>{book.serie}</p>
      <img src={book.picture} alt={`Imagen de ${book.title}`} />
    </article>
  );
}

// Books.propTypes = {
//   title: PropTypes.string,
//   serie: PropTypes.string,
//   picture: PropTypes.string
// }

export default Books;


