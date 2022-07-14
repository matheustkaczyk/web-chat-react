export default interface ISelect {
  label: string,
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
  options: string[],
  id: string
}