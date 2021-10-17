import { Switch, Route } from "react-router-dom";
import Artist from "./Artist";
import { Home } from "./Home";
import Search from "./Search";
import marvin from "assets/artists/marvin-gaye.png";

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
        <Artist
          artistInfo={{
            name: "Marvin Gaye",
            listeners: 9821271,
            verified: true,
            image: marvin,
          }}
        />
      </Route>
    </Switch>
  );
}
