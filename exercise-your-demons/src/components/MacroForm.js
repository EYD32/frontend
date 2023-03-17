import { useForm } from '../hooks/useForm';
import { macroSchema } from '../validation/schema';
import axios from 'axios';
import { useEffect } from 'react';

export default function MacroForm(props) {


  let initialFormValues = {
    fat: '',
    protein: '',
    carb: '',
  };

  const initialFormErrors = {
    fat: 0,
    protein: 0,
    carb: 0,
  };
  const formSchema = macroSchema;

 const [formValues, formErrors, disabled, handleChange, setFormValues] = useForm({
    initialFormValues,
    initialFormErrors,
    formSchema,
  });
  

  function handleSubmit(e) {
      axios
      .put(`http://localhost:5555/api/user/${props.id}`, {
          fat: formValues.fat,
          protein: formValues.protein,
          carb: formValues.carb,
        })
        .then((res) => {
            console.log(res);
        });
    }
  useEffect(() => {
    setFormValues(props)
  }, [props, setFormValues]);

  return (
    <div className='update-macros'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='fat'>Fat</label>
        <input 
        id='fat' 
        value={formValues.fat} 
        name='fat' 
        onChange={handleChange} />
        <label htmlFor='protein'>Protein</label>
        <input
          id='protein'
          value={formValues.protein}
          name='protein'
          onChange={handleChange}
        />
        <label htmlFor='carb'>Carbs</label>
        <input
          id='carb'
          value={formValues.carb}
          name='carb'
          onChange={handleChange}
        />
        <button>Update Macros</button>
      </form>
    </div>
  );
}
