import { styled } from "styled-components";
import WrapperDefault from "./wrapper-default";

const imgEditorMobile = "/assets/images/illustration-editor-mobile.svg";

const DesignedSection = styled.section`
  width: 100%;
  min-height: 100vh;
  border: 1px solid black;

  h2 {
    font-size: 3rem;
    font-weight: 600;
    margin: 5rem auto 2rem;
    text-align: center;
    color: var(--headings);
  }
`;

const ContentGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
`;

const ImgGrid = styled.img`
  width: 100%;
  margin: 2rem auto;
`;

const TextContent = styled.div`
  width: 100%;
  text-align: center;
  margin: 2rem auto;

  h2 {
    font-size: 3rem;
    font-weight: 600;
    margin: 2rem auto 1rem;
    color: var(--headings);
  }

  p {
    font-size: 1.8rem;
    line-height: 2.5rem;
    margin: 2rem auto 5rem;
    color: var(--body-text);
  }
`;

export default function Designed() {
  return (
    <DesignedSection>
      <WrapperDefault>

        <h2>Designed for the future</h2>

        <ContentGrid>

          <ImgGrid src={imgEditorMobile} />

          <TextContent>

            <h2>Robust content management 2</h2>

            <p>
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>

            <h2>Robust content management</h2>

            <p>
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>

          </TextContent>

        </ContentGrid>

      </WrapperDefault>
    </DesignedSection>
  );
}
