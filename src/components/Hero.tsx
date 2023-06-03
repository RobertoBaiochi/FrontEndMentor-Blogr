import { styled } from "styled-components";
import WrapperDefault from "./wrapper-default";
import ButtonStyled from "./styled-button";

const bgHeroImg = "../../assets/images/bg-pattern-intro-mobile.svg";

const HeroSection = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 0 0 0 10rem;
  background-image: url(${bgHeroImg}),
    linear-gradient(180deg, var(--intro-grd1), var(--intro-grd2));
  background-repeat: no-repeat;
  background-position: 40% 40%;
  background-size: 380%;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  h1 {
    font-size: 3.7rem;
    font-weight: 900;
    margin: 3rem auto;
    line-height: 5rem;
    color: var(--white-text);
  }

  h3 {
    font-weight: 500;
    font-size: 2rem;
    line-height: 2rem;
    color: var(--white-text);
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 6rem auto;
`;

export default function Hero() {
  return (
    <HeroSection>
      <WrapperDefault>
        <ContentWrapper>
          <h1>A modern publishing platform</h1>
          <h3>Grow your audience and build your online brand</h3>

          <ButtonWrapper>
            <ButtonStyled text="Start for Free" link="/" />
            <ButtonStyled text="Learn More" withBackground={false} link="/" />
          </ButtonWrapper>
        </ContentWrapper>
      </WrapperDefault>
    </HeroSection>
  );
}
