import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { BORROWER_TITLE_FIELD } from "../borrower/BorrowerTitle";
import { CREDITBUREAU_TITLE_FIELD } from "../creditBureau/CreditBureauTitle";

export const CreditReportShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
