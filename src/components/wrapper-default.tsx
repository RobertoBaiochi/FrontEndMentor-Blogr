import { styled } from "styled-components";
import { ReactNode } from "react";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 120rem;
  padding: 5rem 2rem 3rem;
  margin-inline: auto;
`;

interface WrapperDefaultProps {
  children: ReactNode;
}

export default function WrapperDefault({ children }: WrapperDefaultProps) {
  return <Wrapper>{children}</Wrapper>;
}
