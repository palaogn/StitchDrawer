import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const TopBar = () => {
  return (
    <Container>
      <img src="/nalarauga_eye.svg" alt="Nalarauga Logo" height="50px" />
      <img src="/nalarauga_text.svg" alt="Nalarauga Logo" height="50px" />
    </Container>
  );
};

export default TopBar;
