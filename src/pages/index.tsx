import { Switch, Route } from "react-router-dom";
import { Home } from "./Home";

export default function index() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/search" exact>
        <h1>search</h1>
      </Route>
      <Route path="/library" exact>
        <h1>library</h1>
      </Route>
    </Switch>
  );
}
