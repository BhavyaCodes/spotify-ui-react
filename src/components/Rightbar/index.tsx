import { Box, Typography } from "@mui/material";
import { Friend, FriendType } from "./Friend";
import albert from "assets/friends/albert.png";
import annette from "assets/friends/annette.png";
import arlene from "assets/friends/arlene.png";
import bessie from "assets/friends/bessie.png";
import brooklyn from "assets/friends/brooklyn.png";
import cody from "assets/friends/cody.png";
import darrell from "assets/friends/darrell.png";
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
    name: "Floyd Miles",
    title: "Mine",
    artist: "Lauv",
    type: "music",
    time: "now",
    image: floyd,
  },
  {
    name: "Arlene McCoy",
    title: "Lucky Girl",
    artist: "Lady Gaga",
    type: "podcast",
    time: "now",
    image: arlene,
  },
  {
    name: "Ralph Edwards",
    title: "Lemon Tree",
    artist: "Sech",
    type: "music",
    time: "1 hr",
    image: ralph,
  },
  {
    name: "Albert Flores",
    title: "Lover Boy",
    artist: "Marshmello",
    type: "music",
    time: "4 hr",
    image: albert,
  },
  {
    name: "Wade Warren",
    title: "Baby One More Time",
    artist: "The Chainsmokers",
    type: "music",
    time: "4 hr",
    image: wade,
  },
  {
    name: "Robert Fox",
    title: "Show Me How",
    artist: "Daddy Yankee",
    type: "music",
    time: "1 d",
    image: robert,
  },
  {
    name: "Kathryn Murphy",
    title: "You & Me",
    artist: "J Balvin",
    type: "music",
    time: "2 d",
    image: kathryn,
  },
  {
    name: "Kristin Watson",
    title: "Wonderful Tonight",
    artist: "Ed Sheeran",
    type: "music",
    time: "2 d",
    image: kristin,
  },
  {
    name: "Darrell Steward",
    title: "Some Feeling",
    artist: "Ed Sheeran",
    type: "music",
    time: "2 d",
    image: darrell,
  },
  {
    name: "Annette Black",
    title: "It's My Life",
    artist: "Lil Nax X",
    type: "music",
    time: "2 d",
    image: annette,
  },
  {
    name: "Brooklyn Simmer",
    title: "Bad Ideas",
    artist: "MEDUZA",
    type: "music",
    time: "2 d",
    image: brooklyn,
  },
];

export default function Rightbar() {
  function renderFriends() {
    return friends.map((friend) => <Friend key={friend.name} {...friend} />);
  }
  return (
    <Box
      pl={1}
      sx={{
        minHeight: "100vh",
        overflowY: "scroll",
        pb: {
          sm: 150 / 8,
          lg: 13,
        },
        // mb: {
        //   sm: 150 / 8,
        //   lg: 7,
        // },
        backgroundColor: "#000",
      }}
    >
      <Typography sx={{ mt: 2, ml: 0.5, fontSize: 14, fontWeight: 700 }}>
        Friends Activity
      </Typography>
      {renderFriends()}
    </Box>
  );
}
