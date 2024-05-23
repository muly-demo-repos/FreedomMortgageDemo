import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { CreditScoreTitle } from "../creditScore/CreditScoreTitle";
import { FinancialRecordTitle } from "../financialRecord/FinancialRecordTitle";
import { ScoreReportTitle } from "../scoreReport/ScoreReportTitle";

export const BorrowerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="creditScores"
          reference="CreditScore"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CreditScoreTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="dateOfBirth" source="dateOfBirth" />
        <TextInput label="email" source="email" type="email" />
        <ReferenceArrayInput
          source="financialRecords"
          reference="FinancialRecord"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FinancialRecordTitle} />
        </ReferenceArrayInput>
        <TextInput label="firstName" source="firstName" />
        <TextInput label="lastName" source="lastName" />
        <TextInput label="phoneNumber" source="phoneNumber" />
        <ReferenceArrayInput
          source="scoreReports"
          reference="ScoreReport"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ScoreReportTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
