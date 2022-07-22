import { useEffect, useState } from 'react';
import { instance } from '../../libs/api';
import { useRecoilState } from 'recoil';
import { todosState } from '../../store/todos';

interface IGetTodos {
  records: ITodo[];
}

function useTodos() {
  const [todos, setTodos] = useRecoilState(todosState);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function refreshTodos() {
    setIsLoading(true); // 로딩 시작
    const response = await instance.get<{}, IGetTodos>('/todo');
    setTodos(response.records);
    setIsLoading(false); // 로딩 끝
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

  async function deleteTodo(todoId: string) {
    await instance.delete(`/todo/${todoId}`);
    refreshTodos();
  }

  return { todos, createTodo, deleteTodo, isLoading };
}

export default useTodos;
