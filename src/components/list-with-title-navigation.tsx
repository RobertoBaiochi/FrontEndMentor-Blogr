import { ReactNode } from "react";
import { styled, css } from "styled-components";
import { ItemLink } from "./listitem-link";

const arrowDesktop = "/assets/images/icon-arrow-light.svg";
const arrowMobile = "/assets/images/icon-arrow-dark.svg";

const ListContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 2rem;
    position: relative;

    ul {
      width: 100%;
      background: hsl(240, 2%, 95%);
      display: none;
      align-items: center;
      justify-content: left;
      flex-direction: column;
      gap: 2rem;
      padding: 2rem;
      border-radius: 0.5rem;

      ${ItemLink} {
        color: var(--body-text);
        font-size: 2.2rem;
        font-weight: 700;
      }

      @media ${theme.media.desktopBreakpoint} {
        display: flex;
        position: absolute;
        top: -100vh;
        left: 0;
      }
    }

    @media (hover: hover) {
      &:hover ul {
        display: flex;
      }

      &:hover img {
        transform: rotate(180deg);
      }

      ${ItemLink}:hover {
        color: pink;
      }

      @media ${theme.media.desktopBreakpoint} {
        &:hover ul {
          top: 4rem;
        }
      }
    }

    @media ${theme.media.desktopBreakpoint} {
      justify-content: left;
      flex-direction: row;
      margin-bottom: 0;
    }
  `};
`;

const ListTitle = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.2rem;
    font-weight: 700;
    color: var(--headings);
    gap: 1rem;
  `};
`;

interface ListWithTitleHeaderProps {
  title: string;
  children: ReactNode;
  menuIsVisible: boolean;
}

export default function ListWithTitleHeader({
  title,
  children,
}: ListWithTitleHeaderProps) {
  return (
    <ListContainer>
      <ListTitle>
        <p>{title}</p>
        <picture>
          <source srcSet={arrowDesktop} media="(min-width: 567px)" />
          <img src={arrowMobile} alt="arrow" />
        </picture>
      </ListTitle>

      <ul>{children}</ul>
    </ListContainer>
  );
}
