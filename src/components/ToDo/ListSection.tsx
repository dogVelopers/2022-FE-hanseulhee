import styled from 'styled-components';

interface Props {
  todos: ITodo[];
}

function ListSection({ todos }: Props) {
  return (
    <StyledSection>
      {todos.map(todo => (
        <StyledCommand key={todo.id}>
          <StyledPath>~/Documents/todo</StyledPath>
          {todo.fields.name}
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
  background-color: #008aff;
  font-size: 0.8rem;
  border-radius: 0px 10px 100px 0;
`;
