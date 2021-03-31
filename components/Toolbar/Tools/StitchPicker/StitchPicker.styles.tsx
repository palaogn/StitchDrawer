import styled from 'styled-components';

const circleHeight = 30;
const circleWidth = 30;

export const Container = styled.div`
  width: 100%;
  position: relative;
  height: ${circleHeight * 1.5}px;
  width: ${circleWidth * 1.5}px;
  cursor: pointer;
`;

export const Rectangle = styled.button<{ color: string }>`
  width: ${circleWidth}px;
  height: ${circleHeight}px;
  border-radius: 2px;
  border: none;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-weight: 300;
  font-size: 22px;
`;

export const StitchWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
`;

export const AdditionalColorWrapper = styled.div`
  position: absolute;
  left: ${circleHeight * 0.8}px;
  top: ${circleHeight * 0.5}px;
  text-align: center;
  font-size: 24px;
  line-height: 30px;
`;

export const IconWrapper = styled.div`
  transition: all 0.2s ease-in-out;

  :hover {
    transform: scale(1.3);
  }
`;
