import { ChatRoomWhereUniqueInput } from "../chatRoom/ChatRoomWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FileListRelationFilter } from "../file/FileListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type MessageWhereInput = {
  chatRoom?: ChatRoomWhereUniqueInput;
  content?: StringNullableFilter;
  files?: FileListRelationFilter;
  id?: StringFilter;
  sender?: StringNullableFilter;
  typeField?: StringNullableFilter;
};
