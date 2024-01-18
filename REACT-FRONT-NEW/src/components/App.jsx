import { Route, Routes } from 'react-router-dom';
import Login from './core/Login/';
import Register from './core/Register';
import Header from './core/Header';
import Home from './core/Home';
import Main from './core/Main/Main';
import AuthRoute from './core/AuthRoutes';
import Footer from './core/Footer';


const App = () => {
  return (
    <>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/main" element={<AuthRoute component={<Main />} />} />
        </Routes>
        <Footer/>
      </div>
    </>
  );
};

export default App;
