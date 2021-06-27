import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Components from "./components";
import Footer from "./footer";
import Header from "./header";
import Incidents from "./incidents";
import Status from "./status";
import useIssues from "./useIssues";
import l10n from '../language';

const Container = styled.div`
  max-width: 1008px;
  padding: 16px;
  margin: 16px auto;
`;

const ComponentsContainer = styled.div`
  box-shadow: 0px 0px 33px -32px rgba(0, 0, 0, 0.75);
  border-radius: 3px;
  padding: 16px;
`;

const ErrorContainer = styled.div`
  text-align: center;
  margin: 75px 0;
`;

const ErrorTitle = styled.h1`
  font-size: 42pt;
  margin: 0;
`;

const App = () => {
  return (
    <Container>
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="**" component={FourZeroFour} />
        </Switch>
      </Router>
      <Footer />
    </Container>
  );
};

const MainPage = () => {
  // set html lang from l10n module
  document.getElementsByTagName('html')[0].setAttribute('lang', l10n.getLanguage());
  // loading, errors, results, refetch
  const [
    componentsLoading,
    componentsError,
    componentsResults,
    componentsRefetch,
  ] = useIssues("component");
  const [
    incidentsLoading,
    incidentsError,
    incidentsResults,
    incidentsRefetch,
  ] = useIssues("incident");

  return (<>
    <ComponentsContainer className="components-container">
      <Status
        loading={componentsLoading || incidentsLoading}
        error={{
          hasError: componentsError || incidentsError,
          errors: { componentsError, incidentsError },
        }}
        components={componentsResults}
        refetch={() => {
          componentsRefetch();
          incidentsRefetch();
        }}
      />
      <Components
        loading={componentsLoading}
        components={componentsResults}
      />
    </ComponentsContainer>
    <Incidents loading={incidentsLoading} incidents={incidentsResults} />
  </>);
}

const FourZeroFour = () => {
  return (<ErrorContainer>
    <ErrorTitle>{l10n.error.notfound.title}</ErrorTitle>
    <p>{l10n.error.notfound.description}</p>
    <p><a href="/">{l10n.error.notfound.link}</a></p>
  </ErrorContainer>);
}

export default App;