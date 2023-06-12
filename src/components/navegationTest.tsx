import { styled, css, DefaultTheme } from "styled-components";

import UserArea from "./user-area";

const arrowDesktop = "/assets/images/icon-arrow-light.svg";
const arrowMobile = "/assets/images/icon-arrow-dark.svg";

interface NavigationTesteProps {
  menuIsVisible: boolean;
}

const makeMenuVisible = (theme: DefaultTheme) => css`
  top: 10rem;
  opacity: 1;
`;

const NavigationTag = styled.nav<NavigationTesteProps>`
  ${({ theme, menuIsVisible }) => css`
    width: calc(100% - 4rem);
    background: var(--white-text);

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1.5rem;
    padding: 2rem;

    position: absolute;
    top: -120vh;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;

    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
      rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;

    z-index: 1;

    transition: all 300ms ease-in-out;

    ${menuIsVisible && makeMenuVisible(theme)}

    @media ${theme.media.desktopBreakpoint} {
      width: 100%;
      position: static;
      transform: translateX(0%);
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      background: red;
      opacity: 1;
      box-shadow: none;
    }
  `};
`;

const UlTag = styled.ul`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    pointer-events: all;

    li {
      position: relative;
      background: blue;

      @media (hover: hover) {
        &:hover ${UlTagInside} {
          display: flex;
        }

        &:hover img {
          transform: rotate(180deg);
        }
      }

      @media ${theme.media.desktopBreakpoint} {
        &:hover ${UlTagInside} {
          top: 4rem;
        }
      }
    }

    @media ${theme.media.desktopBreakpoint} {
      justify-content: left;
      flex-direction: row;
    }
  `};
`;

const UlTitle = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.2rem;
    font-weight: 700;
    color: var(--headings);
    gap: 0.5rem;

    @media ${theme.media.desktopBreakpoint} {
      color: var(--white-text);
    }
  `};
`;

const UlTagInside = styled.ul`
  ${({ theme }) => css`
    width: 100%;
    display: none;
    align-items: center;
    justify-content: left;
    flex-direction: column;
    gap: 1rem;

    @media ${theme.media.desktopBreakpoint} {
      width: 130px;
      display: flex;
      position: absolute;
      top: -100vh;
      left: 0;
      background: var(--white-text);
    }
  `};
`;

const Divisor = styled.span`
  ${({ theme }) => css`
    width: 100%;
    height: 1px;
    background: var(--footer-text);

    @media ${theme.media.desktopBreakpoint} {
      display: none;
    }
  `};
`;

export function NavegationTeste({ menuIsVisible }: NavigationTesteProps) {
  return (
    <NavigationTag menuIsVisible={menuIsVisible}>
      <UlTag>
        <li>
          <UlTitle>
            <p>Teste 1</p>
            <picture>
              <source srcSet={arrowDesktop} media="(min-width: 567px)" />
              <img src={arrowMobile} alt="arrow" />
            </picture>
          </UlTitle>
          <UlTagInside>
            <li>Teste 1 A</li>
            <li>Teste 1 B</li>
            <li>Teste 1 C</li>
          </UlTagInside>
        </li>

        <li>
          <UlTitle>
            <p>Teste 2</p>
            <picture>
              <source srcSet={arrowDesktop} media="(min-width: 567px)" />
              <img src={arrowMobile} alt="arrow" />
            </picture>
          </UlTitle>
          <UlTagInside>
            <li>Teste 2 A</li>
            <li>Teste 2 B</li>
            <li>Teste 2 C</li>
          </UlTagInside>
        </li>
        <li>
          <UlTitle>
            <p>Teste 3</p>
            <picture>
              <source srcSet={arrowDesktop} media="(min-width: 567px)" />
              <img src={arrowMobile} alt="arrow" />
            </picture>
          </UlTitle>
          <UlTagInside>
            <li>Teste 3 A</li>
            <li>Teste 3 B</li>
            <li>Teste 3 C</li>
          </UlTagInside>
        </li>
      </UlTag>

      <Divisor />

      <UserArea />
    </NavigationTag>
  );
}
