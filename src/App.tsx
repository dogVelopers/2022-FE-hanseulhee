import { useState } from 'react';
import styled from 'styled-components';

function App() {
  const [number, setNumber] = useState<number>(1);
  // option shift F
  return (
    <div>
      <StyledH1 num={number} backgroundColor="pink">
        안녕
      </StyledH1>
      <p>{number}</p>
      <button onClick={() => setNumber(prev => prev + 1)}>up</button>
    </div>
  );
}

export default App;

interface StyledH1Props {
  num: number;
  backgroundColor: string;
}

const StyledH1 = styled.h1<StyledH1Props>`
  /* color: ${props => (props.num % 2 === 0 ? 'red' : 'blue')}; */
  color: ${({ num }) => (num % 2 === 0 ? 'yellow' : 'blue')};
  background-color: ${({ backgroundColor }) => backgroundColor};
  font-size: ${props => props.num}px;
`;
