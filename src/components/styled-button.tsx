import Link from "next/link";
import { styled, css, DefaultTheme } from "styled-components";
import { Ubuntu } from 'next/font/google';

const ubuntu = Ubuntu({weight: ['400', '500', '700'], subsets: ['latin'] })

interface StyledButtonProps {
  text: string;
  link: string;
  withBackground?: boolean;
}

type withBackgroundProps = {
  withBackground?: boolean;
};

const buttonBackground = (theme: DefaultTheme) => css`

  a {
    background: var(--white-text);
    color: var(--cta-text);

    @media(hover: hover) {
      &:hover {
        color: var(--white-text);
        background: var(--hover-bg);
        border-color: var(--hover-bg);
      }
    }
  }
`;

const StyledButton = styled.button<withBackgroundProps>`
  ${({ theme, withBackground = true }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    
    a {
      padding: 1rem 1.5rem;
      border-radius: 3rem;
      border: 2px solid var(--white-text);
      color: var(--white-text);   
      font-size: 1.6rem;
      font-weight: 700;
      transition: all 300ms ease-in-out;

      @media(hover:hover) {
        &:hover {
          background: var(--white-text);
          color: var(--hover-bg);
        }
      }

      @media ${theme.media.smartphoneBreakpoint} {
        padding: 1.5rem 2rem;
        font-size: 1.8rem;
      }
    }

    ${withBackground && buttonBackground(theme)}
  `};
`;

export default function ButtonStyled({ text, withBackground, link }: StyledButtonProps) {
  return (
    <StyledButton withBackground={withBackground}>
      <Link className={ubuntu.className} href={link}>{text}</Link>
    </StyledButton>
  );
}
