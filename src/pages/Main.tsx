import styled from 'styled-components';
import Nav from '../components/Nav';
import KakaoTalk from '../components/KakaoTalk';
import Terminal from '../components/ToDo/Terminal';

function Main() {
  return (
    <StyledSizeMain>
      <Nav title="Dogveloper" />
      <StyledItemWrapper>
        <StyledKakaoWrapper>
          <KakaoTalk nickName="슬희" message="화이팅입니당" />
          <KakaoTalk nickName="개발자" message="응원해요" />
          <KakaoTalk nickName="개발자들" message="👍🏻👍🏻👍🏻👍🏻👍🏻" />
          <KakaoTalk nickName="FE" message="좋은 하루 되세요 !" />
        </StyledKakaoWrapper>
        <Terminal />
      </StyledItemWrapper>
    </StyledSizeMain>
  );
}

export default Main;

const StyledSizeMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10%;
`;

const StyledItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const StyledKakaoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5rem;
  height: 30rem;
  overflow-y: scroll;
`;
