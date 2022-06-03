import { ChangeEvent } from "react";

interface INavBar {
  username: string,
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void
  handleSideBar: () => void
}

export default INavBar;
