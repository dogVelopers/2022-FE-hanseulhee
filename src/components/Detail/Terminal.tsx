import styled from 'styled-components';
import CircleButton from '../ToDo/CircleButton';
import colors from '../../styles/Colors';
import InformLink from '../ToDo/Code/InformLink';
import font from '../../styles/Font';
import Memo from './Memo';

interface Props {
  todos?: string;
}

function Terminal({ todos }: Props) {
  return (
    <StyledContainer>
      <StyledNav>
        <CircleButton></CircleButton>
        <StyledTitle>todo</StyledTitle>
      </StyledNav>
      <StyledTerminalBoard>
        <StyledSizeWrapper>
          <StyledHighlight>다 했나요?</StyledHighlight>
          <InformLink title="다 했다면 삭제 버튼을 눌러주세요!" url="/" summary="메인으로 돌아가기" />
          <StyledHighlight>시간은 금방갑니다 .. 🏃🏻‍♀️🏃🏻</StyledHighlight>
        </StyledSizeWrapper>
        <StyledPath>~/Documents/Todo</StyledPath> <StyledTodoContent>{todos}</StyledTodoContent>
        <Memo />
      </StyledTerminalBoard>
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

const StyledSizeWrapper = styled.div`
  position: relative;
  width: auto;
  margin-bottom: 1.1rem;
`;

const StyledHighlight = styled.span`
  color: #00c842;
`;

const StyledPath = styled.span`
  padding: 0.1rem 0.3rem;
  margin-right: 1rem;
  background-color: ${colors.yellow};
  font-size: 0.8rem;
  border-radius: 0px 10px 100px 0;
`;

const StyledTodoContent = styled.span`
  font-size: 1.1rem;
  font-weight: ${font.normal};
`;
