import { loginUser } from '../redux/actions/auth.actions';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logear = async (formData) => {
    dispatch(loginUser(formData, navigate));
  };

  return (
    <div className="login-box">
      <h2 className="login-title">Acceso a la Web (Login)</h2>
      <form onSubmit={handleSubmit(logear)}>
        <div className="user-box">
          <input
            type="email"
            placeholder="Introduce tu email"
            {...register('email')}
          />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            placeholder="Introduce tu password"
            {...register('password')}
          />
          <label>Password</label>
        </div>
        <span></span>
        <span></span>
        <input type="submit" value="submit" />
        <a href="#">
          <span></span>
          <span></span>
          Submit
        </a>
      </form>
    </div>
  );
};

export default Login;
