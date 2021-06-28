import React, { FC, memo } from 'react';
import { StyledSideHeader } from '@/pages/message/contactSider/style';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
const SideHeader: FC = () => {
  return (
    <StyledSideHeader>
      <Input
        allowClear={true}
        prefix={<SearchOutlined />}
        placeholder={'请输入搜索内容'}
        bordered={false}
        className={'header-input'}
      />
    </StyledSideHeader>
  );
};
export default memo(SideHeader);
