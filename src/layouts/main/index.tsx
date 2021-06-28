import React, { FC } from 'react';
import { StyledMainLayout } from '@/layouts/main/style';
import Sider from '@/layouts/main/sider';
import { Layout } from 'antd';
import Content from '@/layouts/main/content';
const MainLayout: FC = ({ children }) => {
  return (
    <StyledMainLayout>
      <Layout className={'outer-layout'}>
        <Sider />
        <Layout>
          <Content>{children}</Content>
        </Layout>
      </Layout>
    </StyledMainLayout>
  );
};
export default MainLayout;
