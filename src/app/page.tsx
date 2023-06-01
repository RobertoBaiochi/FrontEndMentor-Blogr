"use client";

import { styled } from 'styled-components';

import Hero from '@/components/Hero';

const MainWrapper = styled.main`
  width: 100%;
  background: red;
`;

export default function Home() {
  return (
    <MainWrapper>
      <p>teste</p>
      <Hero />
    </MainWrapper>
  )
}
