import { styled } from "styled-components";
import WrapperDefault from "./wrapper-default";
import ContentText from "./content-text";

const imgLaptopMobile = "/assets/images/illustration-laptop-mobile.svg";

const ToolingSection = styled.section`
  width: 100%;
`;

const ContainerGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
`;

const ImgGrid = styled.img`
  width: 100%;
  object-fit: contain;
  margin: 2rem auto;
  transform: scale(1.4);
`;

const TextContainer = styled.div`
  width: 100%;
  text-align: center;
  margin: 2rem auto;
`;

export default function Tooling() {
  return (
    <ToolingSection>
      <WrapperDefault>
        <ContainerGrid>
          <ImgGrid src={imgLaptopMobile} />

          <TextContainer>
            <ContentText
              title="Free, open, simple"
              text="Blogr is a free and open source application backed by a large community of helpful developers. It supports 
              features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
              and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
            "
            />

            <ContentText
              title="Powerful tooling"
              text="Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
              capable of producing even the most complicated sites."
            />
          </TextContainer>
        </ContainerGrid>
      </WrapperDefault>
    </ToolingSection>
  );
}
