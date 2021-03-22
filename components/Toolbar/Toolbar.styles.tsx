import styled from 'styled-components';

export const borderColor = '#eaeaea';

export const Container = styled.div`
  position: relative;
  width: 450px;
  padding: 10px;
  border-top: 2px solid ${borderColor};
  border-right: 2px solid ${borderColor};
  border-bottom: 2px solid ${borderColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  background-color: white;
`;

export const Tool = styled.div`
  display: inline-block;
  margin: 0 10px;
  vertical-align: bottom;
`;

export const ToolTitle = styled.div`
  color: black;
  letter-spacing: 0.1px;
  font-size: 16px;
  font-weight: 300;
`;
