import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const initialFormValues = {
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
