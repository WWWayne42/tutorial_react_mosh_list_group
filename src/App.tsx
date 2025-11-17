import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "Tokyo", "London", "Paris"];

  //不同叫法：回调函数; 事件处理函数（Event Handler）;事件处理回调（Event Handler Callback）
  // 父组件定义回调函数（业务逻辑）
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  //父组件通过 props 传递回调函数：当前父组件中的事件处理回调函数，通过 onSelectItem 属性，注入（传递）给子组件
  // 父组件提供 handle（handle前缀清楚地表示"这是父组件的处理逻辑"）
  // 子组件暴露 on 事件点（on前缀表示"这是子组件的事件接口"）
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
