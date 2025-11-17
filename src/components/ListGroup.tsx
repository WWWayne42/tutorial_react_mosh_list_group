import { useState } from "react";
interface ListGroupProps {
  items: string[];
  heading: string;
  // (item: string): void;  // 函数类型的props
  onSelectItem: (item: string) => void; // 这是一个事件点（暴露给使用者的接口），类似于onClick， 
  // ↑ 这个名字从子组件角度表达："这是一个当选择项目时要调用的回调"
}

// 如下使用了参数解构destructuring。如果不使用结构：function ListGroup(props: ListGroupProps)
// TypeScript 检查类型，语法是用冒号+interface，比如 “: ListGroupProps”
function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
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
              onSelectItem(item);
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
