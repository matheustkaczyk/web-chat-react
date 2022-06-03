import { ChangeEvent } from "react";

interface INavBar {
  username: string,
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void
  handleLeave: () => void
}

export default INavBar;
