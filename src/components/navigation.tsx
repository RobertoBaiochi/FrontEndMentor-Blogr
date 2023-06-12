import { styled, css } from "styled-components";
import ListWithTitleHeader from "./list-with-title-navigation";
import ListItemLink from "./listitem-link";
import UserArea from "./user-area";
import { DefaultTheme } from "styled-components";

interface HeaderNavigationProps {
  menuIsVisible: boolean;
}

const makeMenuVisible = (theme: DefaultTheme) => css`
  top: 10rem;
  opacity: 1;
`;

const Navigation = styled.nav<HeaderNavigationProps>`
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

    /* overflow-y: auto; */

    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
      rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;

    z-index: 1;

    transition: all 300ms ease-in-out;

    ${menuIsVisible && makeMenuVisible(theme)}

    @media ${theme.media.desktopBreakpoint} {
      width: 100%;
      background: none;
      position: static;
      opacity: 1;
      transform: translateX(0);
      box-shadow: none;
      overflow-y: hidden;
      background: red;

      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      gap: 1.5rem;
    }
  `};
`;

const GroupList = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1.5rem;

    @media ${theme.media.desktopBreakpoint} {
      flex-direction: row;
      flex-grow: 1;
      position: absolute;
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

export default function HeaderNavigation({
  menuIsVisible,
}: HeaderNavigationProps) {
  return (
    <Navigation menuIsVisible={menuIsVisible}>
      <GroupList>
        <ListWithTitleHeader title="Product" menuIsVisible={menuIsVisible}>
          <ListItemLink key="Overview" item="Overview" link="/" />
          <ListItemLink key="Pricing" item="Pricing" link="/" />
          <ListItemLink key="Marketplace" item="Marketplace" link="/" />
          <ListItemLink key="Features" item="Features" link="/" />
          <ListItemLink key="Integrations" item="Integrations" link="/" />
        </ListWithTitleHeader>
        <ListWithTitleHeader title="Company" menuIsVisible={menuIsVisible}>
          <ListItemLink key="About" item="About" link="/" />
          <ListItemLink key="Team" item="Team" link="/" />
          <ListItemLink key="Blog" item="Blog" link="/" />
          <ListItemLink key="Careers" item="Careers" link="/" />
        </ListWithTitleHeader>
        <ListWithTitleHeader title="Connect" menuIsVisible={menuIsVisible}>
          <ListItemLink key="Contact" item="Contact" link="/" />
          <ListItemLink key="Newsletter" item="Newsletter" link="/" />
          <ListItemLink key="LinkedIn" item="LinkedIn" link="/" />
        </ListWithTitleHeader>
      </GroupList>

      <Divisor />

      <UserArea />
    </Navigation>
  );
}
