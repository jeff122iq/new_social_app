import React, { Suspense, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
// import AuthButtons from "./Components/AuthButtons/AuthButtons";
// import Container from "./Components/Container/Container";
// import Welcome from "./Components/Welcome/Welcome";
const Footer = React.lazy(() => import("./Components/Footer/Footer"));
const HeaderLoggedOut = React.lazy(() =>
  import("./Components/HeaderLoggedOut/HeaderLoggedOut")
);
const HeaderLoggedIn = React.lazy(() =>
  import("./Components/HeaderLoggedIn/HeaderLoggedIn")
);
const Routes = React.lazy(() => import("./Components/Routes/Routes"));

//const ProfilePage = React.lazy(() => import('./ProfilePage'));
function App() {
  const [loggedIn, setLoggedIn] = useState(
    Boolean(localStorage.getItem("AccessToken"))
  );
  console.log(loggedIn);

  return (
    <Router>
      <div className="App">
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
          {loggedIn ? <HeaderLoggedIn /> : <HeaderLoggedOut />}
          <Routes setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
          <Footer></Footer>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
