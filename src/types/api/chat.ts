export interface IChatItem {
  avatar: string;
  name: string;
  lastMessage: string;
  id: string;
}

export interface IMessageItem {
  timestamp: string;
  isHostMessage: boolean;
  message: string;
  id: string;
}
