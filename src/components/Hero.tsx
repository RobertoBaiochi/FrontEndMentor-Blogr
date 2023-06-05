import { styled, css } from "styled-components";
import WrapperDefault from "./wrapper-default";
import ButtonStyled from "./styled-button";

const bgHeroImgMobile = "../../assets/images/bg-pattern-intro-mobile.svg";
const bgHeroImgDesktop = "../../assets/images/bg-pattern-intro-desktop.svg";

const HeroSection = styled.section`
  ${({ theme }) => css`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 0 0 0 10rem;
    background-image: url(${bgHeroImgMobile}),
      linear-gradient(180deg, var(--intro-grd1), var(--intro-grd2));
    background-repeat: no-repeat;
    background-position: 40% 40%;
    background-size: 380%;


    @media ${theme.media.desktopBreakpoint} {
      background-image: url(${bgHeroImgDesktop}),
      linear-gradient(90deg, var(--intro-grd1), var(--intro-grd2) 60%);
      background-position: 25% 50%;
      background-size: 230%;
    }
  `};
`;

const ContentWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  `};
`;

const HeroTitle = styled.h1`
  ${({ theme }) => css`
    font-size: 3rem;
    font-weight: 700;
    margin: 5rem auto 2rem;
    line-height: 4rem;
    color: var(--white-text);

    @media ${theme.media.smartphoneBreakpoint} {
      font-size: 3.7rem;
      margin: 3rem auto;
      line-height: 5rem;
    }

    @media ${theme.media.desktopBreakpoint} {
      font-size: 6.5rem;
    }

  `};
`;

const HeroSubTitle = styled.h3`
  ${({ theme }) => css`
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 1.8rem;
    color: var(--white-text);

    @media ${theme.media.smartphoneBreakpoint} {
      font-size: 2rem;
      line-height: 2rem;
    }

    @media ${theme.media.desktopBreakpoint} {
      font-size: 2.3rem;
      line-height: 2.3rem;
    }
  `};
`;

const ButtonWrapper = styled.div`
  ${({ theme }) => css`
  
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin: 6rem auto 3rem;
  `};
`;

export default function Hero() {
  return (
    <HeroSection>
      <WrapperDefault>
        <ContentWrapper>
          <HeroTitle>A modern publishing platform</HeroTitle>
          <HeroSubTitle>Grow your audience and build your online brand</HeroSubTitle>

          <ButtonWrapper>
            <ButtonStyled text="Start for Free" link="/" />
            <ButtonStyled text="Learn More" withBackground={false} link="/" />
          </ButtonWrapper>
        </ContentWrapper>
      </WrapperDefault>
    </HeroSection>
  );
}
