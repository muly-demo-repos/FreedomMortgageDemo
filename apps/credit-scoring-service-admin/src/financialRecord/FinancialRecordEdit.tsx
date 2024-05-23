import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { BorrowerTitle } from "../borrower/BorrowerTitle";

export const FinancialRecordEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
