import * as React from "react";

import SiteLayout from "../../components/SiteLayout";
import Routes from "../../components/App/Routes";

import "./App.css";

const App = (): JSX.Element => {
  return (
    <>
      <SiteLayout>
        <Routes />
      </SiteLayout>
    </>
  );
};

export default App;
