import styled from 'styled-components';
import InformLink from './InformLink';

function Greetings() {
  return (
    <StyledSizeWrapper>
      <StyledHighlight>Compiled successfully!</StyledHighlight>
      <p>You can write down what to do now.</p>
      <StyledUrl>
        <InformLink title="Github:" url="https://github.com/hanseulhee" summary="https://github.com/hanseulhee" />
        <InformLink
          title="Dogveloper Url:"
          url="https://github.com/dogVelopers/2022-FE-hanseulhee"
          summary="https://github.com/dogVelopers/2022-FE-hanseulhee"
        />
      </StyledUrl>
      <StyledHighlight>You can do it!</StyledHighlight>
    </StyledSizeWrapper>
  );
}

export default Greetings;

const StyledSizeWrapper = styled.div`
  position: relative;
  width: auto;
  margin-bottom: 1.1rem;
`;

const StyledHighlight = styled.span`
  color: #00c842;
`;

const StyledUrl = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;
