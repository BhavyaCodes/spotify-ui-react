import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./Home";

export default function index() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
