import { LeftbarOption } from "./LeftbarOption";
// import { ReactComponent as logo } from "logo.svg";
import { ReactComponent as home } from "assets/icons/home.svg";
import { ReactComponent as library } from "assets/icons/library.svg";

export default function index() {
  return (
    <div>
      <LeftbarOption icon={home} text="Home" viewBox="0 0 15 16" top={2} />
      <LeftbarOption
        icon={library}
        text="Your Library"
        viewBox="0 0 15 16"
        top={2}
      />
    </div>
  );
}
