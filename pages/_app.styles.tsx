import styled, { createGlobalStyle } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'header'
    'main';
`;

export const Header = styled.div`
  grid-area: header;
  position: fixed;
  width: 100%;
  height: 80px;
  // border-bottom: 1px solid #eaeaea;
  background-color: white;
`;

export const Main = styled.div`
  grid-area: main;
  overflow: auto;
  min-height: 100vh;
  padding: 5rem 0;
`;

/*
export const Footer = styled.div`
  grid-area: footer;
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  text-align: center;
  padding-top: 20px;
`; */

export const GlobalStyle = createGlobalStyle`
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
