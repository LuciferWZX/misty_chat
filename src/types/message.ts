export interface Messages {
  type: MessageType;
  content: MessageContent;
  user?: MessageUser;
  hasTime?: boolean;
}
export enum MessageType {
  text = 'text',
  image = 'image',
}
export interface MessageContent {
  text?: string;
  picUrl?: string;
}
export interface MessageUser {
  avatar?: string;
}
export interface QuickRelay {
  icon?: string;
  name: string;
  isNew?: boolean;
  isHighlight?: boolean;
}
