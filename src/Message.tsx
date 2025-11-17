// PascalCase component name

function Message() {
  const name = 'Marcus'
  if (name)
    return <div>Hello {name}</div>;
  return <div>Hello World</div>;
}

export default Message;