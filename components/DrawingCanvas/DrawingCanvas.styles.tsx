import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;

  :focus {
    outline: none;
  }
`;

export const CanvasWrapper = styled.div`
  position: relative;
  margin-top: 20px;
`;

export const Canvas = styled.canvas`
  position: relative;
  border: 2px solid #eaeaea;
`;

export const BackgroundCanvas = styled.canvas`
  position: absolute;
  border: 2px solid #eaeaea;
`;
