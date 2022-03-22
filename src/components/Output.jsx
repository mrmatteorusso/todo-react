function Output({ items, handleDelete }) {
  return (
    <ul>
      {items
        .map((todo) => (
          <li key={todo.id}>
            <div className="inputText">{todo.todo}</div>
            <button onClick={() => handleDelete(todo.id)}>&times;</button>
          </li>
        ))
        .reverse()}
    </ul>
  );
}

export default Output;
