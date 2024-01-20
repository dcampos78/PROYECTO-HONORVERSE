import LogOut from './LogOut';
import ActualUser from './ActualUser';
import Books from './Books';


const Main = () => {
  return (
    <>
      <div>
        <ActualUser />
        <LogOut />
        <div className="container-list">
          <Books/>
          <h2 className="container-list-characters">Characters Honor Harrington</h2>
          <div id="charactersList">
            <button>Ver Characters</button>
          </div>
          <h2 className="container-list-planets">Planets Honor Harrington</h2>
          <div id="planetsList">
            <button>Ver Characters</button>
          </div>
          <h2 className="container-list-countries">Countries Honor Harrington</h2>
          <div id="countriesList">
            <button>Ver Countries</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
