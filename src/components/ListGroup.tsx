import { useState } from "react";

function ListGroup() {
  let items = ["New York", "Tokyo", "London", "Paris"];

  //hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // arr[0]  variable: current state value(selectedIndex)
  // arr[1]  state updater function

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>There are no items in the list.</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
            }}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
