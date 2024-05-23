import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { BORROWER_TITLE_FIELD } from "../borrower/BorrowerTitle";

export const FinancialRecordList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"FinancialRecords"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
