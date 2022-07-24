import styled from 'styled-components';
import colors from '../styles/Colors';
import fontWeight from '../styles/Font';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <StyledMainItemWrapper>
      <StyledMainInDivWrapper>
        <StyledContentWrapper>
          <StyledIntroText>헉! 페이지를 찾을 수 없어요.</StyledIntroText>
          <StyledSubSummary>
            <span>요청하신 결과를 찾을 수 없어요.</span>
            <span>입력한 URL이 올바른지 확인해주세요.</span>
          </StyledSubSummary>
        </StyledContentWrapper>
        <Link to={'/'}>
          <StyledMainButton>메인으로 돌아가기</StyledMainButton>
        </Link>
      </StyledMainInDivWrapper>
    </StyledMainItemWrapper>
  );
}

export default NotFound;

const StyledMainItemWrapper = styled.main`
  width: 100%;
  min-height: 100%;
  margin: 9rem auto;
`;

const StyledMainInDivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  font-weight: ${fontWeight.bold};
`;

const StyledSubSummary = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  font-weight: ${fontWeight.light};
  margin: 1rem 0 1.6rem 0;
`;

const StyledMainButton = styled.button`
  position: relative;
  padding: 0.15rem 6.5rem;
  height: 2.5rem;
  border-radius: 5px;
  background-color: ${colors.grey300};
  font-size: 0.75rem;
  font-weight: ${fontWeight.normal};
`;
