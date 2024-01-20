function Book({ char }) {
  return (
    <article>
      <h2>{char.title}</h2>
      <p>{char.serie}</p>
      <img src={char.picture} alt={`Imagen de ${char.title}`} />
    </article>
  );
}
export default Book;
