// import { Fragment } from "react";
import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "Tokyo", "London", "Paris"];

  // Event handler
  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>There are no items in the list.</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" onClick={handleClick} key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
