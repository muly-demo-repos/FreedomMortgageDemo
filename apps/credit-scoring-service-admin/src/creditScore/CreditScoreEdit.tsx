import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { BorrowerTitle } from "../borrower/BorrowerTitle";

export const CreditScoreEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="borrower.id"
          reference="Borrower"
          label="borrower"
        >
          <SelectInput optionText={BorrowerTitle} />
        </ReferenceInput>
        <DateTimeInput label="generatedAt" source="generatedAt" />
        <NumberInput step={1} label="score" source="score" />
      </SimpleForm>
    </Edit>
  );
};
