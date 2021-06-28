import React, { FC, memo } from 'react';
import { StyledMenu } from '@/layouts/main/sider/Menu/style';
import { IconFont } from '@/components';
import MenuItem from '@/layouts/main/sider/Menu/MenuItem';
import { RoutePath } from '../../../../../config/type';
import { useReactive } from 'ahooks';
import { useLocation, history } from 'umi';

interface MenuItemType {
  path: RoutePath;
  iconType: string;
  text: string;
}
interface IState {
  menu: MenuItemType[];
}
const Menu: FC = () => {
  const location = useLocation();
  const state = useReactive<IState>({
    menu: [
      { path: RoutePath.message, iconType: 'icon-MessageBoard', text: '消息' },
      { path: RoutePath.file, iconType: 'icon-Folder', text: '文件' },
    ],
  });
  const handleMenu = (path: RoutePath) => {
    if (path !== location.pathname) {
      history.push(path);
    }
  };
  const renderActive = (path: string) => {
    console.log(location.pathname);
    return location.pathname === path;
  };
  const renderMenu = (): React.ReactNode => {
    return state.menu.map((menu) => {
      return (
        <MenuItem
          key={menu.path}
          onClick={() => handleMenu(menu.path)}
          active={renderActive(menu.path)}
          icon={<IconFont type={menu.iconType} />}
          text={menu.text}
        />
      );
    });
  };
  return <StyledMenu>{renderMenu()}</StyledMenu>;
};
export default memo(Menu);
