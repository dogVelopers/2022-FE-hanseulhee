import styled from 'styled-components';

function CircleButton() {
  return (
    <StyledSizeWrapper>
      <StyledButton color="#ed6a5d"></StyledButton>
      <StyledButton color="#F4BD4F"></StyledButton>
      <StyledButton color="#60C453"></StyledButton>
    </StyledSizeWrapper>
  );
}

export default CircleButton;

const StyledSizeWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledButton = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  margin-right: 0.2rem;
  background-color: ${props => props.color};
`;
