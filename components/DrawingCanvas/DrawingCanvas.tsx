import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const DrawingCanvas = () => {
  return (
    <Container>
      <canvas></canvas>
    </Container>
  );
};

export default DrawingCanvas;
