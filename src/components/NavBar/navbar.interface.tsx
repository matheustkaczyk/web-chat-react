import { ChangeEvent } from "react";

interface INavBar {
  username: string,
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

export default INavBar;
