import { ChatRoom } from "../chatRoom/ChatRoom";
import { File } from "../file/File";

export type Message = {
  chatRoom?: ChatRoom | null;
  content: string | null;
  createdAt: Date;
  files?: Array<File>;
  id: string;
  sender: string | null;
  typeField: string | null;
  updatedAt: Date;
};
