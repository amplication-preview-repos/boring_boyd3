import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { MESSAGE_TITLE_FIELD } from "./MessageTitle";
import { CHATROOM_TITLE_FIELD } from "../chatRoom/ChatRoomTitle";

export const MessageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="chatRoom"
          source="chatroom.id"
          reference="ChatRoom"
        >
          <TextField source={CHATROOM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="sender" source="sender" />
        <TextField label="type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="File" target="messageId" label="Files">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="fileName" source="fileName" />
            <TextField label="fileType" source="fileType" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="message"
              source="message.id"
              reference="Message"
            >
              <TextField source={MESSAGE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="url" source="url" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
