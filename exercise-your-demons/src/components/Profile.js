import { Link } from 'react-router-dom'; 
import styled from 'styled-components';
import MacroTracker from './MacroTracker';
import MacroForm from './MacroForm'
import { useMacros } from '../hooks/useMacros';

export default function Profile() {
  const [fat, carb, protein, fatGoal, carbGoal, proteinGoal, user_id ] = useMacros();
  
  return (
    <div className='profile'>
      <h1>Every moment I live is agony</h1>
      <MacroTracker fat={fat} protein={protein} carb={carb} fatGoal={fatGoal} proteinGoal={proteinGoal} carbGoal={carbGoal}/>
      <MacroForm fat={fat} protein={protein} carb={carb} id={user_id}/>
    </div>
  );
}
