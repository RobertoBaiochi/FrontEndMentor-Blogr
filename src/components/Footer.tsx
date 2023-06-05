"use client";
import { styled } from "styled-components";
import { Ubuntu } from "next/font/google";

import WrapperDefault from "./wrapper-default";
import LogoLink from "./logo-button";
import ListWithTitle from './list-with-title';
import ListItemLink from './listitem-link';

const ubunto = Ubuntu({ weight: ["400", "500", "700"], subsets: ["latin"] });

const FooterContainer = styled.footer`
  width: 100%;
  background: var(--footer-bg);
  border-radius: 0 10rem 0 0;
`;

const GridContainer = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr;
  margin: 3rem 0;
  gap: 5rem;
  text-align: center;
  font-size: 1.8rem;
  color: var(--footer-text);
`;

export default function Footer() {
  return (
    <FooterContainer className={ubunto.className}>
      <WrapperDefault>
        <GridContainer>
          <LogoLink />

          <ListWithTitle title='Product'>
            <ListItemLink link='/' item='Overview'/>
            <ListItemLink link='/' item='Pricing'/>
            <ListItemLink link='/' item='Marketplace'/>
            <ListItemLink link='/' item='Features'/>
            <ListItemLink link='/' item='Integrations'/>
          </ListWithTitle>

          <ListWithTitle title='Company'>
            <ListItemLink link='/' item='About'/>
            <ListItemLink link='/' item='Team'/>
            <ListItemLink link='/' item='Blog'/>
            <ListItemLink link='/' item='Careers'/>
          </ListWithTitle>

          <ListWithTitle title='Connect'>
            <ListItemLink link='/' item='Contact'/>
            <ListItemLink link='/' item='Newsletter'/>
            <ListItemLink link='/' item='LinkedIn'/>
          </ListWithTitle>

        </GridContainer>
      </WrapperDefault>
    </FooterContainer>
  );
}
