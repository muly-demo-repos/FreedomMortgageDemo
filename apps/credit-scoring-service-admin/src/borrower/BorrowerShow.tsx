import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { BORROWER_TITLE_FIELD } from "./BorrowerTitle";

export const BorrowerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="dateOfBirth" source="dateOfBirth" />
        <TextField label="email" source="email" />
        <TextField label="firstName" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="lastName" source="lastName" />
        <TextField label="phoneNumber" source="phoneNumber" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="CreditScore"
          target="borrowerId"
          label="CreditScores"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="borrower"
              source="borrower.id"
              reference="Borrower"
            >
              <TextField source={BORROWER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="generatedAt" source="generatedAt" />
            <TextField label="ID" source="id" />
            <TextField label="score" source="score" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="FinancialRecord"
          target="borrowerId"
          label="FinancialRecords"
        >
          <Datagrid rowClick="show">
            <TextField label="bankStatements" source="bankStatements" />
            <ReferenceField
              label="borrower"
              source="borrower.id"
              reference="Borrower"
            >
              <TextField source={BORROWER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="loanHistories" source="loanHistories" />
            <TextField label="transactionRecords" source="transactionRecords" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ScoreReport"
          target="borrowerId"
          label="ScoreReports"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="borrower"
              source="borrower.id"
              reference="Borrower"
            >
              <TextField source={BORROWER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="generatedAt" source="generatedAt" />
            <TextField label="ID" source="id" />
            <TextField label="reportData" source="reportData" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
