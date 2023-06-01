import { styled } from 'styled-components';
import WrapperDefault from '../wrapper-default';
import LogoLink from './logo-button';
import MenuButton from './menu-button';

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function Header() {
  return (
    <WrapperDefault>
      <HeaderContainer>
        <LogoLink />
        <MenuButton />
      </HeaderContainer>
    </WrapperDefault>
  )
};
