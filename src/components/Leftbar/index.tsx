import { LeftbarOption } from "./LeftbarOption";
import { ReactComponent as home } from "assets/icons/home.svg";
import { ReactComponent as library } from "assets/icons/library.svg";
import { ReactComponent as search } from "assets/icons/search.svg";

export default function index() {
  return (
    <div>
      <LeftbarOption
        icon={home}
        text="Home"
        viewBox="0 0 15 16"
        top={2}
        path="/"
      />
      <LeftbarOption
        icon={search}
        text="Search"
        viewBox="0 0 15 16"
        top={2}
        path="/search"
      />
      <LeftbarOption
        icon={library}
        text="Your Library"
        viewBox="0 0 15 16"
        top={2}
        path="/library"
      />
    </div>
  );
}
