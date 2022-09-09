import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const initialFormValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  let navigate = useNavigate();
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  function handleSubmit() {
    navigate('landing');
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
        <label htmlFor='last_name' />
        <input
          id='last_name'
          value={formValues.lastName}
          placeholder='Last Name'
          name='lastName'
          onChange={handleChange}
        />
        <label htmlFor='email' />
        <input
          id='email'
          type='email'
          value={formValues.email}
          placeholder='Email'
          name='email'
          onChange={handleChange}
        />
        <label htmlFor='password' />
        <input
          id='password'
          type='password'
          placeholder='Password'
          value={formValues.password}
          name='password'
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
