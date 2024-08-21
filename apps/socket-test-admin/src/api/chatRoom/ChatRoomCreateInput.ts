import { MessageCreateNestedManyWithoutChatRoomsInput } from "./MessageCreateNestedManyWithoutChatRoomsInput";

export type ChatRoomCreateInput = {
  description?: string | null;
  isGroupChat?: boolean | null;
  messages?: MessageCreateNestedManyWithoutChatRoomsInput;
  name?: string | null;
};
