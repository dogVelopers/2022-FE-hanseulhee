import styled from 'styled-components';
import colors from '../../styles/Colors';

interface Props {
  title?: string;
}

function Nav({ title }: Props) {
  return (
    <StyledNav>
      <StyledLine></StyledLine>
      <StyledTitle>{title}</StyledTitle>
    </StyledNav>
  );
}

export default Nav;

const StyledNav = styled.nav`
  width: 100%;
  height: 8rem;
`;

const StyledLine = styled.div`
  width: 4.36rem;
  border-bottom: 3px solid white;
  margin-bottom: 0.45rem;
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
  color: ${colors.white};
`;
