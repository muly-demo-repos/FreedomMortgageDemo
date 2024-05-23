import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { BorrowerTitle } from "../borrower/BorrowerTitle";
import { CreditBureauTitle } from "../creditBureau/CreditBureauTitle";

export const CreditReportCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="borrower.id"
          reference="Borrower"
          label="Borrower"
        >
          <SelectInput optionText={BorrowerTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="creditBureau.id"
          reference="CreditBureau"
          label="CreditBureau"
        >
          <SelectInput optionText={CreditBureauTitle} />
        </ReferenceInput>
        <TextInput label="Details" multiline source="details" />
        <DateTimeInput label="ReportDate" source="reportDate" />
      </SimpleForm>
    </Create>
  );
};
