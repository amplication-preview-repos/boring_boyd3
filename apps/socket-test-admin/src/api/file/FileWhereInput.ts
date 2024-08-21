import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MessageWhereUniqueInput } from "../message/MessageWhereUniqueInput";

export type FileWhereInput = {
  fileName?: StringNullableFilter;
  fileType?: StringNullableFilter;
  id?: StringFilter;
  message?: MessageWhereUniqueInput;
  url?: StringNullableFilter;
};
