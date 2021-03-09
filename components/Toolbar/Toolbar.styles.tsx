import styled from 'styled-components';

// const borderColor = 'black';
export const borderColor = '#eaeaea';

export const Container = styled.div`
  padding: 10px;
  // #eaeaea
  border-top: 2px solid ${borderColor};
  border-right: 2px solid ${borderColor};
  border-bottom: 2px solid ${borderColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: white;
`;

export const Tool = styled.div``;

export const ToolTitle = styled.div`
  color: black;
  letter-spacing: 0.1px;
  font-size: 16px;
  font-weight: 300;
`;
