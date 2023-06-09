import { ReactNode } from 'react';
import { styled, css } from 'styled-components';

const ListContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
  `};
`;

const ListTitle = styled.h5`
  ${({ theme }) => css`
    font-size: 1.8rem;
    font-weight: 500;
    color: var(--white-text);
    margin-bottom: 4rem;
  `};
`;

const UList = styled.ul`
  ${({theme}) => css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`};
`

interface ListWithTitleProps {
  title: string;
  children: ReactNode;
}

export default function ListWithTitle({ title, children }: ListWithTitleProps) {
  return (
    <ListContainer>
      <ListTitle>{title} </ListTitle>
      <UList>
        {children}
      </UList>
    </ListContainer>
  )
};