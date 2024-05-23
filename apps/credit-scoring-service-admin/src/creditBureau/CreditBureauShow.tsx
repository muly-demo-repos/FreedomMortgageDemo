import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { BORROWER_TITLE_FIELD } from "../borrower/BorrowerTitle";
import { CREDITBUREAU_TITLE_FIELD } from "./CreditBureauTitle";

export const CreditBureauShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address" source="address" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="CreditReport"
          target="creditBureauId"
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
      </SimpleShowLayout>
    </Show>
  );
};
