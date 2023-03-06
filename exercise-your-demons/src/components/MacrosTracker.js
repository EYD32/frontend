import { useState } from 'react';
import styled from 'styled-components';

const MacroCircle = styled.div`
  width: 200px;
  height: 200px;
  background-color: #ddd;
  border-radius: 50%;
  position: relative;

  .slice {
    position: absolute;
    width: 200px;
    height: 200px;
    clip: rect() (0, 100px, 200px, 0);
    transform: rotate(0dg);
    border-radius: 50%;
  }

  .protein {
    background-color: green;
  }

  .carb {
    background-color: blue;
  }

  .fat {
    background-color: black;
  }
`;

export default function MacrosTracker() {
  const [protein, setProtein] = useState(25);
  const [fat, setFat] = useState(50);
  const [carb, setCarb] = useState(75);

  const updateMacro = (percentage) => {
    const angle = (percentage / 100) * 360;
    return {
      trasnsform: `rotate(${angle}deg)`,
      clip: `rect(0, 200px, 200px, ${100 - (percentage / 100) * 200}px)`,
    };
  };

  return (
    <MacroCircle>
      <div className='protein' style={updateMacro(protein)} />
      <div className='carb' style={updateMacro(carb)} />
      <div className='fat' style={updateMacro(fat)} />
      <button onClick={() => setProtein(protein + 10)} >Proteingsd</button>
    </MacroCircle>
  );
}
