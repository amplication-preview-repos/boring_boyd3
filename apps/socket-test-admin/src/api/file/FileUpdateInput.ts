import { MessageWhereUniqueInput } from "../message/MessageWhereUniqueInput";

export type FileUpdateInput = {
  fileName?: string | null;
  fileType?: string | null;
  message?: MessageWhereUniqueInput | null;
  url?: string | null;
};
