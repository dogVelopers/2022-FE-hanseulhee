import styled from 'styled-components';
import colors from '../../styles/Colors';
import font from '../../styles/Font';

function Memo() {
  return (
    <StyledItemWrapper>
      <StyledItemInWrapper placeholder="메모장"></StyledItemInWrapper>
    </StyledItemWrapper>
  );
}

export default Memo;

const StyledItemWrapper = styled.form`
  position: relative;
  margin: 1.5rem 0;
`;

const StyledItemInWrapper = styled.textarea`
  width: 100%;
  height: auto;
  min-height: 18rem;
  padding: 0.8rem;
  border-radius: 0.4rem;
  color: ${colors.white};
  font-size: ${font.light};
  background-color: ${colors.grey500};
  resize: none;
  border: none;
  &:focus {
    outline: none;
  }
`;

const StyledContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
`;
