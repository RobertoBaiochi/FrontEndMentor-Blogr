"use client";
import { styled, css } from "styled-components";
import LogoLink from "./logo-button";
import MenuButton from "./menu-button";

const HeaderContainer = styled.header`
  ${({ theme }) => css`
    width: 100%;
    max-width: 120rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    overflow-y: hidden;
    padding: 2rem 2rem 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media ${theme.media.smartphoneBreakpoint} {
      padding: 5rem 2rem 3rem;
    }
  `};
`;

export default function Header() {
  return (
    <HeaderContainer>
      <LogoLink />
      <MenuButton />
    </HeaderContainer>
  );
}
