import { useEffect, useState } from 'react';
import { instance } from '../../libs/api';

interface IGetTodos {
  records: ITodo[];
}

function useTodos() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  async function refreshTodos() {
    const response = await instance.get<{}, IGetTodos>('/todo');
    setTodos(response.records);
  }
  useEffect(() => {
    refreshTodos();
  }, []);

  // 서버에 호출 (저장)
  // 비동기 함수
  async function createTodo(value: string) {
    await instance.post('/todo', { fields: { name: value } });
    refreshTodos();
  }

  return { todos, createTodo };
}

export default useTodos;
