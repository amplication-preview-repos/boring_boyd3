import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";

export type ChatRoomWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  isGroupChat?: BooleanNullableFilter;
  messages?: MessageListRelationFilter;
  name?: StringNullableFilter;
};
