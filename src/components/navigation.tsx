import { styled, css } from "styled-components";
import ListWithTitleHeader from './list-with-title-navigation';
import ListItemLink from './listitem-link';
import UserArea from './user-area';
import { DefaultTheme } from 'styled-components';

interface HeaderNavigationProps {
  menuIsVisible: boolean;
}

const makeMenuVisible = (theme: DefaultTheme) => css`
  top: 10rem;
  opacity: 1;

  @media ${theme.media.smartphoneBreakpoint} {
      top: 12rem;
    }
`;

const Navigation = styled.nav<HeaderNavigationProps>`
  ${({ theme, menuIsVisible }) => css`
    width: calc(100% - 4rem);
    background: var(--white-text);
    padding: 3rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1.5rem;

    position: absolute;
    top: -120vh;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;

    overflow-y: auto;

    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
      rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;

    z-index: 1;

    transition: all 300ms ease-in-out;

    ${menuIsVisible && makeMenuVisible(theme)}
  `};
`;

const Divisor = styled.span`
  ${({theme}) => css`
    width: 100%;
    height: 1px;
    background: var(--footer-text);
  `};
`;

export default function HeaderNavigation({ menuIsVisible }: HeaderNavigationProps) {
  return (
    <Navigation menuIsVisible={menuIsVisible}>
      <ListWithTitleHeader title='Product' menuIsVisible={menuIsVisible}>
        <ListItemLink key='Overview' item='Overview' link='/' />
        <ListItemLink key='Pricing' item='Pricing' link='/' />
        <ListItemLink key='Marketplace' item='Marketplace' link='/' />
        <ListItemLink key='Features' item='Features' link='/' />
        <ListItemLink key='Integrations' item='Integrations' link='/' />
      </ListWithTitleHeader>
      <ListWithTitleHeader title='Company' menuIsVisible={menuIsVisible}>
        <ListItemLink key='About' item='About' link='/' />
        <ListItemLink key='Team' item='Team' link='/' />
        <ListItemLink key='Blog' item='Blog' link='/' />
        <ListItemLink key='Careers' item='Careers' link='/' />
      </ListWithTitleHeader>
      <ListWithTitleHeader title='Connect' menuIsVisible={menuIsVisible}>
        <ListItemLink key='Contact' item='Contact' link='/' />
        <ListItemLink key='Newsletter' item='Newsletter' link='/' />
        <ListItemLink key='LinkedIn' item='LinkedIn' link='/' />
      </ListWithTitleHeader>

      <Divisor />

      <UserArea />
    </Navigation>
  );
}
