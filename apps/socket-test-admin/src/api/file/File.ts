import { Message } from "../message/Message";

export type File = {
  createdAt: Date;
  fileName: string | null;
  fileType: string | null;
  id: string;
  message?: Message | null;
  updatedAt: Date;
  url: string | null;
};
