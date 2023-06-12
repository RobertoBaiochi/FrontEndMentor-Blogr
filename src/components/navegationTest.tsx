import { styled, css, DefaultTheme } from "styled-components";

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
      align-items: start;
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

    li {
      position: relative;

      @media (hover: hover) {
        &:hover ${UlTagInside} {
          display: flex;
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
    padding: 1rem 2rem;
  `};
`;

const UlTagInside = styled.ul`
  ${({ theme }) => css`
    width: 100%;
    display: none;
    align-items: center;
    justify-content: left;
    flex-direction: column;

    position: static;

    @media ${theme.media.desktopBreakpoint} {
      display: flex;
      position: absolute;
      top: -100vh;
      left: 0;
    }
  `};
`;

export function NavegationTeste({ menuIsVisible }: NavigationTesteProps) {
  return (
    <NavigationTag menuIsVisible={menuIsVisible}>
      <UlTag>
        <li>
          <UlTitle>Teste 1</UlTitle>
          <UlTagInside>
            <li>Teste 1 A</li>
            <li>Teste 1 B</li>
            <li>Teste 1 C</li>
          </UlTagInside>
        </li>

        <li>
          <UlTitle>Teste 2</UlTitle>
          <UlTagInside>
            <li>Teste 2 A</li>
            <li>Teste 2 B</li>
            <li>Teste 2 C</li>
          </UlTagInside>
        </li>
        <li>
          <UlTitle>Teste 3</UlTitle>
          <UlTagInside>
            <li>Teste 3 A</li>
            <li>Teste 3 B</li>
            <li>Teste 3 C</li>
          </UlTagInside>
        </li>
      </UlTag>

      <div></div>

      <div>
        <button>Botão 1</button>
        <button>Botão 2</button>
      </div>
    </NavigationTag>
  );
}
