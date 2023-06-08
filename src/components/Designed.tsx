import { styled, css } from "styled-components";
import WrapperDefault from "./wrapper-default";
import ContentText from "./content-text";

const imgEditorMobile = "/assets/images/illustration-editor-mobile.svg";

const DesignedSection = styled.section`
  ${({ theme }) => css`
    width: 100%;
    min-height: 100vh;

    h2 {
      font-size: 3rem;
      font-weight: 600;
      margin: 5rem auto 2rem;
      text-align: center;
      color: var(--headings);

      @media ${theme.media.tabletBreakpoint} {
        font-size: 4rem;
      }
    }
  
  `};
`;

const ContainerGrid = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
  `};
`;

const ImgGrid = styled.img`
  ${({ theme }) => css`
    width: 100%;
    margin: 4rem auto;
  `};
`;

const TextContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    
    text-align: center;
    margin: 2rem auto;

    @media ${theme.media.tabletBreakpoint} {
      width: 70%;
    }
  `};
`;

export default function Designed() {
  return (
    <DesignedSection>
      <WrapperDefault>
        <h2>Designed for the future</h2>

        <ContainerGrid>
          <ImgGrid src={imgEditorMobile} />

          <TextContainer>
            <ContentText
              title="Introducing an extensible editor"
              text="Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog."
            />

            <ContentText
              title="Robust content management"
              text="Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control."
            />
          </TextContainer>
        </ContainerGrid>
      </WrapperDefault>
    </DesignedSection>
  );
}
