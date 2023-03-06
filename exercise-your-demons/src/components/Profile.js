import { Link } from 'react-router-dom'; 
import styled from 'styled-components';
import MacroTracker from './MacroTracker';


export default function Profile() {
  return (
    <div className='profile'>
      <h1>Every moment I live is agony</h1>
      <MacroTracker/>
      
    </div>
  );
}
