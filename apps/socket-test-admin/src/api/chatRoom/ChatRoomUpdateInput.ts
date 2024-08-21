import { MessageUpdateManyWithoutChatRoomsInput } from "./MessageUpdateManyWithoutChatRoomsInput";

export type ChatRoomUpdateInput = {
  description?: string | null;
  isGroupChat?: boolean | null;
  messages?: MessageUpdateManyWithoutChatRoomsInput;
  name?: string | null;
};
