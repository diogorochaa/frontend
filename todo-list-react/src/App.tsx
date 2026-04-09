import { useCallback, useEffect, useState } from "react";
import * as C from "./App.styles";
import { Item } from "./types/Item";
import { ListItem } from "./components/ListItem";
import { AddArea } from "./components/AddArea";

const App = () => {
  const [list, setList] = useState<Item[]>([]);

  const saveList = useCallback(() => {
    const listString = JSON.stringify(list);
    localStorage.setItem("list", listString);
  }, [list]);

  useEffect(() => {
    const listString = localStorage.getItem("list");
    if (listString) {
      const list = JSON.parse(listString);
      setList(list);
    }
  }, [setList]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList);
    saveList();
  };

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Compras Casal</C.Header>
        <AddArea onEnter={handleAddTask} />
        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </C.Area>
    </C.Container>
  );
};
export default App;
