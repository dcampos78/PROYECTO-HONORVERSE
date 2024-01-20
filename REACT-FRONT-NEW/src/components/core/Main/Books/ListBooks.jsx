import Book from "./Book";

function ListBooks({ filteredArray }) {
  console.log(filteredArray);
  return (
    <>
      <h2>Listado de libros</h2>
      {filteredArray.map((char) => (
        <Book char={char} key={char.id} />
      ))}
    </>
  );
}
export default ListBooks;
