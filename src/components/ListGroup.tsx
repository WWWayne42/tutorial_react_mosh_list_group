import { useState } from "react";
// 目标：动态调整列表【标题】，【内容】
// {items:[], heading:string}
// TypeScript功能： 接口interface（形状shape），用来定义一个object的形状、接口

interface ListGroupProps {
  items: string[];
  heading: string;
}

// 如下使用了参数解构destructuring。如果不使用结构：function ListGroup(props: ListGroupProps)
// TypeScript 检查类型，语法是用冒号+interface，比如 “: ListGroupProps”
function ListGroup({ items, heading }: ListGroupProps) {
  //hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // arr[0]  variable: current state value(selectedIndex)
  // arr[1]  state updater function

  return (
    <>
      <h1>{heading}</h1>
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
