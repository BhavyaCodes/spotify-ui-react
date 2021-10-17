import { Box, Typography } from "@mui/material";
import { Friend, FriendType } from "./Friend";
import albert from "assets/friends/albert.png";
import annette from "assets/friends/annette.png";
import arlene from "assets/friends/arlene.png";
import bessie from "assets/friends/bessie.png";
import brooklyn from "assets/friends/brooklyn.png";
import cody from "assets/friends/cody.png";
import darell from "assets/friends/darell.png";
import floyd from "assets/friends/floyd.png";
import jane from "assets/friends/jane.png";
import kathryn from "assets/friends/kathryn.png";
import kristin from "assets/friends/kristin.png";
import ralph from "assets/friends/ralph.png";
import robert from "assets/friends/robert.png";
import theresa from "assets/friends/theresa.png";
import wade from "assets/friends/wade.png";

const friends: FriendType[] = [
  {
    name: "Cody Fisher",
    title: "When You Die",
    artist: "Shawn Mendes",
    type: "music",
    time: "now",
    image: cody,
  },
  {
    name: "Jane Cooper",
    title: "When You Die",
    artist: "Shawn Mendes",
    type: "music",
    time: "now",
    image: jane,
  },
  {
    name: "Bessie Cooper",
    title: "Losing My Religion",
    artist: "Nicky Jam",
    type: "podcast",
    time: "now",
    image: bessie,
  },
  {
    name: "Theresa Webb",
    title: "Can I Call You Tonight?",
    artist: "Lizzo",
    type: "music",
    time: "now",
    image: theresa,
  },
  {
    name: "Jane Cooper",
    title: "When You Die",
    artist: "Shawn Mendes",
    type: "music",
    time: "now",
    image: jane,
  },
  {
    name: "Jane Cooper",
    title: "When You Die",
    artist: "Shawn Mendes",
    type: "music",
    time: "now",
    image: jane,
  },
  {
    name: "Jane Cooper",
    title: "When You Die",
    artist: "Shawn Mendes",
    type: "music",
    time: "now",
    image: jane,
  },
  {
    name: "Jane Cooper",
    title: "When You Die",
    artist: "Shawn Mendes",
    type: "music",
    time: "now",
    image: jane,
  },
  {
    name: "Jane Cooper",
    title: "When You Die",
    artist: "Shawn Mendes",
    type: "music",
    time: "now",
    image: jane,
  },
  {
    name: "Jane Cooper",
    title: "When You Die",
    artist: "Shawn Mendes",
    type: "music",
    time: "now",
    image: jane,
  },
];

export default function Rightbar() {
  function renderFriends() {
    return friends.map((friend) => <Friend {...friend} />);
  }
  return (
    <Box p={1.5} sx={{ minHeight: "100vh", overflowY: "scroll" }}>
      <Typography sx={{ fontSize: 14, fontWeight: 900 }}>
        Friends Activity
      </Typography>
      {renderFriends()}
    </Box>
  );
}
