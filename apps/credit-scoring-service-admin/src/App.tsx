import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { BorrowerList } from "./borrower/BorrowerList";
import { BorrowerCreate } from "./borrower/BorrowerCreate";
import { BorrowerEdit } from "./borrower/BorrowerEdit";
import { BorrowerShow } from "./borrower/BorrowerShow";
import { CreditScoreList } from "./creditScore/CreditScoreList";
import { CreditScoreCreate } from "./creditScore/CreditScoreCreate";
import { CreditScoreEdit } from "./creditScore/CreditScoreEdit";
import { CreditScoreShow } from "./creditScore/CreditScoreShow";
import { FinancialInstitutionList } from "./financialInstitution/FinancialInstitutionList";
import { FinancialInstitutionCreate } from "./financialInstitution/FinancialInstitutionCreate";
import { FinancialInstitutionEdit } from "./financialInstitution/FinancialInstitutionEdit";
import { FinancialInstitutionShow } from "./financialInstitution/FinancialInstitutionShow";
import { CreditReportList } from "./creditReport/CreditReportList";
import { CreditReportCreate } from "./creditReport/CreditReportCreate";
import { CreditReportEdit } from "./creditReport/CreditReportEdit";
import { CreditReportShow } from "./creditReport/CreditReportShow";
import { CreditBureauList } from "./creditBureau/CreditBureauList";
import { CreditBureauCreate } from "./creditBureau/CreditBureauCreate";
import { CreditBureauEdit } from "./creditBureau/CreditBureauEdit";
import { CreditBureauShow } from "./creditBureau/CreditBureauShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Credit Scoring Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Borrower"
          list={BorrowerList}
          edit={BorrowerEdit}
          create={BorrowerCreate}
          show={BorrowerShow}
        />
        <Resource
          name="CreditScore"
          list={CreditScoreList}
          edit={CreditScoreEdit}
          create={CreditScoreCreate}
          show={CreditScoreShow}
        />
        <Resource
          name="FinancialInstitution"
          list={FinancialInstitutionList}
          edit={FinancialInstitutionEdit}
          create={FinancialInstitutionCreate}
          show={FinancialInstitutionShow}
        />
        <Resource
          name="CreditReport"
          list={CreditReportList}
          edit={CreditReportEdit}
          create={CreditReportCreate}
          show={CreditReportShow}
        />
        <Resource
          name="CreditBureau"
          list={CreditBureauList}
          edit={CreditBureauEdit}
          create={CreditBureauCreate}
          show={CreditBureauShow}
        />
      </Admin>
    </div>
  );
};

export default App;
