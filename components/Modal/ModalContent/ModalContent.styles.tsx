import styled from 'styled-components';

export const ModalContent = styled.div`
  height: 100%;
  width: 100%;
  margin: auto;
  letter-spacing: 0.1px;
  font-size: 1em;
  font-weight: 300;
  text-align: center;
  padding: 5px;
`;

export const CloseWrapper = styled.div`
  margin: 10px 10px 0 auto;
  height: 20px;
  width: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  :hover {
    transform: scale(1.1);
  }
`;

export const ModalTitle = styled.div`
  font-size: 30px;
  margin-bottom: 10px;
  padding: 0 60px;
`;

export const ModalSubTitle = styled.div`
  padding: 0 60px;
`;
