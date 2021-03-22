import styled from 'styled-components';

const circleHeight = 45;
const circleWidth = 50;

export const Container = styled.div`
  width: 100%;
  position: relative;
  height: ${circleHeight * 1.5}px;
  width: ${circleWidth * 1.5}px;
  cursor: pointer;
`;

export const Rectangle = styled.button<{ disabled: boolean }>`
  position: relative;
  width: ${circleWidth}px;
  height: ${circleHeight}px;
  border-radius: 20px;
  border: none;
  background-color: ${({ disabled }) =>
    disabled ? 'rgba(0, 0, 0, 0.2)' : 'white'};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  justify-content: center;
  align-items: center;
  display: flex;
  cursor: pointer;
`;

export const UndoWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
`;

export const RedoWrapper = styled.div`
  position: absolute;
  left: ${circleHeight * 0.6}px;
  top: ${circleHeight * 0.5}px;
  text-align: center;
`;

export const IconWrapper = styled.div`
  transition: all 0.2s ease-in-out;
  width: 20px;

  :hover {
    transform: scale(1.1);
  }
`;
