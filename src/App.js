import { useEffect, useState } from "react";
import { Items, UUID, EditItem, ITEM } from "./Components/redux/actions";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import TodoInput from "./TodoInput";
import { v1 as uuidv1 } from "uuid";
import TodoList from "./TodoList";

function App() {
  const itemData = useSelector((state) => state.ItemsReducer);
  const itemEdit = useSelector((state) => state.EditItemReducer);
  const ITEMData = useSelector((state) => state.ItemReducer);
  console.log(ITEMData, "this is item data");
  console.log(itemData, "this nisa item edit");

  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const [UUid, setUuid] = useState({ uuid: uuidv1() });
  const [item, setItem] = useState(" ");

  const handleChange = (e) => {
    setItem(e.target.value);
    // const values = e.target.value;
    dispatch(ITEM());
  };
  const handleSubmit = (e) => {
    console.log("handleSubmit");
    e.preventDefault();
    const newItem = {
      id: UUid,
      title: item,
    };
    const updateItems = [...itemData, newItem];

    // setItems(updateItems);
    dispatch(Items(updateItems));
    setItem("");
    setUuid(uuidv1());
    // setEditItem(false);
    dispatch(EditItem(false));
  };

  const clearList = () => {
    dispatch(Items([]));
  };
  const handleDelet = (UUid) => {
    const filterItmes = items.filter((item) => item.id !== UUid);

    dispatch(Items(filterItmes));
  };
  const handleEdit = (UUid) => {
    const filterItmes = items.filter((item) => item.id !== UUid);
    const selectedItem = items.find((item) => item.id == UUid);
    console.log(selectedItem);
    // setItems(filterItmes);
    dispatch(Items(filterItmes));
    setItem(selectedItem.title, selectedItem.id);
    // dispatch(ITEM(selectedItem.title, selectedItem.id));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-10.mx-auto col-md-8 mt-5">
          <h1>this is newToDo App</h1>
          <TodoInput
            item={item}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            edtItem={itemEdit}
          />
          <TodoList
            items={itemData}
            clearList={clearList}
            handleDelet={handleDelet}
            handleEdit={handleEdit}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
