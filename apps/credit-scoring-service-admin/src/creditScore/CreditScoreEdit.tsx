import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

import { BorrowerTitle } from "../borrower/BorrowerTitle";

export const CreditScoreEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="borrower.id"
          reference="Borrower"
          label="Borrower"
        >
          <SelectInput optionText={BorrowerTitle} />
        </ReferenceInput>
        <TextInput label="Comment" source="comment" />
        <NumberInput step={1} label="Score" source="score" />
        <DateTimeInput label="ScoreDate" source="scoreDate" />
      </SimpleForm>
    </Edit>
  );
};
