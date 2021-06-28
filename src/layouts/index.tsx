import React, { FC } from 'react';
import { StyledGlobalLayout } from './style';
const GlobalLayout: FC = ({ children }) => {
  return <StyledGlobalLayout>{children}</StyledGlobalLayout>;
};
export default GlobalLayout;
