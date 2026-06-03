import React from "react";
import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { MdArrowDownward, MdArrowUpward } from "react-icons/md";

const SingleCommentAccordion = ({ title, content, image }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <AccordionContainer>
      <AccordionHeader 
        onClick={() => setIsActive(!isActive)}
        className={isActive ? "active" : ""}
      >
        <UserInfo>
          <UserAvatar>
            <AvatarImage src={image} alt={`${title}'s avatar`} />
          </UserAvatar>
          <UserName>{title}</UserName>
        </UserInfo>
        <AccordionIcon>
          {isActive ? <MdArrowUpward /> : <MdArrowDownward />}
        </AccordionIcon>
      </AccordionHeader>

      <AccordionContent className={isActive ? "active" : ""}>
        <ContentInner>
          <ContentText>{content}</ContentText>
        </ContentInner>
      </AccordionContent>
    </AccordionContainer>
  );
};

// Animations
const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled Components
const AccordionContainer = styled.div`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  margin-bottom: 1rem;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  overflow: hidden;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    border-color: rgba(102, 126, 234, 0.3);
  }

  &.active {
    border-color: rgba(102, 126, 234, 0.5);
    box-shadow: 0 4px 20px rgba(102, 126, 234, 0.15);
  }
`;

const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  background: white;

  &:hover {
    background: rgba(102, 126, 234, 0.02);
  }

  &.active {
    background: rgba(102, 126, 234, 0.05);
    border-bottom: 1px solid rgba(102, 126, 234, 0.1);
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const UserAvatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid rgba(102, 126, 234, 0.2);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  ${AccordionHeader}.active & {
    border-color: rgba(102, 126, 234, 0.5);
    box-shadow: 0 2px 12px rgba(102, 126, 234, 0.3);
  }
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${AccordionHeader}:hover & {
    transform: scale(1.05);
  }
`;

const UserName = styled.p`
  font-family: 'Playfair Display', serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3436;
  margin: 0;
  transition: color 0.3s ease;

  ${AccordionHeader}.active & {
    color: #667eea;
  }
`;

const AccordionIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  font-size: 1.25rem;
  transition: all 0.3s ease;

  ${AccordionHeader}:hover & {
    background: rgba(102, 126, 234, 0.2);
    transform: scale(1.1);
  }

  ${AccordionHeader}.active & {
    background: rgba(102, 126, 234, 0.2);
    transform: rotate(180deg);
  }
`;

const AccordionContent = styled.div`
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.35s ease, opacity 0.25s ease;
  opacity: 0;

  &.active {
    grid-template-rows: 1fr;
    opacity: 1;
    animation: ${slideDown} 0.35s ease-out;
  }
`;

const ContentInner = styled.div`
  overflow: hidden;
`;

const ContentText = styled.p`
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.7;
  color: #555;
  margin: 0;
  padding: 0 2rem 1.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  background: rgba(102, 126, 234, 0.02);
`;

export default SingleCommentAccordion;