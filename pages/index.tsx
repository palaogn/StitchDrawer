import styled from 'styled-components';
import { Toolbar, DrawingBoard, DrawingCanvas } from '../components';

const ToolbarContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const Home = () => {
  return (
    <>
      <DrawingCanvas />
      <ToolbarContainer>
        <Toolbar />
      </ToolbarContainer>
    </>
  );
};

export default Home;
