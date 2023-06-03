"use client";
import { styled } from "styled-components";
import Link from "next/link";
import { Ubuntu } from "next/font/google";

import WrapperDefault from "./wrapper-default";
import LogoLink from "./logo-button";

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

  ul {
    li + li {
      margin-top: 1rem;
    }

    a {
      color: var(--footer-text);
    }
  }
`;

const ListTitle = styled.span`
  display: inline-block;
  font-weight: 500;
  color: var(--white-text);
  margin-bottom: 4rem;
`;

export default function Footer() {
  return (
    <FooterContainer className={ubunto.className}>
      <WrapperDefault>
        <GridContainer>
          <LogoLink />

          <div>
            <ListTitle>Product</ListTitle>
            <ul>
              <li>
                <Link href="/">Overview</Link>
              </li>
              <li>
                <Link href="/">Pricing</Link>
              </li>
              <li>
                <Link href="/">MarketPlace</Link>
              </li>
              <li>
                <Link href="/">Features</Link>
              </li>
              <li>
                <Link href="/">Integrations</Link>
              </li>
            </ul>
          </div>

          <div>
            <ListTitle>Company</ListTitle>
            <ul className={ubunto.className}>
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/">Team</Link>
              </li>
              <li>
                <Link href="/">Blog</Link>
              </li>
              <li>
                <Link href="/">Careers</Link>
              </li>
            </ul>
          </div>

          <div>
            <ListTitle>Connect</ListTitle>
            <ul className={ubunto.className}>
              <li>
                <Link href="/">Contact</Link>
              </li>
              <li>
                <Link href="/">Newsletter</Link>
              </li>
              <li>
                <Link href="/">LinkedIn</Link>
              </li>
            </ul>
          </div>
        </GridContainer>
      </WrapperDefault>
    </FooterContainer>
  );
}
