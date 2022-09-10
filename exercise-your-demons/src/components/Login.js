import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginSchema } from '../validation/schema';
import {useForm} from '../hooks/useForm';


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
//   let formSchema = loginSchema
//   const [formValues, setFormValues] = useState(initialFormValues);
//   const [formErrors, setFormErrors] = useState(initialFormErrors);
const [formValues, formErrors, handleChange] = useForm({initialFormValues, initialFormErrors, formSchema})
const [disabled, setDisabled] = useState(true);

//   const validate = (name, value) => {
//     yup
//       .reach(loginSchema, name)
//       .validate(value)
//       .then(() => setFormErrors({ ...formErrors, [name]: '' }))
//       .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
//   };

//   const handleChange = (e) => {
//     validate(e.target.name, e.target.value);
//     setFormValues({
//       ...formValues,
//       [e.target.name]: e.target.value,
//     });
//   };

  function handleSubmit() {
    navigate('/landing');
  }

  useEffect(() => {
    loginSchema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

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
