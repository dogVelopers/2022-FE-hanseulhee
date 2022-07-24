import styled from 'styled-components';
import colors from '../../styles/Colors';
import fontWeight from '../../styles/Font';

function Memo() {
  return (
    <StyledForm>
      <StyledTextarea placeholder="메모장"></StyledTextarea>
    </StyledForm>
  );
}

export default Memo;

const StyledForm = styled.form`
  position: relative;
  margin: 1.5rem 0;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  height: auto;
  min-height: 18rem;
  padding: 0.8rem;
  border-radius: 0.4rem;
  color: ${colors.white};
  font-size: ${fontWeight.light};
  background-color: ${colors.grey500};
  resize: none;
  border: none;
  &:focus {
    outline: none;
  }
`;
