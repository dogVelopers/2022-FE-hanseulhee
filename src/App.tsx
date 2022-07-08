import InputSection from './components/InputSection';
import ListSection from './components/ListSection';
import useTodos from './hooks/api/useTodos';

function App() {
  // option shift F
  const { createTodo, todos } = useTodos();
  return (
    <>
      <InputSection createTodo={createTodo} />
      <ListSection todos={todos} />
    </>
  );
}

export default App;
