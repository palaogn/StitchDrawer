import styled, { createGlobalStyle } from 'styled-components';
import Head from 'next/head';
import { TopBar } from '../components';

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'header'
    'main'
    'footer';
`;

const Header = styled.div`
  grid-area: header;
  position: fixed;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #eaeaea;
  background-color: white;
`;

const Main = styled.div`
  grid-area: main;
  overflow: auto;
  height: 100vh;
  padding: 5rem 0;
`;

const Footer = styled.div`
  grid-area: footer;
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  text-align: center;
  padding-top: 20px;
`;

const GlobalStyle = createGlobalStyle`
html,
body {

  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
`;

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Head>
          <title>Nálarauga</title>
          <link rel="icon" href="/nalarauga_logo.svg" />
        </Head>
        <Header>
          <TopBar />
        </Header>
        <Main>
          <Component {...pageProps} />
        </Main>
        <Footer>
          2021 by{' '}
          <img src="/nalarauga_eye.svg" alt="Nalarauga Logo" height="20px" />
          <img src="/nalarauga_text.svg" alt="Nalarauga Logo" height="20px" />
        </Footer>
      </Container>
    </>
  );
};

export default MyApp;
