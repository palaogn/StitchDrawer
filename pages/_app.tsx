import Head from 'next/head';
import { TopBar, Modal } from '../components';
import * as S from './_app.styles';
import { Store } from '../store/index';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <S.GlobalStyle />
      <Store>
        <S.Container>
          <Head>
            <title>Nálarauga</title>
            <link rel="icon" href="/nalarauga_logo.svg" />
          </Head>
          <S.Header>
            <TopBar />
          </S.Header>
          <S.Main>
            <Component {...pageProps} />
          </S.Main>
          <S.Footer>
            2021 by{' '}
            <img src="/nalarauga_eye.svg" alt="Nalarauga Logo" height="20px" />
            <img src="/nalarauga_text.svg" alt="Nalarauga Logo" height="20px" />
          </S.Footer>
          <Modal />
        </S.Container>
      </Store>
    </>
  );
};

export default MyApp;
