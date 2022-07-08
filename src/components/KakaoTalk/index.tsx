import styled from 'styled-components';
import kakaoLogo from '../../images/kakao.png';

interface Props {
  nickName: string;
  message: string;
}

function KakaoTalk({ nickName, message }: Props) {
  return (
    <StyledSizeWrapper>
      <StyledKakaoImg src={kakaoLogo} alt="img" />
      <StyledInfromWrapper>
        <StyledName>{nickName}</StyledName>
        <StyledSummary>{message}</StyledSummary>
      </StyledInfromWrapper>
    </StyledSizeWrapper>
  );
}

export default KakaoTalk;

const StyledSizeWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 18rem;
  height: 5.5rem;
  border-radius: 1.2rem;
  padding: 1rem;
  margin-bottom: 0.6rem;

  border: 1px solid #58585a;
  background-color: rgb(58, 58, 58);
  color: white;
  cursor: pointer;
`;

const StyledKakaoImg = styled.img`
  width: 4rem;
  height: 3rem;
  object-fit: cover;
  border-radius: 0.7rem;
`;

const StyledInfromWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 1rem 1.3rem;
  width: 100%;
`;

const StyledName = styled.span`
  font-size: 1rem;
  font-weight: bold;
`;

const StyledSummary = styled.span`
  font-size: 0.9rem;
  font-weight: 300;
`;
