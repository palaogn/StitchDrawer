import styled, { css } from 'styled-components';

export const Container = styled.div<{ showModal: boolean }>`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
  cursor: pointer;

  justify-content: center;
  align-items: center;
  display: flex;

  ${({ showModal }) =>
    !showModal &&
    css`
      visibility: hidden;
      opacity: 0;
      transition: visibility 0s 0.2s, opacity 0.2s linear;
    `}

  ${({ showModal }) =>
    showModal &&
    css`
      visibility: visible;
      opacity: ;
      transition: visibility 0.2s 0s, opacity 0.2s linear;
    `}
`;

export const Modal = styled.div`
  height: auto;
  width: auto;
  min-width: 500px;
  min-height: 300px;
  max-height: 90%;
  max-width: 90%;

  background-color: white;
  border-radius: 20px;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  cursor: default;
  z-index: 1;
`;
