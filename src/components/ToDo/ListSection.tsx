import styled from 'styled-components';
import useTodos from '../../hooks/api/useTodos';
import colors from '../../styles/Colors';
import fontWeight from '../../styles/Font';
import { Link } from 'react-router-dom';

function ListSection() {
  const { deleteTodo, todos } = useTodos();

  function onClickDeleteBtn(id: string) {
    if (confirm('삭제하시겠습니까?')) {
      deleteTodo(id);
    }
  }

  return (
    <StyledSection>
      {todos.map(todo => (
        <StyledCommand key={todo.id}>
          <StyledPath>~/Documents/todo</StyledPath>
          <Link to={`/todos/${todo.id}`}>{todo.fields.name}</Link>
          <StyledDeleteBtn onClick={() => onClickDeleteBtn(todo.id)}>X</StyledDeleteBtn>
        </StyledCommand>
      ))}
    </StyledSection>
  );
}

export default ListSection;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0.2rem 0;
`;

const StyledCommand = styled.div`
  margin: 0.2rem 0;
`;

const StyledPath = styled.span`
  padding: 0.1rem 0.3rem;
  margin-right: 1rem;
  background-color: ${colors.blue};
  font-size: 0.8rem;
  border-radius: 0px 10px 100px 0;
`;

const StyledDeleteBtn = styled.button`
  position: relative;
  font-weight: ${fontWeight.bold};
  right: -1rem;
`;
