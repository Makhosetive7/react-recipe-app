import React from "react";
import styled from "styled-components";

const Banner = () => {
  return (
    <Container>
      <header class="banner">
        <div class="bannerDetails">
          <h1>Unleash Culinary skills</h1>
          <p>Explore mouthwatering dishes. Cook anytime.</p>
        </div>
      </header>
    </Container>
  );
};

const Container = styled.div`
  .banner {
    width: 100%;
    height: 93vh;
    position: relative;
    background: url("https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
      no-repeat center center/cover;
    padding-top: 100px;
    ::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      background: rgba(0, 0, 0, 0.6);
      box-shadow: inset 120px 100px 250px #000000,
        inset -120px -100px 250px #000000;
    }
    .bannerDetails {
      position: relative;
      z-index: 2;
      width: 65%;
      margin: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      margin-top: 9rem;
      h1 {
        font-weight: 700;
        font-size: 5.2rem;
        line-height: 1.1;
        margin: 0 0 2rem;
        color: #c4b0ff;
      }
      p {
        text-transform: uppercase;
        color: #fff;
        font-weight: 400;
        font-size: 1.9rem;
        line-height: 1.25;
        margin: 0 0 2rem;
        font-family: Rajdhani;
      }
    }
  }
`;

export default Banner;
