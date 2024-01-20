import { registerUser } from '../redux/actions/auth.actions';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  //register va a guardar las proiedades en un objeto, la vamos ejecutando en cada imput, y usamos spread por el tema del objeto, e indicamos el nombre de la propiedad donde quiero guardarlo
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  //encargada de ejectucar register user, y lo tengo que hacer con un dispatch porque esta en redux, es asimncronica porque regiter user es asincrona. Handle Summit recoge los datos de los input y sustituye a los eventos
  const registrar = async (formData) => {
    dispatch(registerUser(formData, navigate));
  };

  return (
    <div className="register-box">
      <h2 className="register-title">Acceso a la Web (Register)</h2>
      <form onSubmit={handleSubmit(registrar)}>
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
        <div className="user-box">
          <input type="text" {...register('name')} />
          <label>Nombre</label>
        </div>
      <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
        Registrate
      </a>
      <input type="submit" value="registrate" />
      </form>
    </div>
  );
};

export default Register;
