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
import { CREDITBUREAU_TITLE_FIELD } from "../creditBureau/CreditBureauTitle";

export const BorrowerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="DateOfBirth" source="dateOfBirth" />
        <TextField label="Email" source="email" />
        <TextField label="FirstName" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="LastName" source="lastName" />
        <TextField label="SSN" source="ssn" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="CreditReport"
          target="borrowerId"
          label="CreditReports"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Borrower"
              source="borrower.id"
              reference="Borrower"
            >
              <TextField source={BORROWER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="CreditBureau"
              source="creditbureau.id"
              reference="CreditBureau"
            >
              <TextField source={CREDITBUREAU_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Details" source="details" />
            <TextField label="ID" source="id" />
            <TextField label="ReportDate" source="reportDate" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="CreditScore"
          target="borrowerId"
          label="CreditScores"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Borrower"
              source="borrower.id"
              reference="Borrower"
            >
              <TextField source={BORROWER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Comment" source="comment" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Score" source="score" />
            <TextField label="ScoreDate" source="scoreDate" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
