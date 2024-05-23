import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { FinancialRecordList } from "./financialRecord/FinancialRecordList";
import { FinancialRecordCreate } from "./financialRecord/FinancialRecordCreate";
import { FinancialRecordEdit } from "./financialRecord/FinancialRecordEdit";
import { FinancialRecordShow } from "./financialRecord/FinancialRecordShow";
import { CreditScoreList } from "./creditScore/CreditScoreList";
import { CreditScoreCreate } from "./creditScore/CreditScoreCreate";
import { CreditScoreEdit } from "./creditScore/CreditScoreEdit";
import { CreditScoreShow } from "./creditScore/CreditScoreShow";
import { ScoreReportList } from "./scoreReport/ScoreReportList";
import { ScoreReportCreate } from "./scoreReport/ScoreReportCreate";
import { ScoreReportEdit } from "./scoreReport/ScoreReportEdit";
import { ScoreReportShow } from "./scoreReport/ScoreReportShow";
import { BorrowerList } from "./borrower/BorrowerList";
import { BorrowerCreate } from "./borrower/BorrowerCreate";
import { BorrowerEdit } from "./borrower/BorrowerEdit";
import { BorrowerShow } from "./borrower/BorrowerShow";
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
          name="FinancialRecord"
          list={FinancialRecordList}
          edit={FinancialRecordEdit}
          create={FinancialRecordCreate}
          show={FinancialRecordShow}
        />
        <Resource
          name="CreditScore"
          list={CreditScoreList}
          edit={CreditScoreEdit}
          create={CreditScoreCreate}
          show={CreditScoreShow}
        />
        <Resource
          name="ScoreReport"
          list={ScoreReportList}
          edit={ScoreReportEdit}
          create={ScoreReportCreate}
          show={ScoreReportShow}
        />
        <Resource
          name="Borrower"
          list={BorrowerList}
          edit={BorrowerEdit}
          create={BorrowerCreate}
          show={BorrowerShow}
        />
      </Admin>
    </div>
  );
};

export default App;
