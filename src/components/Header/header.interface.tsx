interface IHeader {
  isOpen: boolean,
  setIsOpen: (isOpen: boolean) => void
  handleSideBar: () => void
}

export default IHeader;
