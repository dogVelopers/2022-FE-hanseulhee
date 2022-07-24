import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { instance } from '../libs/api';
import styled from 'styled-components';
import font from '../styles/Font';
import Nav from '../components/Nav';
import Terminal from '../components/Detail/Terminal';
import useTodos from '../hooks/api/useTodos';

function Detail() {
  const [todo, setTodo] = useState<ITodo | null>(null);
  const { todoId } = useParams();
  const { isLoading } = useTodos();

  useEffect(() => {
    async function saveTodo() {
      const response = await instance.get<{}, ITodo>(`/todo/${todoId}`);
      setTodo(response);
    }
    saveTodo();
  }, []);

  return (
    <StyledItemWrapper>
      <Nav title={todo?.fields.name} />
      <StyledItemInWrapper>
        <Terminal todos={todo?.fields.name} />
      </StyledItemInWrapper>
      {isLoading && <StyledLoader />}
    </StyledItemWrapper>
  );
}

export default Detail;

const StyledItemWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10%;
`;

const StyledItemInWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
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
