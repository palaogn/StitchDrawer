import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;
  cursor: pointer;
  text-align: center;
`;

export const Rectangle = styled.button<{ color: string }>`
  position: relative;
  width: 35px;
  height: 35px;
  padding: 10px;
  border-radius: 10px;
  border: none;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: auto;

  justify-content: center;
  align-items: center;
  display: flex;
`;

export const IconWrapper = styled.div`
  transition: all 0.2s ease-in-out;
  height: 25px;

  :hover {
    transform: scale(1.05);
  }
`;
