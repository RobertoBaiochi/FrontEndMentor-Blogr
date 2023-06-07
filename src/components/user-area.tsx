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
