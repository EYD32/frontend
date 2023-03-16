import { Link } from 'react-router-dom'; 
import styled from 'styled-components';
import MacroTracker from './MacroTracker';
import MacroForm from './MacroForm'

export default function Profile() {
  return (
    <div className='profile'>
      <h1>Every moment I live is agony</h1>
      <MacroTracker/>
      <MacroForm/>
    </div>
  );
}
