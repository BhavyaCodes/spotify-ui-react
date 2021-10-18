import { Switch, Route } from "react-router-dom";
import Artist, { ArtistPopularSongType } from "./Artist";
import { Home } from "./Home";
import Search from "./Search";
import marvin from "assets/artists/marvin-gaye.png";

import babyPowder from "assets/popular-songs/baby-powder.png";
import baby from "assets/popular-songs/baby.png";
import freak from "assets/popular-songs/freak.png";
import show from "assets/popular-songs/show.png";
import you from "assets/popular-songs/you.png";

const artistPopularSongs: ArtistPopularSongType[] = [
  { title: "Freak In Me", hits: 6146935, image: freak, length: "03:17" },
  { title: "Baby One More Time", hits: 5235865, image: baby, length: "05:50" },
  { title: "Show Me How", hits: 4911949, image: show, length: "02:10" },
  { title: "Baby Powser", hits: 4704521, image: babyPowder, length: "01:17" },
  { title: "You & Me", hits: 3564078, image: you, length: "05:10" },
];

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
          popularSongs={artistPopularSongs}
        />
      </Route>
    </Switch>
  );
}
