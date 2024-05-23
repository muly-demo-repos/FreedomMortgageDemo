import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";
import { BorrowerTitle } from "../borrower/BorrowerTitle";

export const ScoreReportEdit = (props: EditProps): React.ReactElement => {
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
        <div />
      </SimpleForm>
    </Edit>
  );
};
