import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { registrationSchema } from '../validation/schema';

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

  let navigate = useNavigate();
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(true);

  const handleChange = (e) => {
    validate(e.target.name, e.target.value);
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  function handleSubmit() {
    navigate('/landing');
  }

  const validate = (name, value) => {
    yup
      .reach(registrationSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  useEffect(() => {
    registrationSchema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

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
