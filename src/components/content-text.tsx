import { styled, css } from 'styled-components';

const HeadingTitle = styled.h3`
  ${({ theme }) => css`
    font-size: 3rem;
    font-weight: 600;
    margin: 2rem auto 1rem;
    color: var(--headings);

    @media ${theme.media.desktopBreakpoint} {
      text-align: left;
    }

  `};
`;

const ParagraphText = styled.p`
  ${({ theme }) => css`
    font-size: 1.8rem;
    line-height: 2.5rem;
    margin: 2rem auto 5rem;
    color: var(--body-text);

    @media ${theme.media.desktopBreakpoint} {
      text-align: left;
    }
  `};
`;

interface ContentTextProps {
  title: string;
  text: string;
}

export default function ContentText({title, text}: ContentTextProps) {
  return (
    <>
      <HeadingTitle>{title}</HeadingTitle>
      <ParagraphText>{text}</ParagraphText>
    </>
  )
};