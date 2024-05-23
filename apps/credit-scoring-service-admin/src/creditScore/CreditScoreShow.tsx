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

export const CreditScoreShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
