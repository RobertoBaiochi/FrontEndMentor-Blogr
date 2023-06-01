import { styled, css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css` 
    width: 50%;
    background: green;

    @media ${theme.media.tabletBreackpoint} {
      width: 70%;
    }

    @media ${theme.media.desktopBreackpoint} {
      width: 100%;
    }
  `};
`;