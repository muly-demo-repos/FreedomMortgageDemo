import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { CreditReportTitle } from "../creditReport/CreditReportTitle";
import { CreditScoreTitle } from "../creditScore/CreditScoreTitle";

export const BorrowerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="creditReports"
          reference="CreditReport"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CreditReportTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="creditScores"
          reference="CreditScore"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CreditScoreTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="DateOfBirth" source="dateOfBirth" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="FirstName" source="firstName" />
        <TextInput label="LastName" source="lastName" />
        <TextInput label="SSN" source="ssn" />
      </SimpleForm>
    </Edit>
  );
};
