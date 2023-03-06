import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import axios from 'axios'

const MacroWrapper = styled.div`
  border: 1px solid grey;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35rem;
`;

const MacroSection = styled(CircularProgressbar)`
  width: 20rem;
  height: 20rem;

  .CircularProgressbar-path {
    stroke-width: 1rem;
  }

  .CircularProgressbar-trail {
    stroke: #eee;
    stroke-width: 1rem;
    opacity: 0;
  }
`;

const FatSection = styled(MacroSection)`
  color: #f39c12;
  position: absolute;
`;

const CarbsSection = styled(MacroSection)`
  color: #3498db;
  position: absolute;
`;

const ProteinSection = styled(MacroSection)`
  color: #e74c3c;
  position: absolute;
`;



const MacroTracker = () => {
  const [fat, setFat] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [protein, setProtein] = useState(0);


  // useEffect(() => {
  //   axios.get('http://localhost:5555/api/macros')
  //   .then(res => {
  //     setFat(res.data[0].fat)
  //     setCarbs(res.data[0].carb)
  //     setProtein(res.data[0].protein)
  //     console.log(res.data[0])
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // }, []);

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
            opacity: 1,
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
            transform: `rotate(${carbs / 100}turn)`,
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
            transform: `rotate(${protein / 100}turn)`,
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

export default MacroTracker;
