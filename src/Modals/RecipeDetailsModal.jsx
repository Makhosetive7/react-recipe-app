import React from "react";
import { useModal } from "../Context/modalContext";
import styled from "styled-components";

const RecipeDetailsModal = () => {
  const { closeModal } = useModal();

  return (
    <WrapperContainer>
      <Overlay onClick={closeModal}></Overlay>
      <Container>hey bbe</Container>
    </WrapperContainer>
  );
};

const WrapperContainer = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
`;
const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;
const Container = styled.div`
  width: 85%;
  height: 85vh;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1002;

  @media screen and (max-width: 430px) {
    width: 280px;
  }
`;

export default RecipeDetailsModal;
