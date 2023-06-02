import { styled } from 'styled-components';

const HeadingTitle = styled.h2`
  font-size: 3rem;
  font-weight: 600;
  margin: 2rem auto 1rem;
  color: var(--headings);
`;

const ParagraphText = styled.p`
  font-size: 1.8rem;
  line-height: 2.5rem;
  margin: 2rem auto 5rem;
  color: var(--body-text);
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