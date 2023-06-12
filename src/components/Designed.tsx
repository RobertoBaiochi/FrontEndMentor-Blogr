import { styled, css } from "styled-components";
import WrapperDefault from "./wrapper-default";
import ContentText from "./content-text";

const imgEditorMobile = "/assets/images/illustration-editor-mobile.svg";
const imgEditorDesktop = "/assets/images/illustration-editor-desktop.svg";

const DesignedSection = styled.section`
  ${({ theme }) => css`
    width: 100%;
    margin: 5rem auto;

    h2 {
      font-size: 3rem;
      font-weight: 600;
      margin-inline: auto;
      text-align: center;
      color: var(--headings);

      @media ${theme.media.tabletBreakpoint} {
        font-size: 4rem;
      }
    }

    @media ${theme.media.desktopBreakpoint} {
      margin: 10rem auto;
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
        transform: translateX(30%);
      }
    }

    @media ${theme.media.desktopBreakpoint} {
      grid-template-columns: repeat(2, 1fr);
      grid-auto-flow: dense;
      direction: rtl;
      gap: 5rem;
    }
  `};
`;

const ImgGrid = styled.img`
  ${({ theme }) => css`
    width: 100%;
    margin: 4rem auto;

    @media ${theme.media.desktopBreakpoint} {
      transform: scale(1.5);
    }
  `};
`;

const TextContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;

    text-align: center;
    margin: auto;

    @media ${theme.media.tabletBreakpoint} {
      width: 70%;
    }

    @media ${theme.media.desktopBreakpoint} {
      width: 100%;
    }
  `};
`;

export default function Designed() {
  return (
    <DesignedSection>
      <WrapperDefault>
        <h2>Designed for the future</h2>

        <ContainerGrid>
          <picture>
            <source srcSet={imgEditorDesktop} media="(min-width: 913px)" />
            <ImgGrid src={imgEditorMobile} />
          </picture>

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
