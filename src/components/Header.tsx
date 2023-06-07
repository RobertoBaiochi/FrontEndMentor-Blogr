"use client";
import { useState } from "react";
import { styled, css } from "styled-components";
import LogoLink from "./logo-button";
import MenuButton from "./menu-button";
import HeaderNavigation from "./navigation";

const HeaderContainer = styled.header`
  ${({ theme }) => css`
    width: 100%;
    max-width: 120rem;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4rem 2rem 0;

    @media ${theme.media.smartphoneBreakpoint} {
      padding: 4rem 2rem;
    }
  `};
`;

export default function Header() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const handleMenuClick = () => {
    setMenuIsVisible((prev) => !prev);
    console.log(menuIsVisible);
  };

  return (
    <HeaderContainer>
      <LogoLink />
      <HeaderNavigation menuIsVisible={menuIsVisible} />
      <MenuButton onClick={handleMenuClick} isVisible={menuIsVisible} />
    </HeaderContainer>
  );
}
