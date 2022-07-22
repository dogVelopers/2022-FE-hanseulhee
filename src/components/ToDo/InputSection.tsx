import { FormEvent } from 'react';
import useTextInput from '../../hooks/useTextInput';
import styled from 'styled-components';
import colors from '../../styles/Colors';
import useTodos from '../../hooks/api/useTodos';

function InputSection() {
  const { createTodo } = useTodos();
  const { value, onChange, clearValue } = useTextInput({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    createTodo(value);
    clearValue();
  }

  return (
    <section>
      <form onSubmit={onSubmit}>
        <StyledPath>~/Documents/NewTodo</StyledPath>
        <input value={value} onChange={onChange} />
      </form>
    </section>
  );
}

export default InputSection;

const StyledPath = styled.span`
  padding: 0.1rem 0.3rem;
  margin-right: 1rem;
  background-color: ${colors.yellow};
  font-size: 0.8rem;
  border-radius: 0px 10px 100px 0;
`;
