import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { BORROWER_TITLE_FIELD } from "../borrower/BorrowerTitle";

export const ScoreReportList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ScoreReports"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
