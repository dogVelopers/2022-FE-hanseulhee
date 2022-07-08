interface Props {
  todos: ITodo[];
}

function ListSection({ todos }: Props) {
  return (
    <section>
      {todos.map(todo => (
        <span key={todo.id}>{todo.fields.name}</span>
      ))}
    </section>
  );
}

export default ListSection;
