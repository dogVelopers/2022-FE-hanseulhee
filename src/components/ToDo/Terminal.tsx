import styled from 'styled-components';
import CircleButton from './CircleButton';
import InputSection from './InputSection';
import ListSection from './ListSection';
import useTodos from '../../hooks/api/useTodos';
import Greetings from './Code/Greetings';
import colors from '../../styles/Colors';

function Terminal() {
  const { createTodo, todos, deleteTodo, isLoading } = useTodos();

  return (
    <StyledContainer>
      <StyledNav>
        <CircleButton></CircleButton>
        <StyledTitle>TodoList</StyledTitle>
      </StyledNav>
      <StyledTerminalBoard>
        <Greetings />
        <InputSection createTodo={createTodo} />
        <ListSection todos={todos} deleteTodo={deleteTodo} />
      </StyledTerminalBoard>
      {/* {isLoading ? <StyledLoader /> : <></>} */}
      {isLoading && <StyledLoader />}
    </StyledContainer>
  );
}

export default Terminal;

const StyledContainer = styled.div`
  position: relative;
  height: 40%;
  width: 60%;
  background-color: ${colors.grey700};
  border-radius: 15px;
`;

const StyledNav = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.4rem 0.7rem;
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
  background-color: ${colors.grey500};
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

const StyledLoader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(5px);
  opacity: 0.5;
`;
