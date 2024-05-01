import React from "react";
import styled from "styled-components";

const Banner = () => {
  return (
    <Container>
      <VideoWrapper>
        <iframe
          width="100%" // Adjust width as needed
          height="100%"
          src="https://www.youtube.com/embed/i5T6Fnbq34c?autoplay=1&mute=1"
          title="Aesthetic anime cooking ramen with sound effects"
          frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when_cross-origin"
          allowfullscreen
          style={{ filter: "blur(3px)" }} // Apply blur filter
        />
      </VideoWrapper>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
  padding-top: 100px;
`;


const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 70px; 
`;

export default Banner;
