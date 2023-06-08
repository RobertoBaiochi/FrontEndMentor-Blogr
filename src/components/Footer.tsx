"use client";
import { styled, css } from "styled-components";
import { Ubuntu } from "next/font/google";

import WrapperDefault from "./wrapper-default";
import LogoLink from "./logo-button";
import ListWithTitle from './list-with-title-footer';
import ListItemLink from './listitem-link';

const ubunto = Ubuntu({ weight: ["400", "500", "700"], subsets: ["latin"] });

const FooterContainer = styled.footer`
  width: 100%;
  background: var(--footer-bg);
  border-radius: 0 10rem 0 0;
`;

const GridContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr;
    margin: 3rem 0;
    gap: 5rem;
    text-align: center;
    font-size: 1.8rem;
    color: var(--footer-text);

    @media ${theme.media.tabletBreakpoint} {
      align-items: start;
      grid-template-columns: repeat(4, 1fr);
      text-align: left;
    }
  `};
`;

export default function Footer() {
  return (
    <FooterContainer className={ubunto.className}>
      <WrapperDefault>
        <GridContainer>
          <LogoLink />

          <ListWithTitle title='Product'>
            <ListItemLink key='Overview-footer' link='/' item='Overview'/>
            <ListItemLink key='Pricing-footer' link='/' item='Pricing'/>
            <ListItemLink key='Marketplace-footer' link='/' item='Marketplace'/>
            <ListItemLink key='Features-footer' link='/' item='Features'/>
            <ListItemLink key='Integrations-footer' link='/' item='Integrations'/>
          </ListWithTitle>

          <ListWithTitle title='Company'>
            <ListItemLink key='About-footer' link='/' item='About'/>
            <ListItemLink key='Team-footer' link='/' item='Team'/>
            <ListItemLink key='Blog-footer' link='/' item='Blog'/>
            <ListItemLink key='Careers-footer' link='/' item='Careers'/>
          </ListWithTitle>

          <ListWithTitle title='Connect'>
            <ListItemLink key='Contact-footer' link='/' item='Contact'/>
            <ListItemLink key='Newsletter-footer' link='/' item='Newsletter'/>
            <ListItemLink key='LinkedIn-footer' link='/' item='LinkedIn'/>
          </ListWithTitle>

        </GridContainer>
      </WrapperDefault>
    </FooterContainer>
  );
}
