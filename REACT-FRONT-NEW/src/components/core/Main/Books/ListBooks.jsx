import Books from "./Books";

function ListBooks({ filteredArray }) {
  return (
    <>
      <h2>Listado de libros</h2>
      {filteredArray.map((book) => (
        <Books book={book} key={book._id} />
      ))}
    </>
  );
}
export default ListBooks;
