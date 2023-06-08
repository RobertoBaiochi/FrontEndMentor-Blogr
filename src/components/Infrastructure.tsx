/* eslint-disable @next/next/no-img-element */
import { styled, css } from "styled-components";
import WrapperDefault from "./wrapper-default";

const bgImgCircle = "/assets/images/bg-pattern-circles.svg";
const phones = "/assets/images/illustration-phones.svg";

// const InfrastrucureSection = styled.section`
//   ${({ theme }) => css`
//     width: 100%;
//     height: 650px;
//     background-image: url(${bgImgCircle}),
//       linear-gradient(180deg, var(--body-grd1), var(--body-grd2));
//     background-repeat: no-repeat;
//     background-size: 160%;
//     background-position: 45% -130%;
//     border-radius: 0 10rem 0 10rem;
//     margin-top: 15rem;

//     @media ${theme.media.smartphoneBreakpoint} {
//       background-size: 180%;
//       background-position: 45% 950%;
//     }
//   `};
// `;

const InfrastrucureSection = styled.section`
  ${({ theme }) => css`
    width: 100%;
    height: 650px;
    background-image: url(${bgImgCircle}),
      linear-gradient(180deg, var(--body-grd1), var(--body-grd2));
    background-repeat: no-repeat;
    background-size: 160%;
    background-position: 45% -130%;
    border-radius: 0 10rem 0 10rem;
    margin-top: 15rem;

    @media ${theme.media.smartphoneBreakpoint} {
      background-size: 180%;
      background-position: 45% 305%;
    }
  `};
`;

const GridContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    display: grid;
    align-items: center;
    justify-content: center;
    place-content: center;
    grid-template-columns: 1fr;
    transform: translateY(-30%);

    @media ${theme.media.smartphoneBreakpoint} {
      transform: translateY(-33%);
    }
  `};
`;

const ImgContainer = styled.div`
  width: 100%;
  margin: 3.8rem auto;

  img {
    transform: scale(1.2);
    margin-inline: auto;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  color: var(--white-text);

`;

const InfraTitle = styled.h2`
  ${({ theme }) => css`
    font-size: 3.5rem;
    margin-bottom: 2rem;

    @media ${theme.media.smartphoneBreakpoint} {
      font-size: 4rem;
    }
  `};
`;

const InfraText = styled.p`
  ${({ theme }) => css`
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 3rem;
  `};
`;

export default function Infrastrucure() {
  return (
    <InfrastrucureSection>
      <WrapperDefault>
        <GridContainer>
          <ImgContainer>
            <img src={phones} alt="phones" />
          </ImgContainer>

          <TextContainer>
            <InfraTitle>State of the Art Infrastructure</InfraTitle>
            <InfraText>
              With reliability and speed in mind, worldwide data centers provide
              the backbone for ultra-fast connectivity. This ensures your site
              will load instantly, no matter where your readers are, keeping
              your site competitive.
            </InfraText>
          </TextContainer>
        </GridContainer>
      </WrapperDefault>
    </InfrastrucureSection>
  );
}