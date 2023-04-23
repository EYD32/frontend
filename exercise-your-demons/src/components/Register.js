import { useNavigate, useParams } from 'react-router-dom';
import { registrationSchema } from '../validation/schema';
import { useForm } from '../hooks/useForm';
import axios from 'axios';

export default function Register() {
  const initialFormValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  const initialFormErrors = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };
  const formSchema = registrationSchema;
  let navigate = useNavigate();
  let user_id = useParams()
  const [formValues, formErrors, disabled, handleChange] = useForm({
    initialFormErrors,
    initialFormValues,
    formSchema,
  });

  function handleSubmit(e) {
   e.preventDefault()
   axios.post('http://localhost:5555/api/auth/register', formValues )
   .then((res) =>{
     console.log(res.data);
     navigate(`/user/${res.data[0].user_id}`);
   })
   .catch((err) => {
     console.log(err.response)
   })
  }

  return (
    <div className='register'>
      <h1>Every moment I live is agony</h1>
      <form onSubmit={handleSubmit}>
        <p>Signonup</p>
        <label htmlFor='first_name' />
        <input
          id='first_name'
          value={formValues.firstName}
          placeholder='First Name'
          name='firstName'
          onChange={handleChange}
        />
        <p>{formErrors.firstName}</p>
        <label htmlFor='last_name' />
        <input
          id='last_name'
          value={formValues.lastName}
          placeholder='Last Name'
          name='lastName'
          onChange={handleChange}
        />
        <p>{formErrors.lastName}</p>
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
        <p>{formErrors.password}</p>

        <button disabled={disabled}>Submit</button>
      </form>
    </div>
  );
}
