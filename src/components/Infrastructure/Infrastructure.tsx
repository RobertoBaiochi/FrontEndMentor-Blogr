/* eslint-disable @next/next/no-img-element */
import { styled } from "styled-components";
import WrapperDefault from "../wrapper-default";

const bgImgCircle = "/assets/images/bg-pattern-circles.svg";
const phones = "/assets/images/illustration-phones.svg";

const InfrastrucureSection = styled.section`
  width: 100%;
  height: 600px;
  background-image: url(${bgImgCircle}),
    linear-gradient(180deg, var(--body-grd1), var(--body-grd2));
  background-repeat: no-repeat;
  background-size: 180%;
  background-position: 45% 300%;
  border-radius: 0 10rem 0 10rem;
  margin-top: 15rem;
  
`;

const GridContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
  place-content: center;
  grid-template-columns: 1fr;
  transform: translateY(-32%);
  
`;

const ImgContainer = styled.div`
  width: 100%;
  

  img {
    object-fit: contain;
    transform: scale(1.2);
  }
`;

const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  color: var(--white-text);

  h2 {
    font-size: 4rem;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 3rem;
  }
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
            <h2>State of the Art Infrastructure</h2>
            <p>
              With reliability and speed in mind, worldwide data centers provide
              the backbone for ultra-fast connectivity. This ensures your site
              will load instantly, no matter where your readers are, keeping your
              site competitive.
            </p>
          </TextContainer>

        </GridContainer>
      </WrapperDefault>
    </InfrastrucureSection>
  );
}

// const InfrastrucureSection = styled.section`
//   width: 100%;
//   height: 550px;
//   display: grid;
//   grid-template-columns: 1fr;
//   align-items: end;
//   background-image: url(${bgImgCircle}),
//     linear-gradient(180deg, var(--body-grd1), var(--body-grd2));
//   background-repeat: no-repeat;
//   background-size: 160%;
//   background-position: 50% 350%;
//   border-radius: 0 10rem 0 10rem;
//   position: relative;
//   transform: translateY(30%);
// `;

// const ImgContainer = styled.div`
//   position: absolute;
//   top: -35%;
//   border: 1px solid green;
//   /* img {
//       transform: translateY(-50%);
//     } */
// `;

// const TextContainer = styled.div`
//   width: 100%;
//   text-align: center;
//   color: var(--white-text);

//   margin-top: 6rem;
  
//   h2 {
//     font-size: 4rem;
//     margin-bottom: 2rem;
//   }

//   p {
//     font-size: 1.8rem;
//     font-weight: 300;
//     line-height: 3rem;
//   }
// `;

// export default function Infrastrucure() {
//   return (
//     <InfrastrucureSection>
//       <ImgContainer>
//         <img src={phones} alt="" />
//       </ImgContainer>

//       <WrapperDefault>
//         <TextContainer>
//           <h2>State of the Art Infrastructure</h2>
//           <p>
//             With reliability and speed in mind, worldwide data centers provide
//             the backbone for ultra-fast connectivity. This ensures your site
//             will load instantly, no matter where your readers are, keeping your
//             site competitive.
//           </p>
//         </TextContainer>
//       </WrapperDefault>
//     </InfrastrucureSection>
//   );
// }
