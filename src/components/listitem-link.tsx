import Link from 'next/link';
import { styled, css } from 'styled-components';

const ListItem = styled.li`
  ${({ theme }) => css`
  
  `};
`;

export const ItemLink = styled(Link)`
  ${({ theme }) => css`
    color: var(--footer-text);
  `};
`;


interface ListItemLinkProps {
  item: string;
  link: string;
}

export default function ListItemLink({item, link}: ListItemLinkProps){
  return (
    <ListItem>
      <ItemLink href={link}>{item}</ItemLink>
    </ListItem>
  )
}