import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/navigation";
import Home from "./components/home";
import Error from "./components/error";

const About = React.lazy(() => import("./components/about"));
const Contact = React.lazy(() => import("./components/contact"));

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Suspense fallback={<div>Loading...</div>}>
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
          </Suspense>
          <Route component={Error} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
