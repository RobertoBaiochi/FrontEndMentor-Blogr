import { MouseEventHandler } from 'react';
import { styled, css } from 'styled-components';
import OpenMenuIcon from "./icons/icon-menu";
import CloseMenuIcon from './icons/icon-close';

const ButtonMenu = styled.button`
  ${({ theme }) => css`
    display: grid;
    place-content: center;
    z-index: 2;


    ${theme.media.tabletBreakpoint} {
      display: none;
    }
  `};
`;

interface MenuButtonProps { 
  onClick: MouseEventHandler;
  isVisible: boolean;
}

export default function MenuButton({ onClick, isVisible }: MenuButtonProps) {
  return (
    <ButtonMenu onClick={onClick}>
      {!isVisible && <OpenMenuIcon />}
      {isVisible && <CloseMenuIcon />}
    </ButtonMenu>
  );
}
