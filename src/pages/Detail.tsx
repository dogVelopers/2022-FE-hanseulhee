import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { instance } from '../libs/api';

function Detail() {
  const [todo, setTodo] = useState<ITodo | null>(null);
  const { todoId } = useParams();

  useEffect(() => {
    async function saveTodo() {
      const response = await instance.get<{}, ITodo>(`/todo/${todoId}`);
      setTodo(response);
    }
    saveTodo();
  }, []);
  return (
    <div>
      Detail page
      <p>{todoId}</p>
      <p>{todo?.fields.name}</p>
    </div>
  );
}

export default Detail;
