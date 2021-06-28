import styled, { css } from 'styled-components';
const renderActiveStyle = (active?: boolean): any => {
  if (active) {
    return css`
      background-color: white;
      color: black;
    `;
  }
};
export const StyledMenu = styled.ul`
  li {
    :not(:first-child) {
      margin-top: 10px;
    }
  }
`;
export const StyledMenuItem = styled.li<{ active?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  border-radius: 12px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  height: 50px;
  background-color: #1d1b31;
  cursor: pointer;

  transition-property: background-color, color;
  transition-duration: 0.2s;
  :hover {
    background-color: white;
    color: black;
  }
  ${({ active }) => renderActiveStyle(active)}
`;
export const StyledTitle = styled.div`
  font-size: 11px;
  font-weight: 400;
`;
