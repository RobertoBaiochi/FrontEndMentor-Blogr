import { styled, css} from 'styled-components';
import Link from "next/link";
import { LogoIcon } from "./icons/logo";

const LinkLogo = styled(Link)`
  ${({theme}) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background: red;
  `};
`;

export default function LogoLink() {
  return (
      <LinkLogo href="/">
        <LogoIcon />
      </LinkLogo>
  );
}
