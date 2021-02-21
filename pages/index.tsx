import styled from 'styled-components';
import { Toolbar, DrawingCanvas } from '../components';

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

/*  <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a> */
