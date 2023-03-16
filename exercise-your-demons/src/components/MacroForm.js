import { useForm } from '../hooks/useForm';
import { macroSchema } from '../validation/schema';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function MacroForm() {
  const { user_id } = useParams();

  const initialFormValues = {
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

  const [formValues, formErrors, disabled, handleChange] = useForm({
    initialFormValues,
    initialFormErrors,
    formSchema,
  });
  function handleSubmit(e) {
    axios.put(`http://localhost:5555/api/user/${user_id}`,{
        fat: formValues.fat,
        protein: formValues.protein,
        carb: formValues.carb
    }).then((res) => {
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
          onChange={handleChange}
        />
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
        <button >Update Macros</button>
      </form>
    </div>
  );
}
