import { SortOrder } from "../../util/SortOrder";

export type ChatRoomOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  isGroupChat?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
