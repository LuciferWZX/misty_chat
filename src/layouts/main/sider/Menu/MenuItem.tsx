import React, { FC } from 'react';
import { StyledMenuItem, StyledTitle } from '@/layouts/main/sider/Menu/style';
interface IProps {
  icon?: React.ReactNode;
  text?: React.ReactNode | string;
  onClick?(e: React.MouseEvent<HTMLLIElement>): void;
  active?: boolean;
}
const MenuItem: FC<IProps> = ({ active, onClick, icon, text }) => {
  return (
    <StyledMenuItem active={active} onClick={onClick}>
      {icon}
      <StyledTitle>{text}</StyledTitle>
    </StyledMenuItem>
  );
};
export default MenuItem;
