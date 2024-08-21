import { Message } from "../message/Message";

export type ChatRoom = {
  createdAt: Date;
  description: string | null;
  id: string;
  isGroupChat: boolean | null;
  messages?: Array<Message>;
  name: string | null;
  updatedAt: Date;
};
