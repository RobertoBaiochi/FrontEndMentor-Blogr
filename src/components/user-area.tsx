import { styled, css } from "styled-components";
import LoginButton from './login-button';
import SignUpButton from './signup-button';

const UsersContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 3rem;
    margin-top: 2rem;
    
    @media ${theme.media.desktopBreakpoint} { 
      width: 100%;
      justify-content: end;
      flex-direction: row;
      margin-top: 0;
    }
  `};
`;

export default function UserArea() {
  return (
    <UsersContainer>
      <LoginButton />
      <SignUpButton />
    </UsersContainer>
  );
}
