import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { MESSAGE_TITLE_FIELD } from "../message/MessageTitle";

export const FileShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="fileName" source="fileName" />
        <TextField label="fileType" source="fileType" />
        <TextField label="ID" source="id" />
        <ReferenceField label="message" source="message.id" reference="Message">
          <TextField source={MESSAGE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="url" source="url" />
      </SimpleShowLayout>
    </Show>
  );
};
