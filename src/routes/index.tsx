import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const Routes: React.FunctionComponent = () => {
  return (
    <Router>
      <Route exact path="/">
        hola
      </Route>
    </Router>
  );
};
