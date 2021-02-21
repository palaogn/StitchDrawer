import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  border-top: 1px solid #eaeaea;
  border-right: 1px solid #eaeaea;
  border-bottom: 1px solid #eaeaea;
`;

const Tool = styled.div`
  height: 50px;
  width: 50px;
  border: 1px solid #eaeaea;
`;

const ToolTitle = styled.p`
  font-size: 16px;
`;

const Toolbar = () => {
  return (
    <Container>
      <Tool></Tool>
      <Tool></Tool>
      <Tool></Tool>
      <Tool></Tool>
    </Container>
  );
};

export default Toolbar;
