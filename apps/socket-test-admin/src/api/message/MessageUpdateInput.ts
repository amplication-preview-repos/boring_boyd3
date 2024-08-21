import { ChatRoomWhereUniqueInput } from "../chatRoom/ChatRoomWhereUniqueInput";
import { FileUpdateManyWithoutMessagesInput } from "./FileUpdateManyWithoutMessagesInput";

export type MessageUpdateInput = {
  chatRoom?: ChatRoomWhereUniqueInput | null;
  content?: string | null;
  files?: FileUpdateManyWithoutMessagesInput;
  sender?: string | null;
  typeField?: string | null;
};
