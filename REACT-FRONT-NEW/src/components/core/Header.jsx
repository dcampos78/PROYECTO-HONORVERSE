import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1 className="header-title">Honorverse World</h1>
      <nav>
        <ul className="header-title-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Registro</Link>
          </li>
          <li>
            <Link to="/main">Consulta(usuarios registrados)</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
