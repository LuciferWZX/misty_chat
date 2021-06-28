import React, { FC } from 'react';
import { StyledContent } from '@/layouts/main/content/style';
const Content: FC = ({ children }) => {
  return <StyledContent>{children}</StyledContent>;
};
export default Content;
