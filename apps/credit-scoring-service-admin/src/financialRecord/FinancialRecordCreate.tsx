import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { BorrowerTitle } from "../borrower/BorrowerTitle";

export const FinancialRecordCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <ReferenceInput
          source="borrower.id"
          reference="Borrower"
          label="borrower"
        >
          <SelectInput optionText={BorrowerTitle} />
        </ReferenceInput>
        <div />
        <div />
      </SimpleForm>
    </Create>
  );
};
