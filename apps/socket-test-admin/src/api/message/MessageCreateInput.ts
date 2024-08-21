import { ChatRoomWhereUniqueInput } from "../chatRoom/ChatRoomWhereUniqueInput";
import { FileCreateNestedManyWithoutMessagesInput } from "./FileCreateNestedManyWithoutMessagesInput";

export type MessageCreateInput = {
  chatRoom?: ChatRoomWhereUniqueInput | null;
  content?: string | null;
  files?: FileCreateNestedManyWithoutMessagesInput;
  sender?: string | null;
  typeField?: string | null;
};
