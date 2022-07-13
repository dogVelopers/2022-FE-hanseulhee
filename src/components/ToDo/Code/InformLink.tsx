import styled from 'styled-components';

interface Props {
  title: string;
  url: string;
  summary: string;
}

function InformLink({ title, url, summary }: Props) {
  return (
    <StyledEachUrl>
      <span>{title}</span>
      <StyledALink href={url}>{summary}</StyledALink>
    </StyledEachUrl>
  );
}

export default InformLink;

const StyledEachUrl = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30rem;
  height: 1.45rem;
`;

const StyledALink = styled.a`
  &:hover {
    text-decoration: underline;
  }
`;
