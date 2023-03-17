import { useForm } from '../hooks/useForm';
import { macroSchema } from '../validation/schema';
import axios from 'axios';
import { useEffect } from 'react';

export default function MacroForm(props) {
console.log(props)
console.log(props.fat)

  let initialFormValues = {
    fat: '',
    protein: '',
    carb: '',
  };

  const initialFormErrors = {
    fat: '',
    protein: '',
    carb: '',
  };
  const formSchema = macroSchema;

 const [formValues, formErrors, disabled, handleChange, setFormValues] = useForm({
    initialFormValues,
    initialFormErrors,
    formSchema,
  });
  

  function handleSubmit() { 
    
    axios
      .put(`http://localhost:5555/api/user/${props.id}`, {
          fat: Number(formValues.fat) + props.fat,
          protein: Number(formValues.protein) + props.protein,
          carb: Number(formValues.carb) + props.carb,
        })
        .then((res) => {
            console.log(res);
        });
    }

  return (
    <div className='update-macros'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='fat'>Fat</label>
        <input 
        id='fat' 
        value={formValues.fat} 
        name='fat' 
        type='number'
        onChange={handleChange} />
        <figcaption>{props.fat}g</figcaption>
        <label htmlFor='protein'>Protein</label>
        <input
          id='protein'
          value={formValues.protein}
          name='protein'
          type='number'
          onChange={handleChange}
        />
        <label htmlFor='carb'>Carbs</label>
        <input
          id='carb'
          value={formValues.carb}
          name='carb'
          type='number'
          onChange={handleChange}
        />
        <button>Update Macros</button>
      </form>
    </div>
  );
}
