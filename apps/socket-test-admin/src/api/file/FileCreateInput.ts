import { MessageWhereUniqueInput } from "../message/MessageWhereUniqueInput";

export type FileCreateInput = {
  fileName?: string | null;
  fileType?: string | null;
  message?: MessageWhereUniqueInput | null;
  url?: string | null;
};
