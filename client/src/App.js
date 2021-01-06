import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AuthButtons from "./Components/AuthButtons/AuthButtons";
import Container from "./Components/Container/Container";
import Welcome from "./Components/Welcome/Welcome";
const Footer = React.lazy(() => import("./Components/Footer/Footer"));
const Header = React.lazy(() => import("./Components/Header/Header"));
const Routes = React.lazy(() => import("./Components/Routes/Routes"));

//const ProfilePage = React.lazy(() => import('./ProfilePage'));
function App() {
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
          <Header></Header>
          <Routes />
          <Footer></Footer>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
