import React from "react";
import { accordionContent } from "./AccodianContent";
import SingleCommentAccordian from "./SingleCommentAccordian";

import styled from "styled-components";

const CommentsAccordian = () => {
  return (
    <Container>
      <div className="header">
        <h2>What People say</h2>
      </div>
      <div className="accordion">
        {accordionContent.map(({ title, content, image }) => (
          <SingleCommentAccordian
            title={title}
            content={content}
            image={image}
          />
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  .header {
    h2 {
      font-family: Rajdhani;
    }
  }
  .accordion {
    margin: 2rem;
  }
`;

export default CommentsAccordian;
