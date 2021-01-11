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

const Routes = (props) => {
  const setLoggedIn = props.setLoggedIn;
  const loggedIn = props.loggedIn;

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
          {loggedIn === false ? (
            <>
              {/* <Route path="/" exact>
                <Authorization setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
              </Route> */}
              <Route path="/" exact>
                <Authorization setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
              </Route>
              <Route path="/login" component={LogInForm} exact />
              <Route path="/home" component={Home} exact />
              <Route path="/contacts" component={Contacts} exact />
              <Route path="/about" component={About} exact />
            </>
          ) : (
            <>
              <Route path="/is_auth" component={IsAuth} exact />
              {/* <Route path="/is_auth/my_page" component={MyPage} exact />
              <Route path="/is_auth/messages" component={Messages} exact />
              <Route path="/is_auth/friends" component={Friends} exact />
              <Route path="/is_auth/posts" component={Posts} exact />
              <Route path="/is_auth/settings" component={Settings} exact /> */}
            </>
          )}
        </Suspense>
      </Container>
    </Switch>
  );
};

export default Routes;
