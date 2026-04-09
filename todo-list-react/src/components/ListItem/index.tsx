import { ChangeEvent, useState } from "react";
import * as C from "./styles";
import { Item } from "../../types/Item";

type Props = {
  item: Item;
};
export const ListItem = ({ item }: Props) => {
  const [isChecked, setIsChecked] = useState(item.done);

  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  return (
    <C.Container done={isChecked}>
      <input type="checkbox" checked={isChecked} onChange={handleCheck} />
      <label>{item.name}</label>
    </C.Container>
  );
};
