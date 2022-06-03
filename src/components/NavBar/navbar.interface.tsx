import { ChangeEvent } from "react";

interface INavBar {
  username: string,
  setUsername: (username: string) => void,
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void
  handleSideBar: () => void
}

export default INavBar;
