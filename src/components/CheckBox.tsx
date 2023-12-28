import { useState } from "react";
interface Props {
  id: string;
  checked?: boolean;
  label?: string;
  onChange: (value: boolean, id: string) => void;
}
const CheckBox = ({ id, label, checked = false, onChange }: Props) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);
  const onCheckedHandler = (id: string) => {
    setIsChecked(!isChecked);
    if (onChange) {
      onChange(!isChecked, id);
    }
  };

  return (
    <>
      <input type="checkbox" id={`check-${id}`} checked={isChecked} onChange={() => onCheckedHandler(id)} />
      <label htmlFor={`check-${id}`}>{label}</label>
    </>
  );
};

export default CheckBox;
