import { styled, css } from 'styled-components';

const SignUpBtn = styled.button`
  ${({ theme }) => css`
    font-size: 2.2rem;  
    font-weight: 700;
    color: var(--white-text);
    background: linear-gradient(90deg, var(--intro-grd1), var(--intro-grd2));
    padding: 1.5rem 4rem;
    border-radius: 3rem;

    @media ${theme.media.tabletBreakpoint} {
      padding: 1.5rem 2rem;
    }

  `};
`;

export default function SignUpButton() {
  return (
    <SignUpBtn>Sign Up</SignUpBtn>
  )
};