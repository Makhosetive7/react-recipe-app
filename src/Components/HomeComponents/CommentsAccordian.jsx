import React from 'react'
import { accordionContent } from './AccodianContent'
import SingleCommentAccordian from './SingleCommentAccordian'

import styled from 'styled-components'

const CommentsAccordian = () => {
  return (
    <Container>
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
  )
}

const Container = styled.div`
    margin: 2rem;
    box-shadow: 0 4px 8px 0 rgba(8, 7, 7, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

`

export default CommentsAccordian
