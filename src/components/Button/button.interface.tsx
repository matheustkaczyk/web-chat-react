type BtnType = 'button' | 'submit' | 'reset';

export interface IButton {
  text: string;
  type: BtnType;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
  classN?: string;
}