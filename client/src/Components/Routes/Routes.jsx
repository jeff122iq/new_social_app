import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Container from "../Container/Container";
import "./style.css";
const About = React.lazy(() => import("../About/About"));
const LogInForm = React.lazy(() => import("../LogInForm/LogInForm"));
const Home = React.lazy(() => import("../Home/Home"));
const Contacts = React.lazy(() => import("../Contacts/Contacts"));
const IsAuth = React.lazy(() => import("../IsAuth/IsAuth"));
const Authorization = React.lazy(() =>
  import("../Authorization/Authorization")
);

const Routes = () => {
  return (
    <Switch>
      <Container>
        <Suspense
          fallback={
            <div className="lds-roller">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          }
        >
          <Route path="/" component={Authorization} exact />
          <Route path="/home" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/login" component={LogInForm} exact />
          <Route path="/contacts" component={Contacts} exact />
          <Route path="/is_auth" component={IsAuth} />
        </Suspense>
      </Container>
    </Switch>
  );
};

export default Routes;
