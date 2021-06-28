import React, { FC } from 'react';
import { StyledChatBox, StyledMessage, StyledSideBox } from './style';
import SplitPane from 'react-split-pane';
import '@/splitPane.less';
import ContactSider from '@/pages/message/contactSider';
import ChatContent from '@/pages/message/chatContent';
const MessageModule: FC = () => {
  return (
    <StyledMessage>
      <SplitPane split="vertical" minSize={240} maxSize={400}>
        <StyledSideBox>
          <ContactSider />
        </StyledSideBox>
        <StyledChatBox>
          <ChatContent />
        </StyledChatBox>
      </SplitPane>
    </StyledMessage>
  );
};
export default MessageModule;
