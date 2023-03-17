import styled from 'styled-components';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const MacroWrapper = styled.div`
  border: 1px solid grey;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35rem;
`;

const MacroGoals = styled(CircularProgressbar)`
 width: 16rem;
  height: 16rem;
border-radius: 50%;
  .CircularProgressbar-path {
    stroke-width: 1rem;
  }

  .CircularProgressbar-trail {
    stroke: #eee;
    stroke-width: 1.5rem;
    opacity: 0;
  }
`

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

const FatGoalSection = styled(MacroGoals)`
color: #f39c12;
  position: absolute;
`
const CarbGoalSection = styled(MacroGoals)`
color: #3498db;
  position: absolute;
`
const ProteinGoalSection = styled(MacroGoals)`
color: #e74c3c;
  position: absolute;
`


const MacroTracker = (props) => {
  const macroTotal = props.fatGoal + props.proteinGoal + props.carbGoal
  return (
    <MacroWrapper>
      <FatSection
        value={props.fat / macroTotal  * 100 }
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
        value={props.carb / macroTotal * 100}
        strokeWidth={10}
        styles={{
          path: {
            transform: `rotate(${props.fatGoal / 100}turn)`,
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
        value={props.protein / macroTotal * 100}
        strokeWidth={10}
        styles={{
          path: {
            circleRatio: 0.5,
            transform: `rotate(${(props.carbGoal + props.fatGoal) / 100}turn)`,
            transformOrigin: 'center center',
            stroke: '#e74c3c',
            strokeLinecap: 'butt',
          },
          trail: {
            circleRatio: 0.5,
            stroke: '#eee',
            strokeLinecap: 'round',
          },
          
        }}
      />
      <FatGoalSection
        value={props.fatGoal / macroTotal * 100}
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
         
        }}
      />
      <CarbGoalSection
        value={props.carbGoal / macroTotal * 100}
        strokeWidth={10}
        styles={{
          path: {
            transform: `rotate(${props.fatGoal / macroTotal}turn)`,
            transformOrigin: 'center center',
            stroke: '#3498db',
            strokeLinecap: 'butt',
          },
          trail: {
            stroke: '#eee',
            strokeLinecap: 'round',
          },
          
        }}
      />
      <ProteinGoalSection
        value={props.proteinGoal / macroTotal * 100}
        strokeWidth={10}
        styles={{
          path: {
            circleRatio: 0.5,
            transform: `rotate(${(props.carbGoal + props.fatGoal) / macroTotal}turn)`,
            transformOrigin: 'center center',
            stroke: '#e74c3c',
            strokeLinecap: 'butt',
          },
          trail: {
            circleRatio: 0.5,
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
