import styled from 'styled-components';
import { Toolbar, DrawingBoard, DrawingCanvas } from '../components';

const ToolbarContainer = styled.div`
  position: fixed;
  top: 20%;
  left: 0;
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
