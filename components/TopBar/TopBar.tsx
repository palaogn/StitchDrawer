import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
`;

const IconContainer = styled.span``;

const Title = styled.span`
  padding-left: 20px;
  font-size: 42px;
  letter-spacing: 8px;
  font-weight: 300;
`;

const TopBar = () => {
  return (
    <Container>
      <IconContainer>
        <img
          src="/icons/StitchIcon.png"
          alt="Stitch Drawer Logo"
          height="50px"
        />
      </IconContainer>
      <Title>Stitch Drawer</Title>
    </Container>
  );
};

//  <img src="/nalarauga_text.svg" alt="Nalarauga Logo" height="50px" />

export default TopBar;
