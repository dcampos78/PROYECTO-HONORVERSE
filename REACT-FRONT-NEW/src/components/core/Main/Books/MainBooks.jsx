
import { useEffect, useState } from "react";
import { API } from "../../../axios/api";
import SelectSerie from "./SelectSerie";

function MainBooks() {
  const [serie, setSerie] = useState("Honorverse");
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredArray, setFilteredArray] = useState([]);

  useEffect(() => {
    try {
      API.get(`http://localhost:5000/books/${serie}`)
        .then(
          (resp) => {
            setCharacters(resp.data);
            setFilteredArray(resp.data);
          },
          (error) => {
            console.log(error);
          }
        );
    } catch (error) {
      console.log(error);
    }
  }, [serie]);

  const changeSerie = (value) => {
    setSerie(value);
  };

  const changeSearch = (value) => {
    setSearch(value);
  };
  const filterCharacter = () => {
    const newArray = characters.filter((eachCharacter) =>
      eachCharacter.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredArray(newArray);
  };

  return (
    <>
      <h2 className="container-list-characters">Books Honor Harrington</h2>
      <SelectSerie changeSerie={changeSerie} serie={serie} />
      {/* <SearchCharacter
        changeSearch={changeSearch}
        search={search}
        filterCharacter={filterCharacter}
      />
      <ListCharacters filteredArray={filteredArray} /> */}
    </>
  );
}
export default MainBooks;