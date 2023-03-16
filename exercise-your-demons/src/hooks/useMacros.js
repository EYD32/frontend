import { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

const useMacros = () => {
    
const { user_id } = useParams()
const [fat, setFat] = useState(0);
const [carb, setCarb] = useState(0);
const [protein, setProtein] = useState(0);
const [fatGoal, setFatGoal] = useState(0)
const [carbGoal, setCarbGoal] = useState(0)
const [proteinGoal, setProteinGoal] = useState(0)


useEffect(() => {
    axios
    .get(`http://localhost:5555/api/user/${user_id}`)
    .then((res) => {
        setProtein(res.data.protein)
        setFatGoal(res.data.fatGoal)
        setCarbGoal(res.data.carbGoal)
        setProteinGoal(res.data.proteinGoal)
        res.data.fat < fatGoal ? setFat(res.data.fat) : setFat(res.data.fatGoal)
        res.data.carb < carbGoal ? setCarb(res.data.carb) : setCarb(res.data.carbGoal)  
        res.data.protein < proteinGoal ? setProtein(res.data.protein) : setProtein(res.data.proteinGoal)      
    })
    .catch((err) => {
        console.log(err);
    });
}, [user_id, fatGoal, carbGoal, proteinGoal]);


    
  
    return [fat, carb, protein, fatGoal, carbGoal, proteinGoal];
  };
  
  export { useMacros };