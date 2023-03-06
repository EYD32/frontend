import { useState } from 'react';
import styled from 'styled-components';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const MacroWrapper = styled.div`
  border: 1px solid grey;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
`;

const MacroSection = styled(CircularProgressbar)`
  width: 80px;
  height: 80px;
  margin-right: 10px;

  .CircularProgressbar-path {
    stroke-width: 10px;
  }

  .CircularProgressbar-trail {
    stroke: #eee;
    stroke-width: 10px;
    opacity: 0;
  }
`;

const FatSection = styled(MacroSection)`
  color: #f39c12;
  position: absolute;
  top: 10;
  left: 10;
  
`;

const CarbsSection = styled(MacroSection)`
  color: #3498db;
  position: absolute;
  top: 10;
  left: 10;
`;

const ProteinSection = styled(MacroSection)`
  color: #e74c3c;
  position: absolute;
  top: 10;
  left: 10;
`;



const Logout = () => {
  const [fat, setFat] = useState(25);
  const [carbs, setCarbs] = useState(50);
  const [protein, setProtein] = useState(25);
  
  // const total = fat + carbs + protein;
  // const fatPercentage = Math.round((fat / total) * 100);
  // const carbsPercentage = Math.round((carbs / total) * 100);
  // const proteinPercentage = Math.round((protein / total) * 100);

  return (
    <MacroWrapper>
      <FatSection
        value={fat}
        text={`${fat}g`}
        strokeWidth={10}
        styles={{
          path: {
            stroke: '#f39c12',
            strokeLinecap: 'butt',
          },
          trail: {
            stroke: '#eee',
            strokeLinecap: 'round',
          },
          text: {
            fill: '#f39c12',
            fontSize: '16px',
            fontWeight: 'bold',
          },
        }}
      />
      <CarbsSection
        value={carbs}
        strokeWidth={10}
        styles={{
          path: {
            transform: 'rotate(0.25turn)',
            transformOrigin: 'center center',
            stroke: '#3498db',
            strokeLinecap: 'butt',
          },
          trail: {
            stroke: '#eee',
            strokeLinecap: 'round',
          },
          text: {
            fill: '#3498db',
            fontSize: '16px',
            fontWeight: 'bold',
          },
        }}
      />
      <ProteinSection
        value={protein}
        minValue={0}
        maxValue={100}
        strokeWidth={10}
        styles={{
          path: {
            transform: 'rotate(0.75turn)',
            transformOrigin: 'center center',
            stroke: '#e74c3c',
            strokeLinecap: 'butt',
          },
          trail: {
            stroke: '#eee',
            strokeLinecap: 'round',
          },
          text: {
            fill: '#e74c3c',
            fontSize: '16px',
            fontWeight: 'bold',
          },
        }}
      />
    </MacroWrapper>
  );
  };



export default Logout;