import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ChatRoomTitle } from "../chatRoom/ChatRoomTitle";
import { FileTitle } from "../file/FileTitle";

export const MessageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="chatRoom.id"
          reference="ChatRoom"
          label="chatRoom"
        >
          <SelectInput optionText={ChatRoomTitle} />
        </ReferenceInput>
        <TextInput label="content" multiline source="content" />
        <ReferenceArrayInput
          source="files"
          reference="File"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FileTitle} />
        </ReferenceArrayInput>
        <TextInput label="sender" source="sender" />
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Edit>
  );
};
