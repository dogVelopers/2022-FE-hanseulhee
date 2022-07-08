import styled from 'styled-components';

function Nav() {
  return (
    <StyledNav>
      <StyledLine></StyledLine>
      <StyledTitle>Dogveloper</StyledTitle>
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
  color: white;
`;
