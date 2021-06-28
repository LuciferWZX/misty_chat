import React, { FC } from 'react';
import { StyledChatContent } from './style';
import { Messages, MessageType, QuickRelay } from '@/types/message';
import '@chatui/core/dist/index.css';
// 引入组件
import Chat, { Bubble, useMessages } from '@chatui/core';
const ChatContent: FC = () => {
  const initialMessages: Messages[] = [
    {
      type: MessageType.text,
      content: { text: '主人好，我是智能助理，你的贴心小助手~' },
      user: {
        avatar: '//gw.alicdn.com/tfs/TB1DYHLwMHqK1RjSZFEXXcGMXXa-56-62.svg',
      },
      hasTime: true,
    },
    {
      type: MessageType.image,
      content: {
        picUrl: '//img.alicdn.com/tfs/TB1p_nirYr1gK0jSZR0XXbP8XXa-300-300.png',
      },
    },
  ];
  // 默认快捷短语，可选
  const defaultQuickReplies: QuickRelay[] = [
    {
      icon: 'message',
      name: '联系人工服务',
      isNew: true,
      isHighlight: true,
    },
    {
      name: '短语1',
      isNew: true,
    },
    {
      name: '短语2',
      isHighlight: true,
    },
    {
      name: '短语3',
    },
  ];

  const { messages, appendMsg, setTyping } = useMessages(initialMessages);
  // 发送回调
  const handleSend = (type: any, val: any) => {
    if (type === 'text' && val.trim()) {
      // TODO: 发送请求
      appendMsg({
        type: 'text',
        content: { text: val },
        position: 'right',
        hasTime: true,
      });
      setTyping(true);
      // 模拟回复消息
      setTimeout(() => {
        appendMsg({
          type: 'text',
          content: { text: '亲，您遇到什么问题啦？请简要描述您的问题~' },
        });
      }, 1000);
    }
  };
  // 快捷短语回调，可根据 item 数据做出不同的操作，这里以发送文本消息为例
  const handleQuickReplyClick = (item: any) => {
    handleSend('text', item.name);
  };
  const renderMessageContent = (msg: any) => {
    const { type, content } = msg;

    // 根据消息类型来渲染
    switch (type) {
      case 'text':
        return <Bubble content={content.text} />;
      case 'image':
        return (
          <Bubble type="image">
            <img src={content.picUrl} alt="" />
          </Bubble>
        );
      default:
        return null;
    }
  };
  return (
    <StyledChatContent>
      <Chat
        navbar={{ title: '智能助理' }}
        messages={messages}
        renderMessageContent={renderMessageContent}
        quickReplies={defaultQuickReplies}
        onQuickReplyClick={handleQuickReplyClick}
        onSend={handleSend}
      />
    </StyledChatContent>
  );
};
export default ChatContent;
