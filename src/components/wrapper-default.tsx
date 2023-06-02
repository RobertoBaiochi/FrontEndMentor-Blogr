import { styled } from "styled-components";
import { ReactNode } from "react";

const Wrapper = styled.div`
  width: 100%;
  max-width: 120rem;
  padding: 5rem 2rem 3rem;
  margin-inline: auto;
  border: 1px solid green;
`;

interface WrapperDefaultProps {
  children: ReactNode;
}

export default function WrapperDefault({ children }: WrapperDefaultProps) {
  return <Wrapper>{children}</Wrapper>;
}
