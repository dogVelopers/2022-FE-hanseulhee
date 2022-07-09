import styled from 'styled-components';
import CircleButton from './CircleButton';
import InputSection from './InputSection';
import ListSection from './ListSection';
import useTodos from '../../hooks/api/useTodos';
import Greetings from './Code/Greetings';

function Terminal() {
  const { createTodo, todos } = useTodos();

  return (
    <StyledContainer>
      <StyledNav>
        <CircleButton></CircleButton>
        <StyledTitle>TodoList</StyledTitle>
      </StyledNav>
      <StyledTerminalBoard>
        <Greetings />
        <InputSection createTodo={createTodo} />
        <ListSection todos={todos} />
      </StyledTerminalBoard>
    </StyledContainer>
  );
}

export default Terminal;

const StyledContainer = styled.div`
  position: relative;
  height: 40%;
  width: 60%;
  background-color: rgb(30, 30, 30);
  border-radius: 0.7rem;
`;

const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.4rem 0.7rem;
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
  background-color: rgb(51, 51, 51);
`;

const StyledTitle = styled.span`
  font-size: 0.7rem;
  margin: 0 40%;
`;

const StyledTerminalBoard = styled.div`
  position: relative;
  width: 100%;
  height: 31rem;
  padding: 0.7rem 1rem;
  overflow-y: scroll;
`;
