import { styled } from "styled-components";

const LoginBtn = styled.button`
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--headings);
`;

export default function LoginButton() {
  return <LoginBtn>Login</LoginBtn>;
}
