import { Switch, Route } from "react-router-dom";
import Artist from "./Artist";
import { Home } from "./Home";
import Search from "./Search";

export default function index() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/search" exact>
        <Search />
      </Route>
      <Route path="/library" exact>
        <h1>library</h1>
      </Route>
      <Route path="/artist">
        <Artist />
      </Route>
    </Switch>
  );
}
