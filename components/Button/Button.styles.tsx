import styled from 'styled-components';

export const Button = styled.button`
  // text
  font-size: 22px;
  letter-spacing: 1px;
  font-weight: 300;

  // button
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 10px 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  :hover {
    transform: scale(1.05);
  }
`;
