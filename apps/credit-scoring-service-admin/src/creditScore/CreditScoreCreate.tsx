import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { BorrowerTitle } from "../borrower/BorrowerTitle";

export const CreditScoreCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
