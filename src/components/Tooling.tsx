import { styled, css } from "styled-components";
import WrapperDefault from "./wrapper-default";
import ContentText from "./content-text";

const imgLaptopMobile = "/assets/images/illustration-laptop-mobile.svg";
const imgLaptopDesktop = "/assets/images/illustration-laptop-desktop.svg";

const ToolingSection = styled.section`
  ${({ theme }) => css`
    width: 100%;

    @media ${theme.media.desktopBreakpoint} {
      margin: 15rem auto;
    }
  `};
`;

const ContainerGrid = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;

    picture {
      @media ${theme.media.desktopBreakpoint} {
        transform: translateX(-35%);
      }
    }

    @media ${theme.media.desktopBreakpoint} {
      grid-template-columns: repeat(2, 1fr);
      grid-auto-flow: dense;
      gap: 5rem;
    }
  `};
`;

const ImgGrid = styled.img`
  ${({ theme }) => css`
    width: 100%;
    object-fit: contain;
    margin: 4rem auto;
    transform: scale(1.4);

    @media ${theme.media.tabletBreakpoint} {
      transform: scale(1.2);
    }

    @media ${theme.media.desktopBreakpoint} {
      transform: scale(1.5);
    }
  `};
`;

const TextContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    text-align: center;
    margin: 2rem auto;

    @media ${theme.media.tabletBreakpoint} {
      width: 50%;
    }

    @media ${theme.media.desktopBreakpoint} {
      width: 100%;
    }
  `};
`;

export default function Tooling() {
  return (
    <ToolingSection>
      <WrapperDefault>
        <ContainerGrid>
          <picture>
            <source srcSet={imgLaptopDesktop} media="(min-width: 913px)" />
            <ImgGrid src={imgLaptopMobile} />
          </picture>

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
