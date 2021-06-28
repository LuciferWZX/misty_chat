import React, { FC, memo } from 'react';
import { AvatarComp, MenuComp, StyledSider } from '@/layouts/main/sider/style';
import { Avatar } from 'antd';
import Menu from '@/layouts/main/sider/Menu';
const Sider: FC = () => {
  return (
    <StyledSider width={70}>
      <AvatarComp>
        <Avatar
          size={50}
          shape={'square'}
          className={'sider-avatar'}
          style={{ backgroundColor: '#f56a00' }}
        >
          K
        </Avatar>
      </AvatarComp>
      <MenuComp>
        <Menu />
      </MenuComp>
    </StyledSider>
  );
};
export default memo(Sider);
