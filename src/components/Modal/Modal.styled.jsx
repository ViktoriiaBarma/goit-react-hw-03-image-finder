import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 4px;
  width: 65vw;
  height: 650px;
  background-color: rgb(255, 251, 230);
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
`;

export const ModalDescr = styled.p`
  position: absolute;
  bottom: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px auto;
  padding: 16px;
  color: rgb(253, 85, 35);
  text-shadow: rgb(255, 255, 255) 0px 1px 1px;
  background-color: rgba(185, 228, 201, 0.5);
  box-shadow: rgba(0, 0, 0, 0.2) 0px -2px 4px 1px,
    rgba(0, 0, 0, 0.14) 0px -4px 5px 0px, rgba(0, 0, 0, 0.12) 0px -1px 10px 0px;
  backdrop-filter: blur(5.5px);
  font-size: 16px;
  text-align: center;
`;


export const ModalPicture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
