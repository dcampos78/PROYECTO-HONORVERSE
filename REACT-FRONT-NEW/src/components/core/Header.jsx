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
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/main">Main(solo con login)</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
