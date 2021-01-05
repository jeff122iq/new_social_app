import React, { Suspense } from "react";
import { BrawserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";
const About = React.lazy(() => import("../About/About"));
const Main = React.lazy(() => import("../Main/Main"));
const Contacts = React.lazy(() => import("../Contacts/Contacts"));
const MyPage = React.lazy(() => import("../MyPage/MyPage"));
const IsAuth = React.lazy(() => import("../IsAuth/IsAuth"));
// const RegisterForm = React.lazy(() => import("../RegisterForm/RegisterForm"));
// const LogInForm = React.lazy(() => import("../LogInForm/LogInForm"));
const Authorization = React.lazy(() =>
  import("../Authorization/Authorization")
);

const Routes = () => {
  return (
    <div className="container">
      <Switch>
        <Route path="/" exact component={Main} />
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
          <Route path="/about" component={About} />
          <Route path="/auth" component={Authorization} />
          {/* <Route path="/auth/register" component={RegisterForm} /> */}
          {/* <Route path="/login" component={LogInForm} exact />
          <Route path="/register" component={RegisterForm} exact /> */}
          <Route path="/contacts" component={Contacts} />
          <Route path="/is_auth/my_page" component={MyPage} />
          <Route path="/is_auth/" component={IsAuth} exact />
        </Suspense>
      </Switch>
    </div>
  );
};

export default Routes;
