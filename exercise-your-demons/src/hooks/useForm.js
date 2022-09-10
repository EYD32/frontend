import { useState } from 'react'
import * as yup from 'yup'


const useForm = ({initialFormValues,initialFormErrors, formSchema}) => {
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const validate = (name, value) => { 
        yup
        .reach(formSchema, name)
        .validate(value)
        .then(() => setFormErrors({ ...formErrors, [name]: '' }))
        .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
    };
    
    const handleChange = (e) => {
        validate(e.target.name, e.target.value);
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };
    return [formValues,formErrors, handleChange]
}

export {useForm}
