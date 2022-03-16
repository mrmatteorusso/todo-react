function Output({ handleOutput, handleDelete }) {
  return (
    <ul>
      {handleOutput
        .map((todo) => (
          <li key={todo.id}>
            {todo.todo}
            <button onClick={() => handleDelete(todo.id)}>&times;</button>
          </li>
        ))
        .reverse()}
    </ul>
  );
}

export default Output;
