import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { instance } from '../libs/api';
import styled from 'styled-components';
import colors from '../styles/Colors';
import font from '../styles/Font';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Terminal from '../components/Detail/Terminal';

function Detail() {
  const [todo, setTodo] = useState<ITodo | null>(null);
  const { todoId } = useParams();

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

const StyledContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
`;

const StyledIntroText = styled.h1`
  font-size: 1.3rem;
  letter-spacing: 0.02px;
  font-weight: ${font.bold};
`;

const StyledSubSummary = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  font-weight: ${font.light};
  margin: 1rem 0 1.6rem 0;
`;
