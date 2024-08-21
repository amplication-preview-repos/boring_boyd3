import { SortOrder } from "../../util/SortOrder";

export type FileOrderByInput = {
  createdAt?: SortOrder;
  fileName?: SortOrder;
  fileType?: SortOrder;
  id?: SortOrder;
  messageId?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
};
