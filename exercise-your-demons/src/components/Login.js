import { useNavigate } from 'react-router-dom';
import { loginSchema } from '../validation/schema';
import { useForm } from '../hooks/useForm';

export default function Login() {
  const initialFormValues = {
    email: '',
    password: '',
  };
  const initialFormErrors = {
    email: '',
    password: '',
  };
  const formSchema = loginSchema;

  let navigate = useNavigate();

  const [formValues, formErrors, disabled, handleChange] = useForm({
    initialFormValues,
    initialFormErrors,
    formSchema,
  });

  function handleSubmit() {
    navigate('/landing');
  }

  return (
    <div className='login'>
      <h1>Every moment I live is agony</h1>
      <p>Logonin</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email' />
        <input
          id='email'
          type='email'
          value={formValues.email}
          placeholder='Email'
          name='email'
          onChange={handleChange}
        />
        <p>{formErrors.email}</p>
        <label htmlFor='password' />
        <input
          id='password'
          type='password'
          placeholder='Password'
          value={formValues.password}
          name='password'
          onChange={handleChange}
        />
        <button disabled={disabled}>Submit</button>
      </form>
    </div>
  );
}
